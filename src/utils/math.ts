import { Coordinate } from "../types"

// Haversine formula
// https://www.movable-type.co.uk/scripts/latlong.html
export const distanceInMeters = (position1: Coordinate, position2: Coordinate) => {
    const R = 6371e3; // metres
    const φ1 = position1.latitude * Math.PI / 180;
    const φ2 = position2.latitude * Math.PI / 180;
    const Δφ = (position2.latitude - position1.latitude) * Math.PI / 180;
    const Δλ = (position2.longitude - position1.longitude) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.abs(R * c);
}