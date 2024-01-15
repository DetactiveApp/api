
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Decision
 * 
 */
export type Decision = $Result.DefaultSelection<Prisma.$DecisionPayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model UserStory
 * 
 */
export type UserStory = $Result.DefaultSelection<Prisma.$UserStoryPayload>
/**
 * Model UserStoryStep
 * 
 */
export type UserStoryStep = $Result.DefaultSelection<Prisma.$UserStoryStepPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Waypoint
 * 
 */
export type Waypoint = $Result.DefaultSelection<Prisma.$WaypointPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Media: {
  AUDIO: 'AUDIO',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type Media = (typeof Media)[keyof typeof Media]


export const Ending: {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export type Ending = (typeof Ending)[keyof typeof Ending]

}

export type Media = $Enums.Media

export const Media: typeof $Enums.Media

export type Ending = $Enums.Ending

export const Ending: typeof $Enums.Ending

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Decisions
 * const decisions = await prisma.decision.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Decisions
   * const decisions = await prisma.decision.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.decision`: Exposes CRUD operations for the **Decision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decisions
    * const decisions = await prisma.decision.findMany()
    * ```
    */
  get decision(): Prisma.DecisionDelegate<ExtArgs>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs>;

  /**
   * `prisma.userStory`: Exposes CRUD operations for the **UserStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStories
    * const userStories = await prisma.userStory.findMany()
    * ```
    */
  get userStory(): Prisma.UserStoryDelegate<ExtArgs>;

  /**
   * `prisma.userStoryStep`: Exposes CRUD operations for the **UserStoryStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStorySteps
    * const userStorySteps = await prisma.userStoryStep.findMany()
    * ```
    */
  get userStoryStep(): Prisma.UserStoryStepDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.waypoint`: Exposes CRUD operations for the **Waypoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waypoints
    * const waypoints = await prisma.waypoint.findMany()
    * ```
    */
  get waypoint(): Prisma.WaypointDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Decision: 'Decision',
    Step: 'Step',
    Story: 'Story',
    UserStory: 'UserStory',
    UserStoryStep: 'UserStoryStep',
    User: 'User',
    Waypoint: 'Waypoint'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'decision' | 'step' | 'story' | 'userStory' | 'userStoryStep' | 'user' | 'waypoint'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Decision: {
        payload: Prisma.$DecisionPayload<ExtArgs>
        fields: Prisma.DecisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecisionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecisionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findFirst: {
            args: Prisma.DecisionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecisionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findMany: {
            args: Prisma.DecisionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          create: {
            args: Prisma.DecisionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          createMany: {
            args: Prisma.DecisionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DecisionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          update: {
            args: Prisma.DecisionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          deleteMany: {
            args: Prisma.DecisionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DecisionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DecisionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          aggregate: {
            args: Prisma.DecisionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDecision>
          }
          groupBy: {
            args: Prisma.DecisionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DecisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecisionCountArgs<ExtArgs>,
            result: $Utils.Optional<DecisionCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>,
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>,
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      UserStory: {
        payload: Prisma.$UserStoryPayload<ExtArgs>
        fields: Prisma.UserStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          findFirst: {
            args: Prisma.UserStoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          findMany: {
            args: Prisma.UserStoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>[]
          }
          create: {
            args: Prisma.UserStoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          createMany: {
            args: Prisma.UserStoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserStoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          update: {
            args: Prisma.UserStoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          deleteMany: {
            args: Prisma.UserStoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserStoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserStoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryPayload>
          }
          aggregate: {
            args: Prisma.UserStoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserStory>
          }
          groupBy: {
            args: Prisma.UserStoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserStoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStoryCountArgs<ExtArgs>,
            result: $Utils.Optional<UserStoryCountAggregateOutputType> | number
          }
        }
      }
      UserStoryStep: {
        payload: Prisma.$UserStoryStepPayload<ExtArgs>
        fields: Prisma.UserStoryStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStoryStepFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStoryStepFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload>
          }
          findFirst: {
            args: Prisma.UserStoryStepFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStoryStepFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload>
          }
          findMany: {
            args: Prisma.UserStoryStepFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload>[]
          }
          create: {
            args: Prisma.UserStoryStepCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload>
          }
          createMany: {
            args: Prisma.UserStoryStepCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserStoryStepDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload>
          }
          update: {
            args: Prisma.UserStoryStepUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload>
          }
          deleteMany: {
            args: Prisma.UserStoryStepDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserStoryStepUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserStoryStepUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStoryStepPayload>
          }
          aggregate: {
            args: Prisma.UserStoryStepAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserStoryStep>
          }
          groupBy: {
            args: Prisma.UserStoryStepGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserStoryStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStoryStepCountArgs<ExtArgs>,
            result: $Utils.Optional<UserStoryStepCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Waypoint: {
        payload: Prisma.$WaypointPayload<ExtArgs>
        fields: Prisma.WaypointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaypointFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaypointFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          findFirst: {
            args: Prisma.WaypointFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaypointFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          findMany: {
            args: Prisma.WaypointFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>[]
          }
          create: {
            args: Prisma.WaypointCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          createMany: {
            args: Prisma.WaypointCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WaypointDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          update: {
            args: Prisma.WaypointUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          deleteMany: {
            args: Prisma.WaypointDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WaypointUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WaypointUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          aggregate: {
            args: Prisma.WaypointAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWaypoint>
          }
          groupBy: {
            args: Prisma.WaypointGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WaypointGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaypointCountArgs<ExtArgs>,
            result: $Utils.Optional<WaypointCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    decisionsDecisionsStepInputUuidToSteps: number
    decisionsDecisionsStepOutputUuidToSteps: number
    userStorySteps: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decisionsDecisionsStepInputUuidToSteps?: boolean | StepCountOutputTypeCountDecisionsDecisionsStepInputUuidToStepsArgs
    decisionsDecisionsStepOutputUuidToSteps?: boolean | StepCountOutputTypeCountDecisionsDecisionsStepOutputUuidToStepsArgs
    userStorySteps?: boolean | StepCountOutputTypeCountUserStoryStepsArgs
  }

  // Custom InputTypes

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountDecisionsDecisionsStepInputUuidToStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
  }


  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountDecisionsDecisionsStepOutputUuidToStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
  }


  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountUserStoryStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryStepWhereInput
  }



  /**
   * Count Type StoryCountOutputType
   */

  export type StoryCountOutputType = {
    steps: number
    userStories: number
  }

  export type StoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | StoryCountOutputTypeCountStepsArgs
    userStories?: boolean | StoryCountOutputTypeCountUserStoriesArgs
  }

  // Custom InputTypes

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryCountOutputType
     */
    select?: StoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }


  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountUserStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryWhereInput
  }



  /**
   * Count Type UserStoryCountOutputType
   */

  export type UserStoryCountOutputType = {
    userStorySteps: number
  }

  export type UserStoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStorySteps?: boolean | UserStoryCountOutputTypeCountUserStoryStepsArgs
  }

  // Custom InputTypes

  /**
   * UserStoryCountOutputType without action
   */
  export type UserStoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryCountOutputType
     */
    select?: UserStoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserStoryCountOutputType without action
   */
  export type UserStoryCountOutputTypeCountUserStoryStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryStepWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userStories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStories?: boolean | UserCountOutputTypeCountUserStoriesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryWhereInput
  }



  /**
   * Count Type WaypointCountOutputType
   */

  export type WaypointCountOutputType = {
    steps: number
  }

  export type WaypointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | WaypointCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes

  /**
   * WaypointCountOutputType without action
   */
  export type WaypointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaypointCountOutputType
     */
    select?: WaypointCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WaypointCountOutputType without action
   */
  export type WaypointCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Decision
   */

  export type AggregateDecision = {
    _count: DecisionCountAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  export type DecisionMinAggregateOutputType = {
    uuid: string | null
    stepInputUuid: string | null
    stepOutputUuid: string | null
    title: string | null
  }

  export type DecisionMaxAggregateOutputType = {
    uuid: string | null
    stepInputUuid: string | null
    stepOutputUuid: string | null
    title: string | null
  }

  export type DecisionCountAggregateOutputType = {
    uuid: number
    stepInputUuid: number
    stepOutputUuid: number
    title: number
    _all: number
  }


  export type DecisionMinAggregateInputType = {
    uuid?: true
    stepInputUuid?: true
    stepOutputUuid?: true
    title?: true
  }

  export type DecisionMaxAggregateInputType = {
    uuid?: true
    stepInputUuid?: true
    stepOutputUuid?: true
    title?: true
  }

  export type DecisionCountAggregateInputType = {
    uuid?: true
    stepInputUuid?: true
    stepOutputUuid?: true
    title?: true
    _all?: true
  }

  export type DecisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decision to aggregate.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decisions
    **/
    _count?: true | DecisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecisionMaxAggregateInputType
  }

  export type GetDecisionAggregateType<T extends DecisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDecision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecision[P]>
      : GetScalarType<T[P], AggregateDecision[P]>
  }




  export type DecisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithAggregationInput | DecisionOrderByWithAggregationInput[]
    by: DecisionScalarFieldEnum[] | DecisionScalarFieldEnum
    having?: DecisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecisionCountAggregateInputType | true
    _min?: DecisionMinAggregateInputType
    _max?: DecisionMaxAggregateInputType
  }

  export type DecisionGroupByOutputType = {
    uuid: string
    stepInputUuid: string
    stepOutputUuid: string
    title: string
    _count: DecisionCountAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  type GetDecisionGroupByPayload<T extends DecisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecisionGroupByOutputType[P]>
            : GetScalarType<T[P], DecisionGroupByOutputType[P]>
        }
      >
    >


  export type DecisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    stepInputUuid?: boolean
    stepOutputUuid?: boolean
    title?: boolean
    decisionsDecisionsStepInputUuidToSteps?: boolean | StepDefaultArgs<ExtArgs>
    decisionsDecisionsStepOutputUuidToSteps?: boolean | StepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectScalar = {
    uuid?: boolean
    stepInputUuid?: boolean
    stepOutputUuid?: boolean
    title?: boolean
  }

  export type DecisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decisionsDecisionsStepInputUuidToSteps?: boolean | StepDefaultArgs<ExtArgs>
    decisionsDecisionsStepOutputUuidToSteps?: boolean | StepDefaultArgs<ExtArgs>
  }


  export type $DecisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Decision"
    objects: {
      decisionsDecisionsStepInputUuidToSteps: Prisma.$StepPayload<ExtArgs>
      decisionsDecisionsStepOutputUuidToSteps: Prisma.$StepPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      stepInputUuid: string
      stepOutputUuid: string
      title: string
    }, ExtArgs["result"]["decision"]>
    composites: {}
  }


  type DecisionGetPayload<S extends boolean | null | undefined | DecisionDefaultArgs> = $Result.GetResult<Prisma.$DecisionPayload, S>

  type DecisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DecisionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DecisionCountAggregateInputType | true
    }

  export interface DecisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Decision'], meta: { name: 'Decision' } }
    /**
     * Find zero or one Decision that matches the filter.
     * @param {DecisionFindUniqueArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DecisionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DecisionFindUniqueArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Decision that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DecisionFindUniqueOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DecisionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DecisionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Decision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DecisionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DecisionFindFirstArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Decision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DecisionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DecisionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Decisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decisions
     * const decisions = await prisma.decision.findMany()
     * 
     * // Get first 10 Decisions
     * const decisions = await prisma.decision.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const decisionWithUuidOnly = await prisma.decision.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends DecisionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DecisionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Decision.
     * @param {DecisionCreateArgs} args - Arguments to create a Decision.
     * @example
     * // Create one Decision
     * const Decision = await prisma.decision.create({
     *   data: {
     *     // ... data to create a Decision
     *   }
     * })
     * 
    **/
    create<T extends DecisionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DecisionCreateArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Decisions.
     *     @param {DecisionCreateManyArgs} args - Arguments to create many Decisions.
     *     @example
     *     // Create many Decisions
     *     const decision = await prisma.decision.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DecisionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DecisionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Decision.
     * @param {DecisionDeleteArgs} args - Arguments to delete one Decision.
     * @example
     * // Delete one Decision
     * const Decision = await prisma.decision.delete({
     *   where: {
     *     // ... filter to delete one Decision
     *   }
     * })
     * 
    **/
    delete<T extends DecisionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DecisionDeleteArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Decision.
     * @param {DecisionUpdateArgs} args - Arguments to update one Decision.
     * @example
     * // Update one Decision
     * const decision = await prisma.decision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DecisionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DecisionUpdateArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Decisions.
     * @param {DecisionDeleteManyArgs} args - Arguments to filter Decisions to delete.
     * @example
     * // Delete a few Decisions
     * const { count } = await prisma.decision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DecisionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DecisionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decisions
     * const decision = await prisma.decision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DecisionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DecisionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Decision.
     * @param {DecisionUpsertArgs} args - Arguments to update or create a Decision.
     * @example
     * // Update or create a Decision
     * const decision = await prisma.decision.upsert({
     *   create: {
     *     // ... data to create a Decision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decision we want to update
     *   }
     * })
    **/
    upsert<T extends DecisionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DecisionUpsertArgs<ExtArgs>>
    ): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionCountArgs} args - Arguments to filter Decisions to count.
     * @example
     * // Count the number of Decisions
     * const count = await prisma.decision.count({
     *   where: {
     *     // ... the filter for the Decisions we want to count
     *   }
     * })
    **/
    count<T extends DecisionCountArgs>(
      args?: Subset<T, DecisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecisionAggregateArgs>(args: Subset<T, DecisionAggregateArgs>): Prisma.PrismaPromise<GetDecisionAggregateType<T>>

    /**
     * Group by Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DecisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecisionGroupByArgs['orderBy'] }
        : { orderBy?: DecisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Decision model
   */
  readonly fields: DecisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Decision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    decisionsDecisionsStepInputUuidToSteps<T extends StepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StepDefaultArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    decisionsDecisionsStepOutputUuidToSteps<T extends StepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StepDefaultArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Decision model
   */ 
  interface DecisionFieldRefs {
    readonly uuid: FieldRef<"Decision", 'String'>
    readonly stepInputUuid: FieldRef<"Decision", 'String'>
    readonly stepOutputUuid: FieldRef<"Decision", 'String'>
    readonly title: FieldRef<"Decision", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Decision findUnique
   */
  export type DecisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }


  /**
   * Decision findUniqueOrThrow
   */
  export type DecisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }


  /**
   * Decision findFirst
   */
  export type DecisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }


  /**
   * Decision findFirstOrThrow
   */
  export type DecisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }


  /**
   * Decision findMany
   */
  export type DecisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decisions to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }


  /**
   * Decision create
   */
  export type DecisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Decision.
     */
    data: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
  }


  /**
   * Decision createMany
   */
  export type DecisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decisions.
     */
    data: DecisionCreateManyInput | DecisionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Decision update
   */
  export type DecisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Decision.
     */
    data: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
    /**
     * Choose, which Decision to update.
     */
    where: DecisionWhereUniqueInput
  }


  /**
   * Decision updateMany
   */
  export type DecisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decisions.
     */
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyInput>
    /**
     * Filter which Decisions to update
     */
    where?: DecisionWhereInput
  }


  /**
   * Decision upsert
   */
  export type DecisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Decision to update in case it exists.
     */
    where: DecisionWhereUniqueInput
    /**
     * In case the Decision found by the `where` argument doesn't exist, create a new Decision with this data.
     */
    create: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
    /**
     * In case the Decision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
  }


  /**
   * Decision delete
   */
  export type DecisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter which Decision to delete.
     */
    where: DecisionWhereUniqueInput
  }


  /**
   * Decision deleteMany
   */
  export type DecisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decisions to delete
     */
    where?: DecisionWhereInput
  }


  /**
   * Decision without action
   */
  export type DecisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
  }



  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepMinAggregateOutputType = {
    uuid: string | null
    storyUuid: string | null
    waypointUuid: string | null
    assetId: string | null
    description: string | null
    media: $Enums.Media | null
    title: string | null
    ending: $Enums.Ending | null
  }

  export type StepMaxAggregateOutputType = {
    uuid: string | null
    storyUuid: string | null
    waypointUuid: string | null
    assetId: string | null
    description: string | null
    media: $Enums.Media | null
    title: string | null
    ending: $Enums.Ending | null
  }

  export type StepCountAggregateOutputType = {
    uuid: number
    storyUuid: number
    waypointUuid: number
    assetId: number
    description: number
    media: number
    title: number
    ending: number
    _all: number
  }


  export type StepMinAggregateInputType = {
    uuid?: true
    storyUuid?: true
    waypointUuid?: true
    assetId?: true
    description?: true
    media?: true
    title?: true
    ending?: true
  }

  export type StepMaxAggregateInputType = {
    uuid?: true
    storyUuid?: true
    waypointUuid?: true
    assetId?: true
    description?: true
    media?: true
    title?: true
    ending?: true
  }

  export type StepCountAggregateInputType = {
    uuid?: true
    storyUuid?: true
    waypointUuid?: true
    assetId?: true
    description?: true
    media?: true
    title?: true
    ending?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    uuid: string
    storyUuid: string
    waypointUuid: string | null
    assetId: string | null
    description: string
    media: $Enums.Media | null
    title: string
    ending: $Enums.Ending | null
    _count: StepCountAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    storyUuid?: boolean
    waypointUuid?: boolean
    assetId?: boolean
    description?: boolean
    media?: boolean
    title?: boolean
    ending?: boolean
    decisionsDecisionsStepInputUuidToSteps?: boolean | Step$decisionsDecisionsStepInputUuidToStepsArgs<ExtArgs>
    decisionsDecisionsStepOutputUuidToSteps?: boolean | Step$decisionsDecisionsStepOutputUuidToStepsArgs<ExtArgs>
    story?: boolean | StoryDefaultArgs<ExtArgs>
    waypoint?: boolean | Step$waypointArgs<ExtArgs>
    userStorySteps?: boolean | Step$userStoryStepsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    uuid?: boolean
    storyUuid?: boolean
    waypointUuid?: boolean
    assetId?: boolean
    description?: boolean
    media?: boolean
    title?: boolean
    ending?: boolean
  }

  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decisionsDecisionsStepInputUuidToSteps?: boolean | Step$decisionsDecisionsStepInputUuidToStepsArgs<ExtArgs>
    decisionsDecisionsStepOutputUuidToSteps?: boolean | Step$decisionsDecisionsStepOutputUuidToStepsArgs<ExtArgs>
    story?: boolean | StoryDefaultArgs<ExtArgs>
    waypoint?: boolean | Step$waypointArgs<ExtArgs>
    userStorySteps?: boolean | Step$userStoryStepsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      decisionsDecisionsStepInputUuidToSteps: Prisma.$DecisionPayload<ExtArgs>[]
      decisionsDecisionsStepOutputUuidToSteps: Prisma.$DecisionPayload<ExtArgs>[]
      story: Prisma.$StoryPayload<ExtArgs>
      waypoint: Prisma.$WaypointPayload<ExtArgs> | null
      userStorySteps: Prisma.$UserStoryStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      storyUuid: string
      waypointUuid: string | null
      assetId: string | null
      description: string
      media: $Enums.Media | null
      title: string
      ending: $Enums.Ending | null
    }, ExtArgs["result"]["step"]>
    composites: {}
  }


  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StepFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Step that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StepFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const stepWithUuidOnly = await prisma.step.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends StepFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
    **/
    create<T extends StepCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StepCreateArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Steps.
     *     @param {StepCreateManyArgs} args - Arguments to create many Steps.
     *     @example
     *     // Create many Steps
     *     const step = await prisma.step.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StepCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
    **/
    delete<T extends StepDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StepDeleteArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StepUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StepUpdateArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StepDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StepUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
    **/
    upsert<T extends StepUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StepUpsertArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    decisionsDecisionsStepInputUuidToSteps<T extends Step$decisionsDecisionsStepInputUuidToStepsArgs<ExtArgs> = {}>(args?: Subset<T, Step$decisionsDecisionsStepInputUuidToStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'findMany'> | Null>;

    decisionsDecisionsStepOutputUuidToSteps<T extends Step$decisionsDecisionsStepOutputUuidToStepsArgs<ExtArgs> = {}>(args?: Subset<T, Step$decisionsDecisionsStepOutputUuidToStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, 'findMany'> | Null>;

    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    waypoint<T extends Step$waypointArgs<ExtArgs> = {}>(args?: Subset<T, Step$waypointArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    userStorySteps<T extends Step$userStoryStepsArgs<ExtArgs> = {}>(args?: Subset<T, Step$userStoryStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Step model
   */ 
  interface StepFieldRefs {
    readonly uuid: FieldRef<"Step", 'String'>
    readonly storyUuid: FieldRef<"Step", 'String'>
    readonly waypointUuid: FieldRef<"Step", 'String'>
    readonly assetId: FieldRef<"Step", 'String'>
    readonly description: FieldRef<"Step", 'String'>
    readonly media: FieldRef<"Step", 'Media'>
    readonly title: FieldRef<"Step", 'String'>
    readonly ending: FieldRef<"Step", 'Ending'>
  }
    

  // Custom InputTypes

  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }


  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }


  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }


  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }


  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }


  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }


  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }


  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
  }


  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }


  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }


  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
  }


  /**
   * Step.decisionsDecisionsStepInputUuidToSteps
   */
  export type Step$decisionsDecisionsStepInputUuidToStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    cursor?: DecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }


  /**
   * Step.decisionsDecisionsStepOutputUuidToSteps
   */
  export type Step$decisionsDecisionsStepOutputUuidToStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DecisionInclude<ExtArgs> | null
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    cursor?: DecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }


  /**
   * Step.waypoint
   */
  export type Step$waypointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    where?: WaypointWhereInput
  }


  /**
   * Step.userStorySteps
   */
  export type Step$userStoryStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    where?: UserStoryStepWhereInput
    orderBy?: UserStoryStepOrderByWithRelationInput | UserStoryStepOrderByWithRelationInput[]
    cursor?: UserStoryStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoryStepScalarFieldEnum | UserStoryStepScalarFieldEnum[]
  }


  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
  }



  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryMinAggregateOutputType = {
    uuid: string | null
    active: boolean | null
    assetId: string | null
    description: string | null
    title: string | null
  }

  export type StoryMaxAggregateOutputType = {
    uuid: string | null
    active: boolean | null
    assetId: string | null
    description: string | null
    title: string | null
  }

  export type StoryCountAggregateOutputType = {
    uuid: number
    active: number
    assetId: number
    description: number
    title: number
    _all: number
  }


  export type StoryMinAggregateInputType = {
    uuid?: true
    active?: true
    assetId?: true
    description?: true
    title?: true
  }

  export type StoryMaxAggregateInputType = {
    uuid?: true
    active?: true
    assetId?: true
    description?: true
    title?: true
  }

  export type StoryCountAggregateInputType = {
    uuid?: true
    active?: true
    assetId?: true
    description?: true
    title?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    uuid: string
    active: boolean
    assetId: string | null
    description: string
    title: string
    _count: StoryCountAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    active?: boolean
    assetId?: boolean
    description?: boolean
    title?: boolean
    steps?: boolean | Story$stepsArgs<ExtArgs>
    userStories?: boolean | Story$userStoriesArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    uuid?: boolean
    active?: boolean
    assetId?: boolean
    description?: boolean
    title?: boolean
  }

  export type StoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | Story$stepsArgs<ExtArgs>
    userStories?: boolean | Story$userStoriesArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      steps: Prisma.$StepPayload<ExtArgs>[]
      userStories: Prisma.$UserStoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      active: boolean
      assetId: string | null
      description: string
      title: string
    }, ExtArgs["result"]["story"]>
    composites: {}
  }


  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Story that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const storyWithUuidOnly = await prisma.story.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends StoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
    **/
    create<T extends StoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoryCreateArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stories.
     *     @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     *     @example
     *     // Create many Stories
     *     const story = await prisma.story.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
    **/
    delete<T extends StoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
    **/
    upsert<T extends StoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    steps<T extends Story$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Story$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findMany'> | Null>;

    userStories<T extends Story$userStoriesArgs<ExtArgs> = {}>(args?: Subset<T, Story$userStoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Story model
   */ 
  interface StoryFieldRefs {
    readonly uuid: FieldRef<"Story", 'String'>
    readonly active: FieldRef<"Story", 'Boolean'>
    readonly assetId: FieldRef<"Story", 'String'>
    readonly description: FieldRef<"Story", 'String'>
    readonly title: FieldRef<"Story", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }


  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }


  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }


  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }


  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
  }


  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }


  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
  }


  /**
   * Story.steps
   */
  export type Story$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }


  /**
   * Story.userStories
   */
  export type Story$userStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    where?: UserStoryWhereInput
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    cursor?: UserStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }


  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
  }



  /**
   * Model UserStory
   */

  export type AggregateUserStory = {
    _count: UserStoryCountAggregateOutputType | null
    _min: UserStoryMinAggregateOutputType | null
    _max: UserStoryMaxAggregateOutputType | null
  }

  export type UserStoryMinAggregateOutputType = {
    uuid: string | null
    storyUuid: string | null
    userUuid: string | null
    createdAt: Date | null
    deletedAt: Date | null
    finishedAt: Date | null
  }

  export type UserStoryMaxAggregateOutputType = {
    uuid: string | null
    storyUuid: string | null
    userUuid: string | null
    createdAt: Date | null
    deletedAt: Date | null
    finishedAt: Date | null
  }

  export type UserStoryCountAggregateOutputType = {
    uuid: number
    storyUuid: number
    userUuid: number
    createdAt: number
    deletedAt: number
    finishedAt: number
    _all: number
  }


  export type UserStoryMinAggregateInputType = {
    uuid?: true
    storyUuid?: true
    userUuid?: true
    createdAt?: true
    deletedAt?: true
    finishedAt?: true
  }

  export type UserStoryMaxAggregateInputType = {
    uuid?: true
    storyUuid?: true
    userUuid?: true
    createdAt?: true
    deletedAt?: true
    finishedAt?: true
  }

  export type UserStoryCountAggregateInputType = {
    uuid?: true
    storyUuid?: true
    userUuid?: true
    createdAt?: true
    deletedAt?: true
    finishedAt?: true
    _all?: true
  }

  export type UserStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStory to aggregate.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStories
    **/
    _count?: true | UserStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStoryMaxAggregateInputType
  }

  export type GetUserStoryAggregateType<T extends UserStoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStory[P]>
      : GetScalarType<T[P], AggregateUserStory[P]>
  }




  export type UserStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryWhereInput
    orderBy?: UserStoryOrderByWithAggregationInput | UserStoryOrderByWithAggregationInput[]
    by: UserStoryScalarFieldEnum[] | UserStoryScalarFieldEnum
    having?: UserStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStoryCountAggregateInputType | true
    _min?: UserStoryMinAggregateInputType
    _max?: UserStoryMaxAggregateInputType
  }

  export type UserStoryGroupByOutputType = {
    uuid: string
    storyUuid: string
    userUuid: string
    createdAt: Date
    deletedAt: Date | null
    finishedAt: Date | null
    _count: UserStoryCountAggregateOutputType | null
    _min: UserStoryMinAggregateOutputType | null
    _max: UserStoryMaxAggregateOutputType | null
  }

  type GetUserStoryGroupByPayload<T extends UserStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserStoryGroupByOutputType[P]>
        }
      >
    >


  export type UserStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    storyUuid?: boolean
    userUuid?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    finishedAt?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    userStorySteps?: boolean | UserStory$userStoryStepsArgs<ExtArgs>
    _count?: boolean | UserStoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStory"]>

  export type UserStorySelectScalar = {
    uuid?: boolean
    storyUuid?: boolean
    userUuid?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    finishedAt?: boolean
  }

  export type UserStoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    userStorySteps?: boolean | UserStory$userStoryStepsArgs<ExtArgs>
    _count?: boolean | UserStoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStory"
    objects: {
      story: Prisma.$StoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      userStorySteps: Prisma.$UserStoryStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      storyUuid: string
      userUuid: string
      createdAt: Date
      deletedAt: Date | null
      finishedAt: Date | null
    }, ExtArgs["result"]["userStory"]>
    composites: {}
  }


  type UserStoryGetPayload<S extends boolean | null | undefined | UserStoryDefaultArgs> = $Result.GetResult<Prisma.$UserStoryPayload, S>

  type UserStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStoryCountAggregateInputType | true
    }

  export interface UserStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStory'], meta: { name: 'UserStory' } }
    /**
     * Find zero or one UserStory that matches the filter.
     * @param {UserStoryFindUniqueArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserStoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryFindUniqueArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserStory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserStoryFindUniqueOrThrowArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserStoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryFindFirstArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserStoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryFindFirstArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryFindFirstOrThrowArgs} args - Arguments to find a UserStory
     * @example
     * // Get one UserStory
     * const userStory = await prisma.userStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserStoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStories
     * const userStories = await prisma.userStory.findMany()
     * 
     * // Get first 10 UserStories
     * const userStories = await prisma.userStory.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const userStoryWithUuidOnly = await prisma.userStory.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends UserStoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserStory.
     * @param {UserStoryCreateArgs} args - Arguments to create a UserStory.
     * @example
     * // Create one UserStory
     * const UserStory = await prisma.userStory.create({
     *   data: {
     *     // ... data to create a UserStory
     *   }
     * })
     * 
    **/
    create<T extends UserStoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryCreateArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserStories.
     *     @param {UserStoryCreateManyArgs} args - Arguments to create many UserStories.
     *     @example
     *     // Create many UserStories
     *     const userStory = await prisma.userStory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserStoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserStory.
     * @param {UserStoryDeleteArgs} args - Arguments to delete one UserStory.
     * @example
     * // Delete one UserStory
     * const UserStory = await prisma.userStory.delete({
     *   where: {
     *     // ... filter to delete one UserStory
     *   }
     * })
     * 
    **/
    delete<T extends UserStoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryDeleteArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserStory.
     * @param {UserStoryUpdateArgs} args - Arguments to update one UserStory.
     * @example
     * // Update one UserStory
     * const userStory = await prisma.userStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserStoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryUpdateArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserStories.
     * @param {UserStoryDeleteManyArgs} args - Arguments to filter UserStories to delete.
     * @example
     * // Delete a few UserStories
     * const { count } = await prisma.userStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserStoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStories
     * const userStory = await prisma.userStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserStoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStory.
     * @param {UserStoryUpsertArgs} args - Arguments to update or create a UserStory.
     * @example
     * // Update or create a UserStory
     * const userStory = await prisma.userStory.upsert({
     *   create: {
     *     // ... data to create a UserStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStory we want to update
     *   }
     * })
    **/
    upsert<T extends UserStoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryUpsertArgs<ExtArgs>>
    ): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryCountArgs} args - Arguments to filter UserStories to count.
     * @example
     * // Count the number of UserStories
     * const count = await prisma.userStory.count({
     *   where: {
     *     // ... the filter for the UserStories we want to count
     *   }
     * })
    **/
    count<T extends UserStoryCountArgs>(
      args?: Subset<T, UserStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStoryAggregateArgs>(args: Subset<T, UserStoryAggregateArgs>): Prisma.PrismaPromise<GetUserStoryAggregateType<T>>

    /**
     * Group by UserStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStoryGroupByArgs['orderBy'] }
        : { orderBy?: UserStoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStory model
   */
  readonly fields: UserStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userStorySteps<T extends UserStory$userStoryStepsArgs<ExtArgs> = {}>(args?: Subset<T, UserStory$userStoryStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserStory model
   */ 
  interface UserStoryFieldRefs {
    readonly uuid: FieldRef<"UserStory", 'String'>
    readonly storyUuid: FieldRef<"UserStory", 'String'>
    readonly userUuid: FieldRef<"UserStory", 'String'>
    readonly createdAt: FieldRef<"UserStory", 'DateTime'>
    readonly deletedAt: FieldRef<"UserStory", 'DateTime'>
    readonly finishedAt: FieldRef<"UserStory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserStory findUnique
   */
  export type UserStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where: UserStoryWhereUniqueInput
  }


  /**
   * UserStory findUniqueOrThrow
   */
  export type UserStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where: UserStoryWhereUniqueInput
  }


  /**
   * UserStory findFirst
   */
  export type UserStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStories.
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStories.
     */
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }


  /**
   * UserStory findFirstOrThrow
   */
  export type UserStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStory to fetch.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStories.
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStories.
     */
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }


  /**
   * UserStory findMany
   */
  export type UserStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter, which UserStories to fetch.
     */
    where?: UserStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStories to fetch.
     */
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStories.
     */
    cursor?: UserStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStories.
     */
    skip?: number
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }


  /**
   * UserStory create
   */
  export type UserStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStory.
     */
    data: XOR<UserStoryCreateInput, UserStoryUncheckedCreateInput>
  }


  /**
   * UserStory createMany
   */
  export type UserStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStories.
     */
    data: UserStoryCreateManyInput | UserStoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserStory update
   */
  export type UserStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStory.
     */
    data: XOR<UserStoryUpdateInput, UserStoryUncheckedUpdateInput>
    /**
     * Choose, which UserStory to update.
     */
    where: UserStoryWhereUniqueInput
  }


  /**
   * UserStory updateMany
   */
  export type UserStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStories.
     */
    data: XOR<UserStoryUpdateManyMutationInput, UserStoryUncheckedUpdateManyInput>
    /**
     * Filter which UserStories to update
     */
    where?: UserStoryWhereInput
  }


  /**
   * UserStory upsert
   */
  export type UserStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStory to update in case it exists.
     */
    where: UserStoryWhereUniqueInput
    /**
     * In case the UserStory found by the `where` argument doesn't exist, create a new UserStory with this data.
     */
    create: XOR<UserStoryCreateInput, UserStoryUncheckedCreateInput>
    /**
     * In case the UserStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStoryUpdateInput, UserStoryUncheckedUpdateInput>
  }


  /**
   * UserStory delete
   */
  export type UserStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    /**
     * Filter which UserStory to delete.
     */
    where: UserStoryWhereUniqueInput
  }


  /**
   * UserStory deleteMany
   */
  export type UserStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStories to delete
     */
    where?: UserStoryWhereInput
  }


  /**
   * UserStory.userStorySteps
   */
  export type UserStory$userStoryStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    where?: UserStoryStepWhereInput
    orderBy?: UserStoryStepOrderByWithRelationInput | UserStoryStepOrderByWithRelationInput[]
    cursor?: UserStoryStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoryStepScalarFieldEnum | UserStoryStepScalarFieldEnum[]
  }


  /**
   * UserStory without action
   */
  export type UserStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
  }



  /**
   * Model UserStoryStep
   */

  export type AggregateUserStoryStep = {
    _count: UserStoryStepCountAggregateOutputType | null
    _avg: UserStoryStepAvgAggregateOutputType | null
    _sum: UserStoryStepSumAggregateOutputType | null
    _min: UserStoryStepMinAggregateOutputType | null
    _max: UserStoryStepMaxAggregateOutputType | null
  }

  export type UserStoryStepAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserStoryStepSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserStoryStepMinAggregateOutputType = {
    userStoryUuid: string | null
    stepUuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    finishedAt: Date | null
    latitude: number | null
    longitude: number | null
  }

  export type UserStoryStepMaxAggregateOutputType = {
    userStoryUuid: string | null
    stepUuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    finishedAt: Date | null
    latitude: number | null
    longitude: number | null
  }

  export type UserStoryStepCountAggregateOutputType = {
    userStoryUuid: number
    stepUuid: number
    createdAt: number
    updatedAt: number
    finishedAt: number
    latitude: number
    longitude: number
    _all: number
  }


  export type UserStoryStepAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserStoryStepSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserStoryStepMinAggregateInputType = {
    userStoryUuid?: true
    stepUuid?: true
    createdAt?: true
    updatedAt?: true
    finishedAt?: true
    latitude?: true
    longitude?: true
  }

  export type UserStoryStepMaxAggregateInputType = {
    userStoryUuid?: true
    stepUuid?: true
    createdAt?: true
    updatedAt?: true
    finishedAt?: true
    latitude?: true
    longitude?: true
  }

  export type UserStoryStepCountAggregateInputType = {
    userStoryUuid?: true
    stepUuid?: true
    createdAt?: true
    updatedAt?: true
    finishedAt?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type UserStoryStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStoryStep to aggregate.
     */
    where?: UserStoryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorySteps to fetch.
     */
    orderBy?: UserStoryStepOrderByWithRelationInput | UserStoryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStoryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorySteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStorySteps
    **/
    _count?: true | UserStoryStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStoryStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStoryStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStoryStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStoryStepMaxAggregateInputType
  }

  export type GetUserStoryStepAggregateType<T extends UserStoryStepAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStoryStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStoryStep[P]>
      : GetScalarType<T[P], AggregateUserStoryStep[P]>
  }




  export type UserStoryStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoryStepWhereInput
    orderBy?: UserStoryStepOrderByWithAggregationInput | UserStoryStepOrderByWithAggregationInput[]
    by: UserStoryStepScalarFieldEnum[] | UserStoryStepScalarFieldEnum
    having?: UserStoryStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStoryStepCountAggregateInputType | true
    _avg?: UserStoryStepAvgAggregateInputType
    _sum?: UserStoryStepSumAggregateInputType
    _min?: UserStoryStepMinAggregateInputType
    _max?: UserStoryStepMaxAggregateInputType
  }

  export type UserStoryStepGroupByOutputType = {
    userStoryUuid: string
    stepUuid: string
    createdAt: Date
    updatedAt: Date
    finishedAt: Date | null
    latitude: number
    longitude: number
    _count: UserStoryStepCountAggregateOutputType | null
    _avg: UserStoryStepAvgAggregateOutputType | null
    _sum: UserStoryStepSumAggregateOutputType | null
    _min: UserStoryStepMinAggregateOutputType | null
    _max: UserStoryStepMaxAggregateOutputType | null
  }

  type GetUserStoryStepGroupByPayload<T extends UserStoryStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStoryStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStoryStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStoryStepGroupByOutputType[P]>
            : GetScalarType<T[P], UserStoryStepGroupByOutputType[P]>
        }
      >
    >


  export type UserStoryStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userStoryUuid?: boolean
    stepUuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    finishedAt?: boolean
    latitude?: boolean
    longitude?: boolean
    step?: boolean | StepDefaultArgs<ExtArgs>
    userStory?: boolean | UserStoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStoryStep"]>

  export type UserStoryStepSelectScalar = {
    userStoryUuid?: boolean
    stepUuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    finishedAt?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type UserStoryStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | StepDefaultArgs<ExtArgs>
    userStory?: boolean | UserStoryDefaultArgs<ExtArgs>
  }


  export type $UserStoryStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStoryStep"
    objects: {
      step: Prisma.$StepPayload<ExtArgs>
      userStory: Prisma.$UserStoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userStoryUuid: string
      stepUuid: string
      createdAt: Date
      updatedAt: Date
      finishedAt: Date | null
      latitude: number
      longitude: number
    }, ExtArgs["result"]["userStoryStep"]>
    composites: {}
  }


  type UserStoryStepGetPayload<S extends boolean | null | undefined | UserStoryStepDefaultArgs> = $Result.GetResult<Prisma.$UserStoryStepPayload, S>

  type UserStoryStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStoryStepFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStoryStepCountAggregateInputType | true
    }

  export interface UserStoryStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStoryStep'], meta: { name: 'UserStoryStep' } }
    /**
     * Find zero or one UserStoryStep that matches the filter.
     * @param {UserStoryStepFindUniqueArgs} args - Arguments to find a UserStoryStep
     * @example
     * // Get one UserStoryStep
     * const userStoryStep = await prisma.userStoryStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserStoryStepFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryStepFindUniqueArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserStoryStep that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserStoryStepFindUniqueOrThrowArgs} args - Arguments to find a UserStoryStep
     * @example
     * // Get one UserStoryStep
     * const userStoryStep = await prisma.userStoryStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserStoryStepFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryStepFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserStoryStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryStepFindFirstArgs} args - Arguments to find a UserStoryStep
     * @example
     * // Get one UserStoryStep
     * const userStoryStep = await prisma.userStoryStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserStoryStepFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryStepFindFirstArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserStoryStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryStepFindFirstOrThrowArgs} args - Arguments to find a UserStoryStep
     * @example
     * // Get one UserStoryStep
     * const userStoryStep = await prisma.userStoryStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserStoryStepFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryStepFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserStorySteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryStepFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStorySteps
     * const userStorySteps = await prisma.userStoryStep.findMany()
     * 
     * // Get first 10 UserStorySteps
     * const userStorySteps = await prisma.userStoryStep.findMany({ take: 10 })
     * 
     * // Only select the `userStoryUuid`
     * const userStoryStepWithUserStoryUuidOnly = await prisma.userStoryStep.findMany({ select: { userStoryUuid: true } })
     * 
    **/
    findMany<T extends UserStoryStepFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryStepFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserStoryStep.
     * @param {UserStoryStepCreateArgs} args - Arguments to create a UserStoryStep.
     * @example
     * // Create one UserStoryStep
     * const UserStoryStep = await prisma.userStoryStep.create({
     *   data: {
     *     // ... data to create a UserStoryStep
     *   }
     * })
     * 
    **/
    create<T extends UserStoryStepCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryStepCreateArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserStorySteps.
     *     @param {UserStoryStepCreateManyArgs} args - Arguments to create many UserStorySteps.
     *     @example
     *     // Create many UserStorySteps
     *     const userStoryStep = await prisma.userStoryStep.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserStoryStepCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryStepCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserStoryStep.
     * @param {UserStoryStepDeleteArgs} args - Arguments to delete one UserStoryStep.
     * @example
     * // Delete one UserStoryStep
     * const UserStoryStep = await prisma.userStoryStep.delete({
     *   where: {
     *     // ... filter to delete one UserStoryStep
     *   }
     * })
     * 
    **/
    delete<T extends UserStoryStepDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryStepDeleteArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserStoryStep.
     * @param {UserStoryStepUpdateArgs} args - Arguments to update one UserStoryStep.
     * @example
     * // Update one UserStoryStep
     * const userStoryStep = await prisma.userStoryStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserStoryStepUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryStepUpdateArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserStorySteps.
     * @param {UserStoryStepDeleteManyArgs} args - Arguments to filter UserStorySteps to delete.
     * @example
     * // Delete a few UserStorySteps
     * const { count } = await prisma.userStoryStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserStoryStepDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStoryStepDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStorySteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStorySteps
     * const userStoryStep = await prisma.userStoryStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserStoryStepUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryStepUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStoryStep.
     * @param {UserStoryStepUpsertArgs} args - Arguments to update or create a UserStoryStep.
     * @example
     * // Update or create a UserStoryStep
     * const userStoryStep = await prisma.userStoryStep.upsert({
     *   create: {
     *     // ... data to create a UserStoryStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStoryStep we want to update
     *   }
     * })
    **/
    upsert<T extends UserStoryStepUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserStoryStepUpsertArgs<ExtArgs>>
    ): Prisma__UserStoryStepClient<$Result.GetResult<Prisma.$UserStoryStepPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserStorySteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryStepCountArgs} args - Arguments to filter UserStorySteps to count.
     * @example
     * // Count the number of UserStorySteps
     * const count = await prisma.userStoryStep.count({
     *   where: {
     *     // ... the filter for the UserStorySteps we want to count
     *   }
     * })
    **/
    count<T extends UserStoryStepCountArgs>(
      args?: Subset<T, UserStoryStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStoryStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStoryStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStoryStepAggregateArgs>(args: Subset<T, UserStoryStepAggregateArgs>): Prisma.PrismaPromise<GetUserStoryStepAggregateType<T>>

    /**
     * Group by UserStoryStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoryStepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStoryStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStoryStepGroupByArgs['orderBy'] }
        : { orderBy?: UserStoryStepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStoryStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStoryStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStoryStep model
   */
  readonly fields: UserStoryStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStoryStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStoryStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    step<T extends StepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StepDefaultArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userStory<T extends UserStoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserStoryDefaultArgs<ExtArgs>>): Prisma__UserStoryClient<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserStoryStep model
   */ 
  interface UserStoryStepFieldRefs {
    readonly userStoryUuid: FieldRef<"UserStoryStep", 'String'>
    readonly stepUuid: FieldRef<"UserStoryStep", 'String'>
    readonly createdAt: FieldRef<"UserStoryStep", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStoryStep", 'DateTime'>
    readonly finishedAt: FieldRef<"UserStoryStep", 'DateTime'>
    readonly latitude: FieldRef<"UserStoryStep", 'Float'>
    readonly longitude: FieldRef<"UserStoryStep", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * UserStoryStep findUnique
   */
  export type UserStoryStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * Filter, which UserStoryStep to fetch.
     */
    where: UserStoryStepWhereUniqueInput
  }


  /**
   * UserStoryStep findUniqueOrThrow
   */
  export type UserStoryStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * Filter, which UserStoryStep to fetch.
     */
    where: UserStoryStepWhereUniqueInput
  }


  /**
   * UserStoryStep findFirst
   */
  export type UserStoryStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * Filter, which UserStoryStep to fetch.
     */
    where?: UserStoryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorySteps to fetch.
     */
    orderBy?: UserStoryStepOrderByWithRelationInput | UserStoryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStorySteps.
     */
    cursor?: UserStoryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorySteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStorySteps.
     */
    distinct?: UserStoryStepScalarFieldEnum | UserStoryStepScalarFieldEnum[]
  }


  /**
   * UserStoryStep findFirstOrThrow
   */
  export type UserStoryStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * Filter, which UserStoryStep to fetch.
     */
    where?: UserStoryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorySteps to fetch.
     */
    orderBy?: UserStoryStepOrderByWithRelationInput | UserStoryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStorySteps.
     */
    cursor?: UserStoryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorySteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStorySteps.
     */
    distinct?: UserStoryStepScalarFieldEnum | UserStoryStepScalarFieldEnum[]
  }


  /**
   * UserStoryStep findMany
   */
  export type UserStoryStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * Filter, which UserStorySteps to fetch.
     */
    where?: UserStoryStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorySteps to fetch.
     */
    orderBy?: UserStoryStepOrderByWithRelationInput | UserStoryStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStorySteps.
     */
    cursor?: UserStoryStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorySteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorySteps.
     */
    skip?: number
    distinct?: UserStoryStepScalarFieldEnum | UserStoryStepScalarFieldEnum[]
  }


  /**
   * UserStoryStep create
   */
  export type UserStoryStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStoryStep.
     */
    data: XOR<UserStoryStepCreateInput, UserStoryStepUncheckedCreateInput>
  }


  /**
   * UserStoryStep createMany
   */
  export type UserStoryStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStorySteps.
     */
    data: UserStoryStepCreateManyInput | UserStoryStepCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserStoryStep update
   */
  export type UserStoryStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStoryStep.
     */
    data: XOR<UserStoryStepUpdateInput, UserStoryStepUncheckedUpdateInput>
    /**
     * Choose, which UserStoryStep to update.
     */
    where: UserStoryStepWhereUniqueInput
  }


  /**
   * UserStoryStep updateMany
   */
  export type UserStoryStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStorySteps.
     */
    data: XOR<UserStoryStepUpdateManyMutationInput, UserStoryStepUncheckedUpdateManyInput>
    /**
     * Filter which UserStorySteps to update
     */
    where?: UserStoryStepWhereInput
  }


  /**
   * UserStoryStep upsert
   */
  export type UserStoryStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStoryStep to update in case it exists.
     */
    where: UserStoryStepWhereUniqueInput
    /**
     * In case the UserStoryStep found by the `where` argument doesn't exist, create a new UserStoryStep with this data.
     */
    create: XOR<UserStoryStepCreateInput, UserStoryStepUncheckedCreateInput>
    /**
     * In case the UserStoryStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStoryStepUpdateInput, UserStoryStepUncheckedUpdateInput>
  }


  /**
   * UserStoryStep delete
   */
  export type UserStoryStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
    /**
     * Filter which UserStoryStep to delete.
     */
    where: UserStoryStepWhereUniqueInput
  }


  /**
   * UserStoryStep deleteMany
   */
  export type UserStoryStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStorySteps to delete
     */
    where?: UserStoryStepWhereInput
  }


  /**
   * UserStoryStep without action
   */
  export type UserStoryStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoryStep
     */
    select?: UserStoryStepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryStepInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    uuid: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    uuid: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    uuid: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    uuid?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    uuid?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    uuid?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uuid: string
    email: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    email?: boolean
    userStories?: boolean | User$userStoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uuid?: boolean
    email?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStories?: boolean | User$userStoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userStories: Prisma.$UserStoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      email: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const userWithUuidOnly = await prisma.user.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userStories<T extends User$userStoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$userStoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly uuid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.userStories
   */
  export type User$userStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStory
     */
    select?: UserStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStoryInclude<ExtArgs> | null
    where?: UserStoryWhereInput
    orderBy?: UserStoryOrderByWithRelationInput | UserStoryOrderByWithRelationInput[]
    cursor?: UserStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoryScalarFieldEnum | UserStoryScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Waypoint
   */

  export type AggregateWaypoint = {
    _count: WaypointCountAggregateOutputType | null
    _min: WaypointMinAggregateOutputType | null
    _max: WaypointMaxAggregateOutputType | null
  }

  export type WaypointMinAggregateOutputType = {
    uuid: string | null
    placeType: string | null
  }

  export type WaypointMaxAggregateOutputType = {
    uuid: string | null
    placeType: string | null
  }

  export type WaypointCountAggregateOutputType = {
    uuid: number
    placeType: number
    _all: number
  }


  export type WaypointMinAggregateInputType = {
    uuid?: true
    placeType?: true
  }

  export type WaypointMaxAggregateInputType = {
    uuid?: true
    placeType?: true
  }

  export type WaypointCountAggregateInputType = {
    uuid?: true
    placeType?: true
    _all?: true
  }

  export type WaypointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waypoint to aggregate.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waypoints
    **/
    _count?: true | WaypointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaypointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaypointMaxAggregateInputType
  }

  export type GetWaypointAggregateType<T extends WaypointAggregateArgs> = {
        [P in keyof T & keyof AggregateWaypoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaypoint[P]>
      : GetScalarType<T[P], AggregateWaypoint[P]>
  }




  export type WaypointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaypointWhereInput
    orderBy?: WaypointOrderByWithAggregationInput | WaypointOrderByWithAggregationInput[]
    by: WaypointScalarFieldEnum[] | WaypointScalarFieldEnum
    having?: WaypointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaypointCountAggregateInputType | true
    _min?: WaypointMinAggregateInputType
    _max?: WaypointMaxAggregateInputType
  }

  export type WaypointGroupByOutputType = {
    uuid: string
    placeType: string | null
    _count: WaypointCountAggregateOutputType | null
    _min: WaypointMinAggregateOutputType | null
    _max: WaypointMaxAggregateOutputType | null
  }

  type GetWaypointGroupByPayload<T extends WaypointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaypointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaypointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaypointGroupByOutputType[P]>
            : GetScalarType<T[P], WaypointGroupByOutputType[P]>
        }
      >
    >


  export type WaypointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    placeType?: boolean
    steps?: boolean | Waypoint$stepsArgs<ExtArgs>
    _count?: boolean | WaypointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waypoint"]>

  export type WaypointSelectScalar = {
    uuid?: boolean
    placeType?: boolean
  }

  export type WaypointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | Waypoint$stepsArgs<ExtArgs>
    _count?: boolean | WaypointCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WaypointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waypoint"
    objects: {
      steps: Prisma.$StepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      placeType: string | null
    }, ExtArgs["result"]["waypoint"]>
    composites: {}
  }


  type WaypointGetPayload<S extends boolean | null | undefined | WaypointDefaultArgs> = $Result.GetResult<Prisma.$WaypointPayload, S>

  type WaypointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaypointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaypointCountAggregateInputType | true
    }

  export interface WaypointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waypoint'], meta: { name: 'Waypoint' } }
    /**
     * Find zero or one Waypoint that matches the filter.
     * @param {WaypointFindUniqueArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WaypointFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WaypointFindUniqueArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Waypoint that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WaypointFindUniqueOrThrowArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WaypointFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaypointFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Waypoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindFirstArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WaypointFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WaypointFindFirstArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Waypoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindFirstOrThrowArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WaypointFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaypointFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Waypoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waypoints
     * const waypoints = await prisma.waypoint.findMany()
     * 
     * // Get first 10 Waypoints
     * const waypoints = await prisma.waypoint.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const waypointWithUuidOnly = await prisma.waypoint.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends WaypointFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaypointFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Waypoint.
     * @param {WaypointCreateArgs} args - Arguments to create a Waypoint.
     * @example
     * // Create one Waypoint
     * const Waypoint = await prisma.waypoint.create({
     *   data: {
     *     // ... data to create a Waypoint
     *   }
     * })
     * 
    **/
    create<T extends WaypointCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WaypointCreateArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Waypoints.
     *     @param {WaypointCreateManyArgs} args - Arguments to create many Waypoints.
     *     @example
     *     // Create many Waypoints
     *     const waypoint = await prisma.waypoint.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WaypointCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaypointCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Waypoint.
     * @param {WaypointDeleteArgs} args - Arguments to delete one Waypoint.
     * @example
     * // Delete one Waypoint
     * const Waypoint = await prisma.waypoint.delete({
     *   where: {
     *     // ... filter to delete one Waypoint
     *   }
     * })
     * 
    **/
    delete<T extends WaypointDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WaypointDeleteArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Waypoint.
     * @param {WaypointUpdateArgs} args - Arguments to update one Waypoint.
     * @example
     * // Update one Waypoint
     * const waypoint = await prisma.waypoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WaypointUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WaypointUpdateArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Waypoints.
     * @param {WaypointDeleteManyArgs} args - Arguments to filter Waypoints to delete.
     * @example
     * // Delete a few Waypoints
     * const { count } = await prisma.waypoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WaypointDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaypointDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waypoints
     * const waypoint = await prisma.waypoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WaypointUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WaypointUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Waypoint.
     * @param {WaypointUpsertArgs} args - Arguments to update or create a Waypoint.
     * @example
     * // Update or create a Waypoint
     * const waypoint = await prisma.waypoint.upsert({
     *   create: {
     *     // ... data to create a Waypoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waypoint we want to update
     *   }
     * })
    **/
    upsert<T extends WaypointUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WaypointUpsertArgs<ExtArgs>>
    ): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Waypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointCountArgs} args - Arguments to filter Waypoints to count.
     * @example
     * // Count the number of Waypoints
     * const count = await prisma.waypoint.count({
     *   where: {
     *     // ... the filter for the Waypoints we want to count
     *   }
     * })
    **/
    count<T extends WaypointCountArgs>(
      args?: Subset<T, WaypointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaypointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaypointAggregateArgs>(args: Subset<T, WaypointAggregateArgs>): Prisma.PrismaPromise<GetWaypointAggregateType<T>>

    /**
     * Group by Waypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaypointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaypointGroupByArgs['orderBy'] }
        : { orderBy?: WaypointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaypointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaypointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waypoint model
   */
  readonly fields: WaypointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waypoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaypointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    steps<T extends Waypoint$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Waypoint$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Waypoint model
   */ 
  interface WaypointFieldRefs {
    readonly uuid: FieldRef<"Waypoint", 'String'>
    readonly placeType: FieldRef<"Waypoint", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Waypoint findUnique
   */
  export type WaypointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where: WaypointWhereUniqueInput
  }


  /**
   * Waypoint findUniqueOrThrow
   */
  export type WaypointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where: WaypointWhereUniqueInput
  }


  /**
   * Waypoint findFirst
   */
  export type WaypointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waypoints.
     */
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }


  /**
   * Waypoint findFirstOrThrow
   */
  export type WaypointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waypoints.
     */
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }


  /**
   * Waypoint findMany
   */
  export type WaypointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoints to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }


  /**
   * Waypoint create
   */
  export type WaypointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The data needed to create a Waypoint.
     */
    data?: XOR<WaypointCreateInput, WaypointUncheckedCreateInput>
  }


  /**
   * Waypoint createMany
   */
  export type WaypointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waypoints.
     */
    data: WaypointCreateManyInput | WaypointCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Waypoint update
   */
  export type WaypointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The data needed to update a Waypoint.
     */
    data: XOR<WaypointUpdateInput, WaypointUncheckedUpdateInput>
    /**
     * Choose, which Waypoint to update.
     */
    where: WaypointWhereUniqueInput
  }


  /**
   * Waypoint updateMany
   */
  export type WaypointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waypoints.
     */
    data: XOR<WaypointUpdateManyMutationInput, WaypointUncheckedUpdateManyInput>
    /**
     * Filter which Waypoints to update
     */
    where?: WaypointWhereInput
  }


  /**
   * Waypoint upsert
   */
  export type WaypointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The filter to search for the Waypoint to update in case it exists.
     */
    where: WaypointWhereUniqueInput
    /**
     * In case the Waypoint found by the `where` argument doesn't exist, create a new Waypoint with this data.
     */
    create: XOR<WaypointCreateInput, WaypointUncheckedCreateInput>
    /**
     * In case the Waypoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaypointUpdateInput, WaypointUncheckedUpdateInput>
  }


  /**
   * Waypoint delete
   */
  export type WaypointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter which Waypoint to delete.
     */
    where: WaypointWhereUniqueInput
  }


  /**
   * Waypoint deleteMany
   */
  export type WaypointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waypoints to delete
     */
    where?: WaypointWhereInput
  }


  /**
   * Waypoint.steps
   */
  export type Waypoint$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }


  /**
   * Waypoint without action
   */
  export type WaypointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaypointInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DecisionScalarFieldEnum: {
    uuid: 'uuid',
    stepInputUuid: 'stepInputUuid',
    stepOutputUuid: 'stepOutputUuid',
    title: 'title'
  };

  export type DecisionScalarFieldEnum = (typeof DecisionScalarFieldEnum)[keyof typeof DecisionScalarFieldEnum]


  export const StepScalarFieldEnum: {
    uuid: 'uuid',
    storyUuid: 'storyUuid',
    waypointUuid: 'waypointUuid',
    assetId: 'assetId',
    description: 'description',
    media: 'media',
    title: 'title',
    ending: 'ending'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    uuid: 'uuid',
    active: 'active',
    assetId: 'assetId',
    description: 'description',
    title: 'title'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const UserStoryScalarFieldEnum: {
    uuid: 'uuid',
    storyUuid: 'storyUuid',
    userUuid: 'userUuid',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    finishedAt: 'finishedAt'
  };

  export type UserStoryScalarFieldEnum = (typeof UserStoryScalarFieldEnum)[keyof typeof UserStoryScalarFieldEnum]


  export const UserStoryStepScalarFieldEnum: {
    userStoryUuid: 'userStoryUuid',
    stepUuid: 'stepUuid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    finishedAt: 'finishedAt',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type UserStoryStepScalarFieldEnum = (typeof UserStoryStepScalarFieldEnum)[keyof typeof UserStoryStepScalarFieldEnum]


  export const UserScalarFieldEnum: {
    uuid: 'uuid',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WaypointScalarFieldEnum: {
    uuid: 'uuid',
    placeType: 'placeType'
  };

  export type WaypointScalarFieldEnum = (typeof WaypointScalarFieldEnum)[keyof typeof WaypointScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Media'
   */
  export type EnumMediaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Media'>
    


  /**
   * Reference to a field of type 'Media[]'
   */
  export type ListEnumMediaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Media[]'>
    


  /**
   * Reference to a field of type 'Ending'
   */
  export type EnumEndingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Ending'>
    


  /**
   * Reference to a field of type 'Ending[]'
   */
  export type ListEnumEndingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Ending[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DecisionWhereInput = {
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    uuid?: StringFilter<"Decision"> | string
    stepInputUuid?: StringFilter<"Decision"> | string
    stepOutputUuid?: StringFilter<"Decision"> | string
    title?: StringFilter<"Decision"> | string
    decisionsDecisionsStepInputUuidToSteps?: XOR<StepRelationFilter, StepWhereInput>
    decisionsDecisionsStepOutputUuidToSteps?: XOR<StepRelationFilter, StepWhereInput>
  }

  export type DecisionOrderByWithRelationInput = {
    uuid?: SortOrder
    stepInputUuid?: SortOrder
    stepOutputUuid?: SortOrder
    title?: SortOrder
    decisionsDecisionsStepInputUuidToSteps?: StepOrderByWithRelationInput
    decisionsDecisionsStepOutputUuidToSteps?: StepOrderByWithRelationInput
  }

  export type DecisionWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    stepInputUuid?: StringFilter<"Decision"> | string
    stepOutputUuid?: StringFilter<"Decision"> | string
    title?: StringFilter<"Decision"> | string
    decisionsDecisionsStepInputUuidToSteps?: XOR<StepRelationFilter, StepWhereInput>
    decisionsDecisionsStepOutputUuidToSteps?: XOR<StepRelationFilter, StepWhereInput>
  }, "uuid">

  export type DecisionOrderByWithAggregationInput = {
    uuid?: SortOrder
    stepInputUuid?: SortOrder
    stepOutputUuid?: SortOrder
    title?: SortOrder
    _count?: DecisionCountOrderByAggregateInput
    _max?: DecisionMaxOrderByAggregateInput
    _min?: DecisionMinOrderByAggregateInput
  }

  export type DecisionScalarWhereWithAggregatesInput = {
    AND?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    OR?: DecisionScalarWhereWithAggregatesInput[]
    NOT?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Decision"> | string
    stepInputUuid?: StringWithAggregatesFilter<"Decision"> | string
    stepOutputUuid?: StringWithAggregatesFilter<"Decision"> | string
    title?: StringWithAggregatesFilter<"Decision"> | string
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    uuid?: StringFilter<"Step"> | string
    storyUuid?: StringFilter<"Step"> | string
    waypointUuid?: StringNullableFilter<"Step"> | string | null
    assetId?: StringNullableFilter<"Step"> | string | null
    description?: StringFilter<"Step"> | string
    media?: EnumMediaNullableFilter<"Step"> | $Enums.Media | null
    title?: StringFilter<"Step"> | string
    ending?: EnumEndingNullableFilter<"Step"> | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionListRelationFilter
    decisionsDecisionsStepOutputUuidToSteps?: DecisionListRelationFilter
    story?: XOR<StoryRelationFilter, StoryWhereInput>
    waypoint?: XOR<WaypointNullableRelationFilter, WaypointWhereInput> | null
    userStorySteps?: UserStoryStepListRelationFilter
  }

  export type StepOrderByWithRelationInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    waypointUuid?: SortOrderInput | SortOrder
    assetId?: SortOrderInput | SortOrder
    description?: SortOrder
    media?: SortOrderInput | SortOrder
    title?: SortOrder
    ending?: SortOrderInput | SortOrder
    decisionsDecisionsStepInputUuidToSteps?: DecisionOrderByRelationAggregateInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionOrderByRelationAggregateInput
    story?: StoryOrderByWithRelationInput
    waypoint?: WaypointOrderByWithRelationInput
    userStorySteps?: UserStoryStepOrderByRelationAggregateInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    storyUuid?: StringFilter<"Step"> | string
    waypointUuid?: StringNullableFilter<"Step"> | string | null
    assetId?: StringNullableFilter<"Step"> | string | null
    description?: StringFilter<"Step"> | string
    media?: EnumMediaNullableFilter<"Step"> | $Enums.Media | null
    title?: StringFilter<"Step"> | string
    ending?: EnumEndingNullableFilter<"Step"> | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionListRelationFilter
    decisionsDecisionsStepOutputUuidToSteps?: DecisionListRelationFilter
    story?: XOR<StoryRelationFilter, StoryWhereInput>
    waypoint?: XOR<WaypointNullableRelationFilter, WaypointWhereInput> | null
    userStorySteps?: UserStoryStepListRelationFilter
  }, "uuid">

  export type StepOrderByWithAggregationInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    waypointUuid?: SortOrderInput | SortOrder
    assetId?: SortOrderInput | SortOrder
    description?: SortOrder
    media?: SortOrderInput | SortOrder
    title?: SortOrder
    ending?: SortOrderInput | SortOrder
    _count?: StepCountOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Step"> | string
    storyUuid?: StringWithAggregatesFilter<"Step"> | string
    waypointUuid?: StringNullableWithAggregatesFilter<"Step"> | string | null
    assetId?: StringNullableWithAggregatesFilter<"Step"> | string | null
    description?: StringWithAggregatesFilter<"Step"> | string
    media?: EnumMediaNullableWithAggregatesFilter<"Step"> | $Enums.Media | null
    title?: StringWithAggregatesFilter<"Step"> | string
    ending?: EnumEndingNullableWithAggregatesFilter<"Step"> | $Enums.Ending | null
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    uuid?: StringFilter<"Story"> | string
    active?: BoolFilter<"Story"> | boolean
    assetId?: StringNullableFilter<"Story"> | string | null
    description?: StringFilter<"Story"> | string
    title?: StringFilter<"Story"> | string
    steps?: StepListRelationFilter
    userStories?: UserStoryListRelationFilter
  }

  export type StoryOrderByWithRelationInput = {
    uuid?: SortOrder
    active?: SortOrder
    assetId?: SortOrderInput | SortOrder
    description?: SortOrder
    title?: SortOrder
    steps?: StepOrderByRelationAggregateInput
    userStories?: UserStoryOrderByRelationAggregateInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    active?: BoolFilter<"Story"> | boolean
    assetId?: StringNullableFilter<"Story"> | string | null
    description?: StringFilter<"Story"> | string
    title?: StringFilter<"Story"> | string
    steps?: StepListRelationFilter
    userStories?: UserStoryListRelationFilter
  }, "uuid">

  export type StoryOrderByWithAggregationInput = {
    uuid?: SortOrder
    active?: SortOrder
    assetId?: SortOrderInput | SortOrder
    description?: SortOrder
    title?: SortOrder
    _count?: StoryCountOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Story"> | string
    active?: BoolWithAggregatesFilter<"Story"> | boolean
    assetId?: StringNullableWithAggregatesFilter<"Story"> | string | null
    description?: StringWithAggregatesFilter<"Story"> | string
    title?: StringWithAggregatesFilter<"Story"> | string
  }

  export type UserStoryWhereInput = {
    AND?: UserStoryWhereInput | UserStoryWhereInput[]
    OR?: UserStoryWhereInput[]
    NOT?: UserStoryWhereInput | UserStoryWhereInput[]
    uuid?: StringFilter<"UserStory"> | string
    storyUuid?: StringFilter<"UserStory"> | string
    userUuid?: StringFilter<"UserStory"> | string
    createdAt?: DateTimeFilter<"UserStory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserStory"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"UserStory"> | Date | string | null
    story?: XOR<StoryRelationFilter, StoryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    userStorySteps?: UserStoryStepListRelationFilter
  }

  export type UserStoryOrderByWithRelationInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    userUuid?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    story?: StoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    userStorySteps?: UserStoryStepOrderByRelationAggregateInput
  }

  export type UserStoryWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: UserStoryWhereInput | UserStoryWhereInput[]
    OR?: UserStoryWhereInput[]
    NOT?: UserStoryWhereInput | UserStoryWhereInput[]
    storyUuid?: StringFilter<"UserStory"> | string
    userUuid?: StringFilter<"UserStory"> | string
    createdAt?: DateTimeFilter<"UserStory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserStory"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"UserStory"> | Date | string | null
    story?: XOR<StoryRelationFilter, StoryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    userStorySteps?: UserStoryStepListRelationFilter
  }, "uuid">

  export type UserStoryOrderByWithAggregationInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    userUuid?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: UserStoryCountOrderByAggregateInput
    _max?: UserStoryMaxOrderByAggregateInput
    _min?: UserStoryMinOrderByAggregateInput
  }

  export type UserStoryScalarWhereWithAggregatesInput = {
    AND?: UserStoryScalarWhereWithAggregatesInput | UserStoryScalarWhereWithAggregatesInput[]
    OR?: UserStoryScalarWhereWithAggregatesInput[]
    NOT?: UserStoryScalarWhereWithAggregatesInput | UserStoryScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"UserStory"> | string
    storyUuid?: StringWithAggregatesFilter<"UserStory"> | string
    userUuid?: StringWithAggregatesFilter<"UserStory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserStory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserStory"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"UserStory"> | Date | string | null
  }

  export type UserStoryStepWhereInput = {
    AND?: UserStoryStepWhereInput | UserStoryStepWhereInput[]
    OR?: UserStoryStepWhereInput[]
    NOT?: UserStoryStepWhereInput | UserStoryStepWhereInput[]
    userStoryUuid?: StringFilter<"UserStoryStep"> | string
    stepUuid?: StringFilter<"UserStoryStep"> | string
    createdAt?: DateTimeFilter<"UserStoryStep"> | Date | string
    updatedAt?: DateTimeFilter<"UserStoryStep"> | Date | string
    finishedAt?: DateTimeNullableFilter<"UserStoryStep"> | Date | string | null
    latitude?: FloatFilter<"UserStoryStep"> | number
    longitude?: FloatFilter<"UserStoryStep"> | number
    step?: XOR<StepRelationFilter, StepWhereInput>
    userStory?: XOR<UserStoryRelationFilter, UserStoryWhereInput>
  }

  export type UserStoryStepOrderByWithRelationInput = {
    userStoryUuid?: SortOrder
    stepUuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    step?: StepOrderByWithRelationInput
    userStory?: UserStoryOrderByWithRelationInput
  }

  export type UserStoryStepWhereUniqueInput = Prisma.AtLeast<{
    userStoryUuid_stepUuid?: UserStoryStepUserStoryUuidStepUuidCompoundUniqueInput
    AND?: UserStoryStepWhereInput | UserStoryStepWhereInput[]
    OR?: UserStoryStepWhereInput[]
    NOT?: UserStoryStepWhereInput | UserStoryStepWhereInput[]
    userStoryUuid?: StringFilter<"UserStoryStep"> | string
    stepUuid?: StringFilter<"UserStoryStep"> | string
    createdAt?: DateTimeFilter<"UserStoryStep"> | Date | string
    updatedAt?: DateTimeFilter<"UserStoryStep"> | Date | string
    finishedAt?: DateTimeNullableFilter<"UserStoryStep"> | Date | string | null
    latitude?: FloatFilter<"UserStoryStep"> | number
    longitude?: FloatFilter<"UserStoryStep"> | number
    step?: XOR<StepRelationFilter, StepWhereInput>
    userStory?: XOR<UserStoryRelationFilter, UserStoryWhereInput>
  }, "userStoryUuid_stepUuid">

  export type UserStoryStepOrderByWithAggregationInput = {
    userStoryUuid?: SortOrder
    stepUuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: UserStoryStepCountOrderByAggregateInput
    _avg?: UserStoryStepAvgOrderByAggregateInput
    _max?: UserStoryStepMaxOrderByAggregateInput
    _min?: UserStoryStepMinOrderByAggregateInput
    _sum?: UserStoryStepSumOrderByAggregateInput
  }

  export type UserStoryStepScalarWhereWithAggregatesInput = {
    AND?: UserStoryStepScalarWhereWithAggregatesInput | UserStoryStepScalarWhereWithAggregatesInput[]
    OR?: UserStoryStepScalarWhereWithAggregatesInput[]
    NOT?: UserStoryStepScalarWhereWithAggregatesInput | UserStoryStepScalarWhereWithAggregatesInput[]
    userStoryUuid?: StringWithAggregatesFilter<"UserStoryStep"> | string
    stepUuid?: StringWithAggregatesFilter<"UserStoryStep"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserStoryStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStoryStep"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"UserStoryStep"> | Date | string | null
    latitude?: FloatWithAggregatesFilter<"UserStoryStep"> | number
    longitude?: FloatWithAggregatesFilter<"UserStoryStep"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uuid?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    userStories?: UserStoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uuid?: SortOrder
    email?: SortOrderInput | SortOrder
    userStories?: UserStoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    userStories?: UserStoryListRelationFilter
  }, "uuid">

  export type UserOrderByWithAggregationInput = {
    uuid?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type WaypointWhereInput = {
    AND?: WaypointWhereInput | WaypointWhereInput[]
    OR?: WaypointWhereInput[]
    NOT?: WaypointWhereInput | WaypointWhereInput[]
    uuid?: StringFilter<"Waypoint"> | string
    placeType?: StringNullableFilter<"Waypoint"> | string | null
    steps?: StepListRelationFilter
  }

  export type WaypointOrderByWithRelationInput = {
    uuid?: SortOrder
    placeType?: SortOrderInput | SortOrder
    steps?: StepOrderByRelationAggregateInput
  }

  export type WaypointWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: WaypointWhereInput | WaypointWhereInput[]
    OR?: WaypointWhereInput[]
    NOT?: WaypointWhereInput | WaypointWhereInput[]
    placeType?: StringNullableFilter<"Waypoint"> | string | null
    steps?: StepListRelationFilter
  }, "uuid">

  export type WaypointOrderByWithAggregationInput = {
    uuid?: SortOrder
    placeType?: SortOrderInput | SortOrder
    _count?: WaypointCountOrderByAggregateInput
    _max?: WaypointMaxOrderByAggregateInput
    _min?: WaypointMinOrderByAggregateInput
  }

  export type WaypointScalarWhereWithAggregatesInput = {
    AND?: WaypointScalarWhereWithAggregatesInput | WaypointScalarWhereWithAggregatesInput[]
    OR?: WaypointScalarWhereWithAggregatesInput[]
    NOT?: WaypointScalarWhereWithAggregatesInput | WaypointScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Waypoint"> | string
    placeType?: StringNullableWithAggregatesFilter<"Waypoint"> | string | null
  }

  export type DecisionCreateInput = {
    uuid?: string
    title: string
    decisionsDecisionsStepInputUuidToSteps: StepCreateNestedOneWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps: StepCreateNestedOneWithoutDecisionsDecisionsStepOutputUuidToStepsInput
  }

  export type DecisionUncheckedCreateInput = {
    uuid?: string
    stepInputUuid: string
    stepOutputUuid: string
    title: string
  }

  export type DecisionUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    decisionsDecisionsStepInputUuidToSteps?: StepUpdateOneRequiredWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: StepUpdateOneRequiredWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
  }

  export type DecisionUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    stepInputUuid?: StringFieldUpdateOperationsInput | string
    stepOutputUuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionCreateManyInput = {
    uuid?: string
    stepInputUuid: string
    stepOutputUuid: string
    title: string
  }

  export type DecisionUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    stepInputUuid?: StringFieldUpdateOperationsInput | string
    stepOutputUuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type StepCreateInput = {
    uuid?: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    story: StoryCreateNestedOneWithoutStepsInput
    waypoint?: WaypointCreateNestedOneWithoutStepsInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateInput = {
    uuid?: string
    storyUuid: string
    waypointUuid?: string | null
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    story?: StoryUpdateOneRequiredWithoutStepsNestedInput
    waypoint?: WaypointUpdateOneWithoutStepsNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    waypointUuid?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepCreateManyInput = {
    uuid?: string
    storyUuid: string
    waypointUuid?: string | null
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
  }

  export type StepUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
  }

  export type StepUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    waypointUuid?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
  }

  export type StoryCreateInput = {
    uuid?: string
    active?: boolean
    assetId?: string | null
    description: string
    title: string
    steps?: StepCreateNestedManyWithoutStoryInput
    userStories?: UserStoryCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateInput = {
    uuid?: string
    active?: boolean
    assetId?: string | null
    description: string
    title: string
    steps?: StepUncheckedCreateNestedManyWithoutStoryInput
    userStories?: UserStoryUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    steps?: StepUpdateManyWithoutStoryNestedInput
    userStories?: UserStoryUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    steps?: StepUncheckedUpdateManyWithoutStoryNestedInput
    userStories?: UserStoryUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateManyInput = {
    uuid?: string
    active?: boolean
    assetId?: string | null
    description: string
    title: string
  }

  export type StoryUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type StoryUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UserStoryCreateInput = {
    uuid?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
    story: StoryCreateNestedOneWithoutUserStoriesInput
    user: UserCreateNestedOneWithoutUserStoriesInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutUserStoryInput
  }

  export type UserStoryUncheckedCreateInput = {
    uuid?: string
    storyUuid: string
    userUuid: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutUserStoryInput
  }

  export type UserStoryUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    story?: StoryUpdateOneRequiredWithoutUserStoriesNestedInput
    user?: UserUpdateOneRequiredWithoutUserStoriesNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutUserStoryNestedInput
  }

  export type UserStoryUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    userUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutUserStoryNestedInput
  }

  export type UserStoryCreateManyInput = {
    uuid?: string
    storyUuid: string
    userUuid: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
  }

  export type UserStoryUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStoryUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    userUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStoryStepCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
    step: StepCreateNestedOneWithoutUserStoryStepsInput
    userStory: UserStoryCreateNestedOneWithoutUserStoryStepsInput
  }

  export type UserStoryStepUncheckedCreateInput = {
    userStoryUuid: string
    stepUuid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
  }

  export type UserStoryStepUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    step?: StepUpdateOneRequiredWithoutUserStoryStepsNestedInput
    userStory?: UserStoryUpdateOneRequiredWithoutUserStoryStepsNestedInput
  }

  export type UserStoryStepUncheckedUpdateInput = {
    userStoryUuid?: StringFieldUpdateOperationsInput | string
    stepUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type UserStoryStepCreateManyInput = {
    userStoryUuid: string
    stepUuid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
  }

  export type UserStoryStepUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type UserStoryStepUncheckedUpdateManyInput = {
    userStoryUuid?: StringFieldUpdateOperationsInput | string
    stepUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    uuid?: string
    email?: string | null
    userStories?: UserStoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uuid?: string
    email?: string | null
    userStories?: UserStoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    userStories?: UserStoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    userStories?: UserStoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uuid?: string
    email?: string | null
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaypointCreateInput = {
    uuid?: string
    placeType?: string | null
    steps?: StepCreateNestedManyWithoutWaypointInput
  }

  export type WaypointUncheckedCreateInput = {
    uuid?: string
    placeType?: string | null
    steps?: StepUncheckedCreateNestedManyWithoutWaypointInput
  }

  export type WaypointUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    placeType?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: StepUpdateManyWithoutWaypointNestedInput
  }

  export type WaypointUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    placeType?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: StepUncheckedUpdateManyWithoutWaypointNestedInput
  }

  export type WaypointCreateManyInput = {
    uuid?: string
    placeType?: string | null
  }

  export type WaypointUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    placeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaypointUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    placeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StepRelationFilter = {
    is?: StepWhereInput
    isNot?: StepWhereInput
  }

  export type DecisionCountOrderByAggregateInput = {
    uuid?: SortOrder
    stepInputUuid?: SortOrder
    stepOutputUuid?: SortOrder
    title?: SortOrder
  }

  export type DecisionMaxOrderByAggregateInput = {
    uuid?: SortOrder
    stepInputUuid?: SortOrder
    stepOutputUuid?: SortOrder
    title?: SortOrder
  }

  export type DecisionMinOrderByAggregateInput = {
    uuid?: SortOrder
    stepInputUuid?: SortOrder
    stepOutputUuid?: SortOrder
    title?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumMediaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Media | EnumMediaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNullableFilter<$PrismaModel> | $Enums.Media | null
  }

  export type EnumEndingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Ending | EnumEndingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEndingNullableFilter<$PrismaModel> | $Enums.Ending | null
  }

  export type DecisionListRelationFilter = {
    every?: DecisionWhereInput
    some?: DecisionWhereInput
    none?: DecisionWhereInput
  }

  export type StoryRelationFilter = {
    is?: StoryWhereInput
    isNot?: StoryWhereInput
  }

  export type WaypointNullableRelationFilter = {
    is?: WaypointWhereInput | null
    isNot?: WaypointWhereInput | null
  }

  export type UserStoryStepListRelationFilter = {
    every?: UserStoryStepWhereInput
    some?: UserStoryStepWhereInput
    none?: UserStoryStepWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DecisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStoryStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepCountOrderByAggregateInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    waypointUuid?: SortOrder
    assetId?: SortOrder
    description?: SortOrder
    media?: SortOrder
    title?: SortOrder
    ending?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    waypointUuid?: SortOrder
    assetId?: SortOrder
    description?: SortOrder
    media?: SortOrder
    title?: SortOrder
    ending?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    waypointUuid?: SortOrder
    assetId?: SortOrder
    description?: SortOrder
    media?: SortOrder
    title?: SortOrder
    ending?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumMediaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Media | EnumMediaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNullableWithAggregatesFilter<$PrismaModel> | $Enums.Media | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMediaNullableFilter<$PrismaModel>
    _max?: NestedEnumMediaNullableFilter<$PrismaModel>
  }

  export type EnumEndingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Ending | EnumEndingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEndingNullableWithAggregatesFilter<$PrismaModel> | $Enums.Ending | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEndingNullableFilter<$PrismaModel>
    _max?: NestedEnumEndingNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type UserStoryListRelationFilter = {
    every?: UserStoryWhereInput
    some?: UserStoryWhereInput
    none?: UserStoryWhereInput
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryCountOrderByAggregateInput = {
    uuid?: SortOrder
    active?: SortOrder
    assetId?: SortOrder
    description?: SortOrder
    title?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    uuid?: SortOrder
    active?: SortOrder
    assetId?: SortOrder
    description?: SortOrder
    title?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    uuid?: SortOrder
    active?: SortOrder
    assetId?: SortOrder
    description?: SortOrder
    title?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserStoryCountOrderByAggregateInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    userUuid?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type UserStoryMaxOrderByAggregateInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    userUuid?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type UserStoryMinOrderByAggregateInput = {
    uuid?: SortOrder
    storyUuid?: SortOrder
    userUuid?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserStoryRelationFilter = {
    is?: UserStoryWhereInput
    isNot?: UserStoryWhereInput
  }

  export type UserStoryStepUserStoryUuidStepUuidCompoundUniqueInput = {
    userStoryUuid: string
    stepUuid: string
  }

  export type UserStoryStepCountOrderByAggregateInput = {
    userStoryUuid?: SortOrder
    stepUuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    finishedAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserStoryStepAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserStoryStepMaxOrderByAggregateInput = {
    userStoryUuid?: SortOrder
    stepUuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    finishedAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserStoryStepMinOrderByAggregateInput = {
    userStoryUuid?: SortOrder
    stepUuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    finishedAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserStoryStepSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uuid?: SortOrder
    email?: SortOrder
  }

  export type WaypointCountOrderByAggregateInput = {
    uuid?: SortOrder
    placeType?: SortOrder
  }

  export type WaypointMaxOrderByAggregateInput = {
    uuid?: SortOrder
    placeType?: SortOrder
  }

  export type WaypointMinOrderByAggregateInput = {
    uuid?: SortOrder
    placeType?: SortOrder
  }

  export type StepCreateNestedOneWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    create?: XOR<StepCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
    connectOrCreate?: StepCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput
    connect?: StepWhereUniqueInput
  }

  export type StepCreateNestedOneWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    create?: XOR<StepCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
    connectOrCreate?: StepCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    connect?: StepWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type StepUpdateOneRequiredWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput = {
    create?: XOR<StepCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
    connectOrCreate?: StepCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput
    upsert?: StepUpsertWithoutDecisionsDecisionsStepInputUuidToStepsInput
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutDecisionsDecisionsStepInputUuidToStepsInput, StepUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput>, StepUncheckedUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
  }

  export type StepUpdateOneRequiredWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput = {
    create?: XOR<StepCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
    connectOrCreate?: StepCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    upsert?: StepUpsertWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutDecisionsDecisionsStepOutputUuidToStepsInput, StepUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>, StepUncheckedUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
  }

  export type DecisionCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type DecisionCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type StoryCreateNestedOneWithoutStepsInput = {
    create?: XOR<StoryCreateWithoutStepsInput, StoryUncheckedCreateWithoutStepsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutStepsInput
    connect?: StoryWhereUniqueInput
  }

  export type WaypointCreateNestedOneWithoutStepsInput = {
    create?: XOR<WaypointCreateWithoutStepsInput, WaypointUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WaypointCreateOrConnectWithoutStepsInput
    connect?: WaypointWhereUniqueInput
  }

  export type UserStoryStepCreateNestedManyWithoutStepInput = {
    create?: XOR<UserStoryStepCreateWithoutStepInput, UserStoryStepUncheckedCreateWithoutStepInput> | UserStoryStepCreateWithoutStepInput[] | UserStoryStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutStepInput | UserStoryStepCreateOrConnectWithoutStepInput[]
    createMany?: UserStoryStepCreateManyStepInputEnvelope
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
  }

  export type DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type UserStoryStepUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<UserStoryStepCreateWithoutStepInput, UserStoryStepUncheckedCreateWithoutStepInput> | UserStoryStepCreateWithoutStepInput[] | UserStoryStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutStepInput | UserStoryStepCreateOrConnectWithoutStepInput[]
    createMany?: UserStoryStepCreateManyStepInputEnvelope
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumMediaFieldUpdateOperationsInput = {
    set?: $Enums.Media | null
  }

  export type NullableEnumEndingFieldUpdateOperationsInput = {
    set?: $Enums.Ending | null
  }

  export type DecisionUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type DecisionUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type StoryUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<StoryCreateWithoutStepsInput, StoryUncheckedCreateWithoutStepsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutStepsInput
    upsert?: StoryUpsertWithoutStepsInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutStepsInput, StoryUpdateWithoutStepsInput>, StoryUncheckedUpdateWithoutStepsInput>
  }

  export type WaypointUpdateOneWithoutStepsNestedInput = {
    create?: XOR<WaypointCreateWithoutStepsInput, WaypointUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WaypointCreateOrConnectWithoutStepsInput
    upsert?: WaypointUpsertWithoutStepsInput
    disconnect?: WaypointWhereInput | boolean
    delete?: WaypointWhereInput | boolean
    connect?: WaypointWhereUniqueInput
    update?: XOR<XOR<WaypointUpdateToOneWithWhereWithoutStepsInput, WaypointUpdateWithoutStepsInput>, WaypointUncheckedUpdateWithoutStepsInput>
  }

  export type UserStoryStepUpdateManyWithoutStepNestedInput = {
    create?: XOR<UserStoryStepCreateWithoutStepInput, UserStoryStepUncheckedCreateWithoutStepInput> | UserStoryStepCreateWithoutStepInput[] | UserStoryStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutStepInput | UserStoryStepCreateOrConnectWithoutStepInput[]
    upsert?: UserStoryStepUpsertWithWhereUniqueWithoutStepInput | UserStoryStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: UserStoryStepCreateManyStepInputEnvelope
    set?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    disconnect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    delete?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    update?: UserStoryStepUpdateWithWhereUniqueWithoutStepInput | UserStoryStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: UserStoryStepUpdateManyWithWhereWithoutStepInput | UserStoryStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: UserStoryStepScalarWhereInput | UserStoryStepScalarWhereInput[]
  }

  export type DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepInputUuidToStepsInput | DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepInputUuidToStepsInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput = {
    create?: XOR<DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput> | DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[] | DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    createMany?: DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepOutputUuidToStepsInput | DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepOutputUuidToStepsInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type UserStoryStepUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<UserStoryStepCreateWithoutStepInput, UserStoryStepUncheckedCreateWithoutStepInput> | UserStoryStepCreateWithoutStepInput[] | UserStoryStepUncheckedCreateWithoutStepInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutStepInput | UserStoryStepCreateOrConnectWithoutStepInput[]
    upsert?: UserStoryStepUpsertWithWhereUniqueWithoutStepInput | UserStoryStepUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: UserStoryStepCreateManyStepInputEnvelope
    set?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    disconnect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    delete?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    update?: UserStoryStepUpdateWithWhereUniqueWithoutStepInput | UserStoryStepUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: UserStoryStepUpdateManyWithWhereWithoutStepInput | UserStoryStepUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: UserStoryStepScalarWhereInput | UserStoryStepScalarWhereInput[]
  }

  export type StepCreateNestedManyWithoutStoryInput = {
    create?: XOR<StepCreateWithoutStoryInput, StepUncheckedCreateWithoutStoryInput> | StepCreateWithoutStoryInput[] | StepUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StepCreateOrConnectWithoutStoryInput | StepCreateOrConnectWithoutStoryInput[]
    createMany?: StepCreateManyStoryInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type UserStoryCreateNestedManyWithoutStoryInput = {
    create?: XOR<UserStoryCreateWithoutStoryInput, UserStoryUncheckedCreateWithoutStoryInput> | UserStoryCreateWithoutStoryInput[] | UserStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutStoryInput | UserStoryCreateOrConnectWithoutStoryInput[]
    createMany?: UserStoryCreateManyStoryInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StepCreateWithoutStoryInput, StepUncheckedCreateWithoutStoryInput> | StepCreateWithoutStoryInput[] | StepUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StepCreateOrConnectWithoutStoryInput | StepCreateOrConnectWithoutStoryInput[]
    createMany?: StepCreateManyStoryInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type UserStoryUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<UserStoryCreateWithoutStoryInput, UserStoryUncheckedCreateWithoutStoryInput> | UserStoryCreateWithoutStoryInput[] | UserStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutStoryInput | UserStoryCreateOrConnectWithoutStoryInput[]
    createMany?: UserStoryCreateManyStoryInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StepUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StepCreateWithoutStoryInput, StepUncheckedCreateWithoutStoryInput> | StepCreateWithoutStoryInput[] | StepUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StepCreateOrConnectWithoutStoryInput | StepCreateOrConnectWithoutStoryInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutStoryInput | StepUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StepCreateManyStoryInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutStoryInput | StepUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StepUpdateManyWithWhereWithoutStoryInput | StepUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type UserStoryUpdateManyWithoutStoryNestedInput = {
    create?: XOR<UserStoryCreateWithoutStoryInput, UserStoryUncheckedCreateWithoutStoryInput> | UserStoryCreateWithoutStoryInput[] | UserStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutStoryInput | UserStoryCreateOrConnectWithoutStoryInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutStoryInput | UserStoryUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: UserStoryCreateManyStoryInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutStoryInput | UserStoryUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutStoryInput | UserStoryUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StepCreateWithoutStoryInput, StepUncheckedCreateWithoutStoryInput> | StepCreateWithoutStoryInput[] | StepUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StepCreateOrConnectWithoutStoryInput | StepCreateOrConnectWithoutStoryInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutStoryInput | StepUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StepCreateManyStoryInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutStoryInput | StepUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StepUpdateManyWithWhereWithoutStoryInput | StepUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type UserStoryUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<UserStoryCreateWithoutStoryInput, UserStoryUncheckedCreateWithoutStoryInput> | UserStoryCreateWithoutStoryInput[] | UserStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutStoryInput | UserStoryCreateOrConnectWithoutStoryInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutStoryInput | UserStoryUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: UserStoryCreateManyStoryInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutStoryInput | UserStoryUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutStoryInput | UserStoryUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type StoryCreateNestedOneWithoutUserStoriesInput = {
    create?: XOR<StoryCreateWithoutUserStoriesInput, StoryUncheckedCreateWithoutUserStoriesInput>
    connectOrCreate?: StoryCreateOrConnectWithoutUserStoriesInput
    connect?: StoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserStoriesInput = {
    create?: XOR<UserCreateWithoutUserStoriesInput, UserUncheckedCreateWithoutUserStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserStoryStepCreateNestedManyWithoutUserStoryInput = {
    create?: XOR<UserStoryStepCreateWithoutUserStoryInput, UserStoryStepUncheckedCreateWithoutUserStoryInput> | UserStoryStepCreateWithoutUserStoryInput[] | UserStoryStepUncheckedCreateWithoutUserStoryInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutUserStoryInput | UserStoryStepCreateOrConnectWithoutUserStoryInput[]
    createMany?: UserStoryStepCreateManyUserStoryInputEnvelope
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
  }

  export type UserStoryStepUncheckedCreateNestedManyWithoutUserStoryInput = {
    create?: XOR<UserStoryStepCreateWithoutUserStoryInput, UserStoryStepUncheckedCreateWithoutUserStoryInput> | UserStoryStepCreateWithoutUserStoryInput[] | UserStoryStepUncheckedCreateWithoutUserStoryInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutUserStoryInput | UserStoryStepCreateOrConnectWithoutUserStoryInput[]
    createMany?: UserStoryStepCreateManyUserStoryInputEnvelope
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StoryUpdateOneRequiredWithoutUserStoriesNestedInput = {
    create?: XOR<StoryCreateWithoutUserStoriesInput, StoryUncheckedCreateWithoutUserStoriesInput>
    connectOrCreate?: StoryCreateOrConnectWithoutUserStoriesInput
    upsert?: StoryUpsertWithoutUserStoriesInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutUserStoriesInput, StoryUpdateWithoutUserStoriesInput>, StoryUncheckedUpdateWithoutUserStoriesInput>
  }

  export type UserUpdateOneRequiredWithoutUserStoriesNestedInput = {
    create?: XOR<UserCreateWithoutUserStoriesInput, UserUncheckedCreateWithoutUserStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStoriesInput
    upsert?: UserUpsertWithoutUserStoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStoriesInput, UserUpdateWithoutUserStoriesInput>, UserUncheckedUpdateWithoutUserStoriesInput>
  }

  export type UserStoryStepUpdateManyWithoutUserStoryNestedInput = {
    create?: XOR<UserStoryStepCreateWithoutUserStoryInput, UserStoryStepUncheckedCreateWithoutUserStoryInput> | UserStoryStepCreateWithoutUserStoryInput[] | UserStoryStepUncheckedCreateWithoutUserStoryInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutUserStoryInput | UserStoryStepCreateOrConnectWithoutUserStoryInput[]
    upsert?: UserStoryStepUpsertWithWhereUniqueWithoutUserStoryInput | UserStoryStepUpsertWithWhereUniqueWithoutUserStoryInput[]
    createMany?: UserStoryStepCreateManyUserStoryInputEnvelope
    set?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    disconnect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    delete?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    update?: UserStoryStepUpdateWithWhereUniqueWithoutUserStoryInput | UserStoryStepUpdateWithWhereUniqueWithoutUserStoryInput[]
    updateMany?: UserStoryStepUpdateManyWithWhereWithoutUserStoryInput | UserStoryStepUpdateManyWithWhereWithoutUserStoryInput[]
    deleteMany?: UserStoryStepScalarWhereInput | UserStoryStepScalarWhereInput[]
  }

  export type UserStoryStepUncheckedUpdateManyWithoutUserStoryNestedInput = {
    create?: XOR<UserStoryStepCreateWithoutUserStoryInput, UserStoryStepUncheckedCreateWithoutUserStoryInput> | UserStoryStepCreateWithoutUserStoryInput[] | UserStoryStepUncheckedCreateWithoutUserStoryInput[]
    connectOrCreate?: UserStoryStepCreateOrConnectWithoutUserStoryInput | UserStoryStepCreateOrConnectWithoutUserStoryInput[]
    upsert?: UserStoryStepUpsertWithWhereUniqueWithoutUserStoryInput | UserStoryStepUpsertWithWhereUniqueWithoutUserStoryInput[]
    createMany?: UserStoryStepCreateManyUserStoryInputEnvelope
    set?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    disconnect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    delete?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    connect?: UserStoryStepWhereUniqueInput | UserStoryStepWhereUniqueInput[]
    update?: UserStoryStepUpdateWithWhereUniqueWithoutUserStoryInput | UserStoryStepUpdateWithWhereUniqueWithoutUserStoryInput[]
    updateMany?: UserStoryStepUpdateManyWithWhereWithoutUserStoryInput | UserStoryStepUpdateManyWithWhereWithoutUserStoryInput[]
    deleteMany?: UserStoryStepScalarWhereInput | UserStoryStepScalarWhereInput[]
  }

  export type StepCreateNestedOneWithoutUserStoryStepsInput = {
    create?: XOR<StepCreateWithoutUserStoryStepsInput, StepUncheckedCreateWithoutUserStoryStepsInput>
    connectOrCreate?: StepCreateOrConnectWithoutUserStoryStepsInput
    connect?: StepWhereUniqueInput
  }

  export type UserStoryCreateNestedOneWithoutUserStoryStepsInput = {
    create?: XOR<UserStoryCreateWithoutUserStoryStepsInput, UserStoryUncheckedCreateWithoutUserStoryStepsInput>
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserStoryStepsInput
    connect?: UserStoryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StepUpdateOneRequiredWithoutUserStoryStepsNestedInput = {
    create?: XOR<StepCreateWithoutUserStoryStepsInput, StepUncheckedCreateWithoutUserStoryStepsInput>
    connectOrCreate?: StepCreateOrConnectWithoutUserStoryStepsInput
    upsert?: StepUpsertWithoutUserStoryStepsInput
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutUserStoryStepsInput, StepUpdateWithoutUserStoryStepsInput>, StepUncheckedUpdateWithoutUserStoryStepsInput>
  }

  export type UserStoryUpdateOneRequiredWithoutUserStoryStepsNestedInput = {
    create?: XOR<UserStoryCreateWithoutUserStoryStepsInput, UserStoryUncheckedCreateWithoutUserStoryStepsInput>
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserStoryStepsInput
    upsert?: UserStoryUpsertWithoutUserStoryStepsInput
    connect?: UserStoryWhereUniqueInput
    update?: XOR<XOR<UserStoryUpdateToOneWithWhereWithoutUserStoryStepsInput, UserStoryUpdateWithoutUserStoryStepsInput>, UserStoryUncheckedUpdateWithoutUserStoryStepsInput>
  }

  export type UserStoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type UserStoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
  }

  export type UserStoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutUserInput | UserStoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutUserInput | UserStoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutUserInput | UserStoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type UserStoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput> | UserStoryCreateWithoutUserInput[] | UserStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoryCreateOrConnectWithoutUserInput | UserStoryCreateOrConnectWithoutUserInput[]
    upsert?: UserStoryUpsertWithWhereUniqueWithoutUserInput | UserStoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoryCreateManyUserInputEnvelope
    set?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    disconnect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    delete?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    connect?: UserStoryWhereUniqueInput | UserStoryWhereUniqueInput[]
    update?: UserStoryUpdateWithWhereUniqueWithoutUserInput | UserStoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoryUpdateManyWithWhereWithoutUserInput | UserStoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
  }

  export type StepCreateNestedManyWithoutWaypointInput = {
    create?: XOR<StepCreateWithoutWaypointInput, StepUncheckedCreateWithoutWaypointInput> | StepCreateWithoutWaypointInput[] | StepUncheckedCreateWithoutWaypointInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWaypointInput | StepCreateOrConnectWithoutWaypointInput[]
    createMany?: StepCreateManyWaypointInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutWaypointInput = {
    create?: XOR<StepCreateWithoutWaypointInput, StepUncheckedCreateWithoutWaypointInput> | StepCreateWithoutWaypointInput[] | StepUncheckedCreateWithoutWaypointInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWaypointInput | StepCreateOrConnectWithoutWaypointInput[]
    createMany?: StepCreateManyWaypointInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type StepUpdateManyWithoutWaypointNestedInput = {
    create?: XOR<StepCreateWithoutWaypointInput, StepUncheckedCreateWithoutWaypointInput> | StepCreateWithoutWaypointInput[] | StepUncheckedCreateWithoutWaypointInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWaypointInput | StepCreateOrConnectWithoutWaypointInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutWaypointInput | StepUpsertWithWhereUniqueWithoutWaypointInput[]
    createMany?: StepCreateManyWaypointInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutWaypointInput | StepUpdateWithWhereUniqueWithoutWaypointInput[]
    updateMany?: StepUpdateManyWithWhereWithoutWaypointInput | StepUpdateManyWithWhereWithoutWaypointInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutWaypointNestedInput = {
    create?: XOR<StepCreateWithoutWaypointInput, StepUncheckedCreateWithoutWaypointInput> | StepCreateWithoutWaypointInput[] | StepUncheckedCreateWithoutWaypointInput[]
    connectOrCreate?: StepCreateOrConnectWithoutWaypointInput | StepCreateOrConnectWithoutWaypointInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutWaypointInput | StepUpsertWithWhereUniqueWithoutWaypointInput[]
    createMany?: StepCreateManyWaypointInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutWaypointInput | StepUpdateWithWhereUniqueWithoutWaypointInput[]
    updateMany?: StepUpdateManyWithWhereWithoutWaypointInput | StepUpdateManyWithWhereWithoutWaypointInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMediaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Media | EnumMediaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNullableFilter<$PrismaModel> | $Enums.Media | null
  }

  export type NestedEnumEndingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Ending | EnumEndingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEndingNullableFilter<$PrismaModel> | $Enums.Ending | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMediaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Media | EnumMediaFieldRefInput<$PrismaModel> | null
    in?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Media[] | ListEnumMediaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNullableWithAggregatesFilter<$PrismaModel> | $Enums.Media | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMediaNullableFilter<$PrismaModel>
    _max?: NestedEnumMediaNullableFilter<$PrismaModel>
  }

  export type NestedEnumEndingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Ending | EnumEndingFieldRefInput<$PrismaModel> | null
    in?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Ending[] | ListEnumEndingFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEndingNullableWithAggregatesFilter<$PrismaModel> | $Enums.Ending | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEndingNullableFilter<$PrismaModel>
    _max?: NestedEnumEndingNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StepCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepOutputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    story: StoryCreateNestedOneWithoutStepsInput
    waypoint?: WaypointCreateNestedOneWithoutStepsInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: string
    storyUuid: string
    waypointUuid?: string | null
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
  }

  export type StepCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    story: StoryCreateNestedOneWithoutStepsInput
    waypoint?: WaypointCreateNestedOneWithoutStepsInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: string
    storyUuid: string
    waypointUuid?: string | null
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
  }

  export type StepUpsertWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    update: XOR<StepUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput, StepUncheckedUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
    create: XOR<StepCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput, StepUncheckedUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
  }

  export type StepUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    story?: StoryUpdateOneRequiredWithoutStepsNestedInput
    waypoint?: WaypointUpdateOneWithoutStepsNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    waypointUuid?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepUpsertWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    update: XOR<StepUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, StepUncheckedUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
    create: XOR<StepCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, StepUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, StepUncheckedUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
  }

  export type StepUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    story?: StoryUpdateOneRequiredWithoutStepsNestedInput
    waypoint?: WaypointUpdateOneWithoutStepsNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    waypointUuid?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: string
    title: string
    decisionsDecisionsStepOutputUuidToSteps: StepCreateNestedOneWithoutDecisionsDecisionsStepOutputUuidToStepsInput
  }

  export type DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: string
    stepOutputUuid: string
    title: string
  }

  export type DecisionCreateOrConnectWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    where: DecisionWhereUniqueInput
    create: XOR<DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
  }

  export type DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInputEnvelope = {
    data: DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInput | DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInput[]
    skipDuplicates?: boolean
  }

  export type DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: string
    title: string
    decisionsDecisionsStepInputUuidToSteps: StepCreateNestedOneWithoutDecisionsDecisionsStepInputUuidToStepsInput
  }

  export type DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: string
    stepInputUuid: string
    title: string
  }

  export type DecisionCreateOrConnectWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    where: DecisionWhereUniqueInput
    create: XOR<DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
  }

  export type DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInputEnvelope = {
    data: DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInput | DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInput[]
    skipDuplicates?: boolean
  }

  export type StoryCreateWithoutStepsInput = {
    uuid?: string
    active?: boolean
    assetId?: string | null
    description: string
    title: string
    userStories?: UserStoryCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutStepsInput = {
    uuid?: string
    active?: boolean
    assetId?: string | null
    description: string
    title: string
    userStories?: UserStoryUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutStepsInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutStepsInput, StoryUncheckedCreateWithoutStepsInput>
  }

  export type WaypointCreateWithoutStepsInput = {
    uuid?: string
    placeType?: string | null
  }

  export type WaypointUncheckedCreateWithoutStepsInput = {
    uuid?: string
    placeType?: string | null
  }

  export type WaypointCreateOrConnectWithoutStepsInput = {
    where: WaypointWhereUniqueInput
    create: XOR<WaypointCreateWithoutStepsInput, WaypointUncheckedCreateWithoutStepsInput>
  }

  export type UserStoryStepCreateWithoutStepInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
    userStory: UserStoryCreateNestedOneWithoutUserStoryStepsInput
  }

  export type UserStoryStepUncheckedCreateWithoutStepInput = {
    userStoryUuid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
  }

  export type UserStoryStepCreateOrConnectWithoutStepInput = {
    where: UserStoryStepWhereUniqueInput
    create: XOR<UserStoryStepCreateWithoutStepInput, UserStoryStepUncheckedCreateWithoutStepInput>
  }

  export type UserStoryStepCreateManyStepInputEnvelope = {
    data: UserStoryStepCreateManyStepInput | UserStoryStepCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    where: DecisionWhereUniqueInput
    update: XOR<DecisionUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
    create: XOR<DecisionCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
  }

  export type DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    where: DecisionWhereUniqueInput
    data: XOR<DecisionUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput, DecisionUncheckedUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput>
  }

  export type DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    where: DecisionScalarWhereInput
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsInput>
  }

  export type DecisionScalarWhereInput = {
    AND?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    OR?: DecisionScalarWhereInput[]
    NOT?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    uuid?: StringFilter<"Decision"> | string
    stepInputUuid?: StringFilter<"Decision"> | string
    stepOutputUuid?: StringFilter<"Decision"> | string
    title?: StringFilter<"Decision"> | string
  }

  export type DecisionUpsertWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    where: DecisionWhereUniqueInput
    update: XOR<DecisionUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
    create: XOR<DecisionCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedCreateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
  }

  export type DecisionUpdateWithWhereUniqueWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    where: DecisionWhereUniqueInput
    data: XOR<DecisionUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput, DecisionUncheckedUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
  }

  export type DecisionUpdateManyWithWhereWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    where: DecisionScalarWhereInput
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput>
  }

  export type StoryUpsertWithoutStepsInput = {
    update: XOR<StoryUpdateWithoutStepsInput, StoryUncheckedUpdateWithoutStepsInput>
    create: XOR<StoryCreateWithoutStepsInput, StoryUncheckedCreateWithoutStepsInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutStepsInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutStepsInput, StoryUncheckedUpdateWithoutStepsInput>
  }

  export type StoryUpdateWithoutStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userStories?: UserStoryUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userStories?: UserStoryUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type WaypointUpsertWithoutStepsInput = {
    update: XOR<WaypointUpdateWithoutStepsInput, WaypointUncheckedUpdateWithoutStepsInput>
    create: XOR<WaypointCreateWithoutStepsInput, WaypointUncheckedCreateWithoutStepsInput>
    where?: WaypointWhereInput
  }

  export type WaypointUpdateToOneWithWhereWithoutStepsInput = {
    where?: WaypointWhereInput
    data: XOR<WaypointUpdateWithoutStepsInput, WaypointUncheckedUpdateWithoutStepsInput>
  }

  export type WaypointUpdateWithoutStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    placeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaypointUncheckedUpdateWithoutStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    placeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserStoryStepUpsertWithWhereUniqueWithoutStepInput = {
    where: UserStoryStepWhereUniqueInput
    update: XOR<UserStoryStepUpdateWithoutStepInput, UserStoryStepUncheckedUpdateWithoutStepInput>
    create: XOR<UserStoryStepCreateWithoutStepInput, UserStoryStepUncheckedCreateWithoutStepInput>
  }

  export type UserStoryStepUpdateWithWhereUniqueWithoutStepInput = {
    where: UserStoryStepWhereUniqueInput
    data: XOR<UserStoryStepUpdateWithoutStepInput, UserStoryStepUncheckedUpdateWithoutStepInput>
  }

  export type UserStoryStepUpdateManyWithWhereWithoutStepInput = {
    where: UserStoryStepScalarWhereInput
    data: XOR<UserStoryStepUpdateManyMutationInput, UserStoryStepUncheckedUpdateManyWithoutStepInput>
  }

  export type UserStoryStepScalarWhereInput = {
    AND?: UserStoryStepScalarWhereInput | UserStoryStepScalarWhereInput[]
    OR?: UserStoryStepScalarWhereInput[]
    NOT?: UserStoryStepScalarWhereInput | UserStoryStepScalarWhereInput[]
    userStoryUuid?: StringFilter<"UserStoryStep"> | string
    stepUuid?: StringFilter<"UserStoryStep"> | string
    createdAt?: DateTimeFilter<"UserStoryStep"> | Date | string
    updatedAt?: DateTimeFilter<"UserStoryStep"> | Date | string
    finishedAt?: DateTimeNullableFilter<"UserStoryStep"> | Date | string | null
    latitude?: FloatFilter<"UserStoryStep"> | number
    longitude?: FloatFilter<"UserStoryStep"> | number
  }

  export type StepCreateWithoutStoryInput = {
    uuid?: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    waypoint?: WaypointCreateNestedOneWithoutStepsInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutStoryInput = {
    uuid?: string
    waypointUuid?: string | null
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutStoryInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutStoryInput, StepUncheckedCreateWithoutStoryInput>
  }

  export type StepCreateManyStoryInputEnvelope = {
    data: StepCreateManyStoryInput | StepCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type UserStoryCreateWithoutStoryInput = {
    uuid?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserStoriesInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutUserStoryInput
  }

  export type UserStoryUncheckedCreateWithoutStoryInput = {
    uuid?: string
    userUuid: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutUserStoryInput
  }

  export type UserStoryCreateOrConnectWithoutStoryInput = {
    where: UserStoryWhereUniqueInput
    create: XOR<UserStoryCreateWithoutStoryInput, UserStoryUncheckedCreateWithoutStoryInput>
  }

  export type UserStoryCreateManyStoryInputEnvelope = {
    data: UserStoryCreateManyStoryInput | UserStoryCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type StepUpsertWithWhereUniqueWithoutStoryInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutStoryInput, StepUncheckedUpdateWithoutStoryInput>
    create: XOR<StepCreateWithoutStoryInput, StepUncheckedCreateWithoutStoryInput>
  }

  export type StepUpdateWithWhereUniqueWithoutStoryInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutStoryInput, StepUncheckedUpdateWithoutStoryInput>
  }

  export type StepUpdateManyWithWhereWithoutStoryInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutStoryInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    uuid?: StringFilter<"Step"> | string
    storyUuid?: StringFilter<"Step"> | string
    waypointUuid?: StringNullableFilter<"Step"> | string | null
    assetId?: StringNullableFilter<"Step"> | string | null
    description?: StringFilter<"Step"> | string
    media?: EnumMediaNullableFilter<"Step"> | $Enums.Media | null
    title?: StringFilter<"Step"> | string
    ending?: EnumEndingNullableFilter<"Step"> | $Enums.Ending | null
  }

  export type UserStoryUpsertWithWhereUniqueWithoutStoryInput = {
    where: UserStoryWhereUniqueInput
    update: XOR<UserStoryUpdateWithoutStoryInput, UserStoryUncheckedUpdateWithoutStoryInput>
    create: XOR<UserStoryCreateWithoutStoryInput, UserStoryUncheckedCreateWithoutStoryInput>
  }

  export type UserStoryUpdateWithWhereUniqueWithoutStoryInput = {
    where: UserStoryWhereUniqueInput
    data: XOR<UserStoryUpdateWithoutStoryInput, UserStoryUncheckedUpdateWithoutStoryInput>
  }

  export type UserStoryUpdateManyWithWhereWithoutStoryInput = {
    where: UserStoryScalarWhereInput
    data: XOR<UserStoryUpdateManyMutationInput, UserStoryUncheckedUpdateManyWithoutStoryInput>
  }

  export type UserStoryScalarWhereInput = {
    AND?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
    OR?: UserStoryScalarWhereInput[]
    NOT?: UserStoryScalarWhereInput | UserStoryScalarWhereInput[]
    uuid?: StringFilter<"UserStory"> | string
    storyUuid?: StringFilter<"UserStory"> | string
    userUuid?: StringFilter<"UserStory"> | string
    createdAt?: DateTimeFilter<"UserStory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserStory"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"UserStory"> | Date | string | null
  }

  export type StoryCreateWithoutUserStoriesInput = {
    uuid?: string
    active?: boolean
    assetId?: string | null
    description: string
    title: string
    steps?: StepCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutUserStoriesInput = {
    uuid?: string
    active?: boolean
    assetId?: string | null
    description: string
    title: string
    steps?: StepUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutUserStoriesInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutUserStoriesInput, StoryUncheckedCreateWithoutUserStoriesInput>
  }

  export type UserCreateWithoutUserStoriesInput = {
    uuid?: string
    email?: string | null
  }

  export type UserUncheckedCreateWithoutUserStoriesInput = {
    uuid?: string
    email?: string | null
  }

  export type UserCreateOrConnectWithoutUserStoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStoriesInput, UserUncheckedCreateWithoutUserStoriesInput>
  }

  export type UserStoryStepCreateWithoutUserStoryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
    step: StepCreateNestedOneWithoutUserStoryStepsInput
  }

  export type UserStoryStepUncheckedCreateWithoutUserStoryInput = {
    stepUuid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
  }

  export type UserStoryStepCreateOrConnectWithoutUserStoryInput = {
    where: UserStoryStepWhereUniqueInput
    create: XOR<UserStoryStepCreateWithoutUserStoryInput, UserStoryStepUncheckedCreateWithoutUserStoryInput>
  }

  export type UserStoryStepCreateManyUserStoryInputEnvelope = {
    data: UserStoryStepCreateManyUserStoryInput | UserStoryStepCreateManyUserStoryInput[]
    skipDuplicates?: boolean
  }

  export type StoryUpsertWithoutUserStoriesInput = {
    update: XOR<StoryUpdateWithoutUserStoriesInput, StoryUncheckedUpdateWithoutUserStoriesInput>
    create: XOR<StoryCreateWithoutUserStoriesInput, StoryUncheckedCreateWithoutUserStoriesInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutUserStoriesInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutUserStoriesInput, StoryUncheckedUpdateWithoutUserStoriesInput>
  }

  export type StoryUpdateWithoutUserStoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    steps?: StepUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutUserStoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    steps?: StepUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type UserUpsertWithoutUserStoriesInput = {
    update: XOR<UserUpdateWithoutUserStoriesInput, UserUncheckedUpdateWithoutUserStoriesInput>
    create: XOR<UserCreateWithoutUserStoriesInput, UserUncheckedCreateWithoutUserStoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStoriesInput, UserUncheckedUpdateWithoutUserStoriesInput>
  }

  export type UserUpdateWithoutUserStoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutUserStoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserStoryStepUpsertWithWhereUniqueWithoutUserStoryInput = {
    where: UserStoryStepWhereUniqueInput
    update: XOR<UserStoryStepUpdateWithoutUserStoryInput, UserStoryStepUncheckedUpdateWithoutUserStoryInput>
    create: XOR<UserStoryStepCreateWithoutUserStoryInput, UserStoryStepUncheckedCreateWithoutUserStoryInput>
  }

  export type UserStoryStepUpdateWithWhereUniqueWithoutUserStoryInput = {
    where: UserStoryStepWhereUniqueInput
    data: XOR<UserStoryStepUpdateWithoutUserStoryInput, UserStoryStepUncheckedUpdateWithoutUserStoryInput>
  }

  export type UserStoryStepUpdateManyWithWhereWithoutUserStoryInput = {
    where: UserStoryStepScalarWhereInput
    data: XOR<UserStoryStepUpdateManyMutationInput, UserStoryStepUncheckedUpdateManyWithoutUserStoryInput>
  }

  export type StepCreateWithoutUserStoryStepsInput = {
    uuid?: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    story: StoryCreateNestedOneWithoutStepsInput
    waypoint?: WaypointCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutUserStoryStepsInput = {
    uuid?: string
    storyUuid: string
    waypointUuid?: string | null
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
  }

  export type StepCreateOrConnectWithoutUserStoryStepsInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutUserStoryStepsInput, StepUncheckedCreateWithoutUserStoryStepsInput>
  }

  export type UserStoryCreateWithoutUserStoryStepsInput = {
    uuid?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
    story: StoryCreateNestedOneWithoutUserStoriesInput
    user: UserCreateNestedOneWithoutUserStoriesInput
  }

  export type UserStoryUncheckedCreateWithoutUserStoryStepsInput = {
    uuid?: string
    storyUuid: string
    userUuid: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
  }

  export type UserStoryCreateOrConnectWithoutUserStoryStepsInput = {
    where: UserStoryWhereUniqueInput
    create: XOR<UserStoryCreateWithoutUserStoryStepsInput, UserStoryUncheckedCreateWithoutUserStoryStepsInput>
  }

  export type StepUpsertWithoutUserStoryStepsInput = {
    update: XOR<StepUpdateWithoutUserStoryStepsInput, StepUncheckedUpdateWithoutUserStoryStepsInput>
    create: XOR<StepCreateWithoutUserStoryStepsInput, StepUncheckedCreateWithoutUserStoryStepsInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutUserStoryStepsInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutUserStoryStepsInput, StepUncheckedUpdateWithoutUserStoryStepsInput>
  }

  export type StepUpdateWithoutUserStoryStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    story?: StoryUpdateOneRequiredWithoutStepsNestedInput
    waypoint?: WaypointUpdateOneWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutUserStoryStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    waypointUuid?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
  }

  export type UserStoryUpsertWithoutUserStoryStepsInput = {
    update: XOR<UserStoryUpdateWithoutUserStoryStepsInput, UserStoryUncheckedUpdateWithoutUserStoryStepsInput>
    create: XOR<UserStoryCreateWithoutUserStoryStepsInput, UserStoryUncheckedCreateWithoutUserStoryStepsInput>
    where?: UserStoryWhereInput
  }

  export type UserStoryUpdateToOneWithWhereWithoutUserStoryStepsInput = {
    where?: UserStoryWhereInput
    data: XOR<UserStoryUpdateWithoutUserStoryStepsInput, UserStoryUncheckedUpdateWithoutUserStoryStepsInput>
  }

  export type UserStoryUpdateWithoutUserStoryStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    story?: StoryUpdateOneRequiredWithoutUserStoriesNestedInput
    user?: UserUpdateOneRequiredWithoutUserStoriesNestedInput
  }

  export type UserStoryUncheckedUpdateWithoutUserStoryStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    userUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStoryCreateWithoutUserInput = {
    uuid?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
    story: StoryCreateNestedOneWithoutUserStoriesInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutUserStoryInput
  }

  export type UserStoryUncheckedCreateWithoutUserInput = {
    uuid?: string
    storyUuid: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutUserStoryInput
  }

  export type UserStoryCreateOrConnectWithoutUserInput = {
    where: UserStoryWhereUniqueInput
    create: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput>
  }

  export type UserStoryCreateManyUserInputEnvelope = {
    data: UserStoryCreateManyUserInput | UserStoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStoryWhereUniqueInput
    update: XOR<UserStoryUpdateWithoutUserInput, UserStoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserStoryCreateWithoutUserInput, UserStoryUncheckedCreateWithoutUserInput>
  }

  export type UserStoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStoryWhereUniqueInput
    data: XOR<UserStoryUpdateWithoutUserInput, UserStoryUncheckedUpdateWithoutUserInput>
  }

  export type UserStoryUpdateManyWithWhereWithoutUserInput = {
    where: UserStoryScalarWhereInput
    data: XOR<UserStoryUpdateManyMutationInput, UserStoryUncheckedUpdateManyWithoutUserInput>
  }

  export type StepCreateWithoutWaypointInput = {
    uuid?: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    story: StoryCreateNestedOneWithoutStepsInput
    userStorySteps?: UserStoryStepCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutWaypointInput = {
    uuid?: string
    storyUuid: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepInputUuidToStepsInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedCreateNestedManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput
    userStorySteps?: UserStoryStepUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutWaypointInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutWaypointInput, StepUncheckedCreateWithoutWaypointInput>
  }

  export type StepCreateManyWaypointInputEnvelope = {
    data: StepCreateManyWaypointInput | StepCreateManyWaypointInput[]
    skipDuplicates?: boolean
  }

  export type StepUpsertWithWhereUniqueWithoutWaypointInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutWaypointInput, StepUncheckedUpdateWithoutWaypointInput>
    create: XOR<StepCreateWithoutWaypointInput, StepUncheckedCreateWithoutWaypointInput>
  }

  export type StepUpdateWithWhereUniqueWithoutWaypointInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutWaypointInput, StepUncheckedUpdateWithoutWaypointInput>
  }

  export type StepUpdateManyWithWhereWithoutWaypointInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutWaypointInput>
  }

  export type DecisionCreateManyDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: string
    stepOutputUuid: string
    title: string
  }

  export type DecisionCreateManyDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: string
    stepInputUuid: string
    title: string
  }

  export type UserStoryStepCreateManyStepInput = {
    userStoryUuid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
  }

  export type DecisionUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    decisionsDecisionsStepOutputUuidToSteps?: StepUpdateOneRequiredWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
  }

  export type DecisionUncheckedUpdateWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    stepOutputUuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    stepOutputUuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    decisionsDecisionsStepInputUuidToSteps?: StepUpdateOneRequiredWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
  }

  export type DecisionUncheckedUpdateWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    stepInputUuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    stepInputUuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UserStoryStepUpdateWithoutStepInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    userStory?: UserStoryUpdateOneRequiredWithoutUserStoryStepsNestedInput
  }

  export type UserStoryStepUncheckedUpdateWithoutStepInput = {
    userStoryUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type UserStoryStepUncheckedUpdateManyWithoutStepInput = {
    userStoryUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type StepCreateManyStoryInput = {
    uuid?: string
    waypointUuid?: string | null
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
  }

  export type UserStoryCreateManyStoryInput = {
    uuid?: string
    userUuid: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
  }

  export type StepUpdateWithoutStoryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    waypoint?: WaypointUpdateOneWithoutStepsNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutStoryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    waypointUuid?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateManyWithoutStoryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    waypointUuid?: NullableStringFieldUpdateOperationsInput | string | null
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
  }

  export type UserStoryUpdateWithoutStoryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserStoriesNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutUserStoryNestedInput
  }

  export type UserStoryUncheckedUpdateWithoutStoryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutUserStoryNestedInput
  }

  export type UserStoryUncheckedUpdateManyWithoutStoryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserStoryStepCreateManyUserStoryInput = {
    stepUuid: string
    createdAt?: Date | string
    updatedAt?: Date | string
    finishedAt?: Date | string | null
    latitude: number
    longitude: number
  }

  export type UserStoryStepUpdateWithoutUserStoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    step?: StepUpdateOneRequiredWithoutUserStoryStepsNestedInput
  }

  export type UserStoryStepUncheckedUpdateWithoutUserStoryInput = {
    stepUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type UserStoryStepUncheckedUpdateManyWithoutUserStoryInput = {
    stepUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type UserStoryCreateManyUserInput = {
    uuid?: string
    storyUuid: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    finishedAt?: Date | string | null
  }

  export type UserStoryUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    story?: StoryUpdateOneRequiredWithoutUserStoriesNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutUserStoryNestedInput
  }

  export type UserStoryUncheckedUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutUserStoryNestedInput
  }

  export type UserStoryUncheckedUpdateManyWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StepCreateManyWaypointInput = {
    uuid?: string
    storyUuid: string
    assetId?: string | null
    description: string
    media?: $Enums.Media | null
    title: string
    ending?: $Enums.Ending | null
  }

  export type StepUpdateWithoutWaypointInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    story?: StoryUpdateOneRequiredWithoutStepsNestedInput
    userStorySteps?: UserStoryStepUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutWaypointInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
    decisionsDecisionsStepInputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepInputUuidToStepsNestedInput
    decisionsDecisionsStepOutputUuidToSteps?: DecisionUncheckedUpdateManyWithoutDecisionsDecisionsStepOutputUuidToStepsNestedInput
    userStorySteps?: UserStoryStepUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateManyWithoutWaypointInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    storyUuid?: StringFieldUpdateOperationsInput | string
    assetId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    media?: NullableEnumMediaFieldUpdateOperationsInput | $Enums.Media | null
    title?: StringFieldUpdateOperationsInput | string
    ending?: NullableEnumEndingFieldUpdateOperationsInput | $Enums.Ending | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StepCountOutputTypeDefaultArgs instead
     */
    export type StepCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StepCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryCountOutputTypeDefaultArgs instead
     */
    export type StoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStoryCountOutputTypeDefaultArgs instead
     */
    export type UserStoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaypointCountOutputTypeDefaultArgs instead
     */
    export type WaypointCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaypointCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DecisionDefaultArgs instead
     */
    export type DecisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DecisionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StepDefaultArgs instead
     */
    export type StepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StepDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryDefaultArgs instead
     */
    export type StoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStoryDefaultArgs instead
     */
    export type UserStoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStoryStepDefaultArgs instead
     */
    export type UserStoryStepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStoryStepDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaypointDefaultArgs instead
     */
    export type WaypointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaypointDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}