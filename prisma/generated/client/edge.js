
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DecisionScalarFieldEnum = {
  uuid: 'uuid',
  stepInputUuid: 'stepInputUuid',
  stepOutputUuid: 'stepOutputUuid',
  title: 'title'
};

exports.Prisma.StepScalarFieldEnum = {
  uuid: 'uuid',
  storyUuid: 'storyUuid',
  waypointUuid: 'waypointUuid',
  assetId: 'assetId',
  description: 'description',
  media: 'media',
  title: 'title',
  ending: 'ending'
};

exports.Prisma.StoryScalarFieldEnum = {
  uuid: 'uuid',
  active: 'active',
  assetId: 'assetId',
  description: 'description',
  title: 'title'
};

exports.Prisma.UserScalarFieldEnum = {
  uuid: 'uuid',
  email: 'email',
  createdAt: 'createdAt',
  secret: 'secret',
  username: 'username'
};

exports.Prisma.GameScalarFieldEnum = {
  uuid: 'uuid',
  storyUuid: 'storyUuid',
  userUuid: 'userUuid',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  finishedAt: 'finishedAt'
};

exports.Prisma.GameStepScalarFieldEnum = {
  gameUuid: 'gameUuid',
  stepUuid: 'stepUuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  finishedAt: 'finishedAt',
  latitude: 'latitude',
  longitude: 'longitude'
};

