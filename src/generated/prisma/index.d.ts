
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
 * Model Quotation
 * 
 */
export type Quotation = $Result.DefaultSelection<Prisma.$QuotationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Quotations
 * const quotations = await prisma.quotation.findMany()
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
   * // Fetch zero or more Quotations
   * const quotations = await prisma.quotation.findMany()
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
   * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotations
    * const quotations = await prisma.quotation.findMany()
    * ```
    */
  get quotation(): Prisma.QuotationDelegate<ExtArgs, ClientOptions>;
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
    Quotation: 'Quotation'
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
      modelProps: "quotation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
    quotation?: QuotationOmit
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
   * Models
   */

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

  export type QuotationMinAggregateOutputType = {
    id: number | null
    plano_grupo: string | null
    coparticipacao_tipo: string | null
    segmentacao: string | null
    acomodacao: string | null
    assistencia_modalidade: string | null
    codigo_interno: string | null
    registrro_ans: string | null
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
  }

  export type QuotationMaxAggregateOutputType = {
    id: number | null
    plano_grupo: string | null
    coparticipacao_tipo: string | null
    segmentacao: string | null
    acomodacao: string | null
    assistencia_modalidade: string | null
    codigo_interno: string | null
    registrro_ans: string | null
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
  }

  export type QuotationCountAggregateOutputType = {
    id: number
    plano_grupo: number
    coparticipacao_tipo: number
    segmentacao: number
    acomodacao: number
    assistencia_modalidade: number
    codigo_interno: number
    registrro_ans: number
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
    registrro_ans?: true
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
  }

  export type QuotationMaxAggregateInputType = {
    id?: true
    plano_grupo?: true
    coparticipacao_tipo?: true
    segmentacao?: true
    acomodacao?: true
    assistencia_modalidade?: true
    codigo_interno?: true
    registrro_ans?: true
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
  }

  export type QuotationCountAggregateInputType = {
    id?: true
    plano_grupo?: true
    coparticipacao_tipo?: true
    segmentacao?: true
    acomodacao?: true
    assistencia_modalidade?: true
    codigo_interno?: true
    registrro_ans?: true
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
    id: number
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao: string
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno: string | null
    registrro_ans: string
    cidade: string
    validade_valores: string
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
    registrro_ans?: boolean
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
  }, ExtArgs["result"]["quotation"]>



  export type QuotationSelectScalar = {
    id?: boolean
    plano_grupo?: boolean
    coparticipacao_tipo?: boolean
    segmentacao?: boolean
    acomodacao?: boolean
    assistencia_modalidade?: boolean
    codigo_interno?: boolean
    registrro_ans?: boolean
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
  }

  export type QuotationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plano_grupo" | "coparticipacao_tipo" | "segmentacao" | "acomodacao" | "assistencia_modalidade" | "codigo_interno" | "registrro_ans" | "cidade" | "validade_valores" | "tipo_plano" | "preco_00_a_18_anos" | "preco_19_a_23_anos" | "preco_24_a_28_anos" | "preco_29_a_33_anos" | "preco_34_a_38_anos" | "preco_39_a_43_anos" | "preco_44_a_48_anos" | "preco_49_a_53_anos" | "preco_54_a_58_anos" | "preco_59_anos_ou_mais" | "preco_todas_idades" | "consultas_eletivas" | "consultas_urgencia" | "exames_simples" | "exames_complexos" | "terapias_neurologicas" | "demais_terapias" | "desconto_vidas" | "desconto_familiares" | "quantidade_de_familiares", ExtArgs["result"]["quotation"]>

  export type $QuotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quotation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plano_grupo: string
      coparticipacao_tipo: string
      segmentacao: string
      acomodacao: string
      assistencia_modalidade: string
      codigo_interno: string | null
      registrro_ans: string
      cidade: string
      validade_valores: string
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
    readonly id: FieldRef<"Quotation", 'Int'>
    readonly plano_grupo: FieldRef<"Quotation", 'String'>
    readonly coparticipacao_tipo: FieldRef<"Quotation", 'String'>
    readonly segmentacao: FieldRef<"Quotation", 'String'>
    readonly acomodacao: FieldRef<"Quotation", 'String'>
    readonly assistencia_modalidade: FieldRef<"Quotation", 'String'>
    readonly codigo_interno: FieldRef<"Quotation", 'String'>
    readonly registrro_ans: FieldRef<"Quotation", 'String'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QuotationScalarFieldEnum: {
    id: 'id',
    plano_grupo: 'plano_grupo',
    coparticipacao_tipo: 'coparticipacao_tipo',
    segmentacao: 'segmentacao',
    acomodacao: 'acomodacao',
    assistencia_modalidade: 'assistencia_modalidade',
    codigo_interno: 'codigo_interno',
    registrro_ans: 'registrro_ans',
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
    quantidade_de_familiares: 'quantidade_de_familiares'
  };

  export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QuotationOrderByRelevanceFieldEnum: {
    plano_grupo: 'plano_grupo',
    coparticipacao_tipo: 'coparticipacao_tipo',
    segmentacao: 'segmentacao',
    acomodacao: 'acomodacao',
    assistencia_modalidade: 'assistencia_modalidade',
    codigo_interno: 'codigo_interno',
    registrro_ans: 'registrro_ans',
    cidade: 'cidade',
    validade_valores: 'validade_valores',
    tipo_plano: 'tipo_plano',
    desconto_familiares: 'desconto_familiares',
    quantidade_de_familiares: 'quantidade_de_familiares'
  };

  export type QuotationOrderByRelevanceFieldEnum = (typeof QuotationOrderByRelevanceFieldEnum)[keyof typeof QuotationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


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


  export type QuotationWhereInput = {
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    id?: IntFilter<"Quotation"> | number
    plano_grupo?: StringFilter<"Quotation"> | string
    coparticipacao_tipo?: StringFilter<"Quotation"> | string
    segmentacao?: StringFilter<"Quotation"> | string
    acomodacao?: StringFilter<"Quotation"> | string
    assistencia_modalidade?: StringFilter<"Quotation"> | string
    codigo_interno?: StringNullableFilter<"Quotation"> | string | null
    registrro_ans?: StringFilter<"Quotation"> | string
    cidade?: StringFilter<"Quotation"> | string
    validade_valores?: StringFilter<"Quotation"> | string
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
  }

  export type QuotationOrderByWithRelationInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrderInput | SortOrder
    registrro_ans?: SortOrder
    cidade?: SortOrder
    validade_valores?: SortOrder
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
    _relevance?: QuotationOrderByRelevanceInput
  }

  export type QuotationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    plano_grupo?: StringFilter<"Quotation"> | string
    coparticipacao_tipo?: StringFilter<"Quotation"> | string
    segmentacao?: StringFilter<"Quotation"> | string
    acomodacao?: StringFilter<"Quotation"> | string
    assistencia_modalidade?: StringFilter<"Quotation"> | string
    codigo_interno?: StringNullableFilter<"Quotation"> | string | null
    registrro_ans?: StringFilter<"Quotation"> | string
    cidade?: StringFilter<"Quotation"> | string
    validade_valores?: StringFilter<"Quotation"> | string
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
  }, "id">

  export type QuotationOrderByWithAggregationInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrderInput | SortOrder
    registrro_ans?: SortOrder
    cidade?: SortOrder
    validade_valores?: SortOrder
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
    id?: IntWithAggregatesFilter<"Quotation"> | number
    plano_grupo?: StringWithAggregatesFilter<"Quotation"> | string
    coparticipacao_tipo?: StringWithAggregatesFilter<"Quotation"> | string
    segmentacao?: StringWithAggregatesFilter<"Quotation"> | string
    acomodacao?: StringWithAggregatesFilter<"Quotation"> | string
    assistencia_modalidade?: StringWithAggregatesFilter<"Quotation"> | string
    codigo_interno?: StringNullableWithAggregatesFilter<"Quotation"> | string | null
    registrro_ans?: StringWithAggregatesFilter<"Quotation"> | string
    cidade?: StringWithAggregatesFilter<"Quotation"> | string
    validade_valores?: StringWithAggregatesFilter<"Quotation"> | string
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
  }

  export type QuotationCreateInput = {
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao: string
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno?: string | null
    registrro_ans: string
    cidade: string
    validade_valores: string
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
  }

  export type QuotationUncheckedCreateInput = {
    id?: number
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao: string
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno?: string | null
    registrro_ans: string
    cidade: string
    validade_valores: string
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
  }

  export type QuotationUpdateInput = {
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: StringFieldUpdateOperationsInput | string
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registrro_ans?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: StringFieldUpdateOperationsInput | string
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
  }

  export type QuotationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: StringFieldUpdateOperationsInput | string
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registrro_ans?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: StringFieldUpdateOperationsInput | string
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
  }

  export type QuotationCreateManyInput = {
    id?: number
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao: string
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno?: string | null
    registrro_ans: string
    cidade: string
    validade_valores: string
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
  }

  export type QuotationUpdateManyMutationInput = {
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: StringFieldUpdateOperationsInput | string
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registrro_ans?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: StringFieldUpdateOperationsInput | string
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
  }

  export type QuotationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plano_grupo?: StringFieldUpdateOperationsInput | string
    coparticipacao_tipo?: StringFieldUpdateOperationsInput | string
    segmentacao?: StringFieldUpdateOperationsInput | string
    acomodacao?: StringFieldUpdateOperationsInput | string
    assistencia_modalidade?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    registrro_ans?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    validade_valores?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    registrro_ans?: SortOrder
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
    registrro_ans?: SortOrder
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
  }

  export type QuotationMinOrderByAggregateInput = {
    id?: SortOrder
    plano_grupo?: SortOrder
    coparticipacao_tipo?: SortOrder
    segmentacao?: SortOrder
    acomodacao?: SortOrder
    assistencia_modalidade?: SortOrder
    codigo_interno?: SortOrder
    registrro_ans?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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