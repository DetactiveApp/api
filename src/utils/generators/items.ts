import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../../db";
import { Coordinate } from "../../types"
import GenerationConfig from "../../../configs/generation.json";
import { and, isNotNull, lt } from "drizzle-orm";
import { generateItem } from "./item";
import { distanceInMetres } from "../math";
import { getPositions } from "../mapbox";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const generateItems = async (position: Coordinate) => {
    const positions = await getPositions(position);
    const maxDistance = Math.max(...positions.map(p => distanceInMetres(p, position)));

    let items: {}[] = []
    let itemCount = Math.floor(Math.random() * (GenerationConfig.items.maxCount - GenerationConfig.items.minCount + 1) + GenerationConfig.items.minCount)

    await db.delete(schema.items).where(and(lt(schema.items.expiration, new Date()), isNotNull(schema.items.position))).execute();

    const allItems = await db.query.items.findMany({ where: isNotNull(schema.items.position) }).execute();
    for (const i in allItems) {
        const item = allItems[i]
        const item_position = item.position as Coordinate;
        const distance = distanceInMetres(item_position, position);
        if (distance < maxDistance && item) {
            let itemType = await db.query.itemTypes.findFirst({ where: (itemTypes, { eq }) => eq(itemTypes.id, item.itemType as string) })
            if (itemType) {
                Object.assign(itemType, item);
                items.push(itemType)
                itemCount--;
            }
        }
    }

    if (items.length > GenerationConfig.items.minCount + 1) {
        return items;
    }

    for (let i = 0; i < itemCount; i++) {
        if (positions.length === 0) {
            return items;
        }

        const position = positions[Math.floor(Math.random() * positions.length)]
        positions.splice(positions.indexOf(position), 1)

        const item = await generateItem(position)
        if (item) {
            items.push(item)
        }
    }

    return items
}