exports.Prisma.WaypointScalarFieldEnum = {
  uuid: 'uuid',
  placeType: 'placeType'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Media = exports.$Enums.Media = {
  AUDIO: 'AUDIO',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

exports.Ending = exports.$Enums.Ending = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

exports.Prisma.ModelName = {
  Decision: 'Decision',
  Step: 'Step',
  Story: 'Story',
  User: 'User',
  Game: 'Game',
  GameStep: 'GameStep',
  Waypoint: 'Waypoint'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/workspaces/api/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIERlY2lzaW9uIHsKICB1dWlkICAgICAgICAgICBTdHJpbmcgQGlkCiAgc3RlcElucHV0VXVpZCAgU3RyaW5nCiAgc3RlcE91dHB1dFV1aWQgU3RyaW5nCiAgdGl0bGUgICAgICAgICAgU3RyaW5nCiAgc3RlcElucHV0ICAgICAgU3RlcD8gIEByZWxhdGlvbigiaW5wdXREZWNpc2lvbiIsIGZpZWxkczogW3N0ZXBJbnB1dFV1aWRdLCByZWZlcmVuY2VzOiBbdXVpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3N0ZXBfaW5wdXQiKQogIHN0ZXBPdXRwdXQgICAgIFN0ZXA/ICBAcmVsYXRpb24oIm91dHB1dERlY2lzaW9uIiwgZmllbGRzOiBbc3RlcE91dHB1dFV1aWRdLCByZWZlcmVuY2VzOiBbdXVpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3N0ZXBfb3V0cHV0IikKfQoKbW9kZWwgU3RlcCB7CiAgdXVpZCAgICAgICAgICAgU3RyaW5nICAgICBAaWQKICBzdG9yeVV1aWQgICAgICBTdHJpbmcKICB3YXlwb2ludFV1aWQgICBTdHJpbmc/CiAgYXNzZXRJZCAgICAgICAgU3RyaW5nPwogIGRlc2NyaXB0aW9uICAgIFN0cmluZwogIG1lZGlhICAgICAgICAgIE1lZGlhPwogIHRpdGxlICAgICAgICAgIFN0cmluZwogIGVuZGluZyAgICAgICAgIEVuZGluZz8KICBpbnB1dERlY2lzaW9uICBEZWNpc2lvbltdIEByZWxhdGlvbigiaW5wdXREZWNpc2lvbiIpCiAgb3V0cHV0RGVjaXNpb24gRGVjaXNpb25bXSBAcmVsYXRpb24oIm91dHB1dERlY2lzaW9uIikKICBnYW1lU3RlcCAgICAgICBHYW1lU3RlcFtdCiAgc3RvcnkgICAgICAgICAgU3RvcnkgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc3RvcnlVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19zdG9yeSIpCiAgd2F5cG9pbnQgICAgICAgV2F5cG9pbnQ/ICBAcmVsYXRpb24oZmllbGRzOiBbd2F5cG9pbnRVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma193YXlwb2ludCIpCn0KCm1vZGVsIFN0b3J5IHsKICB1dWlkICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgYWN0aXZlICAgICAgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkKICBhc3NldElkICAgICBTdHJpbmc/CiAgZGVzY3JpcHRpb24gU3RyaW5nCiAgdGl0bGUgICAgICAgU3RyaW5nCiAgZ2FtZSAgICAgICAgR2FtZVtdCiAgc3RlcCAgICAgICAgU3RlcFtdCn0KCm1vZGVsIFVzZXIgewogIHV1aWQgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGVtYWlsICAgICBTdHJpbmcgICBAdW5pcXVlIEBkYi5WYXJDaGFyKDMyMCkKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgc2VjcmV0ICAgIFN0cmluZwogIHVzZXJuYW1lICBTdHJpbmcgICBAdW5pcXVlIEBkYi5WYXJDaGFyKDMyKQogIGdhbWUgICAgICBHYW1lW10KfQoKbW9kZWwgR2FtZSB7CiAgdXVpZCAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgc3RvcnlVdWlkICBTdHJpbmcKICB1c2VyVXVpZCAgIFN0cmluZwogIGNyZWF0ZWRBdCAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKICBkZWxldGVkQXQgIERhdGVUaW1lPwogIGZpbmlzaGVkQXQgRGF0ZVRpbWU/CiAgc3RvcnkgICAgICBTdG9yeSAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzdG9yeVV1aWRdLCByZWZlcmVuY2VzOiBbdXVpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3N0b3J5IikKICB1c2VyICAgICAgIFVzZXIgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma191c2VyIikKICBnYW1lU3RlcCAgIEdhbWVTdGVwW10KfQoKbW9kZWwgR2FtZVN0ZXAgewogIGdhbWVVdWlkICAgU3RyaW5nCiAgc3RlcFV1aWQgICBTdHJpbmcKICBjcmVhdGVkQXQgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICBmaW5pc2hlZEF0IERhdGVUaW1lPwogIGxhdGl0dWRlICAgRmxvYXQKICBsb25naXR1ZGUgIEZsb2F0CiAgc3RlcCAgICAgICBTdGVwICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3N0ZXBVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19zdGVwIikKICBnYW1lICAgICAgIEdhbWUgICAgICBAcmVsYXRpb24oZmllbGRzOiBbZ2FtZVV1aWRdLCByZWZlcmVuY2VzOiBbdXVpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3VzZXJfc3RvcnkiKQoKICBAQGlkKFtnYW1lVXVpZCwgc3RlcFV1aWRdKQp9Cgptb2RlbCBXYXlwb2ludCB7CiAgdXVpZCAgICAgIFN0cmluZyAgQGlkCiAgcGxhY2VUeXBlIFN0cmluZz8KICBzdGVwICAgICAgU3RlcFtdCn0KCmVudW0gRW5kaW5nIHsKICBTVUNDRVNTCiAgRkFJTFVSRQp9CgplbnVtIE1lZGlhIHsKICBBVURJTwogIElNQUdFCiAgVklERU8KfQo=",
  "inlineSchemaHash": "00f86402e5d8bce7dbc9adbae0022b65ce81f1e22979480ad001b99420ee06dd",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Decision\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepInputUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepOutputUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepInput\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"inputDecision\",\"relationFromFields\":[\"stepInputUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepOutput\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"outputDecision\",\"relationFromFields\":[\"stepOutputUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Step\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storyUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waypointUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ending\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inputDecision\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decision\",\"relationName\":\"inputDecision\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outputDecision\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decision\",\"relationName\":\"outputDecision\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameStep\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GameStep\",\"relationName\":\"GameStepToStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"story\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Story\",\"relationName\":\"StepToStory\",\"relationFromFields\":[\"storyUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waypoint\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Waypoint\",\"relationName\":\"StepToWaypoint\",\"relationFromFields\":[\"waypointUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Story\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToStory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"StepToStory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Game\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storyUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"finishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"story\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Story\",\"relationName\":\"GameToStory\",\"relationFromFields\":[\"storyUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GameToUser\",\"relationFromFields\":[\"userUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameStep\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GameStep\",\"relationName\":\"GameToGameStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GameStep\":{\"dbName\":null,\"fields\":[{\"name\":\"gameUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"finishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"GameStepToStep\",\"relationFromFields\":[\"stepUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToGameStep\",\"relationFromFields\":[\"gameUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"gameUuid\",\"stepUuid\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Waypoint\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placeType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"StepToWaypoint\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Ending\":{\"values\":[{\"name\":\"SUCCESS\",\"dbName\":null},{\"name\":\"FAILURE\",\"dbName\":null}],\"dbName\":null},\"Media\":{\"values\":[{\"name\":\"AUDIO\",\"dbName\":null},{\"name\":\"IMAGE\",\"dbName\":null},{\"name\":\"VIDEO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

