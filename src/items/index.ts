import { Coordinate } from "../types"
import { getPositions } from "./positions"
import GenerationConfig from "../../configs/generation.json";
import { generateItem } from "./item";

export const generateItems = async (position: Coordinate) => {
    const positions = await getPositions(position);
    let items: {}[] = []

    const itemCount = Math.floor(Math.random() * (GenerationConfig.items.maxCount - GenerationConfig.items.minCount + 1) + GenerationConfig.items.minCount)
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
