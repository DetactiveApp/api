import { customType, pgEnum } from "drizzle-orm/pg-core";

export const dtCoordinates = <Coordinate>(name: string) =>
    customType<{ data: Coordinate; driverData: string }>({
        dataType() {
            return 'jsonb';
        },
        fromDriver(value: string): Coordinate {
            return JSON.parse(value)
        },
        toDriver(value: Coordinate): string {
            return JSON.stringify(value)
        },
    })(name);

export const authorityEnum = pgEnum('authority', ['detactive']);