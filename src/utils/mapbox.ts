import { Coordinate } from "../types"

export const getPositions = async (centrePosition: Coordinate) => {
    const profile = "mapbox/walking";
    const exclude = "motorway,toll,ferry,cash_only_tolls";
    const url = `https://api.mapbox.com/isochrone/v1/${profile}/${centrePosition.longitude},${centrePosition.latitude}?contours_minutes=4%2C5&exclude=${exclude}&denoise=0.5&generalize=0&access_token=${process.env.MAPBOX_KEY!}`;

    const response = await (await fetch(url)).json();
    let positions: Coordinate[] = []

    for (let i in response.features) {
        const coordinates = response.features[i].geometry.coordinates
        for (const coordinate in coordinates) {
            positions.push({ latitude: coordinates[coordinate][1], longitude: coordinates[coordinate][0] })
        }
    }

    return positions;
}