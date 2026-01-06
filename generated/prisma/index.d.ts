
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cache
 * 
 */
export type cache = $Result.DefaultSelection<Prisma.$cachePayload>
/**
 * Model cache_locks
 * 
 */
export type cache_locks = $Result.DefaultSelection<Prisma.$cache_locksPayload>
/**
 * Model exports
 * 
 */
export type exports = $Result.DefaultSelection<Prisma.$exportsPayload>
/**
 * Model failed_import_rows
 * 
 */
export type failed_import_rows = $Result.DefaultSelection<Prisma.$failed_import_rowsPayload>
/**
 * Model failed_jobs
 * 
 */
export type failed_jobs = $Result.DefaultSelection<Prisma.$failed_jobsPayload>
/**
 * Model imports
 * 
 */
export type imports = $Result.DefaultSelection<Prisma.$importsPayload>
/**
 * Model job_batches
 * 
 */
export type job_batches = $Result.DefaultSelection<Prisma.$job_batchesPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model password_reset_tokens
 * 
 */
export type password_reset_tokens = $Result.DefaultSelection<Prisma.$password_reset_tokensPayload>
/**
 * Model Quotation
 * 
 */
export type Quotation = $Result.DefaultSelection<Prisma.$QuotationPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Caches
 * const caches = await prisma.cache.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Caches
   * const caches = await prisma.cache.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cache`: Exposes CRUD operations for the **cache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caches
    * const caches = await prisma.cache.findMany()
    * ```
    */
  get cache(): Prisma.cacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cache_locks`: Exposes CRUD operations for the **cache_locks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cache_locks
    * const cache_locks = await prisma.cache_locks.findMany()
    * ```
    */
  get cache_locks(): Prisma.cache_locksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exports`: Exposes CRUD operations for the **exports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exports
    * const exports = await prisma.exports.findMany()
    * ```
    */
  get exports(): Prisma.exportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failed_import_rows`: Exposes CRUD operations for the **failed_import_rows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Failed_import_rows
    * const failed_import_rows = await prisma.failed_import_rows.findMany()
    * ```
    */
  get failed_import_rows(): Prisma.failed_import_rowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failed_jobs`: Exposes CRUD operations for the **failed_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Failed_jobs
    * const failed_jobs = await prisma.failed_jobs.findMany()
    * ```
    */
  get failed_jobs(): Prisma.failed_jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imports`: Exposes CRUD operations for the **imports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imports
    * const imports = await prisma.imports.findMany()
    * ```
    */
  get imports(): Prisma.importsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_batches`: Exposes CRUD operations for the **job_batches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_batches
    * const job_batches = await prisma.job_batches.findMany()
    * ```
    */
  get job_batches(): Prisma.job_batchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_tokens`: Exposes CRUD operations for the **password_reset_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
    * ```
    */
  get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotations
    * const quotations = await prisma.quotation.findMany()
    * ```
    */
  get quotation(): Prisma.QuotationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    cache: 'cache',
    cache_locks: 'cache_locks',
    exports: 'exports',
    failed_import_rows: 'failed_import_rows',
    failed_jobs: 'failed_jobs',
    imports: 'imports',
    job_batches: 'job_batches',
    jobs: 'jobs',
    migrations: 'migrations',
    notifications: 'notifications',
    password_reset_tokens: 'password_reset_tokens',
    Quotation: 'Quotation',
    sessions: 'sessions',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cache" | "cache_locks" | "exports" | "failed_import_rows" | "failed_jobs" | "imports" | "job_batches" | "jobs" | "migrations" | "notifications" | "password_reset_tokens" | "quotation" | "sessions" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cache: {
        payload: Prisma.$cachePayload<ExtArgs>
        fields: Prisma.cacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          findFirst: {
            args: Prisma.cacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          findMany: {
            args: Prisma.cacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>[]
          }
          create: {
            args: Prisma.cacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          createMany: {
            args: Prisma.cacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          update: {
            args: Prisma.cacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          deleteMany: {
            args: Prisma.cacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          aggregate: {
            args: Prisma.CacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCache>
          }
          groupBy: {
            args: Prisma.cacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<CacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.cacheCountArgs<ExtArgs>
            result: $Utils.Optional<CacheCountAggregateOutputType> | number
          }
        }
      }
      cache_locks: {
        payload: Prisma.$cache_locksPayload<ExtArgs>
        fields: Prisma.cache_locksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cache_locksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cache_locksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          findFirst: {
            args: Prisma.cache_locksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cache_locksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          findMany: {
            args: Prisma.cache_locksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>[]
          }
          create: {
            args: Prisma.cache_locksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          createMany: {
            args: Prisma.cache_locksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cache_locksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          update: {
            args: Prisma.cache_locksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          deleteMany: {
            args: Prisma.cache_locksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cache_locksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cache_locksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cache_locksPayload>
          }
          aggregate: {
            args: Prisma.Cache_locksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCache_locks>
          }
          groupBy: {
            args: Prisma.cache_locksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cache_locksGroupByOutputType>[]
          }
          count: {
            args: Prisma.cache_locksCountArgs<ExtArgs>
            result: $Utils.Optional<Cache_locksCountAggregateOutputType> | number
          }
        }
      }
      exports: {
        payload: Prisma.$exportsPayload<ExtArgs>
        fields: Prisma.exportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload>
          }
          findFirst: {
            args: Prisma.exportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload>
          }
          findMany: {
            args: Prisma.exportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload>[]
          }
          create: {
            args: Prisma.exportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload>
          }
          createMany: {
            args: Prisma.exportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload>
          }
          update: {
            args: Prisma.exportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload>
          }
          deleteMany: {
            args: Prisma.exportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exportsPayload>
          }
          aggregate: {
            args: Prisma.ExportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExports>
          }
          groupBy: {
            args: Prisma.exportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.exportsCountArgs<ExtArgs>
            result: $Utils.Optional<ExportsCountAggregateOutputType> | number
          }
        }
      }
      failed_import_rows: {
        payload: Prisma.$failed_import_rowsPayload<ExtArgs>
        fields: Prisma.failed_import_rowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.failed_import_rowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.failed_import_rowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload>
          }
          findFirst: {
            args: Prisma.failed_import_rowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.failed_import_rowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload>
          }
          findMany: {
            args: Prisma.failed_import_rowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload>[]
          }
          create: {
            args: Prisma.failed_import_rowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload>
          }
          createMany: {
            args: Prisma.failed_import_rowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.failed_import_rowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload>
          }
          update: {
            args: Prisma.failed_import_rowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload>
          }
          deleteMany: {
            args: Prisma.failed_import_rowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.failed_import_rowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.failed_import_rowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_import_rowsPayload>
          }
          aggregate: {
            args: Prisma.Failed_import_rowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailed_import_rows>
          }
          groupBy: {
            args: Prisma.failed_import_rowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Failed_import_rowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.failed_import_rowsCountArgs<ExtArgs>
            result: $Utils.Optional<Failed_import_rowsCountAggregateOutputType> | number
          }
        }
      }
      failed_jobs: {
        payload: Prisma.$failed_jobsPayload<ExtArgs>
        fields: Prisma.failed_jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.failed_jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.failed_jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          findFirst: {
            args: Prisma.failed_jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.failed_jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          findMany: {
            args: Prisma.failed_jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>[]
          }
          create: {
            args: Prisma.failed_jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          createMany: {
            args: Prisma.failed_jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.failed_jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          update: {
            args: Prisma.failed_jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          deleteMany: {
            args: Prisma.failed_jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.failed_jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.failed_jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$failed_jobsPayload>
          }
          aggregate: {
            args: Prisma.Failed_jobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailed_jobs>
          }
          groupBy: {
            args: Prisma.failed_jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Failed_jobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.failed_jobsCountArgs<ExtArgs>
            result: $Utils.Optional<Failed_jobsCountAggregateOutputType> | number
          }
        }
      }
      imports: {
        payload: Prisma.$importsPayload<ExtArgs>
        fields: Prisma.importsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.importsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.importsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload>
          }
          findFirst: {
            args: Prisma.importsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.importsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload>
          }
          findMany: {
            args: Prisma.importsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload>[]
          }
          create: {
            args: Prisma.importsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload>
          }
          createMany: {
            args: Prisma.importsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.importsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload>
          }
          update: {
            args: Prisma.importsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload>
          }
          deleteMany: {
            args: Prisma.importsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.importsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.importsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$importsPayload>
          }
          aggregate: {
            args: Prisma.ImportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImports>
          }
          groupBy: {
            args: Prisma.importsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.importsCountArgs<ExtArgs>
            result: $Utils.Optional<ImportsCountAggregateOutputType> | number
          }
        }
      }
      job_batches: {
        payload: Prisma.$job_batchesPayload<ExtArgs>
        fields: Prisma.job_batchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_batchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_batchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          findFirst: {
            args: Prisma.job_batchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_batchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          findMany: {
            args: Prisma.job_batchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>[]
          }
          create: {
            args: Prisma.job_batchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          createMany: {
            args: Prisma.job_batchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.job_batchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          update: {
            args: Prisma.job_batchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          deleteMany: {
            args: Prisma.job_batchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_batchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.job_batchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_batchesPayload>
          }
          aggregate: {
            args: Prisma.Job_batchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_batches>
          }
          groupBy: {
            args: Prisma.job_batchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_batchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_batchesCountArgs<ExtArgs>
            result: $Utils.Optional<Job_batchesCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      password_reset_tokens: {
        payload: Prisma.$password_reset_tokensPayload<ExtArgs>
        fields: Prisma.password_reset_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          update: {
            args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_tokens>
          }
          groupBy: {
            args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensCountAggregateOutputType> | number
          }
        }
      }
      Quotation: {
        payload: Prisma.$QuotationPayload<ExtArgs>
        fields: Prisma.QuotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findFirst: {
            args: Prisma.QuotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findMany: {
            args: Prisma.QuotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          create: {
            args: Prisma.QuotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          createMany: {
            args: Prisma.QuotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          update: {
            args: Prisma.QuotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          deleteMany: {
            args: Prisma.QuotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          aggregate: {
            args: Prisma.QuotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotation>
          }
          groupBy: {
            args: Prisma.QuotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cache?: cacheOmit
    cache_locks?: cache_locksOmit
    exports?: exportsOmit
    failed_import_rows?: failed_import_rowsOmit
    failed_jobs?: failed_jobsOmit
    imports?: importsOmit
    job_batches?: job_batchesOmit
    jobs?: jobsOmit
    migrations?: migrationsOmit
    notifications?: notificationsOmit
    password_reset_tokens?: password_reset_tokensOmit
    quotation?: QuotationOmit
    sessions?: sessionsOmit
    users?: usersOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ImportsCountOutputType
   */

  export type ImportsCountOutputType = {
    failed_import_rows: number
  }

  export type ImportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    failed_import_rows?: boolean | ImportsCountOutputTypeCountFailed_import_rowsArgs
  }

  // Custom InputTypes
  /**
   * ImportsCountOutputType without action
   */
  export type ImportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportsCountOutputType
     */
    select?: ImportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImportsCountOutputType without action
   */
  export type ImportsCountOutputTypeCountFailed_import_rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: failed_import_rowsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    exports: number
    imports: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exports?: boolean | UsersCountOutputTypeCountExportsArgs
    imports?: boolean | UsersCountOutputTypeCountImportsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exportsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountImportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: importsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cache
   */

  export type AggregateCache = {
    _count: CacheCountAggregateOutputType | null
    _avg: CacheAvgAggregateOutputType | null
    _sum: CacheSumAggregateOutputType | null
    _min: CacheMinAggregateOutputType | null
    _max: CacheMaxAggregateOutputType | null
  }

  export type CacheAvgAggregateOutputType = {
    expiration: number | null
  }

  export type CacheSumAggregateOutputType = {
    expiration: number | null
  }

  export type CacheMinAggregateOutputType = {
    key: string | null
    value: string | null
    expiration: number | null
  }

  export type CacheMaxAggregateOutputType = {
    key: string | null
    value: string | null
    expiration: number | null
  }

  export type CacheCountAggregateOutputType = {
    key: number
    value: number
    expiration: number
    _all: number
  }


  export type CacheAvgAggregateInputType = {
    expiration?: true
  }

  export type CacheSumAggregateInputType = {
    expiration?: true
  }

  export type CacheMinAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
  }

  export type CacheMaxAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
  }

  export type CacheCountAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
    _all?: true
  }

  export type CacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cache to aggregate.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caches
    **/
    _count?: true | CacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CacheMaxAggregateInputType
  }

  export type GetCacheAggregateType<T extends CacheAggregateArgs> = {
        [P in keyof T & keyof AggregateCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCache[P]>
      : GetScalarType<T[P], AggregateCache[P]>
  }




  export type cacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cacheWhereInput
    orderBy?: cacheOrderByWithAggregationInput | cacheOrderByWithAggregationInput[]
    by: CacheScalarFieldEnum[] | CacheScalarFieldEnum
    having?: cacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CacheCountAggregateInputType | true
    _avg?: CacheAvgAggregateInputType
    _sum?: CacheSumAggregateInputType
    _min?: CacheMinAggregateInputType
    _max?: CacheMaxAggregateInputType
  }

  export type CacheGroupByOutputType = {
    key: string
    value: string
    expiration: number
    _count: CacheCountAggregateOutputType | null
    _avg: CacheAvgAggregateOutputType | null
    _sum: CacheSumAggregateOutputType | null
    _min: CacheMinAggregateOutputType | null
    _max: CacheMaxAggregateOutputType | null
  }

  type GetCacheGroupByPayload<T extends cacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CacheGroupByOutputType[P]>
            : GetScalarType<T[P], CacheGroupByOutputType[P]>
        }
      >
    >


  export type cacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    expiration?: boolean
  }, ExtArgs["result"]["cache"]>



  export type cacheSelectScalar = {
    key?: boolean
    value?: boolean
    expiration?: boolean
  }

  export type cacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "expiration", ExtArgs["result"]["cache"]>

  export type $cachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      expiration: number
    }, ExtArgs["result"]["cache"]>
    composites: {}
  }

  type cacheGetPayload<S extends boolean | null | undefined | cacheDefaultArgs> = $Result.GetResult<Prisma.$cachePayload, S>

  type cacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CacheCountAggregateInputType | true
    }

  export interface cacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cache'], meta: { name: 'cache' } }
    /**
     * Find zero or one Cache that matches the filter.
     * @param {cacheFindUniqueArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cacheFindUniqueArgs>(args: SelectSubset<T, cacheFindUniqueArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cacheFindUniqueOrThrowArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cacheFindUniqueOrThrowArgs>(args: SelectSubset<T, cacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindFirstArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cacheFindFirstArgs>(args?: SelectSubset<T, cacheFindFirstArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindFirstOrThrowArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cacheFindFirstOrThrowArgs>(args?: SelectSubset<T, cacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caches
     * const caches = await prisma.cache.findMany()
     * 
     * // Get first 10 Caches
     * const caches = await prisma.cache.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const cacheWithKeyOnly = await prisma.cache.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends cacheFindManyArgs>(args?: SelectSubset<T, cacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cache.
     * @param {cacheCreateArgs} args - Arguments to create a Cache.
     * @example
     * // Create one Cache
     * const Cache = await prisma.cache.create({
     *   data: {
     *     // ... data to create a Cache
     *   }
     * })
     * 
     */
    create<T extends cacheCreateArgs>(args: SelectSubset<T, cacheCreateArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caches.
     * @param {cacheCreateManyArgs} args - Arguments to create many Caches.
     * @example
     * // Create many Caches
     * const cache = await prisma.cache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cacheCreateManyArgs>(args?: SelectSubset<T, cacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cache.
     * @param {cacheDeleteArgs} args - Arguments to delete one Cache.
     * @example
     * // Delete one Cache
     * const Cache = await prisma.cache.delete({
     *   where: {
     *     // ... filter to delete one Cache
     *   }
     * })
     * 
     */
    delete<T extends cacheDeleteArgs>(args: SelectSubset<T, cacheDeleteArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cache.
     * @param {cacheUpdateArgs} args - Arguments to update one Cache.
     * @example
     * // Update one Cache
     * const cache = await prisma.cache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cacheUpdateArgs>(args: SelectSubset<T, cacheUpdateArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caches.
     * @param {cacheDeleteManyArgs} args - Arguments to filter Caches to delete.
     * @example
     * // Delete a few Caches
     * const { count } = await prisma.cache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cacheDeleteManyArgs>(args?: SelectSubset<T, cacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caches
     * const cache = await prisma.cache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cacheUpdateManyArgs>(args: SelectSubset<T, cacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cache.
     * @param {cacheUpsertArgs} args - Arguments to update or create a Cache.
     * @example
     * // Update or create a Cache
     * const cache = await prisma.cache.upsert({
     *   create: {
     *     // ... data to create a Cache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cache we want to update
     *   }
     * })
     */
    upsert<T extends cacheUpsertArgs>(args: SelectSubset<T, cacheUpsertArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheCountArgs} args - Arguments to filter Caches to count.
     * @example
     * // Count the number of Caches
     * const count = await prisma.cache.count({
     *   where: {
     *     // ... the filter for the Caches we want to count
     *   }
     * })
    **/
    count<T extends cacheCountArgs>(
      args?: Subset<T, cacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CacheAggregateArgs>(args: Subset<T, CacheAggregateArgs>): Prisma.PrismaPromise<GetCacheAggregateType<T>>

    /**
     * Group by Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheGroupByArgs} args - Group by arguments.
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
      T extends cacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cacheGroupByArgs['orderBy'] }
        : { orderBy?: cacheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cache model
   */
  readonly fields: cacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cache model
   */
  interface cacheFieldRefs {
    readonly key: FieldRef<"cache", 'String'>
    readonly value: FieldRef<"cache", 'String'>
    readonly expiration: FieldRef<"cache", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cache findUnique
   */
  export type cacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache findUniqueOrThrow
   */
  export type cacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache findFirst
   */
  export type cacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caches.
     */
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache findFirstOrThrow
   */
  export type cacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caches.
     */
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache findMany
   */
  export type cacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which caches to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache create
   */
  export type cacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The data needed to create a cache.
     */
    data: XOR<cacheCreateInput, cacheUncheckedCreateInput>
  }

  /**
   * cache createMany
   */
  export type cacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caches.
     */
    data: cacheCreateManyInput | cacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cache update
   */
  export type cacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The data needed to update a cache.
     */
    data: XOR<cacheUpdateInput, cacheUncheckedUpdateInput>
    /**
     * Choose, which cache to update.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache updateMany
   */
  export type cacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caches.
     */
    data: XOR<cacheUpdateManyMutationInput, cacheUncheckedUpdateManyInput>
    /**
     * Filter which caches to update
     */
    where?: cacheWhereInput
    /**
     * Limit how many caches to update.
     */
    limit?: number
  }

  /**
   * cache upsert
   */
  export type cacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The filter to search for the cache to update in case it exists.
     */
    where: cacheWhereUniqueInput
    /**
     * In case the cache found by the `where` argument doesn't exist, create a new cache with this data.
     */
    create: XOR<cacheCreateInput, cacheUncheckedCreateInput>
    /**
     * In case the cache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cacheUpdateInput, cacheUncheckedUpdateInput>
  }

  /**
   * cache delete
   */
  export type cacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter which cache to delete.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache deleteMany
   */
  export type cacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caches to delete
     */
    where?: cacheWhereInput
    /**
     * Limit how many caches to delete.
     */
    limit?: number
  }

  /**
   * cache without action
   */
  export type cacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
  }


  /**
   * Model cache_locks
   */

  export type AggregateCache_locks = {
    _count: Cache_locksCountAggregateOutputType | null
    _avg: Cache_locksAvgAggregateOutputType | null
    _sum: Cache_locksSumAggregateOutputType | null
    _min: Cache_locksMinAggregateOutputType | null
    _max: Cache_locksMaxAggregateOutputType | null
  }

  export type Cache_locksAvgAggregateOutputType = {
    expiration: number | null
  }

  export type Cache_locksSumAggregateOutputType = {
    expiration: number | null
  }

  export type Cache_locksMinAggregateOutputType = {
    key: string | null
    owner: string | null
    expiration: number | null
  }

  export type Cache_locksMaxAggregateOutputType = {
    key: string | null
    owner: string | null
    expiration: number | null
  }

  export type Cache_locksCountAggregateOutputType = {
    key: number
    owner: number
    expiration: number
    _all: number
  }


  export type Cache_locksAvgAggregateInputType = {
    expiration?: true
  }

  export type Cache_locksSumAggregateInputType = {
    expiration?: true
  }

  export type Cache_locksMinAggregateInputType = {
    key?: true
    owner?: true
    expiration?: true
  }

  export type Cache_locksMaxAggregateInputType = {
    key?: true
    owner?: true
    expiration?: true
  }

  export type Cache_locksCountAggregateInputType = {
    key?: true
    owner?: true
    expiration?: true
    _all?: true
  }

  export type Cache_locksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cache_locks to aggregate.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cache_locks
    **/
    _count?: true | Cache_locksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cache_locksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cache_locksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cache_locksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cache_locksMaxAggregateInputType
  }

  export type GetCache_locksAggregateType<T extends Cache_locksAggregateArgs> = {
        [P in keyof T & keyof AggregateCache_locks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCache_locks[P]>
      : GetScalarType<T[P], AggregateCache_locks[P]>
  }




  export type cache_locksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cache_locksWhereInput
    orderBy?: cache_locksOrderByWithAggregationInput | cache_locksOrderByWithAggregationInput[]
    by: Cache_locksScalarFieldEnum[] | Cache_locksScalarFieldEnum
    having?: cache_locksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cache_locksCountAggregateInputType | true
    _avg?: Cache_locksAvgAggregateInputType
    _sum?: Cache_locksSumAggregateInputType
    _min?: Cache_locksMinAggregateInputType
    _max?: Cache_locksMaxAggregateInputType
  }

  export type Cache_locksGroupByOutputType = {
    key: string
    owner: string
    expiration: number
    _count: Cache_locksCountAggregateOutputType | null
    _avg: Cache_locksAvgAggregateOutputType | null
    _sum: Cache_locksSumAggregateOutputType | null
    _min: Cache_locksMinAggregateOutputType | null
    _max: Cache_locksMaxAggregateOutputType | null
  }

  type GetCache_locksGroupByPayload<T extends cache_locksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cache_locksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cache_locksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cache_locksGroupByOutputType[P]>
            : GetScalarType<T[P], Cache_locksGroupByOutputType[P]>
        }
      >
    >


  export type cache_locksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    owner?: boolean
    expiration?: boolean
  }, ExtArgs["result"]["cache_locks"]>



  export type cache_locksSelectScalar = {
    key?: boolean
    owner?: boolean
    expiration?: boolean
  }

  export type cache_locksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "owner" | "expiration", ExtArgs["result"]["cache_locks"]>

  export type $cache_locksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cache_locks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      owner: string
      expiration: number
    }, ExtArgs["result"]["cache_locks"]>
    composites: {}
  }

  type cache_locksGetPayload<S extends boolean | null | undefined | cache_locksDefaultArgs> = $Result.GetResult<Prisma.$cache_locksPayload, S>

  type cache_locksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cache_locksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cache_locksCountAggregateInputType | true
    }

  export interface cache_locksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cache_locks'], meta: { name: 'cache_locks' } }
    /**
     * Find zero or one Cache_locks that matches the filter.
     * @param {cache_locksFindUniqueArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cache_locksFindUniqueArgs>(args: SelectSubset<T, cache_locksFindUniqueArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cache_locks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cache_locksFindUniqueOrThrowArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cache_locksFindUniqueOrThrowArgs>(args: SelectSubset<T, cache_locksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache_locks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksFindFirstArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cache_locksFindFirstArgs>(args?: SelectSubset<T, cache_locksFindFirstArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache_locks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksFindFirstOrThrowArgs} args - Arguments to find a Cache_locks
     * @example
     * // Get one Cache_locks
     * const cache_locks = await prisma.cache_locks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cache_locksFindFirstOrThrowArgs>(args?: SelectSubset<T, cache_locksFindFirstOrThrowArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cache_locks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cache_locks
     * const cache_locks = await prisma.cache_locks.findMany()
     * 
     * // Get first 10 Cache_locks
     * const cache_locks = await prisma.cache_locks.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const cache_locksWithKeyOnly = await prisma.cache_locks.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends cache_locksFindManyArgs>(args?: SelectSubset<T, cache_locksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cache_locks.
     * @param {cache_locksCreateArgs} args - Arguments to create a Cache_locks.
     * @example
     * // Create one Cache_locks
     * const Cache_locks = await prisma.cache_locks.create({
     *   data: {
     *     // ... data to create a Cache_locks
     *   }
     * })
     * 
     */
    create<T extends cache_locksCreateArgs>(args: SelectSubset<T, cache_locksCreateArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cache_locks.
     * @param {cache_locksCreateManyArgs} args - Arguments to create many Cache_locks.
     * @example
     * // Create many Cache_locks
     * const cache_locks = await prisma.cache_locks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cache_locksCreateManyArgs>(args?: SelectSubset<T, cache_locksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cache_locks.
     * @param {cache_locksDeleteArgs} args - Arguments to delete one Cache_locks.
     * @example
     * // Delete one Cache_locks
     * const Cache_locks = await prisma.cache_locks.delete({
     *   where: {
     *     // ... filter to delete one Cache_locks
     *   }
     * })
     * 
     */
    delete<T extends cache_locksDeleteArgs>(args: SelectSubset<T, cache_locksDeleteArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cache_locks.
     * @param {cache_locksUpdateArgs} args - Arguments to update one Cache_locks.
     * @example
     * // Update one Cache_locks
     * const cache_locks = await prisma.cache_locks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cache_locksUpdateArgs>(args: SelectSubset<T, cache_locksUpdateArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cache_locks.
     * @param {cache_locksDeleteManyArgs} args - Arguments to filter Cache_locks to delete.
     * @example
     * // Delete a few Cache_locks
     * const { count } = await prisma.cache_locks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cache_locksDeleteManyArgs>(args?: SelectSubset<T, cache_locksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cache_locks
     * const cache_locks = await prisma.cache_locks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cache_locksUpdateManyArgs>(args: SelectSubset<T, cache_locksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cache_locks.
     * @param {cache_locksUpsertArgs} args - Arguments to update or create a Cache_locks.
     * @example
     * // Update or create a Cache_locks
     * const cache_locks = await prisma.cache_locks.upsert({
     *   create: {
     *     // ... data to create a Cache_locks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cache_locks we want to update
     *   }
     * })
     */
    upsert<T extends cache_locksUpsertArgs>(args: SelectSubset<T, cache_locksUpsertArgs<ExtArgs>>): Prisma__cache_locksClient<$Result.GetResult<Prisma.$cache_locksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksCountArgs} args - Arguments to filter Cache_locks to count.
     * @example
     * // Count the number of Cache_locks
     * const count = await prisma.cache_locks.count({
     *   where: {
     *     // ... the filter for the Cache_locks we want to count
     *   }
     * })
    **/
    count<T extends cache_locksCountArgs>(
      args?: Subset<T, cache_locksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cache_locksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cache_locksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cache_locksAggregateArgs>(args: Subset<T, Cache_locksAggregateArgs>): Prisma.PrismaPromise<GetCache_locksAggregateType<T>>

    /**
     * Group by Cache_locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cache_locksGroupByArgs} args - Group by arguments.
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
      T extends cache_locksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cache_locksGroupByArgs['orderBy'] }
        : { orderBy?: cache_locksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cache_locksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCache_locksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cache_locks model
   */
  readonly fields: cache_locksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cache_locks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cache_locksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cache_locks model
   */
  interface cache_locksFieldRefs {
    readonly key: FieldRef<"cache_locks", 'String'>
    readonly owner: FieldRef<"cache_locks", 'String'>
    readonly expiration: FieldRef<"cache_locks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cache_locks findUnique
   */
  export type cache_locksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks findUniqueOrThrow
   */
  export type cache_locksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks findFirst
   */
  export type cache_locksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cache_locks.
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cache_locks.
     */
    distinct?: Cache_locksScalarFieldEnum | Cache_locksScalarFieldEnum[]
  }

  /**
   * cache_locks findFirstOrThrow
   */
  export type cache_locksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cache_locks.
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cache_locks.
     */
    distinct?: Cache_locksScalarFieldEnum | Cache_locksScalarFieldEnum[]
  }

  /**
   * cache_locks findMany
   */
  export type cache_locksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter, which cache_locks to fetch.
     */
    where?: cache_locksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cache_locks to fetch.
     */
    orderBy?: cache_locksOrderByWithRelationInput | cache_locksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cache_locks.
     */
    cursor?: cache_locksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cache_locks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cache_locks.
     */
    skip?: number
    distinct?: Cache_locksScalarFieldEnum | Cache_locksScalarFieldEnum[]
  }

  /**
   * cache_locks create
   */
  export type cache_locksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * The data needed to create a cache_locks.
     */
    data: XOR<cache_locksCreateInput, cache_locksUncheckedCreateInput>
  }

  /**
   * cache_locks createMany
   */
  export type cache_locksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cache_locks.
     */
    data: cache_locksCreateManyInput | cache_locksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cache_locks update
   */
  export type cache_locksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * The data needed to update a cache_locks.
     */
    data: XOR<cache_locksUpdateInput, cache_locksUncheckedUpdateInput>
    /**
     * Choose, which cache_locks to update.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks updateMany
   */
  export type cache_locksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cache_locks.
     */
    data: XOR<cache_locksUpdateManyMutationInput, cache_locksUncheckedUpdateManyInput>
    /**
     * Filter which cache_locks to update
     */
    where?: cache_locksWhereInput
    /**
     * Limit how many cache_locks to update.
     */
    limit?: number
  }

  /**
   * cache_locks upsert
   */
  export type cache_locksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * The filter to search for the cache_locks to update in case it exists.
     */
    where: cache_locksWhereUniqueInput
    /**
     * In case the cache_locks found by the `where` argument doesn't exist, create a new cache_locks with this data.
     */
    create: XOR<cache_locksCreateInput, cache_locksUncheckedCreateInput>
    /**
     * In case the cache_locks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cache_locksUpdateInput, cache_locksUncheckedUpdateInput>
  }

  /**
   * cache_locks delete
   */
  export type cache_locksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
    /**
     * Filter which cache_locks to delete.
     */
    where: cache_locksWhereUniqueInput
  }

  /**
   * cache_locks deleteMany
   */
  export type cache_locksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cache_locks to delete
     */
    where?: cache_locksWhereInput
    /**
     * Limit how many cache_locks to delete.
     */
    limit?: number
  }

  /**
   * cache_locks without action
   */
  export type cache_locksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache_locks
     */
    select?: cache_locksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache_locks
     */
    omit?: cache_locksOmit<ExtArgs> | null
  }


  /**
   * Model exports
   */

  export type AggregateExports = {
    _count: ExportsCountAggregateOutputType | null
    _avg: ExportsAvgAggregateOutputType | null
    _sum: ExportsSumAggregateOutputType | null
    _min: ExportsMinAggregateOutputType | null
    _max: ExportsMaxAggregateOutputType | null
  }

  export type ExportsAvgAggregateOutputType = {
    id: number | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: number | null
  }

  export type ExportsSumAggregateOutputType = {
    id: bigint | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: bigint | null
  }

  export type ExportsMinAggregateOutputType = {
    id: bigint | null
    completed_at: Date | null
    file_disk: string | null
    file_name: string | null
    exporter: string | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExportsMaxAggregateOutputType = {
    id: bigint | null
    completed_at: Date | null
    file_disk: string | null
    file_name: string | null
    exporter: string | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExportsCountAggregateOutputType = {
    id: number
    completed_at: number
    file_disk: number
    file_name: number
    exporter: number
    processed_rows: number
    total_rows: number
    successful_rows: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExportsAvgAggregateInputType = {
    id?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
  }

  export type ExportsSumAggregateInputType = {
    id?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
  }

  export type ExportsMinAggregateInputType = {
    id?: true
    completed_at?: true
    file_disk?: true
    file_name?: true
    exporter?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ExportsMaxAggregateInputType = {
    id?: true
    completed_at?: true
    file_disk?: true
    file_name?: true
    exporter?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ExportsCountAggregateInputType = {
    id?: true
    completed_at?: true
    file_disk?: true
    file_name?: true
    exporter?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exports to aggregate.
     */
    where?: exportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exports to fetch.
     */
    orderBy?: exportsOrderByWithRelationInput | exportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exports
    **/
    _count?: true | ExportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExportsMaxAggregateInputType
  }

  export type GetExportsAggregateType<T extends ExportsAggregateArgs> = {
        [P in keyof T & keyof AggregateExports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExports[P]>
      : GetScalarType<T[P], AggregateExports[P]>
  }




  export type exportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exportsWhereInput
    orderBy?: exportsOrderByWithAggregationInput | exportsOrderByWithAggregationInput[]
    by: ExportsScalarFieldEnum[] | ExportsScalarFieldEnum
    having?: exportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExportsCountAggregateInputType | true
    _avg?: ExportsAvgAggregateInputType
    _sum?: ExportsSumAggregateInputType
    _min?: ExportsMinAggregateInputType
    _max?: ExportsMaxAggregateInputType
  }

  export type ExportsGroupByOutputType = {
    id: bigint
    completed_at: Date | null
    file_disk: string
    file_name: string | null
    exporter: string
    processed_rows: number
    total_rows: number
    successful_rows: number
    user_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: ExportsCountAggregateOutputType | null
    _avg: ExportsAvgAggregateOutputType | null
    _sum: ExportsSumAggregateOutputType | null
    _min: ExportsMinAggregateOutputType | null
    _max: ExportsMaxAggregateOutputType | null
  }

  type GetExportsGroupByPayload<T extends exportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportsGroupByOutputType[P]>
            : GetScalarType<T[P], ExportsGroupByOutputType[P]>
        }
      >
    >


  export type exportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed_at?: boolean
    file_disk?: boolean
    file_name?: boolean
    exporter?: boolean
    processed_rows?: boolean
    total_rows?: boolean
    successful_rows?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exports"]>



  export type exportsSelectScalar = {
    id?: boolean
    completed_at?: boolean
    file_disk?: boolean
    file_name?: boolean
    exporter?: boolean
    processed_rows?: boolean
    total_rows?: boolean
    successful_rows?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type exportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completed_at" | "file_disk" | "file_name" | "exporter" | "processed_rows" | "total_rows" | "successful_rows" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["exports"]>
  export type exportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $exportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exports"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      completed_at: Date | null
      file_disk: string
      file_name: string | null
      exporter: string
      processed_rows: number
      total_rows: number
      successful_rows: number
      user_id: bigint
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["exports"]>
    composites: {}
  }

  type exportsGetPayload<S extends boolean | null | undefined | exportsDefaultArgs> = $Result.GetResult<Prisma.$exportsPayload, S>

  type exportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExportsCountAggregateInputType | true
    }

  export interface exportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exports'], meta: { name: 'exports' } }
    /**
     * Find zero or one Exports that matches the filter.
     * @param {exportsFindUniqueArgs} args - Arguments to find a Exports
     * @example
     * // Get one Exports
     * const exports = await prisma.exports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exportsFindUniqueArgs>(args: SelectSubset<T, exportsFindUniqueArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exportsFindUniqueOrThrowArgs} args - Arguments to find a Exports
     * @example
     * // Get one Exports
     * const exports = await prisma.exports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exportsFindUniqueOrThrowArgs>(args: SelectSubset<T, exportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exportsFindFirstArgs} args - Arguments to find a Exports
     * @example
     * // Get one Exports
     * const exports = await prisma.exports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exportsFindFirstArgs>(args?: SelectSubset<T, exportsFindFirstArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exportsFindFirstOrThrowArgs} args - Arguments to find a Exports
     * @example
     * // Get one Exports
     * const exports = await prisma.exports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exportsFindFirstOrThrowArgs>(args?: SelectSubset<T, exportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exports
     * const exports = await prisma.exports.findMany()
     * 
     * // Get first 10 Exports
     * const exports = await prisma.exports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exportsWithIdOnly = await prisma.exports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exportsFindManyArgs>(args?: SelectSubset<T, exportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exports.
     * @param {exportsCreateArgs} args - Arguments to create a Exports.
     * @example
     * // Create one Exports
     * const Exports = await prisma.exports.create({
     *   data: {
     *     // ... data to create a Exports
     *   }
     * })
     * 
     */
    create<T extends exportsCreateArgs>(args: SelectSubset<T, exportsCreateArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exports.
     * @param {exportsCreateManyArgs} args - Arguments to create many Exports.
     * @example
     * // Create many Exports
     * const exports = await prisma.exports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exportsCreateManyArgs>(args?: SelectSubset<T, exportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exports.
     * @param {exportsDeleteArgs} args - Arguments to delete one Exports.
     * @example
     * // Delete one Exports
     * const Exports = await prisma.exports.delete({
     *   where: {
     *     // ... filter to delete one Exports
     *   }
     * })
     * 
     */
    delete<T extends exportsDeleteArgs>(args: SelectSubset<T, exportsDeleteArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exports.
     * @param {exportsUpdateArgs} args - Arguments to update one Exports.
     * @example
     * // Update one Exports
     * const exports = await prisma.exports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exportsUpdateArgs>(args: SelectSubset<T, exportsUpdateArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exports.
     * @param {exportsDeleteManyArgs} args - Arguments to filter Exports to delete.
     * @example
     * // Delete a few Exports
     * const { count } = await prisma.exports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exportsDeleteManyArgs>(args?: SelectSubset<T, exportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exports
     * const exports = await prisma.exports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exportsUpdateManyArgs>(args: SelectSubset<T, exportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exports.
     * @param {exportsUpsertArgs} args - Arguments to update or create a Exports.
     * @example
     * // Update or create a Exports
     * const exports = await prisma.exports.upsert({
     *   create: {
     *     // ... data to create a Exports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exports we want to update
     *   }
     * })
     */
    upsert<T extends exportsUpsertArgs>(args: SelectSubset<T, exportsUpsertArgs<ExtArgs>>): Prisma__exportsClient<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exportsCountArgs} args - Arguments to filter Exports to count.
     * @example
     * // Count the number of Exports
     * const count = await prisma.exports.count({
     *   where: {
     *     // ... the filter for the Exports we want to count
     *   }
     * })
    **/
    count<T extends exportsCountArgs>(
      args?: Subset<T, exportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExportsAggregateArgs>(args: Subset<T, ExportsAggregateArgs>): Prisma.PrismaPromise<GetExportsAggregateType<T>>

    /**
     * Group by Exports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exportsGroupByArgs} args - Group by arguments.
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
      T extends exportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exportsGroupByArgs['orderBy'] }
        : { orderBy?: exportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, exportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exports model
   */
  readonly fields: exportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exports model
   */
  interface exportsFieldRefs {
    readonly id: FieldRef<"exports", 'BigInt'>
    readonly completed_at: FieldRef<"exports", 'DateTime'>
    readonly file_disk: FieldRef<"exports", 'String'>
    readonly file_name: FieldRef<"exports", 'String'>
    readonly exporter: FieldRef<"exports", 'String'>
    readonly processed_rows: FieldRef<"exports", 'Int'>
    readonly total_rows: FieldRef<"exports", 'Int'>
    readonly successful_rows: FieldRef<"exports", 'Int'>
    readonly user_id: FieldRef<"exports", 'BigInt'>
    readonly created_at: FieldRef<"exports", 'DateTime'>
    readonly updated_at: FieldRef<"exports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exports findUnique
   */
  export type exportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * Filter, which exports to fetch.
     */
    where: exportsWhereUniqueInput
  }

  /**
   * exports findUniqueOrThrow
   */
  export type exportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * Filter, which exports to fetch.
     */
    where: exportsWhereUniqueInput
  }

  /**
   * exports findFirst
   */
  export type exportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * Filter, which exports to fetch.
     */
    where?: exportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exports to fetch.
     */
    orderBy?: exportsOrderByWithRelationInput | exportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exports.
     */
    cursor?: exportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exports.
     */
    distinct?: ExportsScalarFieldEnum | ExportsScalarFieldEnum[]
  }

  /**
   * exports findFirstOrThrow
   */
  export type exportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * Filter, which exports to fetch.
     */
    where?: exportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exports to fetch.
     */
    orderBy?: exportsOrderByWithRelationInput | exportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exports.
     */
    cursor?: exportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exports.
     */
    distinct?: ExportsScalarFieldEnum | ExportsScalarFieldEnum[]
  }

  /**
   * exports findMany
   */
  export type exportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * Filter, which exports to fetch.
     */
    where?: exportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exports to fetch.
     */
    orderBy?: exportsOrderByWithRelationInput | exportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exports.
     */
    cursor?: exportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exports.
     */
    skip?: number
    distinct?: ExportsScalarFieldEnum | ExportsScalarFieldEnum[]
  }

  /**
   * exports create
   */
  export type exportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * The data needed to create a exports.
     */
    data: XOR<exportsCreateInput, exportsUncheckedCreateInput>
  }

  /**
   * exports createMany
   */
  export type exportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exports.
     */
    data: exportsCreateManyInput | exportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exports update
   */
  export type exportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * The data needed to update a exports.
     */
    data: XOR<exportsUpdateInput, exportsUncheckedUpdateInput>
    /**
     * Choose, which exports to update.
     */
    where: exportsWhereUniqueInput
  }

  /**
   * exports updateMany
   */
  export type exportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exports.
     */
    data: XOR<exportsUpdateManyMutationInput, exportsUncheckedUpdateManyInput>
    /**
     * Filter which exports to update
     */
    where?: exportsWhereInput
    /**
     * Limit how many exports to update.
     */
    limit?: number
  }

  /**
   * exports upsert
   */
  export type exportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * The filter to search for the exports to update in case it exists.
     */
    where: exportsWhereUniqueInput
    /**
     * In case the exports found by the `where` argument doesn't exist, create a new exports with this data.
     */
    create: XOR<exportsCreateInput, exportsUncheckedCreateInput>
    /**
     * In case the exports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exportsUpdateInput, exportsUncheckedUpdateInput>
  }

  /**
   * exports delete
   */
  export type exportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    /**
     * Filter which exports to delete.
     */
    where: exportsWhereUniqueInput
  }

  /**
   * exports deleteMany
   */
  export type exportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exports to delete
     */
    where?: exportsWhereInput
    /**
     * Limit how many exports to delete.
     */
    limit?: number
  }

  /**
   * exports without action
   */
  export type exportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
  }


  /**
   * Model failed_import_rows
   */

  export type AggregateFailed_import_rows = {
    _count: Failed_import_rowsCountAggregateOutputType | null
    _avg: Failed_import_rowsAvgAggregateOutputType | null
    _sum: Failed_import_rowsSumAggregateOutputType | null
    _min: Failed_import_rowsMinAggregateOutputType | null
    _max: Failed_import_rowsMaxAggregateOutputType | null
  }

  export type Failed_import_rowsAvgAggregateOutputType = {
    id: number | null
    import_id: number | null
  }

  export type Failed_import_rowsSumAggregateOutputType = {
    id: bigint | null
    import_id: bigint | null
  }

  export type Failed_import_rowsMinAggregateOutputType = {
    id: bigint | null
    import_id: bigint | null
    validation_error: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Failed_import_rowsMaxAggregateOutputType = {
    id: bigint | null
    import_id: bigint | null
    validation_error: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Failed_import_rowsCountAggregateOutputType = {
    id: number
    data: number
    import_id: number
    validation_error: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Failed_import_rowsAvgAggregateInputType = {
    id?: true
    import_id?: true
  }

  export type Failed_import_rowsSumAggregateInputType = {
    id?: true
    import_id?: true
  }

  export type Failed_import_rowsMinAggregateInputType = {
    id?: true
    import_id?: true
    validation_error?: true
    created_at?: true
    updated_at?: true
  }

  export type Failed_import_rowsMaxAggregateInputType = {
    id?: true
    import_id?: true
    validation_error?: true
    created_at?: true
    updated_at?: true
  }

  export type Failed_import_rowsCountAggregateInputType = {
    id?: true
    data?: true
    import_id?: true
    validation_error?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Failed_import_rowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_import_rows to aggregate.
     */
    where?: failed_import_rowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_import_rows to fetch.
     */
    orderBy?: failed_import_rowsOrderByWithRelationInput | failed_import_rowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: failed_import_rowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_import_rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_import_rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned failed_import_rows
    **/
    _count?: true | Failed_import_rowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Failed_import_rowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Failed_import_rowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Failed_import_rowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Failed_import_rowsMaxAggregateInputType
  }

  export type GetFailed_import_rowsAggregateType<T extends Failed_import_rowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFailed_import_rows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailed_import_rows[P]>
      : GetScalarType<T[P], AggregateFailed_import_rows[P]>
  }




  export type failed_import_rowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: failed_import_rowsWhereInput
    orderBy?: failed_import_rowsOrderByWithAggregationInput | failed_import_rowsOrderByWithAggregationInput[]
    by: Failed_import_rowsScalarFieldEnum[] | Failed_import_rowsScalarFieldEnum
    having?: failed_import_rowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Failed_import_rowsCountAggregateInputType | true
    _avg?: Failed_import_rowsAvgAggregateInputType
    _sum?: Failed_import_rowsSumAggregateInputType
    _min?: Failed_import_rowsMinAggregateInputType
    _max?: Failed_import_rowsMaxAggregateInputType
  }

  export type Failed_import_rowsGroupByOutputType = {
    id: bigint
    data: JsonValue
    import_id: bigint
    validation_error: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Failed_import_rowsCountAggregateOutputType | null
    _avg: Failed_import_rowsAvgAggregateOutputType | null
    _sum: Failed_import_rowsSumAggregateOutputType | null
    _min: Failed_import_rowsMinAggregateOutputType | null
    _max: Failed_import_rowsMaxAggregateOutputType | null
  }

  type GetFailed_import_rowsGroupByPayload<T extends failed_import_rowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Failed_import_rowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Failed_import_rowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Failed_import_rowsGroupByOutputType[P]>
            : GetScalarType<T[P], Failed_import_rowsGroupByOutputType[P]>
        }
      >
    >


  export type failed_import_rowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    import_id?: boolean
    validation_error?: boolean
    created_at?: boolean
    updated_at?: boolean
    imports?: boolean | importsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["failed_import_rows"]>



  export type failed_import_rowsSelectScalar = {
    id?: boolean
    data?: boolean
    import_id?: boolean
    validation_error?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type failed_import_rowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "import_id" | "validation_error" | "created_at" | "updated_at", ExtArgs["result"]["failed_import_rows"]>
  export type failed_import_rowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imports?: boolean | importsDefaultArgs<ExtArgs>
  }

  export type $failed_import_rowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "failed_import_rows"
    objects: {
      imports: Prisma.$importsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      data: Prisma.JsonValue
      import_id: bigint
      validation_error: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["failed_import_rows"]>
    composites: {}
  }

  type failed_import_rowsGetPayload<S extends boolean | null | undefined | failed_import_rowsDefaultArgs> = $Result.GetResult<Prisma.$failed_import_rowsPayload, S>

  type failed_import_rowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<failed_import_rowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Failed_import_rowsCountAggregateInputType | true
    }

  export interface failed_import_rowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['failed_import_rows'], meta: { name: 'failed_import_rows' } }
    /**
     * Find zero or one Failed_import_rows that matches the filter.
     * @param {failed_import_rowsFindUniqueArgs} args - Arguments to find a Failed_import_rows
     * @example
     * // Get one Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends failed_import_rowsFindUniqueArgs>(args: SelectSubset<T, failed_import_rowsFindUniqueArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Failed_import_rows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {failed_import_rowsFindUniqueOrThrowArgs} args - Arguments to find a Failed_import_rows
     * @example
     * // Get one Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends failed_import_rowsFindUniqueOrThrowArgs>(args: SelectSubset<T, failed_import_rowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_import_rows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_import_rowsFindFirstArgs} args - Arguments to find a Failed_import_rows
     * @example
     * // Get one Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends failed_import_rowsFindFirstArgs>(args?: SelectSubset<T, failed_import_rowsFindFirstArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_import_rows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_import_rowsFindFirstOrThrowArgs} args - Arguments to find a Failed_import_rows
     * @example
     * // Get one Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends failed_import_rowsFindFirstOrThrowArgs>(args?: SelectSubset<T, failed_import_rowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Failed_import_rows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_import_rowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.findMany()
     * 
     * // Get first 10 Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failed_import_rowsWithIdOnly = await prisma.failed_import_rows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends failed_import_rowsFindManyArgs>(args?: SelectSubset<T, failed_import_rowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Failed_import_rows.
     * @param {failed_import_rowsCreateArgs} args - Arguments to create a Failed_import_rows.
     * @example
     * // Create one Failed_import_rows
     * const Failed_import_rows = await prisma.failed_import_rows.create({
     *   data: {
     *     // ... data to create a Failed_import_rows
     *   }
     * })
     * 
     */
    create<T extends failed_import_rowsCreateArgs>(args: SelectSubset<T, failed_import_rowsCreateArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Failed_import_rows.
     * @param {failed_import_rowsCreateManyArgs} args - Arguments to create many Failed_import_rows.
     * @example
     * // Create many Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends failed_import_rowsCreateManyArgs>(args?: SelectSubset<T, failed_import_rowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Failed_import_rows.
     * @param {failed_import_rowsDeleteArgs} args - Arguments to delete one Failed_import_rows.
     * @example
     * // Delete one Failed_import_rows
     * const Failed_import_rows = await prisma.failed_import_rows.delete({
     *   where: {
     *     // ... filter to delete one Failed_import_rows
     *   }
     * })
     * 
     */
    delete<T extends failed_import_rowsDeleteArgs>(args: SelectSubset<T, failed_import_rowsDeleteArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Failed_import_rows.
     * @param {failed_import_rowsUpdateArgs} args - Arguments to update one Failed_import_rows.
     * @example
     * // Update one Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends failed_import_rowsUpdateArgs>(args: SelectSubset<T, failed_import_rowsUpdateArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Failed_import_rows.
     * @param {failed_import_rowsDeleteManyArgs} args - Arguments to filter Failed_import_rows to delete.
     * @example
     * // Delete a few Failed_import_rows
     * const { count } = await prisma.failed_import_rows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends failed_import_rowsDeleteManyArgs>(args?: SelectSubset<T, failed_import_rowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Failed_import_rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_import_rowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends failed_import_rowsUpdateManyArgs>(args: SelectSubset<T, failed_import_rowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Failed_import_rows.
     * @param {failed_import_rowsUpsertArgs} args - Arguments to update or create a Failed_import_rows.
     * @example
     * // Update or create a Failed_import_rows
     * const failed_import_rows = await prisma.failed_import_rows.upsert({
     *   create: {
     *     // ... data to create a Failed_import_rows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Failed_import_rows we want to update
     *   }
     * })
     */
    upsert<T extends failed_import_rowsUpsertArgs>(args: SelectSubset<T, failed_import_rowsUpsertArgs<ExtArgs>>): Prisma__failed_import_rowsClient<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Failed_import_rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_import_rowsCountArgs} args - Arguments to filter Failed_import_rows to count.
     * @example
     * // Count the number of Failed_import_rows
     * const count = await prisma.failed_import_rows.count({
     *   where: {
     *     // ... the filter for the Failed_import_rows we want to count
     *   }
     * })
    **/
    count<T extends failed_import_rowsCountArgs>(
      args?: Subset<T, failed_import_rowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Failed_import_rowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Failed_import_rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Failed_import_rowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Failed_import_rowsAggregateArgs>(args: Subset<T, Failed_import_rowsAggregateArgs>): Prisma.PrismaPromise<GetFailed_import_rowsAggregateType<T>>

    /**
     * Group by Failed_import_rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_import_rowsGroupByArgs} args - Group by arguments.
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
      T extends failed_import_rowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: failed_import_rowsGroupByArgs['orderBy'] }
        : { orderBy?: failed_import_rowsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, failed_import_rowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailed_import_rowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the failed_import_rows model
   */
  readonly fields: failed_import_rowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for failed_import_rows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__failed_import_rowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imports<T extends importsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, importsDefaultArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the failed_import_rows model
   */
  interface failed_import_rowsFieldRefs {
    readonly id: FieldRef<"failed_import_rows", 'BigInt'>
    readonly data: FieldRef<"failed_import_rows", 'Json'>
    readonly import_id: FieldRef<"failed_import_rows", 'BigInt'>
    readonly validation_error: FieldRef<"failed_import_rows", 'String'>
    readonly created_at: FieldRef<"failed_import_rows", 'DateTime'>
    readonly updated_at: FieldRef<"failed_import_rows", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * failed_import_rows findUnique
   */
  export type failed_import_rowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * Filter, which failed_import_rows to fetch.
     */
    where: failed_import_rowsWhereUniqueInput
  }

  /**
   * failed_import_rows findUniqueOrThrow
   */
  export type failed_import_rowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * Filter, which failed_import_rows to fetch.
     */
    where: failed_import_rowsWhereUniqueInput
  }

  /**
   * failed_import_rows findFirst
   */
  export type failed_import_rowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * Filter, which failed_import_rows to fetch.
     */
    where?: failed_import_rowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_import_rows to fetch.
     */
    orderBy?: failed_import_rowsOrderByWithRelationInput | failed_import_rowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_import_rows.
     */
    cursor?: failed_import_rowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_import_rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_import_rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_import_rows.
     */
    distinct?: Failed_import_rowsScalarFieldEnum | Failed_import_rowsScalarFieldEnum[]
  }

  /**
   * failed_import_rows findFirstOrThrow
   */
  export type failed_import_rowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * Filter, which failed_import_rows to fetch.
     */
    where?: failed_import_rowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_import_rows to fetch.
     */
    orderBy?: failed_import_rowsOrderByWithRelationInput | failed_import_rowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_import_rows.
     */
    cursor?: failed_import_rowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_import_rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_import_rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_import_rows.
     */
    distinct?: Failed_import_rowsScalarFieldEnum | Failed_import_rowsScalarFieldEnum[]
  }

  /**
   * failed_import_rows findMany
   */
  export type failed_import_rowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * Filter, which failed_import_rows to fetch.
     */
    where?: failed_import_rowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_import_rows to fetch.
     */
    orderBy?: failed_import_rowsOrderByWithRelationInput | failed_import_rowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing failed_import_rows.
     */
    cursor?: failed_import_rowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_import_rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_import_rows.
     */
    skip?: number
    distinct?: Failed_import_rowsScalarFieldEnum | Failed_import_rowsScalarFieldEnum[]
  }

  /**
   * failed_import_rows create
   */
  export type failed_import_rowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * The data needed to create a failed_import_rows.
     */
    data: XOR<failed_import_rowsCreateInput, failed_import_rowsUncheckedCreateInput>
  }

  /**
   * failed_import_rows createMany
   */
  export type failed_import_rowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many failed_import_rows.
     */
    data: failed_import_rowsCreateManyInput | failed_import_rowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * failed_import_rows update
   */
  export type failed_import_rowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * The data needed to update a failed_import_rows.
     */
    data: XOR<failed_import_rowsUpdateInput, failed_import_rowsUncheckedUpdateInput>
    /**
     * Choose, which failed_import_rows to update.
     */
    where: failed_import_rowsWhereUniqueInput
  }

  /**
   * failed_import_rows updateMany
   */
  export type failed_import_rowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update failed_import_rows.
     */
    data: XOR<failed_import_rowsUpdateManyMutationInput, failed_import_rowsUncheckedUpdateManyInput>
    /**
     * Filter which failed_import_rows to update
     */
    where?: failed_import_rowsWhereInput
    /**
     * Limit how many failed_import_rows to update.
     */
    limit?: number
  }

  /**
   * failed_import_rows upsert
   */
  export type failed_import_rowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * The filter to search for the failed_import_rows to update in case it exists.
     */
    where: failed_import_rowsWhereUniqueInput
    /**
     * In case the failed_import_rows found by the `where` argument doesn't exist, create a new failed_import_rows with this data.
     */
    create: XOR<failed_import_rowsCreateInput, failed_import_rowsUncheckedCreateInput>
    /**
     * In case the failed_import_rows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<failed_import_rowsUpdateInput, failed_import_rowsUncheckedUpdateInput>
  }

  /**
   * failed_import_rows delete
   */
  export type failed_import_rowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    /**
     * Filter which failed_import_rows to delete.
     */
    where: failed_import_rowsWhereUniqueInput
  }

  /**
   * failed_import_rows deleteMany
   */
  export type failed_import_rowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_import_rows to delete
     */
    where?: failed_import_rowsWhereInput
    /**
     * Limit how many failed_import_rows to delete.
     */
    limit?: number
  }

  /**
   * failed_import_rows without action
   */
  export type failed_import_rowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
  }


  /**
   * Model failed_jobs
   */

  export type AggregateFailed_jobs = {
    _count: Failed_jobsCountAggregateOutputType | null
    _avg: Failed_jobsAvgAggregateOutputType | null
    _sum: Failed_jobsSumAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  export type Failed_jobsAvgAggregateOutputType = {
    id: number | null
  }

  export type Failed_jobsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Failed_jobsMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsCountAggregateOutputType = {
    id: number
    uuid: number
    connection: number
    queue: number
    payload: number
    exception: number
    failed_at: number
    _all: number
  }


  export type Failed_jobsAvgAggregateInputType = {
    id?: true
  }

  export type Failed_jobsSumAggregateInputType = {
    id?: true
  }

  export type Failed_jobsMinAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsMaxAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsCountAggregateInputType = {
    id?: true
    uuid?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
    _all?: true
  }

  export type Failed_jobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_jobs to aggregate.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned failed_jobs
    **/
    _count?: true | Failed_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Failed_jobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Failed_jobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Failed_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Failed_jobsMaxAggregateInputType
  }

  export type GetFailed_jobsAggregateType<T extends Failed_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateFailed_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailed_jobs[P]>
      : GetScalarType<T[P], AggregateFailed_jobs[P]>
  }




  export type failed_jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: failed_jobsWhereInput
    orderBy?: failed_jobsOrderByWithAggregationInput | failed_jobsOrderByWithAggregationInput[]
    by: Failed_jobsScalarFieldEnum[] | Failed_jobsScalarFieldEnum
    having?: failed_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Failed_jobsCountAggregateInputType | true
    _avg?: Failed_jobsAvgAggregateInputType
    _sum?: Failed_jobsSumAggregateInputType
    _min?: Failed_jobsMinAggregateInputType
    _max?: Failed_jobsMaxAggregateInputType
  }

  export type Failed_jobsGroupByOutputType = {
    id: bigint
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at: Date
    _count: Failed_jobsCountAggregateOutputType | null
    _avg: Failed_jobsAvgAggregateOutputType | null
    _sum: Failed_jobsSumAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  type GetFailed_jobsGroupByPayload<T extends failed_jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Failed_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Failed_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
        }
      >
    >


  export type failed_jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    connection?: boolean
    queue?: boolean
    payload?: boolean
    exception?: boolean
    failed_at?: boolean
  }, ExtArgs["result"]["failed_jobs"]>



  export type failed_jobsSelectScalar = {
    id?: boolean
    uuid?: boolean
    connection?: boolean
    queue?: boolean
    payload?: boolean
    exception?: boolean
    failed_at?: boolean
  }

  export type failed_jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "connection" | "queue" | "payload" | "exception" | "failed_at", ExtArgs["result"]["failed_jobs"]>

  export type $failed_jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "failed_jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      connection: string
      queue: string
      payload: string
      exception: string
      failed_at: Date
    }, ExtArgs["result"]["failed_jobs"]>
    composites: {}
  }

  type failed_jobsGetPayload<S extends boolean | null | undefined | failed_jobsDefaultArgs> = $Result.GetResult<Prisma.$failed_jobsPayload, S>

  type failed_jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<failed_jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Failed_jobsCountAggregateInputType | true
    }

  export interface failed_jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['failed_jobs'], meta: { name: 'failed_jobs' } }
    /**
     * Find zero or one Failed_jobs that matches the filter.
     * @param {failed_jobsFindUniqueArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends failed_jobsFindUniqueArgs>(args: SelectSubset<T, failed_jobsFindUniqueArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Failed_jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {failed_jobsFindUniqueOrThrowArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends failed_jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, failed_jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindFirstArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends failed_jobsFindFirstArgs>(args?: SelectSubset<T, failed_jobsFindFirstArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Failed_jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindFirstOrThrowArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends failed_jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, failed_jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany()
     * 
     * // Get first 10 Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failed_jobsWithIdOnly = await prisma.failed_jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends failed_jobsFindManyArgs>(args?: SelectSubset<T, failed_jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Failed_jobs.
     * @param {failed_jobsCreateArgs} args - Arguments to create a Failed_jobs.
     * @example
     * // Create one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.create({
     *   data: {
     *     // ... data to create a Failed_jobs
     *   }
     * })
     * 
     */
    create<T extends failed_jobsCreateArgs>(args: SelectSubset<T, failed_jobsCreateArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Failed_jobs.
     * @param {failed_jobsCreateManyArgs} args - Arguments to create many Failed_jobs.
     * @example
     * // Create many Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends failed_jobsCreateManyArgs>(args?: SelectSubset<T, failed_jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Failed_jobs.
     * @param {failed_jobsDeleteArgs} args - Arguments to delete one Failed_jobs.
     * @example
     * // Delete one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.delete({
     *   where: {
     *     // ... filter to delete one Failed_jobs
     *   }
     * })
     * 
     */
    delete<T extends failed_jobsDeleteArgs>(args: SelectSubset<T, failed_jobsDeleteArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Failed_jobs.
     * @param {failed_jobsUpdateArgs} args - Arguments to update one Failed_jobs.
     * @example
     * // Update one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends failed_jobsUpdateArgs>(args: SelectSubset<T, failed_jobsUpdateArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Failed_jobs.
     * @param {failed_jobsDeleteManyArgs} args - Arguments to filter Failed_jobs to delete.
     * @example
     * // Delete a few Failed_jobs
     * const { count } = await prisma.failed_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends failed_jobsDeleteManyArgs>(args?: SelectSubset<T, failed_jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends failed_jobsUpdateManyArgs>(args: SelectSubset<T, failed_jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Failed_jobs.
     * @param {failed_jobsUpsertArgs} args - Arguments to update or create a Failed_jobs.
     * @example
     * // Update or create a Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.upsert({
     *   create: {
     *     // ... data to create a Failed_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Failed_jobs we want to update
     *   }
     * })
     */
    upsert<T extends failed_jobsUpsertArgs>(args: SelectSubset<T, failed_jobsUpsertArgs<ExtArgs>>): Prisma__failed_jobsClient<$Result.GetResult<Prisma.$failed_jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsCountArgs} args - Arguments to filter Failed_jobs to count.
     * @example
     * // Count the number of Failed_jobs
     * const count = await prisma.failed_jobs.count({
     *   where: {
     *     // ... the filter for the Failed_jobs we want to count
     *   }
     * })
    **/
    count<T extends failed_jobsCountArgs>(
      args?: Subset<T, failed_jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Failed_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Failed_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Failed_jobsAggregateArgs>(args: Subset<T, Failed_jobsAggregateArgs>): Prisma.PrismaPromise<GetFailed_jobsAggregateType<T>>

    /**
     * Group by Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsGroupByArgs} args - Group by arguments.
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
      T extends failed_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: failed_jobsGroupByArgs['orderBy'] }
        : { orderBy?: failed_jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, failed_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailed_jobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the failed_jobs model
   */
  readonly fields: failed_jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for failed_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__failed_jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the failed_jobs model
   */
  interface failed_jobsFieldRefs {
    readonly id: FieldRef<"failed_jobs", 'BigInt'>
    readonly uuid: FieldRef<"failed_jobs", 'String'>
    readonly connection: FieldRef<"failed_jobs", 'String'>
    readonly queue: FieldRef<"failed_jobs", 'String'>
    readonly payload: FieldRef<"failed_jobs", 'String'>
    readonly exception: FieldRef<"failed_jobs", 'String'>
    readonly failed_at: FieldRef<"failed_jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * failed_jobs findUnique
   */
  export type failed_jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs findUniqueOrThrow
   */
  export type failed_jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs findFirst
   */
  export type failed_jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_jobs.
     */
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs findFirstOrThrow
   */
  export type failed_jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_jobs.
     */
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs findMany
   */
  export type failed_jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter, which failed_jobs to fetch.
     */
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     */
    orderBy?: failed_jobsOrderByWithRelationInput | failed_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing failed_jobs.
     */
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     */
    skip?: number
    distinct?: Failed_jobsScalarFieldEnum | Failed_jobsScalarFieldEnum[]
  }

  /**
   * failed_jobs create
   */
  export type failed_jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a failed_jobs.
     */
    data: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
  }

  /**
   * failed_jobs createMany
   */
  export type failed_jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many failed_jobs.
     */
    data: failed_jobsCreateManyInput | failed_jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * failed_jobs update
   */
  export type failed_jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a failed_jobs.
     */
    data: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
    /**
     * Choose, which failed_jobs to update.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs updateMany
   */
  export type failed_jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update failed_jobs.
     */
    data: XOR<failed_jobsUpdateManyMutationInput, failed_jobsUncheckedUpdateManyInput>
    /**
     * Filter which failed_jobs to update
     */
    where?: failed_jobsWhereInput
    /**
     * Limit how many failed_jobs to update.
     */
    limit?: number
  }

  /**
   * failed_jobs upsert
   */
  export type failed_jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the failed_jobs to update in case it exists.
     */
    where: failed_jobsWhereUniqueInput
    /**
     * In case the failed_jobs found by the `where` argument doesn't exist, create a new failed_jobs with this data.
     */
    create: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
    /**
     * In case the failed_jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
  }

  /**
   * failed_jobs delete
   */
  export type failed_jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
    /**
     * Filter which failed_jobs to delete.
     */
    where: failed_jobsWhereUniqueInput
  }

  /**
   * failed_jobs deleteMany
   */
  export type failed_jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which failed_jobs to delete
     */
    where?: failed_jobsWhereInput
    /**
     * Limit how many failed_jobs to delete.
     */
    limit?: number
  }

  /**
   * failed_jobs without action
   */
  export type failed_jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_jobs
     */
    select?: failed_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_jobs
     */
    omit?: failed_jobsOmit<ExtArgs> | null
  }


  /**
   * Model imports
   */

  export type AggregateImports = {
    _count: ImportsCountAggregateOutputType | null
    _avg: ImportsAvgAggregateOutputType | null
    _sum: ImportsSumAggregateOutputType | null
    _min: ImportsMinAggregateOutputType | null
    _max: ImportsMaxAggregateOutputType | null
  }

  export type ImportsAvgAggregateOutputType = {
    id: number | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: number | null
  }

  export type ImportsSumAggregateOutputType = {
    id: bigint | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: bigint | null
  }

  export type ImportsMinAggregateOutputType = {
    id: bigint | null
    completed_at: Date | null
    file_name: string | null
    file_path: string | null
    importer: string | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImportsMaxAggregateOutputType = {
    id: bigint | null
    completed_at: Date | null
    file_name: string | null
    file_path: string | null
    importer: string | null
    processed_rows: number | null
    total_rows: number | null
    successful_rows: number | null
    user_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImportsCountAggregateOutputType = {
    id: number
    completed_at: number
    file_name: number
    file_path: number
    importer: number
    processed_rows: number
    total_rows: number
    successful_rows: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ImportsAvgAggregateInputType = {
    id?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
  }

  export type ImportsSumAggregateInputType = {
    id?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
  }

  export type ImportsMinAggregateInputType = {
    id?: true
    completed_at?: true
    file_name?: true
    file_path?: true
    importer?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ImportsMaxAggregateInputType = {
    id?: true
    completed_at?: true
    file_name?: true
    file_path?: true
    importer?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ImportsCountAggregateInputType = {
    id?: true
    completed_at?: true
    file_name?: true
    file_path?: true
    importer?: true
    processed_rows?: true
    total_rows?: true
    successful_rows?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ImportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imports to aggregate.
     */
    where?: importsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imports to fetch.
     */
    orderBy?: importsOrderByWithRelationInput | importsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: importsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imports
    **/
    _count?: true | ImportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportsMaxAggregateInputType
  }

  export type GetImportsAggregateType<T extends ImportsAggregateArgs> = {
        [P in keyof T & keyof AggregateImports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImports[P]>
      : GetScalarType<T[P], AggregateImports[P]>
  }




  export type importsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: importsWhereInput
    orderBy?: importsOrderByWithAggregationInput | importsOrderByWithAggregationInput[]
    by: ImportsScalarFieldEnum[] | ImportsScalarFieldEnum
    having?: importsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportsCountAggregateInputType | true
    _avg?: ImportsAvgAggregateInputType
    _sum?: ImportsSumAggregateInputType
    _min?: ImportsMinAggregateInputType
    _max?: ImportsMaxAggregateInputType
  }

  export type ImportsGroupByOutputType = {
    id: bigint
    completed_at: Date | null
    file_name: string
    file_path: string
    importer: string
    processed_rows: number
    total_rows: number
    successful_rows: number
    user_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: ImportsCountAggregateOutputType | null
    _avg: ImportsAvgAggregateOutputType | null
    _sum: ImportsSumAggregateOutputType | null
    _min: ImportsMinAggregateOutputType | null
    _max: ImportsMaxAggregateOutputType | null
  }

  type GetImportsGroupByPayload<T extends importsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportsGroupByOutputType[P]>
            : GetScalarType<T[P], ImportsGroupByOutputType[P]>
        }
      >
    >


  export type importsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed_at?: boolean
    file_name?: boolean
    file_path?: boolean
    importer?: boolean
    processed_rows?: boolean
    total_rows?: boolean
    successful_rows?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    failed_import_rows?: boolean | imports$failed_import_rowsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ImportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imports"]>



  export type importsSelectScalar = {
    id?: boolean
    completed_at?: boolean
    file_name?: boolean
    file_path?: boolean
    importer?: boolean
    processed_rows?: boolean
    total_rows?: boolean
    successful_rows?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type importsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completed_at" | "file_name" | "file_path" | "importer" | "processed_rows" | "total_rows" | "successful_rows" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["imports"]>
  export type importsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    failed_import_rows?: boolean | imports$failed_import_rowsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ImportsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $importsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imports"
    objects: {
      failed_import_rows: Prisma.$failed_import_rowsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      completed_at: Date | null
      file_name: string
      file_path: string
      importer: string
      processed_rows: number
      total_rows: number
      successful_rows: number
      user_id: bigint
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["imports"]>
    composites: {}
  }

  type importsGetPayload<S extends boolean | null | undefined | importsDefaultArgs> = $Result.GetResult<Prisma.$importsPayload, S>

  type importsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<importsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportsCountAggregateInputType | true
    }

  export interface importsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imports'], meta: { name: 'imports' } }
    /**
     * Find zero or one Imports that matches the filter.
     * @param {importsFindUniqueArgs} args - Arguments to find a Imports
     * @example
     * // Get one Imports
     * const imports = await prisma.imports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends importsFindUniqueArgs>(args: SelectSubset<T, importsFindUniqueArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {importsFindUniqueOrThrowArgs} args - Arguments to find a Imports
     * @example
     * // Get one Imports
     * const imports = await prisma.imports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends importsFindUniqueOrThrowArgs>(args: SelectSubset<T, importsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {importsFindFirstArgs} args - Arguments to find a Imports
     * @example
     * // Get one Imports
     * const imports = await prisma.imports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends importsFindFirstArgs>(args?: SelectSubset<T, importsFindFirstArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {importsFindFirstOrThrowArgs} args - Arguments to find a Imports
     * @example
     * // Get one Imports
     * const imports = await prisma.imports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends importsFindFirstOrThrowArgs>(args?: SelectSubset<T, importsFindFirstOrThrowArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {importsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imports
     * const imports = await prisma.imports.findMany()
     * 
     * // Get first 10 Imports
     * const imports = await prisma.imports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importsWithIdOnly = await prisma.imports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends importsFindManyArgs>(args?: SelectSubset<T, importsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imports.
     * @param {importsCreateArgs} args - Arguments to create a Imports.
     * @example
     * // Create one Imports
     * const Imports = await prisma.imports.create({
     *   data: {
     *     // ... data to create a Imports
     *   }
     * })
     * 
     */
    create<T extends importsCreateArgs>(args: SelectSubset<T, importsCreateArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imports.
     * @param {importsCreateManyArgs} args - Arguments to create many Imports.
     * @example
     * // Create many Imports
     * const imports = await prisma.imports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends importsCreateManyArgs>(args?: SelectSubset<T, importsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Imports.
     * @param {importsDeleteArgs} args - Arguments to delete one Imports.
     * @example
     * // Delete one Imports
     * const Imports = await prisma.imports.delete({
     *   where: {
     *     // ... filter to delete one Imports
     *   }
     * })
     * 
     */
    delete<T extends importsDeleteArgs>(args: SelectSubset<T, importsDeleteArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imports.
     * @param {importsUpdateArgs} args - Arguments to update one Imports.
     * @example
     * // Update one Imports
     * const imports = await prisma.imports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends importsUpdateArgs>(args: SelectSubset<T, importsUpdateArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imports.
     * @param {importsDeleteManyArgs} args - Arguments to filter Imports to delete.
     * @example
     * // Delete a few Imports
     * const { count } = await prisma.imports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends importsDeleteManyArgs>(args?: SelectSubset<T, importsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {importsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imports
     * const imports = await prisma.imports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends importsUpdateManyArgs>(args: SelectSubset<T, importsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imports.
     * @param {importsUpsertArgs} args - Arguments to update or create a Imports.
     * @example
     * // Update or create a Imports
     * const imports = await prisma.imports.upsert({
     *   create: {
     *     // ... data to create a Imports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imports we want to update
     *   }
     * })
     */
    upsert<T extends importsUpsertArgs>(args: SelectSubset<T, importsUpsertArgs<ExtArgs>>): Prisma__importsClient<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {importsCountArgs} args - Arguments to filter Imports to count.
     * @example
     * // Count the number of Imports
     * const count = await prisma.imports.count({
     *   where: {
     *     // ... the filter for the Imports we want to count
     *   }
     * })
    **/
    count<T extends importsCountArgs>(
      args?: Subset<T, importsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImportsAggregateArgs>(args: Subset<T, ImportsAggregateArgs>): Prisma.PrismaPromise<GetImportsAggregateType<T>>

    /**
     * Group by Imports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {importsGroupByArgs} args - Group by arguments.
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
      T extends importsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: importsGroupByArgs['orderBy'] }
        : { orderBy?: importsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, importsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imports model
   */
  readonly fields: importsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__importsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    failed_import_rows<T extends imports$failed_import_rowsArgs<ExtArgs> = {}>(args?: Subset<T, imports$failed_import_rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$failed_import_rowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the imports model
   */
  interface importsFieldRefs {
    readonly id: FieldRef<"imports", 'BigInt'>
    readonly completed_at: FieldRef<"imports", 'DateTime'>
    readonly file_name: FieldRef<"imports", 'String'>
    readonly file_path: FieldRef<"imports", 'String'>
    readonly importer: FieldRef<"imports", 'String'>
    readonly processed_rows: FieldRef<"imports", 'Int'>
    readonly total_rows: FieldRef<"imports", 'Int'>
    readonly successful_rows: FieldRef<"imports", 'Int'>
    readonly user_id: FieldRef<"imports", 'BigInt'>
    readonly created_at: FieldRef<"imports", 'DateTime'>
    readonly updated_at: FieldRef<"imports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * imports findUnique
   */
  export type importsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * Filter, which imports to fetch.
     */
    where: importsWhereUniqueInput
  }

  /**
   * imports findUniqueOrThrow
   */
  export type importsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * Filter, which imports to fetch.
     */
    where: importsWhereUniqueInput
  }

  /**
   * imports findFirst
   */
  export type importsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * Filter, which imports to fetch.
     */
    where?: importsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imports to fetch.
     */
    orderBy?: importsOrderByWithRelationInput | importsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imports.
     */
    cursor?: importsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imports.
     */
    distinct?: ImportsScalarFieldEnum | ImportsScalarFieldEnum[]
  }

  /**
   * imports findFirstOrThrow
   */
  export type importsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * Filter, which imports to fetch.
     */
    where?: importsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imports to fetch.
     */
    orderBy?: importsOrderByWithRelationInput | importsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imports.
     */
    cursor?: importsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imports.
     */
    distinct?: ImportsScalarFieldEnum | ImportsScalarFieldEnum[]
  }

  /**
   * imports findMany
   */
  export type importsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * Filter, which imports to fetch.
     */
    where?: importsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imports to fetch.
     */
    orderBy?: importsOrderByWithRelationInput | importsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imports.
     */
    cursor?: importsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imports.
     */
    skip?: number
    distinct?: ImportsScalarFieldEnum | ImportsScalarFieldEnum[]
  }

  /**
   * imports create
   */
  export type importsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * The data needed to create a imports.
     */
    data: XOR<importsCreateInput, importsUncheckedCreateInput>
  }

  /**
   * imports createMany
   */
  export type importsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imports.
     */
    data: importsCreateManyInput | importsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imports update
   */
  export type importsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * The data needed to update a imports.
     */
    data: XOR<importsUpdateInput, importsUncheckedUpdateInput>
    /**
     * Choose, which imports to update.
     */
    where: importsWhereUniqueInput
  }

  /**
   * imports updateMany
   */
  export type importsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imports.
     */
    data: XOR<importsUpdateManyMutationInput, importsUncheckedUpdateManyInput>
    /**
     * Filter which imports to update
     */
    where?: importsWhereInput
    /**
     * Limit how many imports to update.
     */
    limit?: number
  }

  /**
   * imports upsert
   */
  export type importsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * The filter to search for the imports to update in case it exists.
     */
    where: importsWhereUniqueInput
    /**
     * In case the imports found by the `where` argument doesn't exist, create a new imports with this data.
     */
    create: XOR<importsCreateInput, importsUncheckedCreateInput>
    /**
     * In case the imports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<importsUpdateInput, importsUncheckedUpdateInput>
  }

  /**
   * imports delete
   */
  export type importsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    /**
     * Filter which imports to delete.
     */
    where: importsWhereUniqueInput
  }

  /**
   * imports deleteMany
   */
  export type importsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imports to delete
     */
    where?: importsWhereInput
    /**
     * Limit how many imports to delete.
     */
    limit?: number
  }

  /**
   * imports.failed_import_rows
   */
  export type imports$failed_import_rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the failed_import_rows
     */
    select?: failed_import_rowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the failed_import_rows
     */
    omit?: failed_import_rowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: failed_import_rowsInclude<ExtArgs> | null
    where?: failed_import_rowsWhereInput
    orderBy?: failed_import_rowsOrderByWithRelationInput | failed_import_rowsOrderByWithRelationInput[]
    cursor?: failed_import_rowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Failed_import_rowsScalarFieldEnum | Failed_import_rowsScalarFieldEnum[]
  }

  /**
   * imports without action
   */
  export type importsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
  }


  /**
   * Model job_batches
   */

  export type AggregateJob_batches = {
    _count: Job_batchesCountAggregateOutputType | null
    _avg: Job_batchesAvgAggregateOutputType | null
    _sum: Job_batchesSumAggregateOutputType | null
    _min: Job_batchesMinAggregateOutputType | null
    _max: Job_batchesMaxAggregateOutputType | null
  }

  export type Job_batchesAvgAggregateOutputType = {
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesSumAggregateOutputType = {
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesMinAggregateOutputType = {
    id: string | null
    name: string | null
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    failed_job_ids: string | null
    options: string | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    total_jobs: number | null
    pending_jobs: number | null
    failed_jobs: number | null
    failed_job_ids: string | null
    options: string | null
    cancelled_at: number | null
    created_at: number | null
    finished_at: number | null
  }

  export type Job_batchesCountAggregateOutputType = {
    id: number
    name: number
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: number
    options: number
    cancelled_at: number
    created_at: number
    finished_at: number
    _all: number
  }


  export type Job_batchesAvgAggregateInputType = {
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesSumAggregateInputType = {
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesMinAggregateInputType = {
    id?: true
    name?: true
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    failed_job_ids?: true
    options?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesMaxAggregateInputType = {
    id?: true
    name?: true
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    failed_job_ids?: true
    options?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
  }

  export type Job_batchesCountAggregateInputType = {
    id?: true
    name?: true
    total_jobs?: true
    pending_jobs?: true
    failed_jobs?: true
    failed_job_ids?: true
    options?: true
    cancelled_at?: true
    created_at?: true
    finished_at?: true
    _all?: true
  }

  export type Job_batchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_batches to aggregate.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_batches
    **/
    _count?: true | Job_batchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_batchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_batchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_batchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_batchesMaxAggregateInputType
  }

  export type GetJob_batchesAggregateType<T extends Job_batchesAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_batches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_batches[P]>
      : GetScalarType<T[P], AggregateJob_batches[P]>
  }




  export type job_batchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_batchesWhereInput
    orderBy?: job_batchesOrderByWithAggregationInput | job_batchesOrderByWithAggregationInput[]
    by: Job_batchesScalarFieldEnum[] | Job_batchesScalarFieldEnum
    having?: job_batchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_batchesCountAggregateInputType | true
    _avg?: Job_batchesAvgAggregateInputType
    _sum?: Job_batchesSumAggregateInputType
    _min?: Job_batchesMinAggregateInputType
    _max?: Job_batchesMaxAggregateInputType
  }

  export type Job_batchesGroupByOutputType = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options: string | null
    cancelled_at: number | null
    created_at: number
    finished_at: number | null
    _count: Job_batchesCountAggregateOutputType | null
    _avg: Job_batchesAvgAggregateOutputType | null
    _sum: Job_batchesSumAggregateOutputType | null
    _min: Job_batchesMinAggregateOutputType | null
    _max: Job_batchesMaxAggregateOutputType | null
  }

  type GetJob_batchesGroupByPayload<T extends job_batchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_batchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_batchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_batchesGroupByOutputType[P]>
            : GetScalarType<T[P], Job_batchesGroupByOutputType[P]>
        }
      >
    >


  export type job_batchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    total_jobs?: boolean
    pending_jobs?: boolean
    failed_jobs?: boolean
    failed_job_ids?: boolean
    options?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    finished_at?: boolean
  }, ExtArgs["result"]["job_batches"]>



  export type job_batchesSelectScalar = {
    id?: boolean
    name?: boolean
    total_jobs?: boolean
    pending_jobs?: boolean
    failed_jobs?: boolean
    failed_job_ids?: boolean
    options?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    finished_at?: boolean
  }

  export type job_batchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "total_jobs" | "pending_jobs" | "failed_jobs" | "failed_job_ids" | "options" | "cancelled_at" | "created_at" | "finished_at", ExtArgs["result"]["job_batches"]>

  export type $job_batchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_batches"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      total_jobs: number
      pending_jobs: number
      failed_jobs: number
      failed_job_ids: string
      options: string | null
      cancelled_at: number | null
      created_at: number
      finished_at: number | null
    }, ExtArgs["result"]["job_batches"]>
    composites: {}
  }

  type job_batchesGetPayload<S extends boolean | null | undefined | job_batchesDefaultArgs> = $Result.GetResult<Prisma.$job_batchesPayload, S>

  type job_batchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_batchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_batchesCountAggregateInputType | true
    }

  export interface job_batchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_batches'], meta: { name: 'job_batches' } }
    /**
     * Find zero or one Job_batches that matches the filter.
     * @param {job_batchesFindUniqueArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_batchesFindUniqueArgs>(args: SelectSubset<T, job_batchesFindUniqueArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_batches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_batchesFindUniqueOrThrowArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_batchesFindUniqueOrThrowArgs>(args: SelectSubset<T, job_batchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesFindFirstArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_batchesFindFirstArgs>(args?: SelectSubset<T, job_batchesFindFirstArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_batches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesFindFirstOrThrowArgs} args - Arguments to find a Job_batches
     * @example
     * // Get one Job_batches
     * const job_batches = await prisma.job_batches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_batchesFindFirstOrThrowArgs>(args?: SelectSubset<T, job_batchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_batches
     * const job_batches = await prisma.job_batches.findMany()
     * 
     * // Get first 10 Job_batches
     * const job_batches = await prisma.job_batches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_batchesWithIdOnly = await prisma.job_batches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_batchesFindManyArgs>(args?: SelectSubset<T, job_batchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_batches.
     * @param {job_batchesCreateArgs} args - Arguments to create a Job_batches.
     * @example
     * // Create one Job_batches
     * const Job_batches = await prisma.job_batches.create({
     *   data: {
     *     // ... data to create a Job_batches
     *   }
     * })
     * 
     */
    create<T extends job_batchesCreateArgs>(args: SelectSubset<T, job_batchesCreateArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_batches.
     * @param {job_batchesCreateManyArgs} args - Arguments to create many Job_batches.
     * @example
     * // Create many Job_batches
     * const job_batches = await prisma.job_batches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_batchesCreateManyArgs>(args?: SelectSubset<T, job_batchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_batches.
     * @param {job_batchesDeleteArgs} args - Arguments to delete one Job_batches.
     * @example
     * // Delete one Job_batches
     * const Job_batches = await prisma.job_batches.delete({
     *   where: {
     *     // ... filter to delete one Job_batches
     *   }
     * })
     * 
     */
    delete<T extends job_batchesDeleteArgs>(args: SelectSubset<T, job_batchesDeleteArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_batches.
     * @param {job_batchesUpdateArgs} args - Arguments to update one Job_batches.
     * @example
     * // Update one Job_batches
     * const job_batches = await prisma.job_batches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_batchesUpdateArgs>(args: SelectSubset<T, job_batchesUpdateArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_batches.
     * @param {job_batchesDeleteManyArgs} args - Arguments to filter Job_batches to delete.
     * @example
     * // Delete a few Job_batches
     * const { count } = await prisma.job_batches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_batchesDeleteManyArgs>(args?: SelectSubset<T, job_batchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_batches
     * const job_batches = await prisma.job_batches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_batchesUpdateManyArgs>(args: SelectSubset<T, job_batchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_batches.
     * @param {job_batchesUpsertArgs} args - Arguments to update or create a Job_batches.
     * @example
     * // Update or create a Job_batches
     * const job_batches = await prisma.job_batches.upsert({
     *   create: {
     *     // ... data to create a Job_batches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_batches we want to update
     *   }
     * })
     */
    upsert<T extends job_batchesUpsertArgs>(args: SelectSubset<T, job_batchesUpsertArgs<ExtArgs>>): Prisma__job_batchesClient<$Result.GetResult<Prisma.$job_batchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesCountArgs} args - Arguments to filter Job_batches to count.
     * @example
     * // Count the number of Job_batches
     * const count = await prisma.job_batches.count({
     *   where: {
     *     // ... the filter for the Job_batches we want to count
     *   }
     * })
    **/
    count<T extends job_batchesCountArgs>(
      args?: Subset<T, job_batchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_batchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_batchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_batchesAggregateArgs>(args: Subset<T, Job_batchesAggregateArgs>): Prisma.PrismaPromise<GetJob_batchesAggregateType<T>>

    /**
     * Group by Job_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_batchesGroupByArgs} args - Group by arguments.
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
      T extends job_batchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_batchesGroupByArgs['orderBy'] }
        : { orderBy?: job_batchesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, job_batchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_batchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_batches model
   */
  readonly fields: job_batchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_batches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_batchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_batches model
   */
  interface job_batchesFieldRefs {
    readonly id: FieldRef<"job_batches", 'String'>
    readonly name: FieldRef<"job_batches", 'String'>
    readonly total_jobs: FieldRef<"job_batches", 'Int'>
    readonly pending_jobs: FieldRef<"job_batches", 'Int'>
    readonly failed_jobs: FieldRef<"job_batches", 'Int'>
    readonly failed_job_ids: FieldRef<"job_batches", 'String'>
    readonly options: FieldRef<"job_batches", 'String'>
    readonly cancelled_at: FieldRef<"job_batches", 'Int'>
    readonly created_at: FieldRef<"job_batches", 'Int'>
    readonly finished_at: FieldRef<"job_batches", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * job_batches findUnique
   */
  export type job_batchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches findUniqueOrThrow
   */
  export type job_batchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches findFirst
   */
  export type job_batchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_batches.
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_batches.
     */
    distinct?: Job_batchesScalarFieldEnum | Job_batchesScalarFieldEnum[]
  }

  /**
   * job_batches findFirstOrThrow
   */
  export type job_batchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_batches.
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_batches.
     */
    distinct?: Job_batchesScalarFieldEnum | Job_batchesScalarFieldEnum[]
  }

  /**
   * job_batches findMany
   */
  export type job_batchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter, which job_batches to fetch.
     */
    where?: job_batchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_batches to fetch.
     */
    orderBy?: job_batchesOrderByWithRelationInput | job_batchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_batches.
     */
    cursor?: job_batchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_batches.
     */
    skip?: number
    distinct?: Job_batchesScalarFieldEnum | Job_batchesScalarFieldEnum[]
  }

  /**
   * job_batches create
   */
  export type job_batchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * The data needed to create a job_batches.
     */
    data: XOR<job_batchesCreateInput, job_batchesUncheckedCreateInput>
  }

  /**
   * job_batches createMany
   */
  export type job_batchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_batches.
     */
    data: job_batchesCreateManyInput | job_batchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_batches update
   */
  export type job_batchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * The data needed to update a job_batches.
     */
    data: XOR<job_batchesUpdateInput, job_batchesUncheckedUpdateInput>
    /**
     * Choose, which job_batches to update.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches updateMany
   */
  export type job_batchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_batches.
     */
    data: XOR<job_batchesUpdateManyMutationInput, job_batchesUncheckedUpdateManyInput>
    /**
     * Filter which job_batches to update
     */
    where?: job_batchesWhereInput
    /**
     * Limit how many job_batches to update.
     */
    limit?: number
  }

  /**
   * job_batches upsert
   */
  export type job_batchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * The filter to search for the job_batches to update in case it exists.
     */
    where: job_batchesWhereUniqueInput
    /**
     * In case the job_batches found by the `where` argument doesn't exist, create a new job_batches with this data.
     */
    create: XOR<job_batchesCreateInput, job_batchesUncheckedCreateInput>
    /**
     * In case the job_batches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_batchesUpdateInput, job_batchesUncheckedUpdateInput>
  }

  /**
   * job_batches delete
   */
  export type job_batchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
    /**
     * Filter which job_batches to delete.
     */
    where: job_batchesWhereUniqueInput
  }

  /**
   * job_batches deleteMany
   */
  export type job_batchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_batches to delete
     */
    where?: job_batchesWhereInput
    /**
     * Limit how many job_batches to delete.
     */
    limit?: number
  }

  /**
   * job_batches without action
   */
  export type job_batchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_batches
     */
    select?: job_batchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_batches
     */
    omit?: job_batchesOmit<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: bigint | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: bigint | null
    queue: string | null
    payload: string | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsMaxAggregateOutputType = {
    id: bigint | null
    queue: string | null
    payload: string | null
    attempts: number | null
    reserved_at: number | null
    available_at: number | null
    created_at: number | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    queue: number
    payload: number
    attempts: number
    reserved_at: number
    available_at: number
    created_at: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    queue?: true
    payload?: true
    attempts?: true
    reserved_at?: true
    available_at?: true
    created_at?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: bigint
    queue: string
    payload: string
    attempts: number
    reserved_at: number | null
    available_at: number
    created_at: number
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queue?: boolean
    payload?: boolean
    attempts?: boolean
    reserved_at?: boolean
    available_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["jobs"]>



  export type jobsSelectScalar = {
    id?: boolean
    queue?: boolean
    payload?: boolean
    attempts?: boolean
    reserved_at?: boolean
    available_at?: boolean
    created_at?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queue" | "payload" | "attempts" | "reserved_at" | "available_at" | "created_at", ExtArgs["result"]["jobs"]>

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      queue: string
      payload: string
      attempts: number
      reserved_at: number | null
      available_at: number
      created_at: number
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
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
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'BigInt'>
    readonly queue: FieldRef<"jobs", 'String'>
    readonly payload: FieldRef<"jobs", 'String'>
    readonly attempts: FieldRef<"jobs", 'Int'>
    readonly reserved_at: FieldRef<"jobs", 'Int'>
    readonly available_at: FieldRef<"jobs", 'Int'>
    readonly created_at: FieldRef<"jobs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
  }


  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    migration: number
    batch: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: number
    migration: string
    batch: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    migration?: boolean
    batch?: boolean
  }, ExtArgs["result"]["migrations"]>



  export type migrationsSelectScalar = {
    id?: boolean
    migration?: boolean
    batch?: boolean
  }

  export type migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "migration" | "batch", ExtArgs["result"]["migrations"]>

  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      migration: string
      batch: number
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends migrationsFindUniqueArgs>(args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends migrationsFindFirstArgs>(args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends migrationsFindManyArgs>(args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends migrationsCreateArgs>(args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends migrationsCreateManyArgs>(args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends migrationsDeleteArgs>(args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends migrationsUpdateArgs>(args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends migrationsDeleteManyArgs>(args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends migrationsUpdateManyArgs>(args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends migrationsUpsertArgs>(args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
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
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly id: FieldRef<"migrations", 'Int'>
    readonly migration: FieldRef<"migrations", 'String'>
    readonly batch: FieldRef<"migrations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to delete.
     */
    limit?: number
  }

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    notifiable_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    notifiable_id: bigint | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    type: string | null
    notifiable_type: string | null
    notifiable_id: bigint | null
    data: string | null
    read_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    notifiable_type: string | null
    notifiable_id: bigint | null
    data: string | null
    read_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    type: number
    notifiable_type: number
    notifiable_id: number
    data: number
    read_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    notifiable_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    notifiable_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    type?: true
    notifiable_type?: true
    notifiable_id?: true
    data?: true
    read_at?: true
    created_at?: true
    updated_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    type?: true
    notifiable_type?: true
    notifiable_id?: true
    data?: true
    read_at?: true
    created_at?: true
    updated_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    type?: true
    notifiable_type?: true
    notifiable_id?: true
    data?: true
    read_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    type: string
    notifiable_type: string
    notifiable_id: bigint
    data: string
    read_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    notifiable_type?: boolean
    notifiable_id?: boolean
    data?: boolean
    read_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["notifications"]>



  export type notificationsSelectScalar = {
    id?: boolean
    type?: boolean
    notifiable_type?: boolean
    notifiable_id?: boolean
    data?: boolean
    read_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "notifiable_type" | "notifiable_id" | "data" | "read_at" | "created_at" | "updated_at", ExtArgs["result"]["notifications"]>

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      notifiable_type: string
      notifiable_id: bigint
      data: string
      read_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'String'>
    readonly type: FieldRef<"notifications", 'String'>
    readonly notifiable_type: FieldRef<"notifications", 'String'>
    readonly notifiable_id: FieldRef<"notifications", 'BigInt'>
    readonly data: FieldRef<"notifications", 'String'>
    readonly read_at: FieldRef<"notifications", 'DateTime'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
    readonly updated_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
  }


  /**
   * Model password_reset_tokens
   */

  export type AggregatePassword_reset_tokens = {
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  export type Password_reset_tokensMinAggregateOutputType = {
    email: string | null
    token: string | null
    created_at: Date | null
  }

  export type Password_reset_tokensMaxAggregateOutputType = {
    email: string | null
    token: string | null
    created_at: Date | null
  }

  export type Password_reset_tokensCountAggregateOutputType = {
    email: number
    token: number
    created_at: number
    _all: number
  }


  export type Password_reset_tokensMinAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
  }

  export type Password_reset_tokensMaxAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
  }

  export type Password_reset_tokensCountAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
    _all?: true
  }

  export type Password_reset_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to aggregate.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type GetPassword_reset_tokensAggregateType<T extends Password_reset_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
      : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
  }




  export type password_reset_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithAggregationInput | password_reset_tokensOrderByWithAggregationInput[]
    by: Password_reset_tokensScalarFieldEnum[] | Password_reset_tokensScalarFieldEnum
    having?: password_reset_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokensCountAggregateInputType | true
    _min?: Password_reset_tokensMinAggregateInputType
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type Password_reset_tokensGroupByOutputType = {
    email: string
    token: string
    created_at: Date | null
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokensGroupByPayload<T extends password_reset_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["password_reset_tokens"]>



  export type password_reset_tokensSelectScalar = {
    email?: boolean
    token?: boolean
    created_at?: boolean
  }

  export type password_reset_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "token" | "created_at", ExtArgs["result"]["password_reset_tokens"]>

  export type $password_reset_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      token: string
      created_at: Date | null
    }, ExtArgs["result"]["password_reset_tokens"]>
    composites: {}
  }

  type password_reset_tokensGetPayload<S extends boolean | null | undefined | password_reset_tokensDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokensPayload, S>

  type password_reset_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokensCountAggregateInputType | true
    }

  export interface password_reset_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_tokens'], meta: { name: 'password_reset_tokens' } }
    /**
     * Find zero or one Password_reset_tokens that matches the filter.
     * @param {password_reset_tokensFindUniqueArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokensFindUniqueArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokensFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokensFindFirstArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const password_reset_tokensWithEmailOnly = await prisma.password_reset_tokens.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends password_reset_tokensFindManyArgs>(args?: SelectSubset<T, password_reset_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_tokens.
     * @param {password_reset_tokensCreateArgs} args - Arguments to create a Password_reset_tokens.
     * @example
     * // Create one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.create({
     *   data: {
     *     // ... data to create a Password_reset_tokens
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokensCreateArgs>(args: SelectSubset<T, password_reset_tokensCreateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokensCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokensCreateManyArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Password_reset_tokens.
     * @param {password_reset_tokensDeleteArgs} args - Arguments to delete one Password_reset_tokens.
     * @example
     * // Delete one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_tokens
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokensDeleteArgs>(args: SelectSubset<T, password_reset_tokensDeleteArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_tokens.
     * @param {password_reset_tokensUpdateArgs} args - Arguments to update one Password_reset_tokens.
     * @example
     * // Update one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokensUpdateArgs>(args: SelectSubset<T, password_reset_tokensUpdateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokensDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokensDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokensUpdateManyArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Password_reset_tokens.
     * @param {password_reset_tokensUpsertArgs} args - Arguments to update or create a Password_reset_tokens.
     * @example
     * // Update or create a Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.upsert({
     *   create: {
     *     // ... data to create a Password_reset_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokensUpsertArgs>(args: SelectSubset<T, password_reset_tokensUpsertArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_tokens.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokensCountArgs>(
      args?: Subset<T, password_reset_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_reset_tokensAggregateArgs>(args: Subset<T, Password_reset_tokensAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokensAggregateType<T>>

    /**
     * Group by Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensGroupByArgs} args - Group by arguments.
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
      T extends password_reset_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokensGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_reset_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_tokens model
   */
  readonly fields: password_reset_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the password_reset_tokens model
   */
  interface password_reset_tokensFieldRefs {
    readonly email: FieldRef<"password_reset_tokens", 'String'>
    readonly token: FieldRef<"password_reset_tokens", 'String'>
    readonly created_at: FieldRef<"password_reset_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_tokens findUnique
   */
  export type password_reset_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findUniqueOrThrow
   */
  export type password_reset_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findFirst
   */
  export type password_reset_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findFirstOrThrow
   */
  export type password_reset_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findMany
   */
  export type password_reset_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens create
   */
  export type password_reset_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a password_reset_tokens.
     */
    data: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
  }

  /**
   * password_reset_tokens createMany
   */
  export type password_reset_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_tokens update
   */
  export type password_reset_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
    /**
     * Choose, which password_reset_tokens to update.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens updateMany
   */
  export type password_reset_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_tokens upsert
   */
  export type password_reset_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the password_reset_tokens to update in case it exists.
     */
    where: password_reset_tokensWhereUniqueInput
    /**
     * In case the password_reset_tokens found by the `where` argument doesn't exist, create a new password_reset_tokens with this data.
     */
    create: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
    /**
     * In case the password_reset_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
  }

  /**
   * password_reset_tokens delete
   */
  export type password_reset_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter which password_reset_tokens to delete.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens deleteMany
   */
  export type password_reset_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_tokens without action
   */
  export type password_reset_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
  }


  /**
   * Model Quotation
   */

  export type AggregateQuotation = {
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  export type QuotationAvgAggregateOutputType = {
    id: number | null
    preco_00_a_18_anos: Decimal | null
    preco_19_a_23_anos: Decimal | null
    preco_24_a_28_anos: Decimal | null
    preco_29_a_33_anos: Decimal | null
    preco_34_a_38_anos: Decimal | null
    preco_39_a_43_anos: Decimal | null
    preco_44_a_48_anos: Decimal | null
    preco_49_a_53_anos: Decimal | null
    preco_54_a_58_anos: Decimal | null
    preco_59_anos_ou_mais: Decimal | null
    preco_todas_idades: Decimal | null
    consultas_eletivas: Decimal | null
    consultas_urgencia: Decimal | null
    exames_simples: Decimal | null
    exames_complexos: Decimal | null
    terapias_neurologicas: Decimal | null
    demais_terapias: Decimal | null
    desconto_vidas: number | null
  }

  export type QuotationSumAggregateOutputType = {
    id: bigint | null
    preco_00_a_18_anos: Decimal | null
    preco_19_a_23_anos: Decimal | null
    preco_24_a_28_anos: Decimal | null
    preco_29_a_33_anos: Decimal | null
    preco_34_a_38_anos: Decimal | null
    preco_39_a_43_anos: Decimal | null
    preco_44_a_48_anos: Decimal | null
    preco_49_a_53_anos: Decimal | null
    preco_54_a_58_anos: Decimal | null
    preco_59_anos_ou_mais: Decimal | null
    preco_todas_idades: Decimal | null
    consultas_eletivas: Decimal | null
    consultas_urgencia: Decimal | null
    exames_simples: Decimal | null
    exames_complexos: Decimal | null
    terapias_neurologicas: Decimal | null
    demais_terapias: Decimal | null
    desconto_vidas: number | null
  }

  export type QuotationMinAggregateOutputType = {
    id: bigint | null
    plano_grupo: string | null
    coparticipacao_tipo: string | null
    segmentacao: string | null
    acomodacao: string | null
    assistencia_modalidade: string | null
    codigo_interno: string | null
    registro_ans: string | null
    cidade: string | null
    validade_valores: string | null
    tipo_plano: string | null
    preco_00_a_18_anos: Decimal | null
    preco_19_a_23_anos: Decimal | null
    preco_24_a_28_anos: Decimal | null
    preco_29_a_33_anos: Decimal | null
    preco_34_a_38_anos: Decimal | null
    preco_39_a_43_anos: Decimal | null
    preco_44_a_48_anos: Decimal | null
    preco_49_a_53_anos: Decimal | null
    preco_54_a_58_anos: Decimal | null
    preco_59_anos_ou_mais: Decimal | null
    preco_todas_idades: Decimal | null
    consultas_eletivas: Decimal | null
    consultas_urgencia: Decimal | null
    exames_simples: Decimal | null
    exames_complexos: Decimal | null
    terapias_neurologicas: Decimal | null
    demais_terapias: Decimal | null
    desconto_vidas: number | null
    desconto_familiares: string | null
    quantidade_de_familiares: string | null
    campo_vigencia: string | null
    estado: string | null
    internacoes: string | null
    odontologia: string | null
  }

  export type QuotationMaxAggregateOutputType = {
    id: bigint | null
    plano_grupo: string | null
    coparticipacao_tipo: string | null
    segmentacao: string | null
    acomodacao: string | null
    assistencia_modalidade: string | null
    codigo_interno: string | null
    registro_ans: string | null
    cidade: string | null
    validade_valores: string | null
    tipo_plano: string | null
    preco_00_a_18_anos: Decimal | null
    preco_19_a_23_anos: Decimal | null
    preco_24_a_28_anos: Decimal | null
    preco_29_a_33_anos: Decimal | null
    preco_34_a_38_anos: Decimal | null
    preco_39_a_43_anos: Decimal | null
    preco_44_a_48_anos: Decimal | null
    preco_49_a_53_anos: Decimal | null
    preco_54_a_58_anos: Decimal | null
    preco_59_anos_ou_mais: Decimal | null
    preco_todas_idades: Decimal | null
    consultas_eletivas: Decimal | null
    consultas_urgencia: Decimal | null
    exames_simples: Decimal | null
    exames_complexos: Decimal | null
    terapias_neurologicas: Decimal | null
    demais_terapias: Decimal | null
    desconto_vidas: number | null
    desconto_familiares: string | null
    quantidade_de_familiares: string | null
    campo_vigencia: string | null
    estado: string | null
    internacoes: string | null
    odontologia: string | null
  }

  export type QuotationCountAggregateOutputType = {
    id: number
    plano_grupo: number
    coparticipacao_tipo: number
    segmentacao: number
    acomodacao: number
    assistencia_modalidade: number
    codigo_interno: number
    registro_ans: number
    cidade: number
    validade_valores: number
    tipo_plano: number
    preco_00_a_18_anos: number
    preco_19_a_23_anos: number
    preco_24_a_28_anos: number
    preco_29_a_33_anos: number
    preco_34_a_38_anos: number
    preco_39_a_43_anos: number
    preco_44_a_48_anos: number
    preco_49_a_53_anos: number
    preco_54_a_58_anos: number
    preco_59_anos_ou_mais: number
    preco_todas_idades: number
    consultas_eletivas: number
    consultas_urgencia: number
    exames_simples: number
    exames_complexos: number
    terapias_neurologicas: number
    demais_terapias: number
    desconto_vidas: number
    desconto_familiares: number
    quantidade_de_familiares: number
    campo_vigencia: number
    estado: number
    internacoes: number
    odontologia: number
    _all: number
  }


  export type QuotationAvgAggregateInputType = {
    id?: true
    preco_00_a_18_anos?: true
    preco_19_a_23_anos?: true
    preco_24_a_28_anos?: true
    preco_29_a_33_anos?: true
    preco_34_a_38_anos?: true
    preco_39_a_43_anos?: true
    preco_44_a_48_anos?: true
    preco_49_a_53_anos?: true
    preco_54_a_58_anos?: true
    preco_59_anos_ou_mais?: true
    preco_todas_idades?: true
    consultas_eletivas?: true
    consultas_urgencia?: true
    exames_simples?: true
    exames_complexos?: true
    terapias_neurologicas?: true
    demais_terapias?: true
    desconto_vidas?: true
  }

  export type QuotationSumAggregateInputType = {
    id?: true
    preco_00_a_18_anos?: true
    preco_19_a_23_anos?: true
    preco_24_a_28_anos?: true
    preco_29_a_33_anos?: true
    preco_34_a_38_anos?: true
    preco_39_a_43_anos?: true
    preco_44_a_48_anos?: true
    preco_49_a_53_anos?: true
    preco_54_a_58_anos?: true
    preco_59_anos_ou_mais?: true
    preco_todas_idades?: true
    consultas_eletivas?: true
    consultas_urgencia?: true
    exames_simples?: true
    exames_complexos?: true
    terapias_neurologicas?: true
    demais_terapias?: true
    desconto_vidas?: true
  }

  export type QuotationMinAggregateInputType = {
    id?: true
    plano_grupo?: true
    coparticipacao_tipo?: true
    segmentacao?: true
    acomodacao?: true
    assistencia_modalidade?: true
    codigo_interno?: true
    registro_ans?: true
    cidade?: true
    validade_valores?: true
    tipo_plano?: true
    preco_00_a_18_anos?: true
    preco_19_a_23_anos?: true
    preco_24_a_28_anos?: true
    preco_29_a_33_anos?: true
    preco_34_a_38_anos?: true
    preco_39_a_43_anos?: true
    preco_44_a_48_anos?: true
    preco_49_a_53_anos?: true
    preco_54_a_58_anos?: true
    preco_59_anos_ou_mais?: true
    preco_todas_idades?: true
    consultas_eletivas?: true
    consultas_urgencia?: true
    exames_simples?: true
    exames_complexos?: true
    terapias_neurologicas?: true
    demais_terapias?: true
    desconto_vidas?: true
    desconto_familiares?: true
    quantidade_de_familiares?: true
    campo_vigencia?: true
    estado?: true
    internacoes?: true
    odontologia?: true
  }

  export type QuotationMaxAggregateInputType = {
    id?: true
    plano_grupo?: true
    coparticipacao_tipo?: true
    segmentacao?: true
    acomodacao?: true
    assistencia_modalidade?: true
    codigo_interno?: true
    registro_ans?: true
    cidade?: true
    validade_valores?: true
    tipo_plano?: true
    preco_00_a_18_anos?: true
    preco_19_a_23_anos?: true
    preco_24_a_28_anos?: true
    preco_29_a_33_anos?: true
    preco_34_a_38_anos?: true
    preco_39_a_43_anos?: true
    preco_44_a_48_anos?: true
    preco_49_a_53_anos?: true
    preco_54_a_58_anos?: true
    preco_59_anos_ou_mais?: true
    preco_todas_idades?: true
    consultas_eletivas?: true
    consultas_urgencia?: true
    exames_simples?: true
    exames_complexos?: true
    terapias_neurologicas?: true
    demais_terapias?: true
    desconto_vidas?: true
    desconto_familiares?: true
    quantidade_de_familiares?: true
    campo_vigencia?: true
    estado?: true
    internacoes?: true
    odontologia?: true
  }

  export type QuotationCountAggregateInputType = {
    id?: true
    plano_grupo?: true
    coparticipacao_tipo?: true
    segmentacao?: true
    acomodacao?: true
    assistencia_modalidade?: true
    codigo_interno?: true
    registro_ans?: true
    cidade?: true
    validade_valores?: true
    tipo_plano?: true
    preco_00_a_18_anos?: true
    preco_19_a_23_anos?: true
    preco_24_a_28_anos?: true
    preco_29_a_33_anos?: true
    preco_34_a_38_anos?: true
    preco_39_a_43_anos?: true
    preco_44_a_48_anos?: true
    preco_49_a_53_anos?: true
    preco_54_a_58_anos?: true
    preco_59_anos_ou_mais?: true
    preco_todas_idades?: true
    consultas_eletivas?: true
    consultas_urgencia?: true
    exames_simples?: true
    exames_complexos?: true
    terapias_neurologicas?: true
    demais_terapias?: true
    desconto_vidas?: true
    desconto_familiares?: true
    quantidade_de_familiares?: true
    campo_vigencia?: true
    estado?: true
    internacoes?: true
    odontologia?: true
    _all?: true
  }

  export type QuotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotation to aggregate.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotations
    **/
    _count?: true | QuotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationMaxAggregateInputType
  }

  export type GetQuotationAggregateType<T extends QuotationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotation[P]>
      : GetScalarType<T[P], AggregateQuotation[P]>
  }




  export type QuotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithAggregationInput | QuotationOrderByWithAggregationInput[]
    by: QuotationScalarFieldEnum[] | QuotationScalarFieldEnum
    having?: QuotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationCountAggregateInputType | true
    _avg?: QuotationAvgAggregateInputType
    _sum?: QuotationSumAggregateInputType
    _min?: QuotationMinAggregateInputType
    _max?: QuotationMaxAggregateInputType
  }

  export type QuotationGroupByOutputType = {
    id: bigint
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao: string | null
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno: string | null
    registro_ans: string | null
    cidade: string
    validade_valores: string | null
    tipo_plano: string
    preco_00_a_18_anos: Decimal | null
    preco_19_a_23_anos: Decimal | null
    preco_24_a_28_anos: Decimal | null
    preco_29_a_33_anos: Decimal | null
    preco_34_a_38_anos: Decimal | null
    preco_39_a_43_anos: Decimal | null
    preco_44_a_48_anos: Decimal | null
    preco_49_a_53_anos: Decimal | null
    preco_54_a_58_anos: Decimal | null
    preco_59_anos_ou_mais: Decimal | null
    preco_todas_idades: Decimal | null
    consultas_eletivas: Decimal | null
    consultas_urgencia: Decimal | null
    exames_simples: Decimal | null
    exames_complexos: Decimal | null
    terapias_neurologicas: Decimal | null
    demais_terapias: Decimal | null
    desconto_vidas: number | null
    desconto_familiares: string | null
    quantidade_de_familiares: string | null
    campo_vigencia: string | null
    estado: string | null
    internacoes: string | null
    odontologia: string | null
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  type GetQuotationGroupByPayload<T extends QuotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationGroupByOutputType[P]>
        }
      >
    >


  export type QuotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plano_grupo?: boolean
    coparticipacao_tipo?: boolean
    segmentacao?: boolean
    acomodacao?: boolean
    assistencia_modalidade?: boolean
    codigo_interno?: boolean
    registro_ans?: boolean
    cidade?: boolean
    validade_valores?: boolean
    tipo_plano?: boolean
    preco_00_a_18_anos?: boolean
    preco_19_a_23_anos?: boolean
    preco_24_a_28_anos?: boolean
    preco_29_a_33_anos?: boolean
    preco_34_a_38_anos?: boolean
    preco_39_a_43_anos?: boolean
    preco_44_a_48_anos?: boolean
    preco_49_a_53_anos?: boolean
    preco_54_a_58_anos?: boolean
    preco_59_anos_ou_mais?: boolean
    preco_todas_idades?: boolean
    consultas_eletivas?: boolean
    consultas_urgencia?: boolean
    exames_simples?: boolean
    exames_complexos?: boolean
    terapias_neurologicas?: boolean
    demais_terapias?: boolean
    desconto_vidas?: boolean
    desconto_familiares?: boolean
    quantidade_de_familiares?: boolean
    campo_vigencia?: boolean
    estado?: boolean
    internacoes?: boolean
    odontologia?: boolean
  }, ExtArgs["result"]["quotation"]>



  export type QuotationSelectScalar = {
    id?: boolean
    plano_grupo?: boolean
    coparticipacao_tipo?: boolean
    segmentacao?: boolean
    acomodacao?: boolean
    assistencia_modalidade?: boolean
    codigo_interno?: boolean
    registro_ans?: boolean
    cidade?: boolean
    validade_valores?: boolean
    tipo_plano?: boolean
    preco_00_a_18_anos?: boolean
    preco_19_a_23_anos?: boolean
    preco_24_a_28_anos?: boolean
    preco_29_a_33_anos?: boolean
    preco_34_a_38_anos?: boolean
    preco_39_a_43_anos?: boolean
    preco_44_a_48_anos?: boolean
    preco_49_a_53_anos?: boolean
    preco_54_a_58_anos?: boolean
    preco_59_anos_ou_mais?: boolean
    preco_todas_idades?: boolean
    consultas_eletivas?: boolean
    consultas_urgencia?: boolean
    exames_simples?: boolean
    exames_complexos?: boolean
    terapias_neurologicas?: boolean
    demais_terapias?: boolean
    desconto_vidas?: boolean
    desconto_familiares?: boolean
    quantidade_de_familiares?: boolean
    campo_vigencia?: boolean
    estado?: boolean
    internacoes?: boolean
    odontologia?: boolean
  }

  export type QuotationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plano_grupo" | "coparticipacao_tipo" | "segmentacao" | "acomodacao" | "assistencia_modalidade" | "codigo_interno" | "registro_ans" | "cidade" | "validade_valores" | "tipo_plano" | "preco_00_a_18_anos" | "preco_19_a_23_anos" | "preco_24_a_28_anos" | "preco_29_a_33_anos" | "preco_34_a_38_anos" | "preco_39_a_43_anos" | "preco_44_a_48_anos" | "preco_49_a_53_anos" | "preco_54_a_58_anos" | "preco_59_anos_ou_mais" | "preco_todas_idades" | "consultas_eletivas" | "consultas_urgencia" | "exames_simples" | "exames_complexos" | "terapias_neurologicas" | "demais_terapias" | "desconto_vidas" | "desconto_familiares" | "quantidade_de_familiares" | "campo_vigencia" | "estado" | "internacoes" | "odontologia", ExtArgs["result"]["quotation"]>

  export type $QuotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quotation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      plano_grupo: string
      coparticipacao_tipo: string
      segmentacao: string | null
      acomodacao: string
      assistencia_modalidade: string
      codigo_interno: string | null
      registro_ans: string | null
      cidade: string
      validade_valores: string | null
      tipo_plano: string
      preco_00_a_18_anos: Prisma.Decimal | null
      preco_19_a_23_anos: Prisma.Decimal | null
      preco_24_a_28_anos: Prisma.Decimal | null
      preco_29_a_33_anos: Prisma.Decimal | null
      preco_34_a_38_anos: Prisma.Decimal | null
      preco_39_a_43_anos: Prisma.Decimal | null
      preco_44_a_48_anos: Prisma.Decimal | null
      preco_49_a_53_anos: Prisma.Decimal | null
      preco_54_a_58_anos: Prisma.Decimal | null
      preco_59_anos_ou_mais: Prisma.Decimal | null
      preco_todas_idades: Prisma.Decimal | null
      consultas_eletivas: Prisma.Decimal | null
      consultas_urgencia: Prisma.Decimal | null
      exames_simples: Prisma.Decimal | null
      exames_complexos: Prisma.Decimal | null
      terapias_neurologicas: Prisma.Decimal | null
      demais_terapias: Prisma.Decimal | null
      desconto_vidas: number | null
      desconto_familiares: string | null
      quantidade_de_familiares: string | null
      campo_vigencia: string | null
      estado: string | null
      internacoes: string | null
      odontologia: string | null
    }, ExtArgs["result"]["quotation"]>
    composites: {}
  }

  type QuotationGetPayload<S extends boolean | null | undefined | QuotationDefaultArgs> = $Result.GetResult<Prisma.$QuotationPayload, S>

  type QuotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotationCountAggregateInputType | true
    }

  export interface QuotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quotation'], meta: { name: 'Quotation' } }
    /**
     * Find zero or one Quotation that matches the filter.
     * @param {QuotationFindUniqueArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationFindUniqueArgs>(args: SelectSubset<T, QuotationFindUniqueArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quotation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotationFindUniqueOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationFindFirstArgs>(args?: SelectSubset<T, QuotationFindFirstArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotations
     * const quotations = await prisma.quotation.findMany()
     * 
     * // Get first 10 Quotations
     * const quotations = await prisma.quotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationWithIdOnly = await prisma.quotation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationFindManyArgs>(args?: SelectSubset<T, QuotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quotation.
     * @param {QuotationCreateArgs} args - Arguments to create a Quotation.
     * @example
     * // Create one Quotation
     * const Quotation = await prisma.quotation.create({
     *   data: {
     *     // ... data to create a Quotation
     *   }
     * })
     * 
     */
    create<T extends QuotationCreateArgs>(args: SelectSubset<T, QuotationCreateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quotations.
     * @param {QuotationCreateManyArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationCreateManyArgs>(args?: SelectSubset<T, QuotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quotation.
     * @param {QuotationDeleteArgs} args - Arguments to delete one Quotation.
     * @example
     * // Delete one Quotation
     * const Quotation = await prisma.quotation.delete({
     *   where: {
     *     // ... filter to delete one Quotation
     *   }
     * })
     * 
     */
    delete<T extends QuotationDeleteArgs>(args: SelectSubset<T, QuotationDeleteArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quotation.
     * @param {QuotationUpdateArgs} args - Arguments to update one Quotation.
     * @example
     * // Update one Quotation
     * const quotation = await prisma.quotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationUpdateArgs>(args: SelectSubset<T, QuotationUpdateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quotations.
     * @param {QuotationDeleteManyArgs} args - Arguments to filter Quotations to delete.
     * @example
     * // Delete a few Quotations
     * const { count } = await prisma.quotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationDeleteManyArgs>(args?: SelectSubset<T, QuotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationUpdateManyArgs>(args: SelectSubset<T, QuotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quotation.
     * @param {QuotationUpsertArgs} args - Arguments to update or create a Quotation.
     * @example
     * // Update or create a Quotation
     * const quotation = await prisma.quotation.upsert({
     *   create: {
     *     // ... data to create a Quotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quotation we want to update
     *   }
     * })
     */
    upsert<T extends QuotationUpsertArgs>(args: SelectSubset<T, QuotationUpsertArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCountArgs} args - Arguments to filter Quotations to count.
     * @example
     * // Count the number of Quotations
     * const count = await prisma.quotation.count({
     *   where: {
     *     // ... the filter for the Quotations we want to count
     *   }
     * })
    **/
    count<T extends QuotationCountArgs>(
      args?: Subset<T, QuotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationAggregateArgs>(args: Subset<T, QuotationAggregateArgs>): Prisma.PrismaPromise<GetQuotationAggregateType<T>>

    /**
     * Group by Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationGroupByArgs} args - Group by arguments.
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
      T extends QuotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationGroupByArgs['orderBy'] }
        : { orderBy?: QuotationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quotation model
   */
  readonly fields: QuotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quotation model
   */
  interface QuotationFieldRefs {
    readonly id: FieldRef<"Quotation", 'BigInt'>
    readonly plano_grupo: FieldRef<"Quotation", 'String'>
    readonly coparticipacao_tipo: FieldRef<"Quotation", 'String'>
    readonly segmentacao: FieldRef<"Quotation", 'String'>
    readonly acomodacao: FieldRef<"Quotation", 'String'>
    readonly assistencia_modalidade: FieldRef<"Quotation", 'String'>
    readonly codigo_interno: FieldRef<"Quotation", 'String'>
    readonly registro_ans: FieldRef<"Quotation", 'String'>
    readonly cidade: FieldRef<"Quotation", 'String'>
    readonly validade_valores: FieldRef<"Quotation", 'String'>
    readonly tipo_plano: FieldRef<"Quotation", 'String'>
    readonly preco_00_a_18_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_19_a_23_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_24_a_28_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_29_a_33_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_34_a_38_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_39_a_43_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_44_a_48_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_49_a_53_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_54_a_58_anos: FieldRef<"Quotation", 'Decimal'>
    readonly preco_59_anos_ou_mais: FieldRef<"Quotation", 'Decimal'>
    readonly preco_todas_idades: FieldRef<"Quotation", 'Decimal'>
    readonly consultas_eletivas: FieldRef<"Quotation", 'Decimal'>
    readonly consultas_urgencia: FieldRef<"Quotation", 'Decimal'>
    readonly exames_simples: FieldRef<"Quotation", 'Decimal'>
    readonly exames_complexos: FieldRef<"Quotation", 'Decimal'>
    readonly terapias_neurologicas: FieldRef<"Quotation", 'Decimal'>
    readonly demais_terapias: FieldRef<"Quotation", 'Decimal'>
    readonly desconto_vidas: FieldRef<"Quotation", 'Int'>
    readonly desconto_familiares: FieldRef<"Quotation", 'String'>
    readonly quantidade_de_familiares: FieldRef<"Quotation", 'String'>
    readonly campo_vigencia: FieldRef<"Quotation", 'String'>
    readonly estado: FieldRef<"Quotation", 'String'>
    readonly internacoes: FieldRef<"Quotation", 'String'>
    readonly odontologia: FieldRef<"Quotation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quotation findUnique
   */
  export type QuotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findUniqueOrThrow
   */
  export type QuotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findFirst
   */
  export type QuotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findFirstOrThrow
   */
  export type QuotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findMany
   */
  export type QuotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Filter, which Quotations to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation create
   */
  export type QuotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * The data needed to create a Quotation.
     */
    data: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
  }

  /**
   * Quotation createMany
   */
  export type QuotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quotation update
   */
  export type QuotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * The data needed to update a Quotation.
     */
    data: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
    /**
     * Choose, which Quotation to update.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation updateMany
   */
  export type QuotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to update.
     */
    limit?: number
  }

  /**
   * Quotation upsert
   */
  export type QuotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * The filter to search for the Quotation to update in case it exists.
     */
    where: QuotationWhereUniqueInput
    /**
     * In case the Quotation found by the `where` argument doesn't exist, create a new Quotation with this data.
     */
    create: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
    /**
     * In case the Quotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
  }

  /**
   * Quotation delete
   */
  export type QuotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Filter which Quotation to delete.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation deleteMany
   */
  export type QuotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotations to delete
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to delete.
     */
    limit?: number
  }

  /**
   * Quotation without action
   */
  export type QuotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    user_id: number | null
    last_activity: number | null
  }

  export type SessionsSumAggregateOutputType = {
    user_id: bigint | null
    last_activity: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    ip_address: string | null
    user_agent: string | null
    payload: string | null
    last_activity: number | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    ip_address: string | null
    user_agent: string | null
    payload: string | null
    last_activity: number | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    user_id: number
    ip_address: number
    user_agent: number
    payload: number
    last_activity: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    user_id?: true
    last_activity?: true
  }

  export type SessionsSumAggregateInputType = {
    user_id?: true
    last_activity?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    user_id: bigint | null
    ip_address: string | null
    user_agent: string | null
    payload: string
    last_activity: number
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    payload?: boolean
    last_activity?: boolean
  }, ExtArgs["result"]["sessions"]>



  export type sessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    payload?: boolean
    last_activity?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "ip_address" | "user_agent" | "payload" | "last_activity", ExtArgs["result"]["sessions"]>

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: bigint | null
      ip_address: string | null
      user_agent: string | null
      payload: string
      last_activity: number
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'String'>
    readonly user_id: FieldRef<"sessions", 'BigInt'>
    readonly ip_address: FieldRef<"sessions", 'String'>
    readonly user_agent: FieldRef<"sessions", 'String'>
    readonly payload: FieldRef<"sessions", 'String'>
    readonly last_activity: FieldRef<"sessions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified_at: number
    password: number
    remember_token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    name: string
    email: string
    email_verified_at: Date | null
    password: string
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    exports?: boolean | users$exportsArgs<ExtArgs>
    imports?: boolean | users$importsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "email_verified_at" | "password" | "remember_token" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exports?: boolean | users$exportsArgs<ExtArgs>
    imports?: boolean | users$importsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      exports: Prisma.$exportsPayload<ExtArgs>[]
      imports: Prisma.$importsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      email: string
      email_verified_at: Date | null
      password: string
      remember_token: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exports<T extends users$exportsArgs<ExtArgs> = {}>(args?: Subset<T, users$exportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imports<T extends users$importsArgs<ExtArgs> = {}>(args?: Subset<T, users$importsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$importsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly email_verified_at: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
    readonly remember_token: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.exports
   */
  export type users$exportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exports
     */
    select?: exportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exports
     */
    omit?: exportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exportsInclude<ExtArgs> | null
    where?: exportsWhereInput
    orderBy?: exportsOrderByWithRelationInput | exportsOrderByWithRelationInput[]
    cursor?: exportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExportsScalarFieldEnum | ExportsScalarFieldEnum[]
  }

  /**
   * users.imports
   */
  export type users$importsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imports
     */
    select?: importsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imports
     */
    omit?: importsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: importsInclude<ExtArgs> | null
    where?: importsWhereInput
    orderBy?: importsOrderByWithRelationInput | importsOrderByWithRelationInput[]
    cursor?: importsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImportsScalarFieldEnum | ImportsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const CacheScalarFieldEnum: {
    key: 'key',
    value: 'value',
    expiration: 'expiration'
  };

  export type CacheScalarFieldEnum = (typeof CacheScalarFieldEnum)[keyof typeof CacheScalarFieldEnum]


  export const Cache_locksScalarFieldEnum: {
    key: 'key',
    owner: 'owner',
    expiration: 'expiration'
  };

  export type Cache_locksScalarFieldEnum = (typeof Cache_locksScalarFieldEnum)[keyof typeof Cache_locksScalarFieldEnum]


  export const ExportsScalarFieldEnum: {
    id: 'id',
    completed_at: 'completed_at',
    file_disk: 'file_disk',
    file_name: 'file_name',
    exporter: 'exporter',
    processed_rows: 'processed_rows',
    total_rows: 'total_rows',
    successful_rows: 'successful_rows',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExportsScalarFieldEnum = (typeof ExportsScalarFieldEnum)[keyof typeof ExportsScalarFieldEnum]


  export const Failed_import_rowsScalarFieldEnum: {
    id: 'id',
    data: 'data',
    import_id: 'import_id',
    validation_error: 'validation_error',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Failed_import_rowsScalarFieldEnum = (typeof Failed_import_rowsScalarFieldEnum)[keyof typeof Failed_import_rowsScalarFieldEnum]


  export const Failed_jobsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception',
    failed_at: 'failed_at'
  };

  export type Failed_jobsScalarFieldEnum = (typeof Failed_jobsScalarFieldEnum)[keyof typeof Failed_jobsScalarFieldEnum]


  export const ImportsScalarFieldEnum: {
    id: 'id',
    completed_at: 'completed_at',
    file_name: 'file_name',
    file_path: 'file_path',
    importer: 'importer',
    processed_rows: 'processed_rows',
    total_rows: 'total_rows',
    successful_rows: 'successful_rows',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ImportsScalarFieldEnum = (typeof ImportsScalarFieldEnum)[keyof typeof ImportsScalarFieldEnum]


  export const Job_batchesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    total_jobs: 'total_jobs',
    pending_jobs: 'pending_jobs',
    failed_jobs: 'failed_jobs',
    failed_job_ids: 'failed_job_ids',
    options: 'options',
    cancelled_at: 'cancelled_at',
    created_at: 'created_at',
    finished_at: 'finished_at'
  };

  export type Job_batchesScalarFieldEnum = (typeof Job_batchesScalarFieldEnum)[keyof typeof Job_batchesScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    queue: 'queue',
    payload: 'payload',
    attempts: 'attempts',
    reserved_at: 'reserved_at',
    available_at: 'available_at',
    created_at: 'created_at'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    notifiable_type: 'notifiable_type',
    notifiable_id: 'notifiable_id',
    data: 'data',
    read_at: 'read_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Password_reset_tokensScalarFieldEnum: {
    email: 'email',
    token: 'token',
    created_at: 'created_at'
  };

  export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum]


  export const QuotationScalarFieldEnum: {
    id: 'id',
    plano_grupo: 'plano_grupo',
    coparticipacao_tipo: 'coparticipacao_tipo',
    segmentacao: 'segmentacao',
    acomodacao: 'acomodacao',
    assistencia_modalidade: 'assistencia_modalidade',
    codigo_interno: 'codigo_interno',
    registro_ans: 'registro_ans',
    cidade: 'cidade',
    validade_valores: 'validade_valores',
    tipo_plano: 'tipo_plano',
    preco_00_a_18_anos: 'preco_00_a_18_anos',
    preco_19_a_23_anos: 'preco_19_a_23_anos',
    preco_24_a_28_anos: 'preco_24_a_28_anos',
    preco_29_a_33_anos: 'preco_29_a_33_anos',
    preco_34_a_38_anos: 'preco_34_a_38_anos',
    preco_39_a_43_anos: 'preco_39_a_43_anos',
    preco_44_a_48_anos: 'preco_44_a_48_anos',
    preco_49_a_53_anos: 'preco_49_a_53_anos',
    preco_54_a_58_anos: 'preco_54_a_58_anos',
    preco_59_anos_ou_mais: 'preco_59_anos_ou_mais',
    preco_todas_idades: 'preco_todas_idades',
    consultas_eletivas: 'consultas_eletivas',
    consultas_urgencia: 'consultas_urgencia',
    exames_simples: 'exames_simples',
    exames_complexos: 'exames_complexos',
    terapias_neurologicas: 'terapias_neurologicas',
    demais_terapias: 'demais_terapias',
    desconto_vidas: 'desconto_vidas',
    desconto_familiares: 'desconto_familiares',
    quantidade_de_familiares: 'quantidade_de_familiares',
    campo_vigencia: 'campo_vigencia',
    estado: 'estado',
    internacoes: 'internacoes',
    odontologia: 'odontologia'
  };

  export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload',
    last_activity: 'last_activity'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified_at: 'email_verified_at',
    password: 'password',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const cacheOrderByRelevanceFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type cacheOrderByRelevanceFieldEnum = (typeof cacheOrderByRelevanceFieldEnum)[keyof typeof cacheOrderByRelevanceFieldEnum]


  export const cache_locksOrderByRelevanceFieldEnum: {
    key: 'key',
    owner: 'owner'
  };

  export type cache_locksOrderByRelevanceFieldEnum = (typeof cache_locksOrderByRelevanceFieldEnum)[keyof typeof cache_locksOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const exportsOrderByRelevanceFieldEnum: {
    file_disk: 'file_disk',
    file_name: 'file_name',
    exporter: 'exporter'
  };

  export type exportsOrderByRelevanceFieldEnum = (typeof exportsOrderByRelevanceFieldEnum)[keyof typeof exportsOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const failed_import_rowsOrderByRelevanceFieldEnum: {
    validation_error: 'validation_error'
  };

  export type failed_import_rowsOrderByRelevanceFieldEnum = (typeof failed_import_rowsOrderByRelevanceFieldEnum)[keyof typeof failed_import_rowsOrderByRelevanceFieldEnum]


  export const failed_jobsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception'
  };

  export type failed_jobsOrderByRelevanceFieldEnum = (typeof failed_jobsOrderByRelevanceFieldEnum)[keyof typeof failed_jobsOrderByRelevanceFieldEnum]


  export const importsOrderByRelevanceFieldEnum: {
    file_name: 'file_name',
    file_path: 'file_path',
    importer: 'importer'
  };

  export type importsOrderByRelevanceFieldEnum = (typeof importsOrderByRelevanceFieldEnum)[keyof typeof importsOrderByRelevanceFieldEnum]


  export const job_batchesOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    failed_job_ids: 'failed_job_ids',
    options: 'options'
  };

  export type job_batchesOrderByRelevanceFieldEnum = (typeof job_batchesOrderByRelevanceFieldEnum)[keyof typeof job_batchesOrderByRelevanceFieldEnum]


  export const jobsOrderByRelevanceFieldEnum: {
    queue: 'queue',
    payload: 'payload'
  };

  export type jobsOrderByRelevanceFieldEnum = (typeof jobsOrderByRelevanceFieldEnum)[keyof typeof jobsOrderByRelevanceFieldEnum]


  export const migrationsOrderByRelevanceFieldEnum: {
    migration: 'migration'
  };

  export type migrationsOrderByRelevanceFieldEnum = (typeof migrationsOrderByRelevanceFieldEnum)[keyof typeof migrationsOrderByRelevanceFieldEnum]


  export const notificationsOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    notifiable_type: 'notifiable_type',
    data: 'data'
  };

  export type notificationsOrderByRelevanceFieldEnum = (typeof notificationsOrderByRelevanceFieldEnum)[keyof typeof notificationsOrderByRelevanceFieldEnum]


  export const password_reset_tokensOrderByRelevanceFieldEnum: {
    email: 'email',
    token: 'token'
  };

  export type password_reset_tokensOrderByRelevanceFieldEnum = (typeof password_reset_tokensOrderByRelevanceFieldEnum)[keyof typeof password_reset_tokensOrderByRelevanceFieldEnum]


  export const QuotationOrderByRelevanceFieldEnum: {
    plano_grupo: 'plano_grupo',
    coparticipacao_tipo: 'coparticipacao_tipo',
    segmentacao: 'segmentacao',
    acomodacao: 'acomodacao',
    assistencia_modalidade: 'assistencia_modalidade',
    codigo_interno: 'codigo_interno',
    registro_ans: 'registro_ans',
    cidade: 'cidade',
    validade_valores: 'validade_valores',
    tipo_plano: 'tipo_plano',
    desconto_familiares: 'desconto_familiares',
    quantidade_de_familiares: 'quantidade_de_familiares',
    campo_vigencia: 'campo_vigencia',
    estado: 'estado',
    internacoes: 'internacoes',
    odontologia: 'odontologia'
  };

  export type QuotationOrderByRelevanceFieldEnum = (typeof QuotationOrderByRelevanceFieldEnum)[keyof typeof QuotationOrderByRelevanceFieldEnum]


  export const sessionsOrderByRelevanceFieldEnum: {
    id: 'id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    remember_token: 'remember_token'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cacheWhereInput = {
    AND?: cacheWhereInput | cacheWhereInput[]
    OR?: cacheWhereInput[]
    NOT?: cacheWhereInput | cacheWhereInput[]
    key?: StringFilter<"cache"> | string
    value?: StringFilter<"cache"> | string
    expiration?: IntFilter<"cache"> | number
  }

  export type cacheOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
    _relevance?: cacheOrderByRelevanceInput
  }

  export type cacheWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: cacheWhereInput | cacheWhereInput[]
    OR?: cacheWhereInput[]
    NOT?: cacheWhereInput | cacheWhereInput[]
    value?: StringFilter<"cache"> | string
    expiration?: IntFilter<"cache"> | number
  }, "key">

  export type cacheOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
    _count?: cacheCountOrderByAggregateInput
    _avg?: cacheAvgOrderByAggregateInput
    _max?: cacheMaxOrderByAggregateInput
    _min?: cacheMinOrderByAggregateInput
    _sum?: cacheSumOrderByAggregateInput
  }

  export type cacheScalarWhereWithAggregatesInput = {
    AND?: cacheScalarWhereWithAggregatesInput | cacheScalarWhereWithAggregatesInput[]
    OR?: cacheScalarWhereWithAggregatesInput[]
    NOT?: cacheScalarWhereWithAggregatesInput | cacheScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"cache"> | string
    value?: StringWithAggregatesFilter<"cache"> | string
    expiration?: IntWithAggregatesFilter<"cache"> | number
  }

  export type cache_locksWhereInput = {
    AND?: cache_locksWhereInput | cache_locksWhereInput[]
    OR?: cache_locksWhereInput[]
    NOT?: cache_locksWhereInput | cache_locksWhereInput[]
    key?: StringFilter<"cache_locks"> | string
    owner?: StringFilter<"cache_locks"> | string
    expiration?: IntFilter<"cache_locks"> | number
  }

  export type cache_locksOrderByWithRelationInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
    _relevance?: cache_locksOrderByRelevanceInput
  }

  export type cache_locksWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: cache_locksWhereInput | cache_locksWhereInput[]
    OR?: cache_locksWhereInput[]
    NOT?: cache_locksWhereInput | cache_locksWhereInput[]
    owner?: StringFilter<"cache_locks"> | string
    expiration?: IntFilter<"cache_locks"> | number
  }, "key">

  export type cache_locksOrderByWithAggregationInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
    _count?: cache_locksCountOrderByAggregateInput
    _avg?: cache_locksAvgOrderByAggregateInput
    _max?: cache_locksMaxOrderByAggregateInput
    _min?: cache_locksMinOrderByAggregateInput
    _sum?: cache_locksSumOrderByAggregateInput
  }

  export type cache_locksScalarWhereWithAggregatesInput = {
    AND?: cache_locksScalarWhereWithAggregatesInput | cache_locksScalarWhereWithAggregatesInput[]
    OR?: cache_locksScalarWhereWithAggregatesInput[]
    NOT?: cache_locksScalarWhereWithAggregatesInput | cache_locksScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"cache_locks"> | string
    owner?: StringWithAggregatesFilter<"cache_locks"> | string
    expiration?: IntWithAggregatesFilter<"cache_locks"> | number
  }

  export type exportsWhereInput = {
    AND?: exportsWhereInput | exportsWhereInput[]
    OR?: exportsWhereInput[]
    NOT?: exportsWhereInput | exportsWhereInput[]
    id?: BigIntFilter<"exports"> | bigint | number
    completed_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    file_disk?: StringFilter<"exports"> | string
    file_name?: StringNullableFilter<"exports"> | string | null
    exporter?: StringFilter<"exports"> | string
    processed_rows?: IntFilter<"exports"> | number
    total_rows?: IntFilter<"exports"> | number
    successful_rows?: IntFilter<"exports"> | number
    user_id?: BigIntFilter<"exports"> | bigint | number
    created_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type exportsOrderByWithRelationInput = {
    id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    file_disk?: SortOrder
    file_name?: SortOrderInput | SortOrder
    exporter?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: exportsOrderByRelevanceInput
  }

  export type exportsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: exportsWhereInput | exportsWhereInput[]
    OR?: exportsWhereInput[]
    NOT?: exportsWhereInput | exportsWhereInput[]
    completed_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    file_disk?: StringFilter<"exports"> | string
    file_name?: StringNullableFilter<"exports"> | string | null
    exporter?: StringFilter<"exports"> | string
    processed_rows?: IntFilter<"exports"> | number
    total_rows?: IntFilter<"exports"> | number
    successful_rows?: IntFilter<"exports"> | number
    user_id?: BigIntFilter<"exports"> | bigint | number
    created_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type exportsOrderByWithAggregationInput = {
    id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    file_disk?: SortOrder
    file_name?: SortOrderInput | SortOrder
    exporter?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: exportsCountOrderByAggregateInput
    _avg?: exportsAvgOrderByAggregateInput
    _max?: exportsMaxOrderByAggregateInput
    _min?: exportsMinOrderByAggregateInput
    _sum?: exportsSumOrderByAggregateInput
  }

  export type exportsScalarWhereWithAggregatesInput = {
    AND?: exportsScalarWhereWithAggregatesInput | exportsScalarWhereWithAggregatesInput[]
    OR?: exportsScalarWhereWithAggregatesInput[]
    NOT?: exportsScalarWhereWithAggregatesInput | exportsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"exports"> | bigint | number
    completed_at?: DateTimeNullableWithAggregatesFilter<"exports"> | Date | string | null
    file_disk?: StringWithAggregatesFilter<"exports"> | string
    file_name?: StringNullableWithAggregatesFilter<"exports"> | string | null
    exporter?: StringWithAggregatesFilter<"exports"> | string
    processed_rows?: IntWithAggregatesFilter<"exports"> | number
    total_rows?: IntWithAggregatesFilter<"exports"> | number
    successful_rows?: IntWithAggregatesFilter<"exports"> | number
    user_id?: BigIntWithAggregatesFilter<"exports"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"exports"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"exports"> | Date | string | null
  }

  export type failed_import_rowsWhereInput = {
    AND?: failed_import_rowsWhereInput | failed_import_rowsWhereInput[]
    OR?: failed_import_rowsWhereInput[]
    NOT?: failed_import_rowsWhereInput | failed_import_rowsWhereInput[]
    id?: BigIntFilter<"failed_import_rows"> | bigint | number
    data?: JsonFilter<"failed_import_rows">
    import_id?: BigIntFilter<"failed_import_rows"> | bigint | number
    validation_error?: StringNullableFilter<"failed_import_rows"> | string | null
    created_at?: DateTimeNullableFilter<"failed_import_rows"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"failed_import_rows"> | Date | string | null
    imports?: XOR<ImportsScalarRelationFilter, importsWhereInput>
  }

  export type failed_import_rowsOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    import_id?: SortOrder
    validation_error?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    imports?: importsOrderByWithRelationInput
    _relevance?: failed_import_rowsOrderByRelevanceInput
  }

  export type failed_import_rowsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: failed_import_rowsWhereInput | failed_import_rowsWhereInput[]
    OR?: failed_import_rowsWhereInput[]
    NOT?: failed_import_rowsWhereInput | failed_import_rowsWhereInput[]
    data?: JsonFilter<"failed_import_rows">
    import_id?: BigIntFilter<"failed_import_rows"> | bigint | number
    validation_error?: StringNullableFilter<"failed_import_rows"> | string | null
    created_at?: DateTimeNullableFilter<"failed_import_rows"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"failed_import_rows"> | Date | string | null
    imports?: XOR<ImportsScalarRelationFilter, importsWhereInput>
  }, "id">

  export type failed_import_rowsOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    import_id?: SortOrder
    validation_error?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: failed_import_rowsCountOrderByAggregateInput
    _avg?: failed_import_rowsAvgOrderByAggregateInput
    _max?: failed_import_rowsMaxOrderByAggregateInput
    _min?: failed_import_rowsMinOrderByAggregateInput
    _sum?: failed_import_rowsSumOrderByAggregateInput
  }

  export type failed_import_rowsScalarWhereWithAggregatesInput = {
    AND?: failed_import_rowsScalarWhereWithAggregatesInput | failed_import_rowsScalarWhereWithAggregatesInput[]
    OR?: failed_import_rowsScalarWhereWithAggregatesInput[]
    NOT?: failed_import_rowsScalarWhereWithAggregatesInput | failed_import_rowsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"failed_import_rows"> | bigint | number
    data?: JsonWithAggregatesFilter<"failed_import_rows">
    import_id?: BigIntWithAggregatesFilter<"failed_import_rows"> | bigint | number
    validation_error?: StringNullableWithAggregatesFilter<"failed_import_rows"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"failed_import_rows"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"failed_import_rows"> | Date | string | null
  }

  export type failed_jobsWhereInput = {
    AND?: failed_jobsWhereInput | failed_jobsWhereInput[]
    OR?: failed_jobsWhereInput[]
    NOT?: failed_jobsWhereInput | failed_jobsWhereInput[]
    id?: BigIntFilter<"failed_jobs"> | bigint | number
    uuid?: StringFilter<"failed_jobs"> | string
    connection?: StringFilter<"failed_jobs"> | string
    queue?: StringFilter<"failed_jobs"> | string
    payload?: StringFilter<"failed_jobs"> | string
    exception?: StringFilter<"failed_jobs"> | string
    failed_at?: DateTimeFilter<"failed_jobs"> | Date | string
  }

  export type failed_jobsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
    _relevance?: failed_jobsOrderByRelevanceInput
  }

  export type failed_jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: failed_jobsWhereInput | failed_jobsWhereInput[]
    OR?: failed_jobsWhereInput[]
    NOT?: failed_jobsWhereInput | failed_jobsWhereInput[]
    connection?: StringFilter<"failed_jobs"> | string
    queue?: StringFilter<"failed_jobs"> | string
    payload?: StringFilter<"failed_jobs"> | string
    exception?: StringFilter<"failed_jobs"> | string
    failed_at?: DateTimeFilter<"failed_jobs"> | Date | string
  }, "id" | "uuid">

  export type failed_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
    _count?: failed_jobsCountOrderByAggregateInput
    _avg?: failed_jobsAvgOrderByAggregateInput
    _max?: failed_jobsMaxOrderByAggregateInput
    _min?: failed_jobsMinOrderByAggregateInput
    _sum?: failed_jobsSumOrderByAggregateInput
  }

  export type failed_jobsScalarWhereWithAggregatesInput = {
    AND?: failed_jobsScalarWhereWithAggregatesInput | failed_jobsScalarWhereWithAggregatesInput[]
    OR?: failed_jobsScalarWhereWithAggregatesInput[]
    NOT?: failed_jobsScalarWhereWithAggregatesInput | failed_jobsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"failed_jobs"> | bigint | number
    uuid?: StringWithAggregatesFilter<"failed_jobs"> | string
    connection?: StringWithAggregatesFilter<"failed_jobs"> | string
    queue?: StringWithAggregatesFilter<"failed_jobs"> | string
    payload?: StringWithAggregatesFilter<"failed_jobs"> | string
    exception?: StringWithAggregatesFilter<"failed_jobs"> | string
    failed_at?: DateTimeWithAggregatesFilter<"failed_jobs"> | Date | string
  }

  export type importsWhereInput = {
    AND?: importsWhereInput | importsWhereInput[]
    OR?: importsWhereInput[]
    NOT?: importsWhereInput | importsWhereInput[]
    id?: BigIntFilter<"imports"> | bigint | number
    completed_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    file_name?: StringFilter<"imports"> | string
    file_path?: StringFilter<"imports"> | string
    importer?: StringFilter<"imports"> | string
    processed_rows?: IntFilter<"imports"> | number
    total_rows?: IntFilter<"imports"> | number
    successful_rows?: IntFilter<"imports"> | number
    user_id?: BigIntFilter<"imports"> | bigint | number
    created_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    failed_import_rows?: Failed_import_rowsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type importsOrderByWithRelationInput = {
    id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    importer?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    failed_import_rows?: failed_import_rowsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: importsOrderByRelevanceInput
  }

  export type importsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: importsWhereInput | importsWhereInput[]
    OR?: importsWhereInput[]
    NOT?: importsWhereInput | importsWhereInput[]
    completed_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    file_name?: StringFilter<"imports"> | string
    file_path?: StringFilter<"imports"> | string
    importer?: StringFilter<"imports"> | string
    processed_rows?: IntFilter<"imports"> | number
    total_rows?: IntFilter<"imports"> | number
    successful_rows?: IntFilter<"imports"> | number
    user_id?: BigIntFilter<"imports"> | bigint | number
    created_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    failed_import_rows?: Failed_import_rowsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type importsOrderByWithAggregationInput = {
    id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    importer?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: importsCountOrderByAggregateInput
    _avg?: importsAvgOrderByAggregateInput
    _max?: importsMaxOrderByAggregateInput
    _min?: importsMinOrderByAggregateInput
    _sum?: importsSumOrderByAggregateInput
  }

  export type importsScalarWhereWithAggregatesInput = {
    AND?: importsScalarWhereWithAggregatesInput | importsScalarWhereWithAggregatesInput[]
    OR?: importsScalarWhereWithAggregatesInput[]
    NOT?: importsScalarWhereWithAggregatesInput | importsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"imports"> | bigint | number
    completed_at?: DateTimeNullableWithAggregatesFilter<"imports"> | Date | string | null
    file_name?: StringWithAggregatesFilter<"imports"> | string
    file_path?: StringWithAggregatesFilter<"imports"> | string
    importer?: StringWithAggregatesFilter<"imports"> | string
    processed_rows?: IntWithAggregatesFilter<"imports"> | number
    total_rows?: IntWithAggregatesFilter<"imports"> | number
    successful_rows?: IntWithAggregatesFilter<"imports"> | number
    user_id?: BigIntWithAggregatesFilter<"imports"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"imports"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"imports"> | Date | string | null
  }

  export type job_batchesWhereInput = {
    AND?: job_batchesWhereInput | job_batchesWhereInput[]
    OR?: job_batchesWhereInput[]
    NOT?: job_batchesWhereInput | job_batchesWhereInput[]
    id?: StringFilter<"job_batches"> | string
    name?: StringFilter<"job_batches"> | string
    total_jobs?: IntFilter<"job_batches"> | number
    pending_jobs?: IntFilter<"job_batches"> | number
    failed_jobs?: IntFilter<"job_batches"> | number
    failed_job_ids?: StringFilter<"job_batches"> | string
    options?: StringNullableFilter<"job_batches"> | string | null
    cancelled_at?: IntNullableFilter<"job_batches"> | number | null
    created_at?: IntFilter<"job_batches"> | number
    finished_at?: IntNullableFilter<"job_batches"> | number | null
  }

  export type job_batchesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    _relevance?: job_batchesOrderByRelevanceInput
  }

  export type job_batchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: job_batchesWhereInput | job_batchesWhereInput[]
    OR?: job_batchesWhereInput[]
    NOT?: job_batchesWhereInput | job_batchesWhereInput[]
    name?: StringFilter<"job_batches"> | string
    total_jobs?: IntFilter<"job_batches"> | number
    pending_jobs?: IntFilter<"job_batches"> | number
    failed_jobs?: IntFilter<"job_batches"> | number
    failed_job_ids?: StringFilter<"job_batches"> | string
    options?: StringNullableFilter<"job_batches"> | string | null
    cancelled_at?: IntNullableFilter<"job_batches"> | number | null
    created_at?: IntFilter<"job_batches"> | number
    finished_at?: IntNullableFilter<"job_batches"> | number | null
  }, "id">

  export type job_batchesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    _count?: job_batchesCountOrderByAggregateInput
    _avg?: job_batchesAvgOrderByAggregateInput
    _max?: job_batchesMaxOrderByAggregateInput
    _min?: job_batchesMinOrderByAggregateInput
    _sum?: job_batchesSumOrderByAggregateInput
  }

  export type job_batchesScalarWhereWithAggregatesInput = {
    AND?: job_batchesScalarWhereWithAggregatesInput | job_batchesScalarWhereWithAggregatesInput[]
    OR?: job_batchesScalarWhereWithAggregatesInput[]
    NOT?: job_batchesScalarWhereWithAggregatesInput | job_batchesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"job_batches"> | string
    name?: StringWithAggregatesFilter<"job_batches"> | string
    total_jobs?: IntWithAggregatesFilter<"job_batches"> | number
    pending_jobs?: IntWithAggregatesFilter<"job_batches"> | number
    failed_jobs?: IntWithAggregatesFilter<"job_batches"> | number
    failed_job_ids?: StringWithAggregatesFilter<"job_batches"> | string
    options?: StringNullableWithAggregatesFilter<"job_batches"> | string | null
    cancelled_at?: IntNullableWithAggregatesFilter<"job_batches"> | number | null
    created_at?: IntWithAggregatesFilter<"job_batches"> | number
    finished_at?: IntNullableWithAggregatesFilter<"job_batches"> | number | null
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: BigIntFilter<"jobs"> | bigint | number
    queue?: StringFilter<"jobs"> | string
    payload?: StringFilter<"jobs"> | string
    attempts?: IntFilter<"jobs"> | number
    reserved_at?: IntNullableFilter<"jobs"> | number | null
    available_at?: IntFilter<"jobs"> | number
    created_at?: IntFilter<"jobs"> | number
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
    _relevance?: jobsOrderByRelevanceInput
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    queue?: StringFilter<"jobs"> | string
    payload?: StringFilter<"jobs"> | string
    attempts?: IntFilter<"jobs"> | number
    reserved_at?: IntNullableFilter<"jobs"> | number | null
    available_at?: IntFilter<"jobs"> | number
    created_at?: IntFilter<"jobs"> | number
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrderInput | SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"jobs"> | bigint | number
    queue?: StringWithAggregatesFilter<"jobs"> | string
    payload?: StringWithAggregatesFilter<"jobs"> | string
    attempts?: IntWithAggregatesFilter<"jobs"> | number
    reserved_at?: IntNullableWithAggregatesFilter<"jobs"> | number | null
    available_at?: IntWithAggregatesFilter<"jobs"> | number
    created_at?: IntWithAggregatesFilter<"jobs"> | number
  }

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    id?: IntFilter<"migrations"> | number
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _relevance?: migrationsOrderByRelevanceInput
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }, "id">

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"migrations"> | number
    migration?: StringWithAggregatesFilter<"migrations"> | string
    batch?: IntWithAggregatesFilter<"migrations"> | number
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: StringFilter<"notifications"> | string
    type?: StringFilter<"notifications"> | string
    notifiable_type?: StringFilter<"notifications"> | string
    notifiable_id?: BigIntFilter<"notifications"> | bigint | number
    data?: StringFilter<"notifications"> | string
    read_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    notifiable_type?: SortOrder
    notifiable_id?: SortOrder
    data?: SortOrder
    read_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: notificationsOrderByRelevanceInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    type?: StringFilter<"notifications"> | string
    notifiable_type?: StringFilter<"notifications"> | string
    notifiable_id?: BigIntFilter<"notifications"> | bigint | number
    data?: StringFilter<"notifications"> | string
    read_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    notifiable_type?: SortOrder
    notifiable_id?: SortOrder
    data?: SortOrder
    read_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notifications"> | string
    type?: StringWithAggregatesFilter<"notifications"> | string
    notifiable_type?: StringWithAggregatesFilter<"notifications"> | string
    notifiable_id?: BigIntWithAggregatesFilter<"notifications"> | bigint | number
    data?: StringWithAggregatesFilter<"notifications"> | string
    read_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type password_reset_tokensWhereInput = {
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    email?: StringFilter<"password_reset_tokens"> | string
    token?: StringFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
  }

  export type password_reset_tokensOrderByWithRelationInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: password_reset_tokensOrderByRelevanceInput
  }

  export type password_reset_tokensWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    token?: StringFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
  }, "email">

  export type password_reset_tokensOrderByWithAggregationInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: password_reset_tokensCountOrderByAggregateInput
    _max?: password_reset_tokensMaxOrderByAggregateInput
    _min?: password_reset_tokensMinOrderByAggregateInput
  }

  export type password_reset_tokensScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokensScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    token?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"password_reset_tokens"> | Date | string | null
  }

  export type QuotationWhereInput = {
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    id?: BigIntFilter<"Quotation"> | bigint | number
    plano_grupo?: StringFilter<"Quotation"> | string
    coparticipacao_tipo?: StringFilter<"Quotation"> | string
    segmentacao?: StringNullableFilter<"Quotation"> | string | null
    acomodacao?: StringFilter<"Quotation"> | string
    assistencia_modalidade?: StringFilter<"Quotation"> | string
    codigo_interno?: StringNullableFilter<"Quotation"> | string | null
    registro_ans?: StringNullableFilter<"Quotation"> | string | null
    cidade?: StringFilter<"Quotation"> | string
    validade_valores?: StringNullableFilter<"Quotation"> | string | null
    tipo_plano?: StringFilter<"Quotation"> | string
    preco_00_a_18_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    exames_simples?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    exames_complexos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    demais_terapias?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: IntNullableFilter<"Quotation"> | number | null
    desconto_familiares?: StringNullableFilter<"Quotation"> | string | null
    quantidade_de_familiares?: StringNullableFilter<"Quotation"> | string | null
    campo_vigencia?: StringNullableFilter<"Quotation"> | string | null
    estado?: StringNullableFilter<"Quotation"> | string | null
    internacoes?: StringNullableFilter<"Quotation"> | string | null
    odontologia?: StringNullableFilter<"Quotation"> | string | null
  }

  export type QuotationOrderByWithRelationInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrderInput | SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrderInput | SortOrder
    registro_ans?: SortOrderInput | SortOrder
    cidade?: SortOrder
    validade_valores?: SortOrderInput | SortOrder
    tipo_plano?: SortOrder
    preco_00_a_18_anos?: SortOrderInput | SortOrder
    preco_19_a_23_anos?: SortOrderInput | SortOrder
    preco_24_a_28_anos?: SortOrderInput | SortOrder
    preco_29_a_33_anos?: SortOrderInput | SortOrder
    preco_34_a_38_anos?: SortOrderInput | SortOrder
    preco_39_a_43_anos?: SortOrderInput | SortOrder
    preco_44_a_48_anos?: SortOrderInput | SortOrder
    preco_49_a_53_anos?: SortOrderInput | SortOrder
    preco_54_a_58_anos?: SortOrderInput | SortOrder
    preco_59_anos_ou_mais?: SortOrderInput | SortOrder
    preco_todas_idades?: SortOrderInput | SortOrder
    consultas_eletivas?: SortOrderInput | SortOrder
    consultas_urgencia?: SortOrderInput | SortOrder
    exames_simples?: SortOrderInput | SortOrder
    exames_complexos?: SortOrderInput | SortOrder
    terapias_neurologicas?: SortOrderInput | SortOrder
    demais_terapias?: SortOrderInput | SortOrder
    desconto_vidas?: SortOrderInput | SortOrder
    desconto_familiares?: SortOrderInput | SortOrder
    quantidade_de_familiares?: SortOrderInput | SortOrder
    campo_vigencia?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    internacoes?: SortOrderInput | SortOrder
    odontologia?: SortOrderInput | SortOrder
    _relevance?: QuotationOrderByRelevanceInput
  }

  export type QuotationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    plano_grupo?: StringFilter<"Quotation"> | string
    coparticipacao_tipo?: StringFilter<"Quotation"> | string
    segmentacao?: StringNullableFilter<"Quotation"> | string | null
    acomodacao?: StringFilter<"Quotation"> | string
    assistencia_modalidade?: StringFilter<"Quotation"> | string
    codigo_interno?: StringNullableFilter<"Quotation"> | string | null
    registro_ans?: StringNullableFilter<"Quotation"> | string | null
    cidade?: StringFilter<"Quotation"> | string
    validade_valores?: StringNullableFilter<"Quotation"> | string | null
    tipo_plano?: StringFilter<"Quotation"> | string
    preco_00_a_18_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    exames_simples?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    exames_complexos?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    demais_terapias?: DecimalNullableFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: IntNullableFilter<"Quotation"> | number | null
    desconto_familiares?: StringNullableFilter<"Quotation"> | string | null
    quantidade_de_familiares?: StringNullableFilter<"Quotation"> | string | null
    campo_vigencia?: StringNullableFilter<"Quotation"> | string | null
    estado?: StringNullableFilter<"Quotation"> | string | null
    internacoes?: StringNullableFilter<"Quotation"> | string | null
    odontologia?: StringNullableFilter<"Quotation"> | string | null
  }, "id">

  export type QuotationOrderByWithAggregationInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrderInput | SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrderInput | SortOrder
    registro_ans?: SortOrderInput | SortOrder
    cidade?: SortOrder
    validade_valores?: SortOrderInput | SortOrder
    tipo_plano?: SortOrder
    preco_00_a_18_anos?: SortOrderInput | SortOrder
    preco_19_a_23_anos?: SortOrderInput | SortOrder
    preco_24_a_28_anos?: SortOrderInput | SortOrder
    preco_29_a_33_anos?: SortOrderInput | SortOrder
    preco_34_a_38_anos?: SortOrderInput | SortOrder
    preco_39_a_43_anos?: SortOrderInput | SortOrder
    preco_44_a_48_anos?: SortOrderInput | SortOrder
    preco_49_a_53_anos?: SortOrderInput | SortOrder
    preco_54_a_58_anos?: SortOrderInput | SortOrder
    preco_59_anos_ou_mais?: SortOrderInput | SortOrder
    preco_todas_idades?: SortOrderInput | SortOrder
    consultas_eletivas?: SortOrderInput | SortOrder
    consultas_urgencia?: SortOrderInput | SortOrder
    exames_simples?: SortOrderInput | SortOrder
    exames_complexos?: SortOrderInput | SortOrder
    terapias_neurologicas?: SortOrderInput | SortOrder
    demais_terapias?: SortOrderInput | SortOrder
    desconto_vidas?: SortOrderInput | SortOrder
    desconto_familiares?: SortOrderInput | SortOrder
    quantidade_de_familiares?: SortOrderInput | SortOrder
    campo_vigencia?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    internacoes?: SortOrderInput | SortOrder
    odontologia?: SortOrderInput | SortOrder
    _count?: QuotationCountOrderByAggregateInput
    _avg?: QuotationAvgOrderByAggregateInput
    _max?: QuotationMaxOrderByAggregateInput
    _min?: QuotationMinOrderByAggregateInput
    _sum?: QuotationSumOrderByAggregateInput
  }

  export type QuotationScalarWhereWithAggregatesInput = {
    AND?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    OR?: QuotationScalarWhereWithAggregatesInput[]
    NOT?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Quotation"> | bigint | number
    plano_grupo?: StringWithAggregatesFilter<"Quotation"> | string
    coparticipacao_tipo?: StringWithAggregatesFilter<"Quotation"> | string
    segmentacao?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    acomodacao?: StringWithAggregatesFilter<"Quotation"> | string
    assistencia_modalidade?: StringWithAggregatesFilter<"Quotation"> | string
    codigo_interno?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    registro_ans?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    cidade?: StringWithAggregatesFilter<"Quotation"> | string
    validade_valores?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    tipo_plano?: StringWithAggregatesFilter<"Quotation"> | string
    preco_00_a_18_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    exames_simples?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    exames_complexos?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    demais_terapias?: DecimalNullableWithAggregatesFilter<"Quotation"> | Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: IntNullableWithAggregatesFilter<"Quotation"> | number | null
    desconto_familiares?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    quantidade_de_familiares?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    campo_vigencia?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    internacoes?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    odontologia?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: StringFilter<"sessions"> | string
    user_id?: BigIntNullableFilter<"sessions"> | bigint | number | null
    ip_address?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    payload?: StringFilter<"sessions"> | string
    last_activity?: IntFilter<"sessions"> | number
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
    _relevance?: sessionsOrderByRelevanceInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    user_id?: BigIntNullableFilter<"sessions"> | bigint | number | null
    ip_address?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    payload?: StringFilter<"sessions"> | string
    last_activity?: IntFilter<"sessions"> | number
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sessions"> | string
    user_id?: BigIntNullableWithAggregatesFilter<"sessions"> | bigint | number | null
    ip_address?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    payload?: StringWithAggregatesFilter<"sessions"> | string
    last_activity?: IntWithAggregatesFilter<"sessions"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    exports?: ExportsListRelationFilter
    imports?: ImportsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    exports?: exportsOrderByRelationAggregateInput
    imports?: importsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    exports?: ExportsListRelationFilter
    imports?: ImportsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    remember_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type cacheCreateInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUncheckedCreateInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheCreateManyInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksCreateInput = {
    key: string
    owner: string
    expiration: number
  }

  export type cache_locksUncheckedCreateInput = {
    key: string
    owner: string
    expiration: number
  }

  export type cache_locksUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksCreateManyInput = {
    key: string
    owner: string
    expiration: number
  }

  export type cache_locksUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cache_locksUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type exportsCreateInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_disk: string
    file_name?: string | null
    exporter: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutExportsInput
  }

  export type exportsUncheckedCreateInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_disk: string
    file_name?: string | null
    exporter: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    user_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exportsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_disk?: StringFieldUpdateOperationsInput | string
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    exporter?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutExportsNestedInput
  }

  export type exportsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_disk?: StringFieldUpdateOperationsInput | string
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    exporter?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exportsCreateManyInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_disk: string
    file_name?: string | null
    exporter: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    user_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exportsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_disk?: StringFieldUpdateOperationsInput | string
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    exporter?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exportsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_disk?: StringFieldUpdateOperationsInput | string
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    exporter?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_import_rowsCreateInput = {
    id?: bigint | number
    data: JsonNullValueInput | InputJsonValue
    validation_error?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    imports: importsCreateNestedOneWithoutFailed_import_rowsInput
  }

  export type failed_import_rowsUncheckedCreateInput = {
    id?: bigint | number
    data: JsonNullValueInput | InputJsonValue
    import_id: bigint | number
    validation_error?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type failed_import_rowsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: JsonNullValueInput | InputJsonValue
    validation_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imports?: importsUpdateOneRequiredWithoutFailed_import_rowsNestedInput
  }

  export type failed_import_rowsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: JsonNullValueInput | InputJsonValue
    import_id?: BigIntFieldUpdateOperationsInput | bigint | number
    validation_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_import_rowsCreateManyInput = {
    id?: bigint | number
    data: JsonNullValueInput | InputJsonValue
    import_id: bigint | number
    validation_error?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type failed_import_rowsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: JsonNullValueInput | InputJsonValue
    validation_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_import_rowsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: JsonNullValueInput | InputJsonValue
    import_id?: BigIntFieldUpdateOperationsInput | bigint | number
    validation_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_jobsCreateInput = {
    id?: bigint | number
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUncheckedCreateInput = {
    id?: bigint | number
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsCreateManyInput = {
    id?: bigint | number
    uuid: string
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type importsCreateInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    failed_import_rows?: failed_import_rowsCreateNestedManyWithoutImportsInput
    users: usersCreateNestedOneWithoutImportsInput
  }

  export type importsUncheckedCreateInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    user_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    failed_import_rows?: failed_import_rowsUncheckedCreateNestedManyWithoutImportsInput
  }

  export type importsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failed_import_rows?: failed_import_rowsUpdateManyWithoutImportsNestedInput
    users?: usersUpdateOneRequiredWithoutImportsNestedInput
  }

  export type importsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failed_import_rows?: failed_import_rowsUncheckedUpdateManyWithoutImportsNestedInput
  }

  export type importsCreateManyInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    user_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type importsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type importsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_batchesCreateInput = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options?: string | null
    cancelled_at?: number | null
    created_at: number
    finished_at?: number | null
  }

  export type job_batchesUncheckedCreateInput = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options?: string | null
    cancelled_at?: number | null
    created_at: number
    finished_at?: number | null
  }

  export type job_batchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type job_batchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type job_batchesCreateManyInput = {
    id: string
    name: string
    total_jobs: number
    pending_jobs: number
    failed_jobs: number
    failed_job_ids: string
    options?: string | null
    cancelled_at?: number | null
    created_at: number
    finished_at?: number | null
  }

  export type job_batchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type job_batchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    total_jobs?: IntFieldUpdateOperationsInput | number
    pending_jobs?: IntFieldUpdateOperationsInput | number
    failed_jobs?: IntFieldUpdateOperationsInput | number
    failed_job_ids?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: IntFieldUpdateOperationsInput | number
    finished_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jobsCreateInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUncheckedCreateInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsCreateManyInput = {
    id?: bigint | number
    queue: string
    payload: string
    attempts: number
    reserved_at?: number | null
    available_at: number
    created_at: number
  }

  export type jobsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    reserved_at?: NullableIntFieldUpdateOperationsInput | number | null
    available_at?: IntFieldUpdateOperationsInput | number
    created_at?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateInput = {
    migration: string
    batch: number
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateManyMutationInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type notificationsCreateInput = {
    id: string
    type: string
    notifiable_type: string
    notifiable_id: bigint | number
    data: string
    read_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsUncheckedCreateInput = {
    id: string
    type: string
    notifiable_type: string
    notifiable_id: bigint | number
    data: string
    read_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notifiable_type?: StringFieldUpdateOperationsInput | string
    notifiable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notifiable_type?: StringFieldUpdateOperationsInput | string
    notifiable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id: string
    type: string
    notifiable_type: string
    notifiable_id: bigint | number
    data: string
    read_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notifiable_type?: StringFieldUpdateOperationsInput | string
    notifiable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notifiable_type?: StringFieldUpdateOperationsInput | string
    notifiable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: StringFieldUpdateOperationsInput | string
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensCreateInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUncheckedCreateInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensCreateManyInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotationCreateInput = {
    id?: bigint | number
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao?: string | null
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno?: string | null
    registro_ans?: string | null
    cidade: string
    validade_valores?: string | null
    tipo_plano: string
    preco_00_a_18_anos?: Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: Decimal | DecimalJsLike | number | string | null
    exames_simples?: Decimal | DecimalJsLike | number | string | null
    exames_complexos?: Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: Decimal | DecimalJsLike | number | string | null
    demais_terapias?: Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: number | null
    desconto_familiares?: string | null
    quantidade_de_familiares?: string | null
    campo_vigencia?: string | null
    estado?: string | null
    internacoes?: string | null
    odontologia?: string | null
  }

  export type QuotationUncheckedCreateInput = {
    id?: bigint | number
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao?: string | null
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno?: string | null
    registro_ans?: string | null
    cidade: string
    validade_valores?: string | null
    tipo_plano: string
    preco_00_a_18_anos?: Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: Decimal | DecimalJsLike | number | string | null
    exames_simples?: Decimal | DecimalJsLike | number | string | null
    exames_complexos?: Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: Decimal | DecimalJsLike | number | string | null
    demais_terapias?: Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: number | null
    desconto_familiares?: string | null
    quantidade_de_familiares?: string | null
    campo_vigencia?: string | null
    estado?: string | null
    internacoes?: string | null
    odontologia?: string | null
  }

  export type QuotationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: NullableStringFieldUpdateOperationsInput | string | null
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registro_ans?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_plano?: StringFieldUpdateOperationsInput | string
    preco_00_a_18_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_simples?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_complexos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    demais_terapias?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_de_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    campo_vigencia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    internacoes?: NullableStringFieldUpdateOperationsInput | string | null
    odontologia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: NullableStringFieldUpdateOperationsInput | string | null
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registro_ans?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_plano?: StringFieldUpdateOperationsInput | string
    preco_00_a_18_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_simples?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_complexos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    demais_terapias?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_de_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    campo_vigencia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    internacoes?: NullableStringFieldUpdateOperationsInput | string | null
    odontologia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationCreateManyInput = {
    id?: bigint | number
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao?: string | null
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno?: string | null
    registro_ans?: string | null
    cidade: string
    validade_valores?: string | null
    tipo_plano: string
    preco_00_a_18_anos?: Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: Decimal | DecimalJsLike | number | string | null
    exames_simples?: Decimal | DecimalJsLike | number | string | null
    exames_complexos?: Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: Decimal | DecimalJsLike | number | string | null
    demais_terapias?: Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: number | null
    desconto_familiares?: string | null
    quantidade_de_familiares?: string | null
    campo_vigencia?: string | null
    estado?: string | null
    internacoes?: string | null
    odontologia?: string | null
  }

  export type QuotationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: NullableStringFieldUpdateOperationsInput | string | null
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registro_ans?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_plano?: StringFieldUpdateOperationsInput | string
    preco_00_a_18_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_simples?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_complexos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    demais_terapias?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_de_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    campo_vigencia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    internacoes?: NullableStringFieldUpdateOperationsInput | string | null
    odontologia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: NullableStringFieldUpdateOperationsInput | string | null
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registro_ans?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_plano?: StringFieldUpdateOperationsInput | string
    preco_00_a_18_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_19_a_23_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_24_a_28_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_29_a_33_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_34_a_38_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_39_a_43_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_44_a_48_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_49_a_53_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_54_a_58_anos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_59_anos_ou_mais?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_todas_idades?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_eletivas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consultas_urgencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_simples?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exames_complexos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    terapias_neurologicas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    demais_terapias?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    desconto_vidas?: NullableIntFieldUpdateOperationsInput | number | null
    desconto_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_de_familiares?: NullableStringFieldUpdateOperationsInput | string | null
    campo_vigencia?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    internacoes?: NullableStringFieldUpdateOperationsInput | string | null
    odontologia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateInput = {
    id: string
    user_id?: bigint | number | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUncheckedCreateInput = {
    id: string
    user_id?: bigint | number | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsCreateManyInput = {
    id: string
    user_id?: bigint | number | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exports?: exportsCreateNestedManyWithoutUsersInput
    imports?: importsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exports?: exportsUncheckedCreateNestedManyWithoutUsersInput
    imports?: importsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exports?: exportsUpdateManyWithoutUsersNestedInput
    imports?: importsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exports?: exportsUncheckedUpdateManyWithoutUsersNestedInput
    imports?: importsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type cacheOrderByRelevanceInput = {
    fields: cacheOrderByRelevanceFieldEnum | cacheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cacheCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheAvgOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type cacheMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheSumOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type cache_locksOrderByRelevanceInput = {
    fields: cache_locksOrderByRelevanceFieldEnum | cache_locksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cache_locksCountOrderByAggregateInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
  }

  export type cache_locksAvgOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type cache_locksMaxOrderByAggregateInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
  }

  export type cache_locksMinOrderByAggregateInput = {
    key?: SortOrder
    owner?: SortOrder
    expiration?: SortOrder
  }

  export type cache_locksSumOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type exportsOrderByRelevanceInput = {
    fields: exportsOrderByRelevanceFieldEnum | exportsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type exportsCountOrderByAggregateInput = {
    id?: SortOrder
    completed_at?: SortOrder
    file_disk?: SortOrder
    file_name?: SortOrder
    exporter?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type exportsAvgOrderByAggregateInput = {
    id?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
  }

  export type exportsMaxOrderByAggregateInput = {
    id?: SortOrder
    completed_at?: SortOrder
    file_disk?: SortOrder
    file_name?: SortOrder
    exporter?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type exportsMinOrderByAggregateInput = {
    id?: SortOrder
    completed_at?: SortOrder
    file_disk?: SortOrder
    file_name?: SortOrder
    exporter?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type exportsSumOrderByAggregateInput = {
    id?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ImportsScalarRelationFilter = {
    is?: importsWhereInput
    isNot?: importsWhereInput
  }

  export type failed_import_rowsOrderByRelevanceInput = {
    fields: failed_import_rowsOrderByRelevanceFieldEnum | failed_import_rowsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type failed_import_rowsCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    import_id?: SortOrder
    validation_error?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type failed_import_rowsAvgOrderByAggregateInput = {
    id?: SortOrder
    import_id?: SortOrder
  }

  export type failed_import_rowsMaxOrderByAggregateInput = {
    id?: SortOrder
    import_id?: SortOrder
    validation_error?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type failed_import_rowsMinOrderByAggregateInput = {
    id?: SortOrder
    import_id?: SortOrder
    validation_error?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type failed_import_rowsSumOrderByAggregateInput = {
    id?: SortOrder
    import_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type failed_jobsOrderByRelevanceInput = {
    fields: failed_jobsOrderByRelevanceFieldEnum | failed_jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type failed_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type failed_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Failed_import_rowsListRelationFilter = {
    every?: failed_import_rowsWhereInput
    some?: failed_import_rowsWhereInput
    none?: failed_import_rowsWhereInput
  }

  export type failed_import_rowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type importsOrderByRelevanceInput = {
    fields: importsOrderByRelevanceFieldEnum | importsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type importsCountOrderByAggregateInput = {
    id?: SortOrder
    completed_at?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    importer?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type importsAvgOrderByAggregateInput = {
    id?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
  }

  export type importsMaxOrderByAggregateInput = {
    id?: SortOrder
    completed_at?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    importer?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type importsMinOrderByAggregateInput = {
    id?: SortOrder
    completed_at?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    importer?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type importsSumOrderByAggregateInput = {
    id?: SortOrder
    processed_rows?: SortOrder
    total_rows?: SortOrder
    successful_rows?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type job_batchesOrderByRelevanceInput = {
    fields: job_batchesOrderByRelevanceFieldEnum | job_batchesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type job_batchesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesAvgOrderByAggregateInput = {
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    failed_job_ids?: SortOrder
    options?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type job_batchesSumOrderByAggregateInput = {
    total_jobs?: SortOrder
    pending_jobs?: SortOrder
    failed_jobs?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    finished_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type jobsOrderByRelevanceInput = {
    fields: jobsOrderByRelevanceFieldEnum | jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    attempts?: SortOrder
    reserved_at?: SortOrder
    available_at?: SortOrder
    created_at?: SortOrder
  }

  export type migrationsOrderByRelevanceInput = {
    fields: migrationsOrderByRelevanceFieldEnum | migrationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type notificationsOrderByRelevanceInput = {
    fields: notificationsOrderByRelevanceFieldEnum | notificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notifiable_type?: SortOrder
    notifiable_id?: SortOrder
    data?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    notifiable_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notifiable_type?: SortOrder
    notifiable_id?: SortOrder
    data?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notifiable_type?: SortOrder
    notifiable_id?: SortOrder
    data?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    notifiable_id?: SortOrder
  }

  export type password_reset_tokensOrderByRelevanceInput = {
    fields: password_reset_tokensOrderByRelevanceFieldEnum | password_reset_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type password_reset_tokensCountOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMaxOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMinOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type QuotationOrderByRelevanceInput = {
    fields: QuotationOrderByRelevanceFieldEnum | QuotationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuotationCountOrderByAggregateInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrder
    registro_ans?: SortOrder
    cidade?: SortOrder
    validade_valores?: SortOrder
    tipo_plano?: SortOrder
    preco_00_a_18_anos?: SortOrder
    preco_19_a_23_anos?: SortOrder
    preco_24_a_28_anos?: SortOrder
    preco_29_a_33_anos?: SortOrder
    preco_34_a_38_anos?: SortOrder
    preco_39_a_43_anos?: SortOrder
    preco_44_a_48_anos?: SortOrder
    preco_49_a_53_anos?: SortOrder
    preco_54_a_58_anos?: SortOrder
    preco_59_anos_ou_mais?: SortOrder
    preco_todas_idades?: SortOrder
    consultas_eletivas?: SortOrder
    consultas_urgencia?: SortOrder
    exames_simples?: SortOrder
    exames_complexos?: SortOrder
    terapias_neurologicas?: SortOrder
    demais_terapias?: SortOrder
    desconto_vidas?: SortOrder
    desconto_familiares?: SortOrder
    quantidade_de_familiares?: SortOrder
    campo_vigencia?: SortOrder
    estado?: SortOrder
    internacoes?: SortOrder
    odontologia?: SortOrder
  }

  export type QuotationAvgOrderByAggregateInput = {
    id?: SortOrder
    preco_00_a_18_anos?: SortOrder
    preco_19_a_23_anos?: SortOrder
    preco_24_a_28_anos?: SortOrder
    preco_29_a_33_anos?: SortOrder
    preco_34_a_38_anos?: SortOrder
    preco_39_a_43_anos?: SortOrder
    preco_44_a_48_anos?: SortOrder
    preco_49_a_53_anos?: SortOrder
    preco_54_a_58_anos?: SortOrder
    preco_59_anos_ou_mais?: SortOrder
    preco_todas_idades?: SortOrder
    consultas_eletivas?: SortOrder
    consultas_urgencia?: SortOrder
    exames_simples?: SortOrder
    exames_complexos?: SortOrder
    terapias_neurologicas?: SortOrder
    demais_terapias?: SortOrder
    desconto_vidas?: SortOrder
  }

  export type QuotationMaxOrderByAggregateInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrder
    registro_ans?: SortOrder
    cidade?: SortOrder
    validade_valores?: SortOrder
    tipo_plano?: SortOrder
    preco_00_a_18_anos?: SortOrder
    preco_19_a_23_anos?: SortOrder
    preco_24_a_28_anos?: SortOrder
    preco_29_a_33_anos?: SortOrder
    preco_34_a_38_anos?: SortOrder
    preco_39_a_43_anos?: SortOrder
    preco_44_a_48_anos?: SortOrder
    preco_49_a_53_anos?: SortOrder
    preco_54_a_58_anos?: SortOrder
    preco_59_anos_ou_mais?: SortOrder
    preco_todas_idades?: SortOrder
    consultas_eletivas?: SortOrder
    consultas_urgencia?: SortOrder
    exames_simples?: SortOrder
    exames_complexos?: SortOrder
    terapias_neurologicas?: SortOrder
    demais_terapias?: SortOrder
    desconto_vidas?: SortOrder
    desconto_familiares?: SortOrder
    quantidade_de_familiares?: SortOrder
    campo_vigencia?: SortOrder
    estado?: SortOrder
    internacoes?: SortOrder
    odontologia?: SortOrder
  }

  export type QuotationMinOrderByAggregateInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrder
    registro_ans?: SortOrder
    cidade?: SortOrder
    validade_valores?: SortOrder
    tipo_plano?: SortOrder
    preco_00_a_18_anos?: SortOrder
    preco_19_a_23_anos?: SortOrder
    preco_24_a_28_anos?: SortOrder
    preco_29_a_33_anos?: SortOrder
    preco_34_a_38_anos?: SortOrder
    preco_39_a_43_anos?: SortOrder
    preco_44_a_48_anos?: SortOrder
    preco_49_a_53_anos?: SortOrder
    preco_54_a_58_anos?: SortOrder
    preco_59_anos_ou_mais?: SortOrder
    preco_todas_idades?: SortOrder
    consultas_eletivas?: SortOrder
    consultas_urgencia?: SortOrder
    exames_simples?: SortOrder
    exames_complexos?: SortOrder
    terapias_neurologicas?: SortOrder
    demais_terapias?: SortOrder
    desconto_vidas?: SortOrder
    desconto_familiares?: SortOrder
    quantidade_de_familiares?: SortOrder
    campo_vigencia?: SortOrder
    estado?: SortOrder
    internacoes?: SortOrder
    odontologia?: SortOrder
  }

  export type QuotationSumOrderByAggregateInput = {
    id?: SortOrder
    preco_00_a_18_anos?: SortOrder
    preco_19_a_23_anos?: SortOrder
    preco_24_a_28_anos?: SortOrder
    preco_29_a_33_anos?: SortOrder
    preco_34_a_38_anos?: SortOrder
    preco_39_a_43_anos?: SortOrder
    preco_44_a_48_anos?: SortOrder
    preco_49_a_53_anos?: SortOrder
    preco_54_a_58_anos?: SortOrder
    preco_59_anos_ou_mais?: SortOrder
    preco_todas_idades?: SortOrder
    consultas_eletivas?: SortOrder
    consultas_urgencia?: SortOrder
    exames_simples?: SortOrder
    exames_complexos?: SortOrder
    terapias_neurologicas?: SortOrder
    demais_terapias?: SortOrder
    desconto_vidas?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type sessionsOrderByRelevanceInput = {
    fields: sessionsOrderByRelevanceFieldEnum | sessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    user_id?: SortOrder
    last_activity?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ExportsListRelationFilter = {
    every?: exportsWhereInput
    some?: exportsWhereInput
    none?: exportsWhereInput
  }

  export type ImportsListRelationFilter = {
    every?: importsWhereInput
    some?: importsWhereInput
    none?: importsWhereInput
  }

  export type exportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type importsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutExportsInput = {
    create?: XOR<usersCreateWithoutExportsInput, usersUncheckedCreateWithoutExportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExportsInput
    connect?: usersWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutExportsNestedInput = {
    create?: XOR<usersCreateWithoutExportsInput, usersUncheckedCreateWithoutExportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExportsInput
    upsert?: usersUpsertWithoutExportsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExportsInput, usersUpdateWithoutExportsInput>, usersUncheckedUpdateWithoutExportsInput>
  }

  export type importsCreateNestedOneWithoutFailed_import_rowsInput = {
    create?: XOR<importsCreateWithoutFailed_import_rowsInput, importsUncheckedCreateWithoutFailed_import_rowsInput>
    connectOrCreate?: importsCreateOrConnectWithoutFailed_import_rowsInput
    connect?: importsWhereUniqueInput
  }

  export type importsUpdateOneRequiredWithoutFailed_import_rowsNestedInput = {
    create?: XOR<importsCreateWithoutFailed_import_rowsInput, importsUncheckedCreateWithoutFailed_import_rowsInput>
    connectOrCreate?: importsCreateOrConnectWithoutFailed_import_rowsInput
    upsert?: importsUpsertWithoutFailed_import_rowsInput
    connect?: importsWhereUniqueInput
    update?: XOR<XOR<importsUpdateToOneWithWhereWithoutFailed_import_rowsInput, importsUpdateWithoutFailed_import_rowsInput>, importsUncheckedUpdateWithoutFailed_import_rowsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type failed_import_rowsCreateNestedManyWithoutImportsInput = {
    create?: XOR<failed_import_rowsCreateWithoutImportsInput, failed_import_rowsUncheckedCreateWithoutImportsInput> | failed_import_rowsCreateWithoutImportsInput[] | failed_import_rowsUncheckedCreateWithoutImportsInput[]
    connectOrCreate?: failed_import_rowsCreateOrConnectWithoutImportsInput | failed_import_rowsCreateOrConnectWithoutImportsInput[]
    createMany?: failed_import_rowsCreateManyImportsInputEnvelope
    connect?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutImportsInput = {
    create?: XOR<usersCreateWithoutImportsInput, usersUncheckedCreateWithoutImportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutImportsInput
    connect?: usersWhereUniqueInput
  }

  export type failed_import_rowsUncheckedCreateNestedManyWithoutImportsInput = {
    create?: XOR<failed_import_rowsCreateWithoutImportsInput, failed_import_rowsUncheckedCreateWithoutImportsInput> | failed_import_rowsCreateWithoutImportsInput[] | failed_import_rowsUncheckedCreateWithoutImportsInput[]
    connectOrCreate?: failed_import_rowsCreateOrConnectWithoutImportsInput | failed_import_rowsCreateOrConnectWithoutImportsInput[]
    createMany?: failed_import_rowsCreateManyImportsInputEnvelope
    connect?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
  }

  export type failed_import_rowsUpdateManyWithoutImportsNestedInput = {
    create?: XOR<failed_import_rowsCreateWithoutImportsInput, failed_import_rowsUncheckedCreateWithoutImportsInput> | failed_import_rowsCreateWithoutImportsInput[] | failed_import_rowsUncheckedCreateWithoutImportsInput[]
    connectOrCreate?: failed_import_rowsCreateOrConnectWithoutImportsInput | failed_import_rowsCreateOrConnectWithoutImportsInput[]
    upsert?: failed_import_rowsUpsertWithWhereUniqueWithoutImportsInput | failed_import_rowsUpsertWithWhereUniqueWithoutImportsInput[]
    createMany?: failed_import_rowsCreateManyImportsInputEnvelope
    set?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    disconnect?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    delete?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    connect?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    update?: failed_import_rowsUpdateWithWhereUniqueWithoutImportsInput | failed_import_rowsUpdateWithWhereUniqueWithoutImportsInput[]
    updateMany?: failed_import_rowsUpdateManyWithWhereWithoutImportsInput | failed_import_rowsUpdateManyWithWhereWithoutImportsInput[]
    deleteMany?: failed_import_rowsScalarWhereInput | failed_import_rowsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutImportsNestedInput = {
    create?: XOR<usersCreateWithoutImportsInput, usersUncheckedCreateWithoutImportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutImportsInput
    upsert?: usersUpsertWithoutImportsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutImportsInput, usersUpdateWithoutImportsInput>, usersUncheckedUpdateWithoutImportsInput>
  }

  export type failed_import_rowsUncheckedUpdateManyWithoutImportsNestedInput = {
    create?: XOR<failed_import_rowsCreateWithoutImportsInput, failed_import_rowsUncheckedCreateWithoutImportsInput> | failed_import_rowsCreateWithoutImportsInput[] | failed_import_rowsUncheckedCreateWithoutImportsInput[]
    connectOrCreate?: failed_import_rowsCreateOrConnectWithoutImportsInput | failed_import_rowsCreateOrConnectWithoutImportsInput[]
    upsert?: failed_import_rowsUpsertWithWhereUniqueWithoutImportsInput | failed_import_rowsUpsertWithWhereUniqueWithoutImportsInput[]
    createMany?: failed_import_rowsCreateManyImportsInputEnvelope
    set?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    disconnect?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    delete?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    connect?: failed_import_rowsWhereUniqueInput | failed_import_rowsWhereUniqueInput[]
    update?: failed_import_rowsUpdateWithWhereUniqueWithoutImportsInput | failed_import_rowsUpdateWithWhereUniqueWithoutImportsInput[]
    updateMany?: failed_import_rowsUpdateManyWithWhereWithoutImportsInput | failed_import_rowsUpdateManyWithWhereWithoutImportsInput[]
    deleteMany?: failed_import_rowsScalarWhereInput | failed_import_rowsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type exportsCreateNestedManyWithoutUsersInput = {
    create?: XOR<exportsCreateWithoutUsersInput, exportsUncheckedCreateWithoutUsersInput> | exportsCreateWithoutUsersInput[] | exportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exportsCreateOrConnectWithoutUsersInput | exportsCreateOrConnectWithoutUsersInput[]
    createMany?: exportsCreateManyUsersInputEnvelope
    connect?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
  }

  export type importsCreateNestedManyWithoutUsersInput = {
    create?: XOR<importsCreateWithoutUsersInput, importsUncheckedCreateWithoutUsersInput> | importsCreateWithoutUsersInput[] | importsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: importsCreateOrConnectWithoutUsersInput | importsCreateOrConnectWithoutUsersInput[]
    createMany?: importsCreateManyUsersInputEnvelope
    connect?: importsWhereUniqueInput | importsWhereUniqueInput[]
  }

  export type exportsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<exportsCreateWithoutUsersInput, exportsUncheckedCreateWithoutUsersInput> | exportsCreateWithoutUsersInput[] | exportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exportsCreateOrConnectWithoutUsersInput | exportsCreateOrConnectWithoutUsersInput[]
    createMany?: exportsCreateManyUsersInputEnvelope
    connect?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
  }

  export type importsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<importsCreateWithoutUsersInput, importsUncheckedCreateWithoutUsersInput> | importsCreateWithoutUsersInput[] | importsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: importsCreateOrConnectWithoutUsersInput | importsCreateOrConnectWithoutUsersInput[]
    createMany?: importsCreateManyUsersInputEnvelope
    connect?: importsWhereUniqueInput | importsWhereUniqueInput[]
  }

  export type exportsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<exportsCreateWithoutUsersInput, exportsUncheckedCreateWithoutUsersInput> | exportsCreateWithoutUsersInput[] | exportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exportsCreateOrConnectWithoutUsersInput | exportsCreateOrConnectWithoutUsersInput[]
    upsert?: exportsUpsertWithWhereUniqueWithoutUsersInput | exportsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: exportsCreateManyUsersInputEnvelope
    set?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    disconnect?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    delete?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    connect?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    update?: exportsUpdateWithWhereUniqueWithoutUsersInput | exportsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: exportsUpdateManyWithWhereWithoutUsersInput | exportsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: exportsScalarWhereInput | exportsScalarWhereInput[]
  }

  export type importsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<importsCreateWithoutUsersInput, importsUncheckedCreateWithoutUsersInput> | importsCreateWithoutUsersInput[] | importsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: importsCreateOrConnectWithoutUsersInput | importsCreateOrConnectWithoutUsersInput[]
    upsert?: importsUpsertWithWhereUniqueWithoutUsersInput | importsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: importsCreateManyUsersInputEnvelope
    set?: importsWhereUniqueInput | importsWhereUniqueInput[]
    disconnect?: importsWhereUniqueInput | importsWhereUniqueInput[]
    delete?: importsWhereUniqueInput | importsWhereUniqueInput[]
    connect?: importsWhereUniqueInput | importsWhereUniqueInput[]
    update?: importsUpdateWithWhereUniqueWithoutUsersInput | importsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: importsUpdateManyWithWhereWithoutUsersInput | importsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: importsScalarWhereInput | importsScalarWhereInput[]
  }

  export type exportsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<exportsCreateWithoutUsersInput, exportsUncheckedCreateWithoutUsersInput> | exportsCreateWithoutUsersInput[] | exportsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exportsCreateOrConnectWithoutUsersInput | exportsCreateOrConnectWithoutUsersInput[]
    upsert?: exportsUpsertWithWhereUniqueWithoutUsersInput | exportsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: exportsCreateManyUsersInputEnvelope
    set?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    disconnect?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    delete?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    connect?: exportsWhereUniqueInput | exportsWhereUniqueInput[]
    update?: exportsUpdateWithWhereUniqueWithoutUsersInput | exportsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: exportsUpdateManyWithWhereWithoutUsersInput | exportsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: exportsScalarWhereInput | exportsScalarWhereInput[]
  }

  export type importsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<importsCreateWithoutUsersInput, importsUncheckedCreateWithoutUsersInput> | importsCreateWithoutUsersInput[] | importsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: importsCreateOrConnectWithoutUsersInput | importsCreateOrConnectWithoutUsersInput[]
    upsert?: importsUpsertWithWhereUniqueWithoutUsersInput | importsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: importsCreateManyUsersInputEnvelope
    set?: importsWhereUniqueInput | importsWhereUniqueInput[]
    disconnect?: importsWhereUniqueInput | importsWhereUniqueInput[]
    delete?: importsWhereUniqueInput | importsWhereUniqueInput[]
    connect?: importsWhereUniqueInput | importsWhereUniqueInput[]
    update?: importsUpdateWithWhereUniqueWithoutUsersInput | importsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: importsUpdateManyWithWhereWithoutUsersInput | importsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: importsScalarWhereInput | importsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutExportsInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    imports?: importsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutExportsInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    imports?: importsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutExportsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExportsInput, usersUncheckedCreateWithoutExportsInput>
  }

  export type usersUpsertWithoutExportsInput = {
    update: XOR<usersUpdateWithoutExportsInput, usersUncheckedUpdateWithoutExportsInput>
    create: XOR<usersCreateWithoutExportsInput, usersUncheckedCreateWithoutExportsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExportsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExportsInput, usersUncheckedUpdateWithoutExportsInput>
  }

  export type usersUpdateWithoutExportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imports?: importsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutExportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imports?: importsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type importsCreateWithoutFailed_import_rowsInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutImportsInput
  }

  export type importsUncheckedCreateWithoutFailed_import_rowsInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    user_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type importsCreateOrConnectWithoutFailed_import_rowsInput = {
    where: importsWhereUniqueInput
    create: XOR<importsCreateWithoutFailed_import_rowsInput, importsUncheckedCreateWithoutFailed_import_rowsInput>
  }

  export type importsUpsertWithoutFailed_import_rowsInput = {
    update: XOR<importsUpdateWithoutFailed_import_rowsInput, importsUncheckedUpdateWithoutFailed_import_rowsInput>
    create: XOR<importsCreateWithoutFailed_import_rowsInput, importsUncheckedCreateWithoutFailed_import_rowsInput>
    where?: importsWhereInput
  }

  export type importsUpdateToOneWithWhereWithoutFailed_import_rowsInput = {
    where?: importsWhereInput
    data: XOR<importsUpdateWithoutFailed_import_rowsInput, importsUncheckedUpdateWithoutFailed_import_rowsInput>
  }

  export type importsUpdateWithoutFailed_import_rowsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutImportsNestedInput
  }

  export type importsUncheckedUpdateWithoutFailed_import_rowsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_import_rowsCreateWithoutImportsInput = {
    id?: bigint | number
    data: JsonNullValueInput | InputJsonValue
    validation_error?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type failed_import_rowsUncheckedCreateWithoutImportsInput = {
    id?: bigint | number
    data: JsonNullValueInput | InputJsonValue
    validation_error?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type failed_import_rowsCreateOrConnectWithoutImportsInput = {
    where: failed_import_rowsWhereUniqueInput
    create: XOR<failed_import_rowsCreateWithoutImportsInput, failed_import_rowsUncheckedCreateWithoutImportsInput>
  }

  export type failed_import_rowsCreateManyImportsInputEnvelope = {
    data: failed_import_rowsCreateManyImportsInput | failed_import_rowsCreateManyImportsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutImportsInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exports?: exportsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutImportsInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exports?: exportsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutImportsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutImportsInput, usersUncheckedCreateWithoutImportsInput>
  }

  export type failed_import_rowsUpsertWithWhereUniqueWithoutImportsInput = {
    where: failed_import_rowsWhereUniqueInput
    update: XOR<failed_import_rowsUpdateWithoutImportsInput, failed_import_rowsUncheckedUpdateWithoutImportsInput>
    create: XOR<failed_import_rowsCreateWithoutImportsInput, failed_import_rowsUncheckedCreateWithoutImportsInput>
  }

  export type failed_import_rowsUpdateWithWhereUniqueWithoutImportsInput = {
    where: failed_import_rowsWhereUniqueInput
    data: XOR<failed_import_rowsUpdateWithoutImportsInput, failed_import_rowsUncheckedUpdateWithoutImportsInput>
  }

  export type failed_import_rowsUpdateManyWithWhereWithoutImportsInput = {
    where: failed_import_rowsScalarWhereInput
    data: XOR<failed_import_rowsUpdateManyMutationInput, failed_import_rowsUncheckedUpdateManyWithoutImportsInput>
  }

  export type failed_import_rowsScalarWhereInput = {
    AND?: failed_import_rowsScalarWhereInput | failed_import_rowsScalarWhereInput[]
    OR?: failed_import_rowsScalarWhereInput[]
    NOT?: failed_import_rowsScalarWhereInput | failed_import_rowsScalarWhereInput[]
    id?: BigIntFilter<"failed_import_rows"> | bigint | number
    data?: JsonFilter<"failed_import_rows">
    import_id?: BigIntFilter<"failed_import_rows"> | bigint | number
    validation_error?: StringNullableFilter<"failed_import_rows"> | string | null
    created_at?: DateTimeNullableFilter<"failed_import_rows"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"failed_import_rows"> | Date | string | null
  }

  export type usersUpsertWithoutImportsInput = {
    update: XOR<usersUpdateWithoutImportsInput, usersUncheckedUpdateWithoutImportsInput>
    create: XOR<usersCreateWithoutImportsInput, usersUncheckedCreateWithoutImportsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutImportsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutImportsInput, usersUncheckedUpdateWithoutImportsInput>
  }

  export type usersUpdateWithoutImportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exports?: exportsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutImportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exports?: exportsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type exportsCreateWithoutUsersInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_disk: string
    file_name?: string | null
    exporter: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exportsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_disk: string
    file_name?: string | null
    exporter: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exportsCreateOrConnectWithoutUsersInput = {
    where: exportsWhereUniqueInput
    create: XOR<exportsCreateWithoutUsersInput, exportsUncheckedCreateWithoutUsersInput>
  }

  export type exportsCreateManyUsersInputEnvelope = {
    data: exportsCreateManyUsersInput | exportsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type importsCreateWithoutUsersInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    failed_import_rows?: failed_import_rowsCreateNestedManyWithoutImportsInput
  }

  export type importsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    failed_import_rows?: failed_import_rowsUncheckedCreateNestedManyWithoutImportsInput
  }

  export type importsCreateOrConnectWithoutUsersInput = {
    where: importsWhereUniqueInput
    create: XOR<importsCreateWithoutUsersInput, importsUncheckedCreateWithoutUsersInput>
  }

  export type importsCreateManyUsersInputEnvelope = {
    data: importsCreateManyUsersInput | importsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type exportsUpsertWithWhereUniqueWithoutUsersInput = {
    where: exportsWhereUniqueInput
    update: XOR<exportsUpdateWithoutUsersInput, exportsUncheckedUpdateWithoutUsersInput>
    create: XOR<exportsCreateWithoutUsersInput, exportsUncheckedCreateWithoutUsersInput>
  }

  export type exportsUpdateWithWhereUniqueWithoutUsersInput = {
    where: exportsWhereUniqueInput
    data: XOR<exportsUpdateWithoutUsersInput, exportsUncheckedUpdateWithoutUsersInput>
  }

  export type exportsUpdateManyWithWhereWithoutUsersInput = {
    where: exportsScalarWhereInput
    data: XOR<exportsUpdateManyMutationInput, exportsUncheckedUpdateManyWithoutUsersInput>
  }

  export type exportsScalarWhereInput = {
    AND?: exportsScalarWhereInput | exportsScalarWhereInput[]
    OR?: exportsScalarWhereInput[]
    NOT?: exportsScalarWhereInput | exportsScalarWhereInput[]
    id?: BigIntFilter<"exports"> | bigint | number
    completed_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    file_disk?: StringFilter<"exports"> | string
    file_name?: StringNullableFilter<"exports"> | string | null
    exporter?: StringFilter<"exports"> | string
    processed_rows?: IntFilter<"exports"> | number
    total_rows?: IntFilter<"exports"> | number
    successful_rows?: IntFilter<"exports"> | number
    user_id?: BigIntFilter<"exports"> | bigint | number
    created_at?: DateTimeNullableFilter<"exports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exports"> | Date | string | null
  }

  export type importsUpsertWithWhereUniqueWithoutUsersInput = {
    where: importsWhereUniqueInput
    update: XOR<importsUpdateWithoutUsersInput, importsUncheckedUpdateWithoutUsersInput>
    create: XOR<importsCreateWithoutUsersInput, importsUncheckedCreateWithoutUsersInput>
  }

  export type importsUpdateWithWhereUniqueWithoutUsersInput = {
    where: importsWhereUniqueInput
    data: XOR<importsUpdateWithoutUsersInput, importsUncheckedUpdateWithoutUsersInput>
  }

  export type importsUpdateManyWithWhereWithoutUsersInput = {
    where: importsScalarWhereInput
    data: XOR<importsUpdateManyMutationInput, importsUncheckedUpdateManyWithoutUsersInput>
  }

  export type importsScalarWhereInput = {
    AND?: importsScalarWhereInput | importsScalarWhereInput[]
    OR?: importsScalarWhereInput[]
    NOT?: importsScalarWhereInput | importsScalarWhereInput[]
    id?: BigIntFilter<"imports"> | bigint | number
    completed_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    file_name?: StringFilter<"imports"> | string
    file_path?: StringFilter<"imports"> | string
    importer?: StringFilter<"imports"> | string
    processed_rows?: IntFilter<"imports"> | number
    total_rows?: IntFilter<"imports"> | number
    successful_rows?: IntFilter<"imports"> | number
    user_id?: BigIntFilter<"imports"> | bigint | number
    created_at?: DateTimeNullableFilter<"imports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"imports"> | Date | string | null
  }

  export type failed_import_rowsCreateManyImportsInput = {
    id?: bigint | number
    data: JsonNullValueInput | InputJsonValue
    validation_error?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type failed_import_rowsUpdateWithoutImportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: JsonNullValueInput | InputJsonValue
    validation_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_import_rowsUncheckedUpdateWithoutImportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: JsonNullValueInput | InputJsonValue
    validation_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_import_rowsUncheckedUpdateManyWithoutImportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: JsonNullValueInput | InputJsonValue
    validation_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exportsCreateManyUsersInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_disk: string
    file_name?: string | null
    exporter: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type importsCreateManyUsersInput = {
    id?: bigint | number
    completed_at?: Date | string | null
    file_name: string
    file_path: string
    importer: string
    processed_rows?: number
    total_rows: number
    successful_rows?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exportsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_disk?: StringFieldUpdateOperationsInput | string
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    exporter?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exportsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_disk?: StringFieldUpdateOperationsInput | string
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    exporter?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exportsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_disk?: StringFieldUpdateOperationsInput | string
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    exporter?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type importsUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failed_import_rows?: failed_import_rowsUpdateManyWithoutImportsNestedInput
  }

  export type importsUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failed_import_rows?: failed_import_rowsUncheckedUpdateManyWithoutImportsNestedInput
  }

  export type importsUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    processed_rows?: IntFieldUpdateOperationsInput | number
    total_rows?: IntFieldUpdateOperationsInput | number
    successful_rows?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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