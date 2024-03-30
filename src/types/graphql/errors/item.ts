import { GraphQLError } from "graphql";

export const ItemPositionMissingError = new GraphQLError(
    "item.position.missing",
);

export const ItemAuthorityOccpuiedError = new GraphQLError(
    "item.authority.occupied",
);

export const ItemWrongAuthorityError = new GraphQLError(
    "item.wrong.authority",
);

export const ItemExpiredError = new GraphQLError(
    "item.expired",
);

export const ItemNotFoundError = new GraphQLError(
    "item.notfound",
);
