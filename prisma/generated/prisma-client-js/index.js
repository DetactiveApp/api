
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
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
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


  const path = require('path')

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

exports.Prisma.UserStoryScalarFieldEnum = {
  uuid: 'uuid',
  storyUuid: 'storyUuid',
  userUuid: 'userUuid',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  finishedAt: 'finishedAt'
};

exports.Prisma.UserStoryStepScalarFieldEnum = {
  userStoryUuid: 'userStoryUuid',
  stepUuid: 'stepUuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  finishedAt: 'finishedAt',
  latitude: 'latitude',
  longitude: 'longitude'
};

exports.Prisma.UserScalarFieldEnum = {
  uuid: 'uuid',
  email: 'email'
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
  UserStory: 'UserStory',
  UserStoryStep: 'UserStoryStep',
  User: 'User',
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
      "value": "D:\\Projects\\Detactive\\api\\prisma\\generated\\prisma-client-js",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9wcmlzbWEtY2xpZW50LWpzIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBEZWNpc2lvbiB7CiAgdXVpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHN0ZXBJbnB1dFV1aWQgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nIAogIHN0ZXBPdXRwdXRVdWlkICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nIAogIHRpdGxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBkZWNpc2lvbnNEZWNpc2lvbnNTdGVwSW5wdXRVdWlkVG9TdGVwcyAgU3RlcCAgQHJlbGF0aW9uKCJzdGVwc19kZWNpc2lvbnNfc3RlcF9pbnB1dF91dWlkVG9zdGVwcyIsIGZpZWxkczogW3N0ZXBJbnB1dFV1aWRdLCByZWZlcmVuY2VzOiBbdXVpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3N0ZXBfaW5wdXQiKQogIGRlY2lzaW9uc0RlY2lzaW9uc1N0ZXBPdXRwdXRVdWlkVG9TdGVwcyBTdGVwICBAcmVsYXRpb24oImRlY2lzaW9uc0RlY2lzaW9uc1N0ZXBPdXRwdXRVdWlkVG9TdGVwcyIsIGZpZWxkczogW3N0ZXBPdXRwdXRVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19zdGVwX291dHB1dCIpCn0KCm1vZGVsIFN0ZXAgewogIHV1aWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgc3RvcnlVdWlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgCiAgd2F5cG9pbnRVdWlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAKICBhc3NldElkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgCiAgZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAKICBtZWRpYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhPwogIHRpdGxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZW5kaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRpbmc/CiAgZGVjaXNpb25zRGVjaXNpb25zU3RlcElucHV0VXVpZFRvU3RlcHMgIERlY2lzaW9uW10gICAgICAgIEByZWxhdGlvbigic3RlcHNfZGVjaXNpb25zX3N0ZXBfaW5wdXRfdXVpZFRvc3RlcHMiKQogIGRlY2lzaW9uc0RlY2lzaW9uc1N0ZXBPdXRwdXRVdWlkVG9TdGVwcyBEZWNpc2lvbltdICAgICAgICBAcmVsYXRpb24oImRlY2lzaW9uc0RlY2lzaW9uc1N0ZXBPdXRwdXRVdWlkVG9TdGVwcyIpCiAgc3RvcnkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcnkgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc3RvcnlVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19zdG9yeSIpCiAgd2F5cG9pbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdheXBvaW50PyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt3YXlwb2ludFV1aWRdLCByZWZlcmVuY2VzOiBbdXVpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3dheXBvaW50IikKICB1c2VyU3RvcnlTdGVwcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJTdG9yeVN0ZXBbXQp9Cgptb2RlbCBTdG9yeSB7CiAgdXVpZCAgICAgICAgIFN0cmluZyAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgYWN0aXZlICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGFzc2V0SWQgICAgICBTdHJpbmc/ICAgIAogIGRlc2NyaXB0aW9uICBTdHJpbmcgICAgICAKICB0aXRsZSAgICAgICAgU3RyaW5nICAKICBzdGVwcyAgICAgICAgU3RlcFtdCiAgdXNlclN0b3JpZXMgVXNlclN0b3J5W10KfQoKbW9kZWwgVXNlclN0b3J5IHsKICB1dWlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHN0b3J5VXVpZCAgICAgICBTdHJpbmcgICAgICAgICAgIAogIHVzZXJVdWlkICAgICAgICBTdHJpbmcgIAogIGNyZWF0ZWRBdCAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGRlbGV0ZWRBdCAgICAgICBEYXRlVGltZT8gICAgICAgICAKICBmaW5pc2hlZEF0ICAgICAgRGF0ZVRpbWU/ICAgICAgICAgCiAgc3RvcnkgICAgICAgICAgU3RvcnkgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc3RvcnlVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19zdG9yeSIpCiAgdXNlciAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyVXVpZF0sIHJlZmVyZW5jZXM6IFt1dWlkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfdXNlciIpCiAgdXNlclN0b3J5U3RlcHMgVXNlclN0b3J5U3RlcFtdCn0KCm1vZGVsIFVzZXJTdG9yeVN0ZXAgewogIHVzZXJTdG9yeVV1aWQgU3RyaW5nICAgIAogIHN0ZXBVdWlkICAgICAgIFN0cmluZyAgICAKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWUgICAgIEBkZWZhdWx0KG5vdygpKQogIGZpbmlzaGVkQXQgICAgIERhdGVUaW1lPyAgIAogIGxhdGl0dWRlICAgICAgICBGbG9hdAogIGxvbmdpdHVkZSAgICAgICBGbG9hdAogIHN0ZXAgICAgICAgICAgIFN0ZXAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzdGVwVXVpZF0sIHJlZmVyZW5jZXM6IFt1dWlkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfc3RlcCIpCiAgdXNlclN0b3J5ICAgIFVzZXJTdG9yeSBAcmVsYXRpb24oZmllbGRzOiBbdXNlclN0b3J5VXVpZF0sIHJlZmVyZW5jZXM6IFt1dWlkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfdXNlcl9zdG9yeSIpCgogIEBAaWQoW3VzZXJTdG9yeVV1aWQsIHN0ZXBVdWlkXSkKfQoKbW9kZWwgVXNlciB7CiAgdXVpZCAgICAgICAgIFN0cmluZyAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgZW1haWwgICAgICAgIFN0cmluZz8gICAgCiAgdXNlclN0b3JpZXMgVXNlclN0b3J5W10KfQoKbW9kZWwgV2F5cG9pbnQgewogIHV1aWQgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBwbGFjZVR5cGUgICAgIFN0cmluZz8KICBzdGVwcyAgICAgICAgICBTdGVwW10KfQoKZW51bSBFbmRpbmcgewogIFNVQ0NFU1MKICBGQUlMVVJFCn0KCmVudW0gTWVkaWEgewogIEFVRElPCiAgSU1BR0UKICBWSURFTwp9Cg==",
  "inlineSchemaHash": "8f286f113dd7096be9ce5901b4bf1bec62e2b90c864f42801cdf494ed5492834"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/prisma-client-js",
    "generated/prisma-client-js",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Decision\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepInputUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepOutputUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decisionsDecisionsStepInputUuidToSteps\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"steps_decisions_step_input_uuidTosteps\",\"relationFromFields\":[\"stepInputUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decisionsDecisionsStepOutputUuidToSteps\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"decisionsDecisionsStepOutputUuidToSteps\",\"relationFromFields\":[\"stepOutputUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Step\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storyUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waypointUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ending\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decisionsDecisionsStepInputUuidToSteps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decision\",\"relationName\":\"steps_decisions_step_input_uuidTosteps\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decisionsDecisionsStepOutputUuidToSteps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decision\",\"relationName\":\"decisionsDecisionsStepOutputUuidToSteps\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"story\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Story\",\"relationName\":\"StepToStory\",\"relationFromFields\":[\"storyUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waypoint\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Waypoint\",\"relationName\":\"StepToWaypoint\",\"relationFromFields\":[\"waypointUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userStorySteps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStoryStep\",\"relationName\":\"StepToUserStoryStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Story\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"StepToStory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userStories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStory\",\"relationName\":\"StoryToUserStory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserStory\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storyUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"finishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"story\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Story\",\"relationName\":\"StoryToUserStory\",\"relationFromFields\":[\"storyUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserStory\",\"relationFromFields\":[\"userUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userStorySteps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStoryStep\",\"relationName\":\"UserStoryToUserStoryStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserStoryStep\":{\"dbName\":null,\"fields\":[{\"name\":\"userStoryUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stepUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"finishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"StepToUserStoryStep\",\"relationFromFields\":[\"stepUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userStory\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStory\",\"relationName\":\"UserStoryToUserStoryStep\",\"relationFromFields\":[\"userStoryUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userStoryUuid\",\"stepUuid\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userStories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserStory\",\"relationName\":\"UserToUserStory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Waypoint\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placeType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Step\",\"relationName\":\"StepToWaypoint\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Ending\":{\"values\":[{\"name\":\"SUCCESS\",\"dbName\":null},{\"name\":\"FAILURE\",\"dbName\":null}],\"dbName\":null},\"Media\":{\"values\":[{\"name\":\"AUDIO\",\"dbName\":null},{\"name\":\"IMAGE\",\"dbName\":null},{\"name\":\"VIDEO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/prisma-client-js/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/prisma-client-js/schema.prisma")
