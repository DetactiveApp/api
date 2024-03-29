import { Coordinate } from "../types"
import { getPositions } from "./positions"
import GenerationConfig from "../../configs/generation.json";
import { generateItem } from "./item";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db";
import { and, eq, isNotNull, lt } from "drizzle-orm";
import { distanceInMeters } from "../utils/math";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const generateItems = async (position: Coordinate) => {
    const positions = await getPositions(position);
    const maxDistance = Math.max(...positions.map(p => distanceInMeters(p, position)));

    let items: {}[] = []
    let itemCount = Math.floor(Math.random() * (GenerationConfig.items.maxCount - GenerationConfig.items.minCount + 1) + GenerationConfig.items.minCount)

    await db.delete(schema.items).where(and(lt(schema.items.expiration, new Date()), isNotNull(schema.items.position))).execute();

    const allItems = await db.query.items.findMany({ where: isNotNull(schema.items.position) }).execute();
    for (const i in allItems) {
        const item = allItems[i]
        const item_position = item.position as Coordinate;
        const distance = distanceInMeters(item_position, position);
        if (distance < maxDistance) {
            items.push(item)
            itemCount--;
        }
    }

    for (let i = 0; i < itemCount; i++) {
        if (positions.length === 0) {
            return items;
        }

        const position = positions[Math.floor(Math.random() * positions.length)]
        positions.splice(positions.indexOf(position), 1)

        const item = generateItem(position)
        items.push(item)
    }

    return items
}