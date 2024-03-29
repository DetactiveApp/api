import { neon } from "@neondatabase/serverless";
import { Coordinate } from "../types"
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db";
import GenerationConfig from "../../configs/generation.json";

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

export const generateItem = async (position: Coordinate) => {
    const itemTypes = await db.query.itemTypes.findMany();
    const itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)]

    const minutes = Math.floor(Math.random() * (GenerationConfig.items.maxExpiration - GenerationConfig.items.minExpiration + 1) + GenerationConfig.items.minExpiration)
    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes() + minutes);

    const json_position = JSON.stringify(position)

    const item = (await db.insert(schema.items).values({ itemType: itemType.id, authority: null, position: json_position, expiration }).returning())[0];
    return { id: item.id, name: itemType.name, authority: null, expiration, position };
}