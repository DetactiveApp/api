import { Coordinates } from "./types";

export const nextCoordinate = async (
  userPosition: Coordinates,
  lastCoordinates: Coordinates | null,
): Promise<Coordinates> => {
  const profile = "mapbox/walking";
  const url = `https://api.mapbox.com/isochrone/v1/${profile}/${userPosition.longitude},${userPosition.latitude}?contours_minutes=4%2C5&denoise=1&generalize=0&access_token=${process.env.MAPBOX_KEY!}`;

  const response = await fetch(url);

  return { latitude: 0.0, longitude: 0.0 };
};
