
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Center
 * 
 */
export type Center = $Result.DefaultSelection<Prisma.$CenterPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Amount
 * 
 */
export type Amount = $Result.DefaultSelection<Prisma.$AmountPayload>
/**
 * Model ExamForm
 * 
 */
export type ExamForm = $Result.DefaultSelection<Prisma.$ExamFormPayload>
/**
 * Model Marks
 * 
 */
export type Marks = $Result.DefaultSelection<Prisma.$MarksPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>
/**
 * Model Notices
 * 
 */
export type Notices = $Result.DefaultSelection<Prisma.$NoticesPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model District
 * 
 */
export type District = $Result.DefaultSelection<Prisma.$DistrictPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CENTER: 'CENTER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  TRANSGENDER: 'TRANSGENDER'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const Category: {
  SC: 'SC',
  ST: 'ST',
  GENERAL: 'GENERAL',
  OBC: 'OBC',
  PH: 'PH',
  OTHERS: 'OTHERS'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Nationality: {
  INDIAN: 'INDIAN',
  FOREIGNER: 'FOREIGNER'
};

export type Nationality = (typeof Nationality)[keyof typeof Nationality]


export const statusType: {
  passout: 'passout',
  pending: 'pending'
};

export type statusType = (typeof statusType)[keyof typeof statusType]


export const IdType: {
  aadhaar: 'aadhaar',
  BirthCertificate: 'BirthCertificate',
  Admit: 'Admit'
};

export type IdType = (typeof IdType)[keyof typeof IdType]


export const IdType2: {
  aadhaar: 'aadhaar',
  voter: 'voter',
  drivingLicense: 'drivingLicense'
};

export type IdType2 = (typeof IdType2)[keyof typeof IdType2]


export const Remark: {
  PASS: 'PASS',
  FAIL: 'FAIL'
};

export type Remark = (typeof Remark)[keyof typeof Remark]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Nationality = $Enums.Nationality

export const Nationality: typeof $Enums.Nationality

export type statusType = $Enums.statusType

export const statusType: typeof $Enums.statusType

export type IdType = $Enums.IdType

export const IdType: typeof $Enums.IdType

export type IdType2 = $Enums.IdType2

export const IdType2: typeof $Enums.IdType2

export type Remark = $Enums.Remark

export const Remark: typeof $Enums.Remark

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.center`: Exposes CRUD operations for the **Center** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centers
    * const centers = await prisma.center.findMany()
    * ```
    */
  get center(): Prisma.CenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amount`: Exposes CRUD operations for the **Amount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amounts
    * const amounts = await prisma.amount.findMany()
    * ```
    */
  get amount(): Prisma.AmountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examForm`: Exposes CRUD operations for the **ExamForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamForms
    * const examForms = await prisma.examForm.findMany()
    * ```
    */
  get examForm(): Prisma.ExamFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marks`: Exposes CRUD operations for the **Marks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.marks.findMany()
    * ```
    */
  get marks(): Prisma.MarksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notices`: Exposes CRUD operations for the **Notices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notices.findMany()
    * ```
    */
  get notices(): Prisma.NoticesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Center: 'Center',
    Enrollment: 'Enrollment',
    Course: 'Course',
    Subject: 'Subject',
    Amount: 'Amount',
    ExamForm: 'ExamForm',
    Marks: 'Marks',
    Enquiry: 'Enquiry',
    Notices: 'Notices',
    State: 'State',
    District: 'District'
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
      modelProps: "user" | "center" | "enrollment" | "course" | "subject" | "amount" | "examForm" | "marks" | "enquiry" | "notices" | "state" | "district"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Center: {
        payload: Prisma.$CenterPayload<ExtArgs>
        fields: Prisma.CenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          findFirst: {
            args: Prisma.CenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          findMany: {
            args: Prisma.CenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>[]
          }
          create: {
            args: Prisma.CenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          createMany: {
            args: Prisma.CenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>[]
          }
          delete: {
            args: Prisma.CenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          update: {
            args: Prisma.CenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          deleteMany: {
            args: Prisma.CenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>[]
          }
          upsert: {
            args: Prisma.CenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          aggregate: {
            args: Prisma.CenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCenter>
          }
          groupBy: {
            args: Prisma.CenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CenterCountArgs<ExtArgs>
            result: $Utils.Optional<CenterCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Amount: {
        payload: Prisma.$AmountPayload<ExtArgs>
        fields: Prisma.AmountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>
          }
          findFirst: {
            args: Prisma.AmountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>
          }
          findMany: {
            args: Prisma.AmountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>[]
          }
          create: {
            args: Prisma.AmountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>
          }
          createMany: {
            args: Prisma.AmountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>[]
          }
          delete: {
            args: Prisma.AmountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>
          }
          update: {
            args: Prisma.AmountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>
          }
          deleteMany: {
            args: Prisma.AmountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>[]
          }
          upsert: {
            args: Prisma.AmountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmountPayload>
          }
          aggregate: {
            args: Prisma.AmountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmount>
          }
          groupBy: {
            args: Prisma.AmountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmountCountArgs<ExtArgs>
            result: $Utils.Optional<AmountCountAggregateOutputType> | number
          }
        }
      }
      ExamForm: {
        payload: Prisma.$ExamFormPayload<ExtArgs>
        fields: Prisma.ExamFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>
          }
          findFirst: {
            args: Prisma.ExamFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>
          }
          findMany: {
            args: Prisma.ExamFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>[]
          }
          create: {
            args: Prisma.ExamFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>
          }
          createMany: {
            args: Prisma.ExamFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>[]
          }
          delete: {
            args: Prisma.ExamFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>
          }
          update: {
            args: Prisma.ExamFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>
          }
          deleteMany: {
            args: Prisma.ExamFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>[]
          }
          upsert: {
            args: Prisma.ExamFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamFormPayload>
          }
          aggregate: {
            args: Prisma.ExamFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamForm>
          }
          groupBy: {
            args: Prisma.ExamFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamFormCountArgs<ExtArgs>
            result: $Utils.Optional<ExamFormCountAggregateOutputType> | number
          }
        }
      }
      Marks: {
        payload: Prisma.$MarksPayload<ExtArgs>
        fields: Prisma.MarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findFirst: {
            args: Prisma.MarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findMany: {
            args: Prisma.MarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          create: {
            args: Prisma.MarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          createMany: {
            args: Prisma.MarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          delete: {
            args: Prisma.MarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          update: {
            args: Prisma.MarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          deleteMany: {
            args: Prisma.MarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          upsert: {
            args: Prisma.MarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          aggregate: {
            args: Prisma.MarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarks>
          }
          groupBy: {
            args: Prisma.MarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarksCountArgs<ExtArgs>
            result: $Utils.Optional<MarksCountAggregateOutputType> | number
          }
        }
      }
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
          }
        }
      }
      Notices: {
        payload: Prisma.$NoticesPayload<ExtArgs>
        fields: Prisma.NoticesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>
          }
          findFirst: {
            args: Prisma.NoticesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>
          }
          findMany: {
            args: Prisma.NoticesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>[]
          }
          create: {
            args: Prisma.NoticesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>
          }
          createMany: {
            args: Prisma.NoticesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>[]
          }
          delete: {
            args: Prisma.NoticesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>
          }
          update: {
            args: Prisma.NoticesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>
          }
          deleteMany: {
            args: Prisma.NoticesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>[]
          }
          upsert: {
            args: Prisma.NoticesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticesPayload>
          }
          aggregate: {
            args: Prisma.NoticesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotices>
          }
          groupBy: {
            args: Prisma.NoticesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticesCountArgs<ExtArgs>
            result: $Utils.Optional<NoticesCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      District: {
        payload: Prisma.$DistrictPayload<ExtArgs>
        fields: Prisma.DistrictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findFirst: {
            args: Prisma.DistrictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findMany: {
            args: Prisma.DistrictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          create: {
            args: Prisma.DistrictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          createMany: {
            args: Prisma.DistrictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistrictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          delete: {
            args: Prisma.DistrictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          update: {
            args: Prisma.DistrictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          deleteMany: {
            args: Prisma.DistrictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistrictUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          upsert: {
            args: Prisma.DistrictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.DistrictGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistrictCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
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
    user?: UserOmit
    center?: CenterOmit
    enrollment?: EnrollmentOmit
    course?: CourseOmit
    subject?: SubjectOmit
    amount?: AmountOmit
    examForm?: ExamFormOmit
    marks?: MarksOmit
    enquiry?: EnquiryOmit
    notices?: NoticesOmit
    state?: StateOmit
    district?: DistrictOmit
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
   * Count Type CenterCountOutputType
   */

  export type CenterCountOutputType = {
    Student: number
  }

  export type CenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | CenterCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * CenterCountOutputType without action
   */
  export type CenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterCountOutputType
     */
    select?: CenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CenterCountOutputType without action
   */
  export type CenterCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    Enrollment: number
    subjects: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | CourseCountOutputTypeCountEnrollmentArgs
    subjects?: boolean | CourseCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    enquiryid: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    enquiryid: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    enquiryid: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    enquiryid: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    password: number
    resetToken: number
    resetTokenExpiry: number
    enquiryid: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    enquiryid?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    enquiryid?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    enquiryid?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    enquiryid?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    enquiryid?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    role: $Enums.Role
    password: string
    resetToken: string | null
    resetTokenExpiry: Date | null
    enquiryid: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    enquiryid?: boolean
    Center?: boolean | User$CenterArgs<ExtArgs>
    enquiry?: boolean | User$enquiryArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    enquiryid?: boolean
    enquiry?: boolean | User$enquiryArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    enquiryid?: boolean
    enquiry?: boolean | User$enquiryArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    enquiryid?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "password" | "resetToken" | "resetTokenExpiry" | "enquiryid", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Center?: boolean | User$CenterArgs<ExtArgs>
    enquiry?: boolean | User$enquiryArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiry?: boolean | User$enquiryArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiry?: boolean | User$enquiryArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Center: Prisma.$CenterPayload<ExtArgs> | null
      enquiry: Prisma.$EnquiryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      role: $Enums.Role
      password: string
      resetToken: string | null
      resetTokenExpiry: Date | null
      enquiryid: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Center<T extends User$CenterArgs<ExtArgs> = {}>(args?: Subset<T, User$CenterArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enquiry<T extends User$enquiryArgs<ExtArgs> = {}>(args?: Subset<T, User$enquiryArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly enquiryid: FieldRef<"User", 'Int'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Center
   */
  export type User$CenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    where?: CenterWhereInput
  }

  /**
   * User.enquiry
   */
  export type User$enquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Center
   */

  export type AggregateCenter = {
    _count: CenterCountAggregateOutputType | null
    _avg: CenterAvgAggregateOutputType | null
    _sum: CenterSumAggregateOutputType | null
    _min: CenterMinAggregateOutputType | null
    _max: CenterMaxAggregateOutputType | null
  }

  export type CenterAvgAggregateOutputType = {
    id: number | null
    adminid: number | null
    code: number | null
  }

  export type CenterSumAggregateOutputType = {
    id: number | null
    adminid: number | null
    code: number | null
  }

  export type CenterMinAggregateOutputType = {
    id: number | null
    Centername: string | null
    adminid: number | null
    address: string | null
    code: number | null
  }

  export type CenterMaxAggregateOutputType = {
    id: number | null
    Centername: string | null
    adminid: number | null
    address: string | null
    code: number | null
  }

  export type CenterCountAggregateOutputType = {
    id: number
    Centername: number
    adminid: number
    address: number
    code: number
    _all: number
  }


  export type CenterAvgAggregateInputType = {
    id?: true
    adminid?: true
    code?: true
  }

  export type CenterSumAggregateInputType = {
    id?: true
    adminid?: true
    code?: true
  }

  export type CenterMinAggregateInputType = {
    id?: true
    Centername?: true
    adminid?: true
    address?: true
    code?: true
  }

  export type CenterMaxAggregateInputType = {
    id?: true
    Centername?: true
    adminid?: true
    address?: true
    code?: true
  }

  export type CenterCountAggregateInputType = {
    id?: true
    Centername?: true
    adminid?: true
    address?: true
    code?: true
    _all?: true
  }

  export type CenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Center to aggregate.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Centers
    **/
    _count?: true | CenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CenterMaxAggregateInputType
  }

  export type GetCenterAggregateType<T extends CenterAggregateArgs> = {
        [P in keyof T & keyof AggregateCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCenter[P]>
      : GetScalarType<T[P], AggregateCenter[P]>
  }




  export type CenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CenterWhereInput
    orderBy?: CenterOrderByWithAggregationInput | CenterOrderByWithAggregationInput[]
    by: CenterScalarFieldEnum[] | CenterScalarFieldEnum
    having?: CenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CenterCountAggregateInputType | true
    _avg?: CenterAvgAggregateInputType
    _sum?: CenterSumAggregateInputType
    _min?: CenterMinAggregateInputType
    _max?: CenterMaxAggregateInputType
  }

  export type CenterGroupByOutputType = {
    id: number
    Centername: string
    adminid: number
    address: string
    code: number
    _count: CenterCountAggregateOutputType | null
    _avg: CenterAvgAggregateOutputType | null
    _sum: CenterSumAggregateOutputType | null
    _min: CenterMinAggregateOutputType | null
    _max: CenterMaxAggregateOutputType | null
  }

  type GetCenterGroupByPayload<T extends CenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CenterGroupByOutputType[P]>
            : GetScalarType<T[P], CenterGroupByOutputType[P]>
        }
      >
    >


  export type CenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Centername?: boolean
    adminid?: boolean
    address?: boolean
    code?: boolean
    Student?: boolean | Center$StudentArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["center"]>

  export type CenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Centername?: boolean
    adminid?: boolean
    address?: boolean
    code?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["center"]>

  export type CenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Centername?: boolean
    adminid?: boolean
    address?: boolean
    code?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["center"]>

  export type CenterSelectScalar = {
    id?: boolean
    Centername?: boolean
    adminid?: boolean
    address?: boolean
    code?: boolean
  }

  export type CenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Centername" | "adminid" | "address" | "code", ExtArgs["result"]["center"]>
  export type CenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | Center$StudentArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Center"
    objects: {
      Student: Prisma.$EnrollmentPayload<ExtArgs>[]
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Centername: string
      adminid: number
      address: string
      code: number
    }, ExtArgs["result"]["center"]>
    composites: {}
  }

  type CenterGetPayload<S extends boolean | null | undefined | CenterDefaultArgs> = $Result.GetResult<Prisma.$CenterPayload, S>

  type CenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CenterCountAggregateInputType | true
    }

  export interface CenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Center'], meta: { name: 'Center' } }
    /**
     * Find zero or one Center that matches the filter.
     * @param {CenterFindUniqueArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CenterFindUniqueArgs>(args: SelectSubset<T, CenterFindUniqueArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Center that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CenterFindUniqueOrThrowArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CenterFindUniqueOrThrowArgs>(args: SelectSubset<T, CenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Center that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindFirstArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CenterFindFirstArgs>(args?: SelectSubset<T, CenterFindFirstArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Center that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindFirstOrThrowArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CenterFindFirstOrThrowArgs>(args?: SelectSubset<T, CenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centers
     * const centers = await prisma.center.findMany()
     * 
     * // Get first 10 Centers
     * const centers = await prisma.center.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centerWithIdOnly = await prisma.center.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CenterFindManyArgs>(args?: SelectSubset<T, CenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Center.
     * @param {CenterCreateArgs} args - Arguments to create a Center.
     * @example
     * // Create one Center
     * const Center = await prisma.center.create({
     *   data: {
     *     // ... data to create a Center
     *   }
     * })
     * 
     */
    create<T extends CenterCreateArgs>(args: SelectSubset<T, CenterCreateArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centers.
     * @param {CenterCreateManyArgs} args - Arguments to create many Centers.
     * @example
     * // Create many Centers
     * const center = await prisma.center.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CenterCreateManyArgs>(args?: SelectSubset<T, CenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Centers and returns the data saved in the database.
     * @param {CenterCreateManyAndReturnArgs} args - Arguments to create many Centers.
     * @example
     * // Create many Centers
     * const center = await prisma.center.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Centers and only return the `id`
     * const centerWithIdOnly = await prisma.center.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CenterCreateManyAndReturnArgs>(args?: SelectSubset<T, CenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Center.
     * @param {CenterDeleteArgs} args - Arguments to delete one Center.
     * @example
     * // Delete one Center
     * const Center = await prisma.center.delete({
     *   where: {
     *     // ... filter to delete one Center
     *   }
     * })
     * 
     */
    delete<T extends CenterDeleteArgs>(args: SelectSubset<T, CenterDeleteArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Center.
     * @param {CenterUpdateArgs} args - Arguments to update one Center.
     * @example
     * // Update one Center
     * const center = await prisma.center.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CenterUpdateArgs>(args: SelectSubset<T, CenterUpdateArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centers.
     * @param {CenterDeleteManyArgs} args - Arguments to filter Centers to delete.
     * @example
     * // Delete a few Centers
     * const { count } = await prisma.center.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CenterDeleteManyArgs>(args?: SelectSubset<T, CenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centers
     * const center = await prisma.center.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CenterUpdateManyArgs>(args: SelectSubset<T, CenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centers and returns the data updated in the database.
     * @param {CenterUpdateManyAndReturnArgs} args - Arguments to update many Centers.
     * @example
     * // Update many Centers
     * const center = await prisma.center.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Centers and only return the `id`
     * const centerWithIdOnly = await prisma.center.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CenterUpdateManyAndReturnArgs>(args: SelectSubset<T, CenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Center.
     * @param {CenterUpsertArgs} args - Arguments to update or create a Center.
     * @example
     * // Update or create a Center
     * const center = await prisma.center.upsert({
     *   create: {
     *     // ... data to create a Center
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Center we want to update
     *   }
     * })
     */
    upsert<T extends CenterUpsertArgs>(args: SelectSubset<T, CenterUpsertArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterCountArgs} args - Arguments to filter Centers to count.
     * @example
     * // Count the number of Centers
     * const count = await prisma.center.count({
     *   where: {
     *     // ... the filter for the Centers we want to count
     *   }
     * })
    **/
    count<T extends CenterCountArgs>(
      args?: Subset<T, CenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Center.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CenterAggregateArgs>(args: Subset<T, CenterAggregateArgs>): Prisma.PrismaPromise<GetCenterAggregateType<T>>

    /**
     * Group by Center.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterGroupByArgs} args - Group by arguments.
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
      T extends CenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CenterGroupByArgs['orderBy'] }
        : { orderBy?: CenterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Center model
   */
  readonly fields: CenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Center.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends Center$StudentArgs<ExtArgs> = {}>(args?: Subset<T, Center$StudentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Center model
   */
  interface CenterFieldRefs {
    readonly id: FieldRef<"Center", 'Int'>
    readonly Centername: FieldRef<"Center", 'String'>
    readonly adminid: FieldRef<"Center", 'Int'>
    readonly address: FieldRef<"Center", 'String'>
    readonly code: FieldRef<"Center", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Center findUnique
   */
  export type CenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center findUniqueOrThrow
   */
  export type CenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center findFirst
   */
  export type CenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centers.
     */
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center findFirstOrThrow
   */
  export type CenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centers.
     */
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center findMany
   */
  export type CenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Centers to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center create
   */
  export type CenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The data needed to create a Center.
     */
    data: XOR<CenterCreateInput, CenterUncheckedCreateInput>
  }

  /**
   * Center createMany
   */
  export type CenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Centers.
     */
    data: CenterCreateManyInput | CenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Center createManyAndReturn
   */
  export type CenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * The data used to create many Centers.
     */
    data: CenterCreateManyInput | CenterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Center update
   */
  export type CenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The data needed to update a Center.
     */
    data: XOR<CenterUpdateInput, CenterUncheckedUpdateInput>
    /**
     * Choose, which Center to update.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center updateMany
   */
  export type CenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Centers.
     */
    data: XOR<CenterUpdateManyMutationInput, CenterUncheckedUpdateManyInput>
    /**
     * Filter which Centers to update
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to update.
     */
    limit?: number
  }

  /**
   * Center updateManyAndReturn
   */
  export type CenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * The data used to update Centers.
     */
    data: XOR<CenterUpdateManyMutationInput, CenterUncheckedUpdateManyInput>
    /**
     * Filter which Centers to update
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Center upsert
   */
  export type CenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The filter to search for the Center to update in case it exists.
     */
    where: CenterWhereUniqueInput
    /**
     * In case the Center found by the `where` argument doesn't exist, create a new Center with this data.
     */
    create: XOR<CenterCreateInput, CenterUncheckedCreateInput>
    /**
     * In case the Center was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CenterUpdateInput, CenterUncheckedUpdateInput>
  }

  /**
   * Center delete
   */
  export type CenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter which Center to delete.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center deleteMany
   */
  export type CenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Centers to delete
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to delete.
     */
    limit?: number
  }

  /**
   * Center.Student
   */
  export type Center$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Center without action
   */
  export type CenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    IdCardNo: number | null
    CertificateNo: number | null
    courseId: number | null
    centerid: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    IdCardNo: number | null
    CertificateNo: number | null
    courseId: number | null
    centerid: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    IdCardNo: number | null
    idCardLink: string | null
    admitLink: string | null
    certificateLink: string | null
    marksheetLink: string | null
    imageLink: string | null
    CertificateNo: number | null
    name: string | null
    dob: Date | null
    father: string | null
    mother: string | null
    address: string | null
    dist: string | null
    state: string | null
    pin: string | null
    ps: string | null
    po: string | null
    vill: string | null
    mobileNo: string | null
    email: string | null
    sex: $Enums.Sex | null
    category: $Enums.Category | null
    nationality: $Enums.Nationality | null
    idProof: $Enums.IdType | null
    idProofNo: string | null
    pincode: string | null
    eduqualification: string | null
    activated: boolean | null
    courseId: number | null
    centerid: number | null
    createdAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    IdCardNo: number | null
    idCardLink: string | null
    admitLink: string | null
    certificateLink: string | null
    marksheetLink: string | null
    imageLink: string | null
    CertificateNo: number | null
    name: string | null
    dob: Date | null
    father: string | null
    mother: string | null
    address: string | null
    dist: string | null
    state: string | null
    pin: string | null
    ps: string | null
    po: string | null
    vill: string | null
    mobileNo: string | null
    email: string | null
    sex: $Enums.Sex | null
    category: $Enums.Category | null
    nationality: $Enums.Nationality | null
    idProof: $Enums.IdType | null
    idProofNo: string | null
    pincode: string | null
    eduqualification: string | null
    activated: boolean | null
    courseId: number | null
    centerid: number | null
    createdAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    EnrollmentNo: number
    IdCardNo: number
    idCardLink: number
    admitLink: number
    certificateLink: number
    marksheetLink: number
    imageLink: number
    CertificateNo: number
    name: number
    dob: number
    father: number
    mother: number
    address: number
    dist: number
    state: number
    pin: number
    ps: number
    po: number
    vill: number
    mobileNo: number
    email: number
    sex: number
    category: number
    nationality: number
    idProof: number
    idProofNo: number
    pincode: number
    eduqualification: number
    activated: number
    courseId: number
    centerid: number
    createdAt: number
    status: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    IdCardNo?: true
    CertificateNo?: true
    courseId?: true
    centerid?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    IdCardNo?: true
    CertificateNo?: true
    courseId?: true
    centerid?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    IdCardNo?: true
    idCardLink?: true
    admitLink?: true
    certificateLink?: true
    marksheetLink?: true
    imageLink?: true
    CertificateNo?: true
    name?: true
    dob?: true
    father?: true
    mother?: true
    address?: true
    dist?: true
    state?: true
    pin?: true
    ps?: true
    po?: true
    vill?: true
    mobileNo?: true
    email?: true
    sex?: true
    category?: true
    nationality?: true
    idProof?: true
    idProofNo?: true
    pincode?: true
    eduqualification?: true
    activated?: true
    courseId?: true
    centerid?: true
    createdAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    IdCardNo?: true
    idCardLink?: true
    admitLink?: true
    certificateLink?: true
    marksheetLink?: true
    imageLink?: true
    CertificateNo?: true
    name?: true
    dob?: true
    father?: true
    mother?: true
    address?: true
    dist?: true
    state?: true
    pin?: true
    ps?: true
    po?: true
    vill?: true
    mobileNo?: true
    email?: true
    sex?: true
    category?: true
    nationality?: true
    idProof?: true
    idProofNo?: true
    pincode?: true
    eduqualification?: true
    activated?: true
    courseId?: true
    centerid?: true
    createdAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    IdCardNo?: true
    idCardLink?: true
    admitLink?: true
    certificateLink?: true
    marksheetLink?: true
    imageLink?: true
    CertificateNo?: true
    name?: true
    dob?: true
    father?: true
    mother?: true
    address?: true
    dist?: true
    state?: true
    pin?: true
    ps?: true
    po?: true
    vill?: true
    mobileNo?: true
    email?: true
    sex?: true
    category?: true
    nationality?: true
    idProof?: true
    idProofNo?: true
    pincode?: true
    eduqualification?: true
    activated?: true
    courseId?: true
    centerid?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    EnrollmentNo: number
    IdCardNo: number
    idCardLink: string
    admitLink: string
    certificateLink: string
    marksheetLink: string
    imageLink: string
    CertificateNo: number | null
    name: string
    dob: Date
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated: boolean
    courseId: number
    centerid: number
    createdAt: Date
    status: JsonValue
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    EnrollmentNo?: boolean
    IdCardNo?: boolean
    idCardLink?: boolean
    admitLink?: boolean
    certificateLink?: boolean
    marksheetLink?: boolean
    imageLink?: boolean
    CertificateNo?: boolean
    name?: boolean
    dob?: boolean
    father?: boolean
    mother?: boolean
    address?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    mobileNo?: boolean
    email?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    idProof?: boolean
    idProofNo?: boolean
    pincode?: boolean
    eduqualification?: boolean
    activated?: boolean
    courseId?: boolean
    centerid?: boolean
    createdAt?: boolean
    status?: boolean
    examformFillup?: boolean | Enrollment$examformFillupArgs<ExtArgs>
    marks?: boolean | Enrollment$marksArgs<ExtArgs>
    amount?: boolean | Enrollment$amountArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    center?: boolean | CenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    EnrollmentNo?: boolean
    IdCardNo?: boolean
    idCardLink?: boolean
    admitLink?: boolean
    certificateLink?: boolean
    marksheetLink?: boolean
    imageLink?: boolean
    CertificateNo?: boolean
    name?: boolean
    dob?: boolean
    father?: boolean
    mother?: boolean
    address?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    mobileNo?: boolean
    email?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    idProof?: boolean
    idProofNo?: boolean
    pincode?: boolean
    eduqualification?: boolean
    activated?: boolean
    courseId?: boolean
    centerid?: boolean
    createdAt?: boolean
    status?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    center?: boolean | CenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    EnrollmentNo?: boolean
    IdCardNo?: boolean
    idCardLink?: boolean
    admitLink?: boolean
    certificateLink?: boolean
    marksheetLink?: boolean
    imageLink?: boolean
    CertificateNo?: boolean
    name?: boolean
    dob?: boolean
    father?: boolean
    mother?: boolean
    address?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    mobileNo?: boolean
    email?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    idProof?: boolean
    idProofNo?: boolean
    pincode?: boolean
    eduqualification?: boolean
    activated?: boolean
    courseId?: boolean
    centerid?: boolean
    createdAt?: boolean
    status?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    center?: boolean | CenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    EnrollmentNo?: boolean
    IdCardNo?: boolean
    idCardLink?: boolean
    admitLink?: boolean
    certificateLink?: boolean
    marksheetLink?: boolean
    imageLink?: boolean
    CertificateNo?: boolean
    name?: boolean
    dob?: boolean
    father?: boolean
    mother?: boolean
    address?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    mobileNo?: boolean
    email?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    idProof?: boolean
    idProofNo?: boolean
    pincode?: boolean
    eduqualification?: boolean
    activated?: boolean
    courseId?: boolean
    centerid?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "EnrollmentNo" | "IdCardNo" | "idCardLink" | "admitLink" | "certificateLink" | "marksheetLink" | "imageLink" | "CertificateNo" | "name" | "dob" | "father" | "mother" | "address" | "dist" | "state" | "pin" | "ps" | "po" | "vill" | "mobileNo" | "email" | "sex" | "category" | "nationality" | "idProof" | "idProofNo" | "pincode" | "eduqualification" | "activated" | "courseId" | "centerid" | "createdAt" | "status", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examformFillup?: boolean | Enrollment$examformFillupArgs<ExtArgs>
    marks?: boolean | Enrollment$marksArgs<ExtArgs>
    amount?: boolean | Enrollment$amountArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    center?: boolean | CenterDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    center?: boolean | CenterDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    center?: boolean | CenterDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      examformFillup: Prisma.$ExamFormPayload<ExtArgs> | null
      marks: Prisma.$MarksPayload<ExtArgs> | null
      amount: Prisma.$AmountPayload<ExtArgs> | null
      course: Prisma.$CoursePayload<ExtArgs>
      center: Prisma.$CenterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      EnrollmentNo: number
      IdCardNo: number
      idCardLink: string
      admitLink: string
      certificateLink: string
      marksheetLink: string
      imageLink: string
      CertificateNo: number | null
      name: string
      dob: Date
      father: string
      mother: string
      address: string
      dist: string
      state: string
      pin: string
      ps: string
      po: string
      vill: string
      mobileNo: string
      email: string
      sex: $Enums.Sex
      category: $Enums.Category
      nationality: $Enums.Nationality
      idProof: $Enums.IdType
      idProofNo: string
      pincode: string
      eduqualification: string
      activated: boolean
      courseId: number
      centerid: number
      createdAt: Date
      status: Prisma.JsonValue
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examformFillup<T extends Enrollment$examformFillupArgs<ExtArgs> = {}>(args?: Subset<T, Enrollment$examformFillupArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    marks<T extends Enrollment$marksArgs<ExtArgs> = {}>(args?: Subset<T, Enrollment$marksArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    amount<T extends Enrollment$amountArgs<ExtArgs> = {}>(args?: Subset<T, Enrollment$amountArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    center<T extends CenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CenterDefaultArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly EnrollmentNo: FieldRef<"Enrollment", 'Int'>
    readonly IdCardNo: FieldRef<"Enrollment", 'Int'>
    readonly idCardLink: FieldRef<"Enrollment", 'String'>
    readonly admitLink: FieldRef<"Enrollment", 'String'>
    readonly certificateLink: FieldRef<"Enrollment", 'String'>
    readonly marksheetLink: FieldRef<"Enrollment", 'String'>
    readonly imageLink: FieldRef<"Enrollment", 'String'>
    readonly CertificateNo: FieldRef<"Enrollment", 'Int'>
    readonly name: FieldRef<"Enrollment", 'String'>
    readonly dob: FieldRef<"Enrollment", 'DateTime'>
    readonly father: FieldRef<"Enrollment", 'String'>
    readonly mother: FieldRef<"Enrollment", 'String'>
    readonly address: FieldRef<"Enrollment", 'String'>
    readonly dist: FieldRef<"Enrollment", 'String'>
    readonly state: FieldRef<"Enrollment", 'String'>
    readonly pin: FieldRef<"Enrollment", 'String'>
    readonly ps: FieldRef<"Enrollment", 'String'>
    readonly po: FieldRef<"Enrollment", 'String'>
    readonly vill: FieldRef<"Enrollment", 'String'>
    readonly mobileNo: FieldRef<"Enrollment", 'String'>
    readonly email: FieldRef<"Enrollment", 'String'>
    readonly sex: FieldRef<"Enrollment", 'Sex'>
    readonly category: FieldRef<"Enrollment", 'Category'>
    readonly nationality: FieldRef<"Enrollment", 'Nationality'>
    readonly idProof: FieldRef<"Enrollment", 'IdType'>
    readonly idProofNo: FieldRef<"Enrollment", 'String'>
    readonly pincode: FieldRef<"Enrollment", 'String'>
    readonly eduqualification: FieldRef<"Enrollment", 'String'>
    readonly activated: FieldRef<"Enrollment", 'Boolean'>
    readonly courseId: FieldRef<"Enrollment", 'Int'>
    readonly centerid: FieldRef<"Enrollment", 'Int'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly status: FieldRef<"Enrollment", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment.examformFillup
   */
  export type Enrollment$examformFillupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    where?: ExamFormWhereInput
  }

  /**
   * Enrollment.marks
   */
  export type Enrollment$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
  }

  /**
   * Enrollment.amount
   */
  export type Enrollment$amountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    where?: AmountWhereInput
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    price: number | null
    Duration: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    price: number | null
    Duration: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    CName: string | null
    price: number | null
    Duration: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    CName: string | null
    price: number | null
    Duration: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    CName: number
    price: number
    Duration: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    price?: true
    Duration?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    price?: true
    Duration?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    CName?: true
    price?: true
    Duration?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    CName?: true
    price?: true
    Duration?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    CName?: true
    price?: true
    Duration?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    CName: string
    price: number
    Duration: number
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CName?: boolean
    price?: boolean
    Duration?: boolean
    Enrollment?: boolean | Course$EnrollmentArgs<ExtArgs>
    subjects?: boolean | Course$subjectsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CName?: boolean
    price?: boolean
    Duration?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CName?: boolean
    price?: boolean
    Duration?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    CName?: boolean
    price?: boolean
    Duration?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CName" | "price" | "Duration", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | Course$EnrollmentArgs<ExtArgs>
    subjects?: boolean | Course$subjectsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>[]
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CName: string
      price: number
      Duration: number
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Enrollment<T extends Course$EnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, Course$EnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Course$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Course$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly CName: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Int'>
    readonly Duration: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.Enrollment
   */
  export type Course$EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.subjects
   */
  export type Course$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    theoryFullMarks: number | null
    practFullMarks: number | null
    courseId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    theoryFullMarks: number | null
    practFullMarks: number | null
    courseId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    SubName: string | null
    theoryFullMarks: number | null
    practFullMarks: number | null
    courseId: number | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    SubName: string | null
    theoryFullMarks: number | null
    practFullMarks: number | null
    courseId: number | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    SubName: number
    theoryFullMarks: number
    practFullMarks: number
    courseId: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    theoryFullMarks?: true
    practFullMarks?: true
    courseId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    theoryFullMarks?: true
    practFullMarks?: true
    courseId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    SubName?: true
    theoryFullMarks?: true
    practFullMarks?: true
    courseId?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    SubName?: true
    theoryFullMarks?: true
    practFullMarks?: true
    courseId?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    SubName?: true
    theoryFullMarks?: true
    practFullMarks?: true
    courseId?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    SubName: string
    theoryFullMarks: number
    practFullMarks: number
    courseId: number
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SubName?: boolean
    theoryFullMarks?: boolean
    practFullMarks?: boolean
    courseId?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SubName?: boolean
    theoryFullMarks?: boolean
    practFullMarks?: boolean
    courseId?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SubName?: boolean
    theoryFullMarks?: boolean
    practFullMarks?: boolean
    courseId?: boolean
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    SubName?: boolean
    theoryFullMarks?: boolean
    practFullMarks?: boolean
    courseId?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "SubName" | "theoryFullMarks" | "practFullMarks" | "courseId", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      Course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      SubName: string
      theoryFullMarks: number
      practFullMarks: number
      courseId: number
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly SubName: FieldRef<"Subject", 'String'>
    readonly theoryFullMarks: FieldRef<"Subject", 'Int'>
    readonly practFullMarks: FieldRef<"Subject", 'Int'>
    readonly courseId: FieldRef<"Subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Amount
   */

  export type AggregateAmount = {
    _count: AmountCountAggregateOutputType | null
    _avg: AmountAvgAggregateOutputType | null
    _sum: AmountSumAggregateOutputType | null
    _min: AmountMinAggregateOutputType | null
    _max: AmountMaxAggregateOutputType | null
  }

  export type AmountAvgAggregateOutputType = {
    id: number | null
    TotalPaid: number | null
    amountRemain: number | null
    EnrollmentNo: number | null
  }

  export type AmountSumAggregateOutputType = {
    id: number | null
    TotalPaid: number | null
    amountRemain: number | null
    EnrollmentNo: number | null
  }

  export type AmountMinAggregateOutputType = {
    id: number | null
    TotalPaid: number | null
    amountRemain: number | null
    lastPaymentRecieptno: string | null
    EnrollmentNo: number | null
    createdAt: Date | null
  }

  export type AmountMaxAggregateOutputType = {
    id: number | null
    TotalPaid: number | null
    amountRemain: number | null
    lastPaymentRecieptno: string | null
    EnrollmentNo: number | null
    createdAt: Date | null
  }

  export type AmountCountAggregateOutputType = {
    id: number
    TotalPaid: number
    amountRemain: number
    lastPaymentRecieptno: number
    EnrollmentNo: number
    createdAt: number
    _all: number
  }


  export type AmountAvgAggregateInputType = {
    id?: true
    TotalPaid?: true
    amountRemain?: true
    EnrollmentNo?: true
  }

  export type AmountSumAggregateInputType = {
    id?: true
    TotalPaid?: true
    amountRemain?: true
    EnrollmentNo?: true
  }

  export type AmountMinAggregateInputType = {
    id?: true
    TotalPaid?: true
    amountRemain?: true
    lastPaymentRecieptno?: true
    EnrollmentNo?: true
    createdAt?: true
  }

  export type AmountMaxAggregateInputType = {
    id?: true
    TotalPaid?: true
    amountRemain?: true
    lastPaymentRecieptno?: true
    EnrollmentNo?: true
    createdAt?: true
  }

  export type AmountCountAggregateInputType = {
    id?: true
    TotalPaid?: true
    amountRemain?: true
    lastPaymentRecieptno?: true
    EnrollmentNo?: true
    createdAt?: true
    _all?: true
  }

  export type AmountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amount to aggregate.
     */
    where?: AmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amounts to fetch.
     */
    orderBy?: AmountOrderByWithRelationInput | AmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amounts
    **/
    _count?: true | AmountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmountMaxAggregateInputType
  }

  export type GetAmountAggregateType<T extends AmountAggregateArgs> = {
        [P in keyof T & keyof AggregateAmount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmount[P]>
      : GetScalarType<T[P], AggregateAmount[P]>
  }




  export type AmountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmountWhereInput
    orderBy?: AmountOrderByWithAggregationInput | AmountOrderByWithAggregationInput[]
    by: AmountScalarFieldEnum[] | AmountScalarFieldEnum
    having?: AmountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmountCountAggregateInputType | true
    _avg?: AmountAvgAggregateInputType
    _sum?: AmountSumAggregateInputType
    _min?: AmountMinAggregateInputType
    _max?: AmountMaxAggregateInputType
  }

  export type AmountGroupByOutputType = {
    id: number
    TotalPaid: number
    amountRemain: number
    lastPaymentRecieptno: string | null
    EnrollmentNo: number
    createdAt: Date
    _count: AmountCountAggregateOutputType | null
    _avg: AmountAvgAggregateOutputType | null
    _sum: AmountSumAggregateOutputType | null
    _min: AmountMinAggregateOutputType | null
    _max: AmountMaxAggregateOutputType | null
  }

  type GetAmountGroupByPayload<T extends AmountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmountGroupByOutputType[P]>
            : GetScalarType<T[P], AmountGroupByOutputType[P]>
        }
      >
    >


  export type AmountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    TotalPaid?: boolean
    amountRemain?: boolean
    lastPaymentRecieptno?: boolean
    EnrollmentNo?: boolean
    createdAt?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amount"]>

  export type AmountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    TotalPaid?: boolean
    amountRemain?: boolean
    lastPaymentRecieptno?: boolean
    EnrollmentNo?: boolean
    createdAt?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amount"]>

  export type AmountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    TotalPaid?: boolean
    amountRemain?: boolean
    lastPaymentRecieptno?: boolean
    EnrollmentNo?: boolean
    createdAt?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amount"]>

  export type AmountSelectScalar = {
    id?: boolean
    TotalPaid?: boolean
    amountRemain?: boolean
    lastPaymentRecieptno?: boolean
    EnrollmentNo?: boolean
    createdAt?: boolean
  }

  export type AmountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "TotalPaid" | "amountRemain" | "lastPaymentRecieptno" | "EnrollmentNo" | "createdAt", ExtArgs["result"]["amount"]>
  export type AmountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type AmountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type AmountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }

  export type $AmountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amount"
    objects: {
      enrollment: Prisma.$EnrollmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      TotalPaid: number
      amountRemain: number
      lastPaymentRecieptno: string | null
      EnrollmentNo: number
      createdAt: Date
    }, ExtArgs["result"]["amount"]>
    composites: {}
  }

  type AmountGetPayload<S extends boolean | null | undefined | AmountDefaultArgs> = $Result.GetResult<Prisma.$AmountPayload, S>

  type AmountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmountCountAggregateInputType | true
    }

  export interface AmountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amount'], meta: { name: 'Amount' } }
    /**
     * Find zero or one Amount that matches the filter.
     * @param {AmountFindUniqueArgs} args - Arguments to find a Amount
     * @example
     * // Get one Amount
     * const amount = await prisma.amount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmountFindUniqueArgs>(args: SelectSubset<T, AmountFindUniqueArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmountFindUniqueOrThrowArgs} args - Arguments to find a Amount
     * @example
     * // Get one Amount
     * const amount = await prisma.amount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmountFindUniqueOrThrowArgs>(args: SelectSubset<T, AmountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmountFindFirstArgs} args - Arguments to find a Amount
     * @example
     * // Get one Amount
     * const amount = await prisma.amount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmountFindFirstArgs>(args?: SelectSubset<T, AmountFindFirstArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmountFindFirstOrThrowArgs} args - Arguments to find a Amount
     * @example
     * // Get one Amount
     * const amount = await prisma.amount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmountFindFirstOrThrowArgs>(args?: SelectSubset<T, AmountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amounts
     * const amounts = await prisma.amount.findMany()
     * 
     * // Get first 10 Amounts
     * const amounts = await prisma.amount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amountWithIdOnly = await prisma.amount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmountFindManyArgs>(args?: SelectSubset<T, AmountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amount.
     * @param {AmountCreateArgs} args - Arguments to create a Amount.
     * @example
     * // Create one Amount
     * const Amount = await prisma.amount.create({
     *   data: {
     *     // ... data to create a Amount
     *   }
     * })
     * 
     */
    create<T extends AmountCreateArgs>(args: SelectSubset<T, AmountCreateArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amounts.
     * @param {AmountCreateManyArgs} args - Arguments to create many Amounts.
     * @example
     * // Create many Amounts
     * const amount = await prisma.amount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmountCreateManyArgs>(args?: SelectSubset<T, AmountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amounts and returns the data saved in the database.
     * @param {AmountCreateManyAndReturnArgs} args - Arguments to create many Amounts.
     * @example
     * // Create many Amounts
     * const amount = await prisma.amount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amounts and only return the `id`
     * const amountWithIdOnly = await prisma.amount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmountCreateManyAndReturnArgs>(args?: SelectSubset<T, AmountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amount.
     * @param {AmountDeleteArgs} args - Arguments to delete one Amount.
     * @example
     * // Delete one Amount
     * const Amount = await prisma.amount.delete({
     *   where: {
     *     // ... filter to delete one Amount
     *   }
     * })
     * 
     */
    delete<T extends AmountDeleteArgs>(args: SelectSubset<T, AmountDeleteArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amount.
     * @param {AmountUpdateArgs} args - Arguments to update one Amount.
     * @example
     * // Update one Amount
     * const amount = await prisma.amount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmountUpdateArgs>(args: SelectSubset<T, AmountUpdateArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amounts.
     * @param {AmountDeleteManyArgs} args - Arguments to filter Amounts to delete.
     * @example
     * // Delete a few Amounts
     * const { count } = await prisma.amount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmountDeleteManyArgs>(args?: SelectSubset<T, AmountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amounts
     * const amount = await prisma.amount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmountUpdateManyArgs>(args: SelectSubset<T, AmountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amounts and returns the data updated in the database.
     * @param {AmountUpdateManyAndReturnArgs} args - Arguments to update many Amounts.
     * @example
     * // Update many Amounts
     * const amount = await prisma.amount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amounts and only return the `id`
     * const amountWithIdOnly = await prisma.amount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmountUpdateManyAndReturnArgs>(args: SelectSubset<T, AmountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amount.
     * @param {AmountUpsertArgs} args - Arguments to update or create a Amount.
     * @example
     * // Update or create a Amount
     * const amount = await prisma.amount.upsert({
     *   create: {
     *     // ... data to create a Amount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amount we want to update
     *   }
     * })
     */
    upsert<T extends AmountUpsertArgs>(args: SelectSubset<T, AmountUpsertArgs<ExtArgs>>): Prisma__AmountClient<$Result.GetResult<Prisma.$AmountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmountCountArgs} args - Arguments to filter Amounts to count.
     * @example
     * // Count the number of Amounts
     * const count = await prisma.amount.count({
     *   where: {
     *     // ... the filter for the Amounts we want to count
     *   }
     * })
    **/
    count<T extends AmountCountArgs>(
      args?: Subset<T, AmountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmountAggregateArgs>(args: Subset<T, AmountAggregateArgs>): Prisma.PrismaPromise<GetAmountAggregateType<T>>

    /**
     * Group by Amount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmountGroupByArgs} args - Group by arguments.
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
      T extends AmountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmountGroupByArgs['orderBy'] }
        : { orderBy?: AmountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amount model
   */
  readonly fields: AmountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollment<T extends EnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollmentDefaultArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Amount model
   */
  interface AmountFieldRefs {
    readonly id: FieldRef<"Amount", 'Int'>
    readonly TotalPaid: FieldRef<"Amount", 'Int'>
    readonly amountRemain: FieldRef<"Amount", 'Int'>
    readonly lastPaymentRecieptno: FieldRef<"Amount", 'String'>
    readonly EnrollmentNo: FieldRef<"Amount", 'Int'>
    readonly createdAt: FieldRef<"Amount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Amount findUnique
   */
  export type AmountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * Filter, which Amount to fetch.
     */
    where: AmountWhereUniqueInput
  }

  /**
   * Amount findUniqueOrThrow
   */
  export type AmountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * Filter, which Amount to fetch.
     */
    where: AmountWhereUniqueInput
  }

  /**
   * Amount findFirst
   */
  export type AmountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * Filter, which Amount to fetch.
     */
    where?: AmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amounts to fetch.
     */
    orderBy?: AmountOrderByWithRelationInput | AmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amounts.
     */
    cursor?: AmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amounts.
     */
    distinct?: AmountScalarFieldEnum | AmountScalarFieldEnum[]
  }

  /**
   * Amount findFirstOrThrow
   */
  export type AmountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * Filter, which Amount to fetch.
     */
    where?: AmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amounts to fetch.
     */
    orderBy?: AmountOrderByWithRelationInput | AmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amounts.
     */
    cursor?: AmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amounts.
     */
    distinct?: AmountScalarFieldEnum | AmountScalarFieldEnum[]
  }

  /**
   * Amount findMany
   */
  export type AmountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * Filter, which Amounts to fetch.
     */
    where?: AmountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amounts to fetch.
     */
    orderBy?: AmountOrderByWithRelationInput | AmountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amounts.
     */
    cursor?: AmountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amounts.
     */
    skip?: number
    distinct?: AmountScalarFieldEnum | AmountScalarFieldEnum[]
  }

  /**
   * Amount create
   */
  export type AmountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * The data needed to create a Amount.
     */
    data: XOR<AmountCreateInput, AmountUncheckedCreateInput>
  }

  /**
   * Amount createMany
   */
  export type AmountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amounts.
     */
    data: AmountCreateManyInput | AmountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amount createManyAndReturn
   */
  export type AmountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * The data used to create many Amounts.
     */
    data: AmountCreateManyInput | AmountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amount update
   */
  export type AmountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * The data needed to update a Amount.
     */
    data: XOR<AmountUpdateInput, AmountUncheckedUpdateInput>
    /**
     * Choose, which Amount to update.
     */
    where: AmountWhereUniqueInput
  }

  /**
   * Amount updateMany
   */
  export type AmountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amounts.
     */
    data: XOR<AmountUpdateManyMutationInput, AmountUncheckedUpdateManyInput>
    /**
     * Filter which Amounts to update
     */
    where?: AmountWhereInput
    /**
     * Limit how many Amounts to update.
     */
    limit?: number
  }

  /**
   * Amount updateManyAndReturn
   */
  export type AmountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * The data used to update Amounts.
     */
    data: XOR<AmountUpdateManyMutationInput, AmountUncheckedUpdateManyInput>
    /**
     * Filter which Amounts to update
     */
    where?: AmountWhereInput
    /**
     * Limit how many Amounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amount upsert
   */
  export type AmountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * The filter to search for the Amount to update in case it exists.
     */
    where: AmountWhereUniqueInput
    /**
     * In case the Amount found by the `where` argument doesn't exist, create a new Amount with this data.
     */
    create: XOR<AmountCreateInput, AmountUncheckedCreateInput>
    /**
     * In case the Amount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmountUpdateInput, AmountUncheckedUpdateInput>
  }

  /**
   * Amount delete
   */
  export type AmountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
    /**
     * Filter which Amount to delete.
     */
    where: AmountWhereUniqueInput
  }

  /**
   * Amount deleteMany
   */
  export type AmountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amounts to delete
     */
    where?: AmountWhereInput
    /**
     * Limit how many Amounts to delete.
     */
    limit?: number
  }

  /**
   * Amount without action
   */
  export type AmountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amount
     */
    select?: AmountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amount
     */
    omit?: AmountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmountInclude<ExtArgs> | null
  }


  /**
   * Model ExamForm
   */

  export type AggregateExamForm = {
    _count: ExamFormCountAggregateOutputType | null
    _avg: ExamFormAvgAggregateOutputType | null
    _sum: ExamFormSumAggregateOutputType | null
    _min: ExamFormMinAggregateOutputType | null
    _max: ExamFormMaxAggregateOutputType | null
  }

  export type ExamFormAvgAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
  }

  export type ExamFormSumAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
  }

  export type ExamFormMinAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    verified: boolean | null
    createdAt: Date | null
    ExamCenterCode: string | null
    ATI_CODE: string | null
    practExmdate: string | null
    theoryExamdate: string | null
    practExmtime: string | null
    theoryExmtime: string | null
    sem: string | null
  }

  export type ExamFormMaxAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    verified: boolean | null
    createdAt: Date | null
    ExamCenterCode: string | null
    ATI_CODE: string | null
    practExmdate: string | null
    theoryExamdate: string | null
    practExmtime: string | null
    theoryExmtime: string | null
    sem: string | null
  }

  export type ExamFormCountAggregateOutputType = {
    id: number
    EnrollmentNo: number
    verified: number
    createdAt: number
    ExamCenterCode: number
    ATI_CODE: number
    practExmdate: number
    theoryExamdate: number
    practExmtime: number
    theoryExmtime: number
    sem: number
    _all: number
  }


  export type ExamFormAvgAggregateInputType = {
    id?: true
    EnrollmentNo?: true
  }

  export type ExamFormSumAggregateInputType = {
    id?: true
    EnrollmentNo?: true
  }

  export type ExamFormMinAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    verified?: true
    createdAt?: true
    ExamCenterCode?: true
    ATI_CODE?: true
    practExmdate?: true
    theoryExamdate?: true
    practExmtime?: true
    theoryExmtime?: true
    sem?: true
  }

  export type ExamFormMaxAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    verified?: true
    createdAt?: true
    ExamCenterCode?: true
    ATI_CODE?: true
    practExmdate?: true
    theoryExamdate?: true
    practExmtime?: true
    theoryExmtime?: true
    sem?: true
  }

  export type ExamFormCountAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    verified?: true
    createdAt?: true
    ExamCenterCode?: true
    ATI_CODE?: true
    practExmdate?: true
    theoryExamdate?: true
    practExmtime?: true
    theoryExmtime?: true
    sem?: true
    _all?: true
  }

  export type ExamFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamForm to aggregate.
     */
    where?: ExamFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamForms to fetch.
     */
    orderBy?: ExamFormOrderByWithRelationInput | ExamFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamForms
    **/
    _count?: true | ExamFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamFormMaxAggregateInputType
  }

  export type GetExamFormAggregateType<T extends ExamFormAggregateArgs> = {
        [P in keyof T & keyof AggregateExamForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamForm[P]>
      : GetScalarType<T[P], AggregateExamForm[P]>
  }




  export type ExamFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamFormWhereInput
    orderBy?: ExamFormOrderByWithAggregationInput | ExamFormOrderByWithAggregationInput[]
    by: ExamFormScalarFieldEnum[] | ExamFormScalarFieldEnum
    having?: ExamFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamFormCountAggregateInputType | true
    _avg?: ExamFormAvgAggregateInputType
    _sum?: ExamFormSumAggregateInputType
    _min?: ExamFormMinAggregateInputType
    _max?: ExamFormMaxAggregateInputType
  }

  export type ExamFormGroupByOutputType = {
    id: number
    EnrollmentNo: number
    verified: boolean
    createdAt: Date
    ExamCenterCode: string
    ATI_CODE: string
    practExmdate: string
    theoryExamdate: string
    practExmtime: string
    theoryExmtime: string
    sem: string
    _count: ExamFormCountAggregateOutputType | null
    _avg: ExamFormAvgAggregateOutputType | null
    _sum: ExamFormSumAggregateOutputType | null
    _min: ExamFormMinAggregateOutputType | null
    _max: ExamFormMaxAggregateOutputType | null
  }

  type GetExamFormGroupByPayload<T extends ExamFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamFormGroupByOutputType[P]>
            : GetScalarType<T[P], ExamFormGroupByOutputType[P]>
        }
      >
    >


  export type ExamFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    EnrollmentNo?: boolean
    verified?: boolean
    createdAt?: boolean
    ExamCenterCode?: boolean
    ATI_CODE?: boolean
    practExmdate?: boolean
    theoryExamdate?: boolean
    practExmtime?: boolean
    theoryExmtime?: boolean
    sem?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examForm"]>

  export type ExamFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    EnrollmentNo?: boolean
    verified?: boolean
    createdAt?: boolean
    ExamCenterCode?: boolean
    ATI_CODE?: boolean
    practExmdate?: boolean
    theoryExamdate?: boolean
    practExmtime?: boolean
    theoryExmtime?: boolean
    sem?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examForm"]>

  export type ExamFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    EnrollmentNo?: boolean
    verified?: boolean
    createdAt?: boolean
    ExamCenterCode?: boolean
    ATI_CODE?: boolean
    practExmdate?: boolean
    theoryExamdate?: boolean
    practExmtime?: boolean
    theoryExmtime?: boolean
    sem?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examForm"]>

  export type ExamFormSelectScalar = {
    id?: boolean
    EnrollmentNo?: boolean
    verified?: boolean
    createdAt?: boolean
    ExamCenterCode?: boolean
    ATI_CODE?: boolean
    practExmdate?: boolean
    theoryExamdate?: boolean
    practExmtime?: boolean
    theoryExmtime?: boolean
    sem?: boolean
  }

  export type ExamFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "EnrollmentNo" | "verified" | "createdAt" | "ExamCenterCode" | "ATI_CODE" | "practExmdate" | "theoryExamdate" | "practExmtime" | "theoryExmtime" | "sem", ExtArgs["result"]["examForm"]>
  export type ExamFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type ExamFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type ExamFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }

  export type $ExamFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamForm"
    objects: {
      enrollment: Prisma.$EnrollmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      EnrollmentNo: number
      verified: boolean
      createdAt: Date
      ExamCenterCode: string
      ATI_CODE: string
      practExmdate: string
      theoryExamdate: string
      practExmtime: string
      theoryExmtime: string
      sem: string
    }, ExtArgs["result"]["examForm"]>
    composites: {}
  }

  type ExamFormGetPayload<S extends boolean | null | undefined | ExamFormDefaultArgs> = $Result.GetResult<Prisma.$ExamFormPayload, S>

  type ExamFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamFormCountAggregateInputType | true
    }

  export interface ExamFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamForm'], meta: { name: 'ExamForm' } }
    /**
     * Find zero or one ExamForm that matches the filter.
     * @param {ExamFormFindUniqueArgs} args - Arguments to find a ExamForm
     * @example
     * // Get one ExamForm
     * const examForm = await prisma.examForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFormFindUniqueArgs>(args: SelectSubset<T, ExamFormFindUniqueArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFormFindUniqueOrThrowArgs} args - Arguments to find a ExamForm
     * @example
     * // Get one ExamForm
     * const examForm = await prisma.examForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFormFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFormFindFirstArgs} args - Arguments to find a ExamForm
     * @example
     * // Get one ExamForm
     * const examForm = await prisma.examForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFormFindFirstArgs>(args?: SelectSubset<T, ExamFormFindFirstArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFormFindFirstOrThrowArgs} args - Arguments to find a ExamForm
     * @example
     * // Get one ExamForm
     * const examForm = await prisma.examForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFormFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamForms
     * const examForms = await prisma.examForm.findMany()
     * 
     * // Get first 10 ExamForms
     * const examForms = await prisma.examForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examFormWithIdOnly = await prisma.examForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFormFindManyArgs>(args?: SelectSubset<T, ExamFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamForm.
     * @param {ExamFormCreateArgs} args - Arguments to create a ExamForm.
     * @example
     * // Create one ExamForm
     * const ExamForm = await prisma.examForm.create({
     *   data: {
     *     // ... data to create a ExamForm
     *   }
     * })
     * 
     */
    create<T extends ExamFormCreateArgs>(args: SelectSubset<T, ExamFormCreateArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamForms.
     * @param {ExamFormCreateManyArgs} args - Arguments to create many ExamForms.
     * @example
     * // Create many ExamForms
     * const examForm = await prisma.examForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamFormCreateManyArgs>(args?: SelectSubset<T, ExamFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamForms and returns the data saved in the database.
     * @param {ExamFormCreateManyAndReturnArgs} args - Arguments to create many ExamForms.
     * @example
     * // Create many ExamForms
     * const examForm = await prisma.examForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamForms and only return the `id`
     * const examFormWithIdOnly = await prisma.examForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamFormCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamForm.
     * @param {ExamFormDeleteArgs} args - Arguments to delete one ExamForm.
     * @example
     * // Delete one ExamForm
     * const ExamForm = await prisma.examForm.delete({
     *   where: {
     *     // ... filter to delete one ExamForm
     *   }
     * })
     * 
     */
    delete<T extends ExamFormDeleteArgs>(args: SelectSubset<T, ExamFormDeleteArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamForm.
     * @param {ExamFormUpdateArgs} args - Arguments to update one ExamForm.
     * @example
     * // Update one ExamForm
     * const examForm = await prisma.examForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamFormUpdateArgs>(args: SelectSubset<T, ExamFormUpdateArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamForms.
     * @param {ExamFormDeleteManyArgs} args - Arguments to filter ExamForms to delete.
     * @example
     * // Delete a few ExamForms
     * const { count } = await prisma.examForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamFormDeleteManyArgs>(args?: SelectSubset<T, ExamFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamForms
     * const examForm = await prisma.examForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamFormUpdateManyArgs>(args: SelectSubset<T, ExamFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamForms and returns the data updated in the database.
     * @param {ExamFormUpdateManyAndReturnArgs} args - Arguments to update many ExamForms.
     * @example
     * // Update many ExamForms
     * const examForm = await prisma.examForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamForms and only return the `id`
     * const examFormWithIdOnly = await prisma.examForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamFormUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamForm.
     * @param {ExamFormUpsertArgs} args - Arguments to update or create a ExamForm.
     * @example
     * // Update or create a ExamForm
     * const examForm = await prisma.examForm.upsert({
     *   create: {
     *     // ... data to create a ExamForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamForm we want to update
     *   }
     * })
     */
    upsert<T extends ExamFormUpsertArgs>(args: SelectSubset<T, ExamFormUpsertArgs<ExtArgs>>): Prisma__ExamFormClient<$Result.GetResult<Prisma.$ExamFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFormCountArgs} args - Arguments to filter ExamForms to count.
     * @example
     * // Count the number of ExamForms
     * const count = await prisma.examForm.count({
     *   where: {
     *     // ... the filter for the ExamForms we want to count
     *   }
     * })
    **/
    count<T extends ExamFormCountArgs>(
      args?: Subset<T, ExamFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamFormAggregateArgs>(args: Subset<T, ExamFormAggregateArgs>): Prisma.PrismaPromise<GetExamFormAggregateType<T>>

    /**
     * Group by ExamForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFormGroupByArgs} args - Group by arguments.
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
      T extends ExamFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamFormGroupByArgs['orderBy'] }
        : { orderBy?: ExamFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamForm model
   */
  readonly fields: ExamFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollment<T extends EnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollmentDefaultArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExamForm model
   */
  interface ExamFormFieldRefs {
    readonly id: FieldRef<"ExamForm", 'Int'>
    readonly EnrollmentNo: FieldRef<"ExamForm", 'Int'>
    readonly verified: FieldRef<"ExamForm", 'Boolean'>
    readonly createdAt: FieldRef<"ExamForm", 'DateTime'>
    readonly ExamCenterCode: FieldRef<"ExamForm", 'String'>
    readonly ATI_CODE: FieldRef<"ExamForm", 'String'>
    readonly practExmdate: FieldRef<"ExamForm", 'String'>
    readonly theoryExamdate: FieldRef<"ExamForm", 'String'>
    readonly practExmtime: FieldRef<"ExamForm", 'String'>
    readonly theoryExmtime: FieldRef<"ExamForm", 'String'>
    readonly sem: FieldRef<"ExamForm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExamForm findUnique
   */
  export type ExamFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * Filter, which ExamForm to fetch.
     */
    where: ExamFormWhereUniqueInput
  }

  /**
   * ExamForm findUniqueOrThrow
   */
  export type ExamFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * Filter, which ExamForm to fetch.
     */
    where: ExamFormWhereUniqueInput
  }

  /**
   * ExamForm findFirst
   */
  export type ExamFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * Filter, which ExamForm to fetch.
     */
    where?: ExamFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamForms to fetch.
     */
    orderBy?: ExamFormOrderByWithRelationInput | ExamFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamForms.
     */
    cursor?: ExamFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamForms.
     */
    distinct?: ExamFormScalarFieldEnum | ExamFormScalarFieldEnum[]
  }

  /**
   * ExamForm findFirstOrThrow
   */
  export type ExamFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * Filter, which ExamForm to fetch.
     */
    where?: ExamFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamForms to fetch.
     */
    orderBy?: ExamFormOrderByWithRelationInput | ExamFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamForms.
     */
    cursor?: ExamFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamForms.
     */
    distinct?: ExamFormScalarFieldEnum | ExamFormScalarFieldEnum[]
  }

  /**
   * ExamForm findMany
   */
  export type ExamFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * Filter, which ExamForms to fetch.
     */
    where?: ExamFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamForms to fetch.
     */
    orderBy?: ExamFormOrderByWithRelationInput | ExamFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamForms.
     */
    cursor?: ExamFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamForms.
     */
    skip?: number
    distinct?: ExamFormScalarFieldEnum | ExamFormScalarFieldEnum[]
  }

  /**
   * ExamForm create
   */
  export type ExamFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamForm.
     */
    data: XOR<ExamFormCreateInput, ExamFormUncheckedCreateInput>
  }

  /**
   * ExamForm createMany
   */
  export type ExamFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamForms.
     */
    data: ExamFormCreateManyInput | ExamFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamForm createManyAndReturn
   */
  export type ExamFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * The data used to create many ExamForms.
     */
    data: ExamFormCreateManyInput | ExamFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamForm update
   */
  export type ExamFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamForm.
     */
    data: XOR<ExamFormUpdateInput, ExamFormUncheckedUpdateInput>
    /**
     * Choose, which ExamForm to update.
     */
    where: ExamFormWhereUniqueInput
  }

  /**
   * ExamForm updateMany
   */
  export type ExamFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamForms.
     */
    data: XOR<ExamFormUpdateManyMutationInput, ExamFormUncheckedUpdateManyInput>
    /**
     * Filter which ExamForms to update
     */
    where?: ExamFormWhereInput
    /**
     * Limit how many ExamForms to update.
     */
    limit?: number
  }

  /**
   * ExamForm updateManyAndReturn
   */
  export type ExamFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * The data used to update ExamForms.
     */
    data: XOR<ExamFormUpdateManyMutationInput, ExamFormUncheckedUpdateManyInput>
    /**
     * Filter which ExamForms to update
     */
    where?: ExamFormWhereInput
    /**
     * Limit how many ExamForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamForm upsert
   */
  export type ExamFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamForm to update in case it exists.
     */
    where: ExamFormWhereUniqueInput
    /**
     * In case the ExamForm found by the `where` argument doesn't exist, create a new ExamForm with this data.
     */
    create: XOR<ExamFormCreateInput, ExamFormUncheckedCreateInput>
    /**
     * In case the ExamForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamFormUpdateInput, ExamFormUncheckedUpdateInput>
  }

  /**
   * ExamForm delete
   */
  export type ExamFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
    /**
     * Filter which ExamForm to delete.
     */
    where: ExamFormWhereUniqueInput
  }

  /**
   * ExamForm deleteMany
   */
  export type ExamFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamForms to delete
     */
    where?: ExamFormWhereInput
    /**
     * Limit how many ExamForms to delete.
     */
    limit?: number
  }

  /**
   * ExamForm without action
   */
  export type ExamFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamForm
     */
    select?: ExamFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamForm
     */
    omit?: ExamFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamFormInclude<ExtArgs> | null
  }


  /**
   * Model Marks
   */

  export type AggregateMarks = {
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  export type MarksAvgAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    totalMarks: number | null
    percentage: number | null
    serialNo: number | null
  }

  export type MarksSumAggregateOutputType = {
    id: number | null
    EnrollmentNo: number | null
    totalMarks: number | null
    percentage: number | null
    serialNo: number | null
  }

  export type MarksMinAggregateOutputType = {
    id: number | null
    remarks: $Enums.Remark | null
    EnrollmentNo: number | null
    grade: string | null
    totalMarks: number | null
    percentage: number | null
    verified: boolean | null
    createdAt: Date | null
    year: string | null
    serialNo: number | null
  }

  export type MarksMaxAggregateOutputType = {
    id: number | null
    remarks: $Enums.Remark | null
    EnrollmentNo: number | null
    grade: string | null
    totalMarks: number | null
    percentage: number | null
    verified: boolean | null
    createdAt: Date | null
    year: string | null
    serialNo: number | null
  }

  export type MarksCountAggregateOutputType = {
    id: number
    marks: number
    remarks: number
    EnrollmentNo: number
    grade: number
    totalMarks: number
    percentage: number
    verified: number
    createdAt: number
    year: number
    serialNo: number
    _all: number
  }


  export type MarksAvgAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    totalMarks?: true
    percentage?: true
    serialNo?: true
  }

  export type MarksSumAggregateInputType = {
    id?: true
    EnrollmentNo?: true
    totalMarks?: true
    percentage?: true
    serialNo?: true
  }

  export type MarksMinAggregateInputType = {
    id?: true
    remarks?: true
    EnrollmentNo?: true
    grade?: true
    totalMarks?: true
    percentage?: true
    verified?: true
    createdAt?: true
    year?: true
    serialNo?: true
  }

  export type MarksMaxAggregateInputType = {
    id?: true
    remarks?: true
    EnrollmentNo?: true
    grade?: true
    totalMarks?: true
    percentage?: true
    verified?: true
    createdAt?: true
    year?: true
    serialNo?: true
  }

  export type MarksCountAggregateInputType = {
    id?: true
    marks?: true
    remarks?: true
    EnrollmentNo?: true
    grade?: true
    totalMarks?: true
    percentage?: true
    verified?: true
    createdAt?: true
    year?: true
    serialNo?: true
    _all?: true
  }

  export type MarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to aggregate.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarksMaxAggregateInputType
  }

  export type GetMarksAggregateType<T extends MarksAggregateArgs> = {
        [P in keyof T & keyof AggregateMarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarks[P]>
      : GetScalarType<T[P], AggregateMarks[P]>
  }




  export type MarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithAggregationInput | MarksOrderByWithAggregationInput[]
    by: MarksScalarFieldEnum[] | MarksScalarFieldEnum
    having?: MarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarksCountAggregateInputType | true
    _avg?: MarksAvgAggregateInputType
    _sum?: MarksSumAggregateInputType
    _min?: MarksMinAggregateInputType
    _max?: MarksMaxAggregateInputType
  }

  export type MarksGroupByOutputType = {
    id: number
    marks: JsonValue
    remarks: $Enums.Remark
    EnrollmentNo: number
    grade: string
    totalMarks: number
    percentage: number
    verified: boolean
    createdAt: Date
    year: string
    serialNo: number
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  type GetMarksGroupByPayload<T extends MarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarksGroupByOutputType[P]>
            : GetScalarType<T[P], MarksGroupByOutputType[P]>
        }
      >
    >


  export type MarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marks?: boolean
    remarks?: boolean
    EnrollmentNo?: boolean
    grade?: boolean
    totalMarks?: boolean
    percentage?: boolean
    verified?: boolean
    createdAt?: boolean
    year?: boolean
    serialNo?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marks?: boolean
    remarks?: boolean
    EnrollmentNo?: boolean
    grade?: boolean
    totalMarks?: boolean
    percentage?: boolean
    verified?: boolean
    createdAt?: boolean
    year?: boolean
    serialNo?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marks?: boolean
    remarks?: boolean
    EnrollmentNo?: boolean
    grade?: boolean
    totalMarks?: boolean
    percentage?: boolean
    verified?: boolean
    createdAt?: boolean
    year?: boolean
    serialNo?: boolean
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectScalar = {
    id?: boolean
    marks?: boolean
    remarks?: boolean
    EnrollmentNo?: boolean
    grade?: boolean
    totalMarks?: boolean
    percentage?: boolean
    verified?: boolean
    createdAt?: boolean
    year?: boolean
    serialNo?: boolean
  }

  export type MarksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marks" | "remarks" | "EnrollmentNo" | "grade" | "totalMarks" | "percentage" | "verified" | "createdAt" | "year" | "serialNo", ExtArgs["result"]["marks"]>
  export type MarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type MarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }
  export type MarksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
  }

  export type $MarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marks"
    objects: {
      enrollment: Prisma.$EnrollmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marks: Prisma.JsonValue
      remarks: $Enums.Remark
      EnrollmentNo: number
      grade: string
      totalMarks: number
      percentage: number
      verified: boolean
      createdAt: Date
      year: string
      serialNo: number
    }, ExtArgs["result"]["marks"]>
    composites: {}
  }

  type MarksGetPayload<S extends boolean | null | undefined | MarksDefaultArgs> = $Result.GetResult<Prisma.$MarksPayload, S>

  type MarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarksCountAggregateInputType | true
    }

  export interface MarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marks'], meta: { name: 'Marks' } }
    /**
     * Find zero or one Marks that matches the filter.
     * @param {MarksFindUniqueArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarksFindUniqueArgs>(args: SelectSubset<T, MarksFindUniqueArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarksFindUniqueOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarksFindUniqueOrThrowArgs>(args: SelectSubset<T, MarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarksFindFirstArgs>(args?: SelectSubset<T, MarksFindFirstArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarksFindFirstOrThrowArgs>(args?: SelectSubset<T, MarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.marks.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.marks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marksWithIdOnly = await prisma.marks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarksFindManyArgs>(args?: SelectSubset<T, MarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marks.
     * @param {MarksCreateArgs} args - Arguments to create a Marks.
     * @example
     * // Create one Marks
     * const Marks = await prisma.marks.create({
     *   data: {
     *     // ... data to create a Marks
     *   }
     * })
     * 
     */
    create<T extends MarksCreateArgs>(args: SelectSubset<T, MarksCreateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marks.
     * @param {MarksCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarksCreateManyArgs>(args?: SelectSubset<T, MarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marks and returns the data saved in the database.
     * @param {MarksCreateManyAndReturnArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marks and only return the `id`
     * const marksWithIdOnly = await prisma.marks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarksCreateManyAndReturnArgs>(args?: SelectSubset<T, MarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marks.
     * @param {MarksDeleteArgs} args - Arguments to delete one Marks.
     * @example
     * // Delete one Marks
     * const Marks = await prisma.marks.delete({
     *   where: {
     *     // ... filter to delete one Marks
     *   }
     * })
     * 
     */
    delete<T extends MarksDeleteArgs>(args: SelectSubset<T, MarksDeleteArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marks.
     * @param {MarksUpdateArgs} args - Arguments to update one Marks.
     * @example
     * // Update one Marks
     * const marks = await prisma.marks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarksUpdateArgs>(args: SelectSubset<T, MarksUpdateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marks.
     * @param {MarksDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.marks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarksDeleteManyArgs>(args?: SelectSubset<T, MarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const marks = await prisma.marks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarksUpdateManyArgs>(args: SelectSubset<T, MarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks and returns the data updated in the database.
     * @param {MarksUpdateManyAndReturnArgs} args - Arguments to update many Marks.
     * @example
     * // Update many Marks
     * const marks = await prisma.marks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marks and only return the `id`
     * const marksWithIdOnly = await prisma.marks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarksUpdateManyAndReturnArgs>(args: SelectSubset<T, MarksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marks.
     * @param {MarksUpsertArgs} args - Arguments to update or create a Marks.
     * @example
     * // Update or create a Marks
     * const marks = await prisma.marks.upsert({
     *   create: {
     *     // ... data to create a Marks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marks we want to update
     *   }
     * })
     */
    upsert<T extends MarksUpsertArgs>(args: SelectSubset<T, MarksUpsertArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.marks.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarksCountArgs>(
      args?: Subset<T, MarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarksAggregateArgs>(args: Subset<T, MarksAggregateArgs>): Prisma.PrismaPromise<GetMarksAggregateType<T>>

    /**
     * Group by Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksGroupByArgs} args - Group by arguments.
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
      T extends MarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarksGroupByArgs['orderBy'] }
        : { orderBy?: MarksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marks model
   */
  readonly fields: MarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollment<T extends EnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollmentDefaultArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Marks model
   */
  interface MarksFieldRefs {
    readonly id: FieldRef<"Marks", 'Int'>
    readonly marks: FieldRef<"Marks", 'Json'>
    readonly remarks: FieldRef<"Marks", 'Remark'>
    readonly EnrollmentNo: FieldRef<"Marks", 'Int'>
    readonly grade: FieldRef<"Marks", 'String'>
    readonly totalMarks: FieldRef<"Marks", 'Float'>
    readonly percentage: FieldRef<"Marks", 'Float'>
    readonly verified: FieldRef<"Marks", 'Boolean'>
    readonly createdAt: FieldRef<"Marks", 'DateTime'>
    readonly year: FieldRef<"Marks", 'String'>
    readonly serialNo: FieldRef<"Marks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Marks findUnique
   */
  export type MarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findUniqueOrThrow
   */
  export type MarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findFirst
   */
  export type MarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findFirstOrThrow
   */
  export type MarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findMany
   */
  export type MarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks create
   */
  export type MarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to create a Marks.
     */
    data: XOR<MarksCreateInput, MarksUncheckedCreateInput>
  }

  /**
   * Marks createMany
   */
  export type MarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marks createManyAndReturn
   */
  export type MarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marks update
   */
  export type MarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to update a Marks.
     */
    data: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
    /**
     * Choose, which Marks to update.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks updateMany
   */
  export type MarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
  }

  /**
   * Marks updateManyAndReturn
   */
  export type MarksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * The data used to update Marks.
     */
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marks upsert
   */
  export type MarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The filter to search for the Marks to update in case it exists.
     */
    where: MarksWhereUniqueInput
    /**
     * In case the Marks found by the `where` argument doesn't exist, create a new Marks with this data.
     */
    create: XOR<MarksCreateInput, MarksUncheckedCreateInput>
    /**
     * In case the Marks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
  }

  /**
   * Marks delete
   */
  export type MarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter which Marks to delete.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks deleteMany
   */
  export type MarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to delete.
     */
    limit?: number
  }

  /**
   * Marks without action
   */
  export type MarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
  }


  /**
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryAvgAggregateOutputType = {
    id: number | null
  }

  export type EnquirySumAggregateOutputType = {
    id: number | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    father: string | null
    coName: string | null
    dist: string | null
    state: string | null
    pin: string | null
    ps: string | null
    po: string | null
    vill: string | null
    dob: Date | null
    sex: $Enums.Sex | null
    category: $Enums.Category | null
    nationality: $Enums.Nationality | null
    mobileNo: string | null
    AddressLine: string | null
    eduqualification: string | null
    idProof: $Enums.IdType2 | null
    idProofNo: string | null
    houseRoomNo: string | null
    squareFit: string | null
    tradeLicense: string | null
    bathroom: boolean | null
    signatureLink: string | null
    ImageLink: string | null
    verified: boolean | null
    createdAt: Date | null
    Subscription: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    father: string | null
    coName: string | null
    dist: string | null
    state: string | null
    pin: string | null
    ps: string | null
    po: string | null
    vill: string | null
    dob: Date | null
    sex: $Enums.Sex | null
    category: $Enums.Category | null
    nationality: $Enums.Nationality | null
    mobileNo: string | null
    AddressLine: string | null
    eduqualification: string | null
    idProof: $Enums.IdType2 | null
    idProofNo: string | null
    houseRoomNo: string | null
    squareFit: string | null
    tradeLicense: string | null
    bathroom: boolean | null
    signatureLink: string | null
    ImageLink: string | null
    verified: boolean | null
    createdAt: Date | null
    Subscription: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    father: number
    coName: number
    dist: number
    state: number
    pin: number
    ps: number
    po: number
    vill: number
    dob: number
    sex: number
    category: number
    nationality: number
    mobileNo: number
    AddressLine: number
    eduqualification: number
    idProof: number
    idProofNo: number
    houseRoomNo: number
    squareFit: number
    tradeLicense: number
    bathroom: number
    signatureLink: number
    ImageLink: number
    verified: number
    createdAt: number
    Subscription: number
    _all: number
  }


  export type EnquiryAvgAggregateInputType = {
    id?: true
  }

  export type EnquirySumAggregateInputType = {
    id?: true
  }

  export type EnquiryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    father?: true
    coName?: true
    dist?: true
    state?: true
    pin?: true
    ps?: true
    po?: true
    vill?: true
    dob?: true
    sex?: true
    category?: true
    nationality?: true
    mobileNo?: true
    AddressLine?: true
    eduqualification?: true
    idProof?: true
    idProofNo?: true
    houseRoomNo?: true
    squareFit?: true
    tradeLicense?: true
    bathroom?: true
    signatureLink?: true
    ImageLink?: true
    verified?: true
    createdAt?: true
    Subscription?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    father?: true
    coName?: true
    dist?: true
    state?: true
    pin?: true
    ps?: true
    po?: true
    vill?: true
    dob?: true
    sex?: true
    category?: true
    nationality?: true
    mobileNo?: true
    AddressLine?: true
    eduqualification?: true
    idProof?: true
    idProofNo?: true
    houseRoomNo?: true
    squareFit?: true
    tradeLicense?: true
    bathroom?: true
    signatureLink?: true
    ImageLink?: true
    verified?: true
    createdAt?: true
    Subscription?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    father?: true
    coName?: true
    dist?: true
    state?: true
    pin?: true
    ps?: true
    po?: true
    vill?: true
    dob?: true
    sex?: true
    category?: true
    nationality?: true
    mobileNo?: true
    AddressLine?: true
    eduqualification?: true
    idProof?: true
    idProofNo?: true
    houseRoomNo?: true
    squareFit?: true
    tradeLicense?: true
    bathroom?: true
    signatureLink?: true
    ImageLink?: true
    verified?: true
    createdAt?: true
    Subscription?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _avg?: EnquiryAvgAggregateInputType
    _sum?: EnquirySumAggregateInputType
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: number
    name: string
    email: string
    father: string
    coName: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    dob: Date
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    mobileNo: string
    AddressLine: string
    eduqualification: string
    idProof: $Enums.IdType2
    idProofNo: string
    houseRoomNo: string
    squareFit: string
    tradeLicense: string
    bathroom: boolean
    signatureLink: string
    ImageLink: string
    verified: boolean
    createdAt: Date
    Subscription: Date | null
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    father?: boolean
    coName?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    dob?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    mobileNo?: boolean
    AddressLine?: boolean
    eduqualification?: boolean
    idProof?: boolean
    idProofNo?: boolean
    houseRoomNo?: boolean
    squareFit?: boolean
    tradeLicense?: boolean
    bathroom?: boolean
    signatureLink?: boolean
    ImageLink?: boolean
    verified?: boolean
    createdAt?: boolean
    Subscription?: boolean
    admin?: boolean | Enquiry$adminArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    father?: boolean
    coName?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    dob?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    mobileNo?: boolean
    AddressLine?: boolean
    eduqualification?: boolean
    idProof?: boolean
    idProofNo?: boolean
    houseRoomNo?: boolean
    squareFit?: boolean
    tradeLicense?: boolean
    bathroom?: boolean
    signatureLink?: boolean
    ImageLink?: boolean
    verified?: boolean
    createdAt?: boolean
    Subscription?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    father?: boolean
    coName?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    dob?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    mobileNo?: boolean
    AddressLine?: boolean
    eduqualification?: boolean
    idProof?: boolean
    idProofNo?: boolean
    houseRoomNo?: boolean
    squareFit?: boolean
    tradeLicense?: boolean
    bathroom?: boolean
    signatureLink?: boolean
    ImageLink?: boolean
    verified?: boolean
    createdAt?: boolean
    Subscription?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    father?: boolean
    coName?: boolean
    dist?: boolean
    state?: boolean
    pin?: boolean
    ps?: boolean
    po?: boolean
    vill?: boolean
    dob?: boolean
    sex?: boolean
    category?: boolean
    nationality?: boolean
    mobileNo?: boolean
    AddressLine?: boolean
    eduqualification?: boolean
    idProof?: boolean
    idProofNo?: boolean
    houseRoomNo?: boolean
    squareFit?: boolean
    tradeLicense?: boolean
    bathroom?: boolean
    signatureLink?: boolean
    ImageLink?: boolean
    verified?: boolean
    createdAt?: boolean
    Subscription?: boolean
  }

  export type EnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "father" | "coName" | "dist" | "state" | "pin" | "ps" | "po" | "vill" | "dob" | "sex" | "category" | "nationality" | "mobileNo" | "AddressLine" | "eduqualification" | "idProof" | "idProofNo" | "houseRoomNo" | "squareFit" | "tradeLicense" | "bathroom" | "signatureLink" | "ImageLink" | "verified" | "createdAt" | "Subscription", ExtArgs["result"]["enquiry"]>
  export type EnquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Enquiry$adminArgs<ExtArgs>
  }
  export type EnquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EnquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      father: string
      coName: string
      dist: string
      state: string
      pin: string
      ps: string
      po: string
      vill: string
      dob: Date
      sex: $Enums.Sex
      category: $Enums.Category
      nationality: $Enums.Nationality
      mobileNo: string
      AddressLine: string
      eduqualification: string
      idProof: $Enums.IdType2
      idProofNo: string
      houseRoomNo: string
      squareFit: string
      tradeLicense: string
      bathroom: boolean
      signatureLink: string
      ImageLink: string
      verified: boolean
      createdAt: Date
      Subscription: Date | null
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enquiries and returns the data saved in the database.
     * @param {EnquiryCreateManyAndReturnArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, EnquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries and returns the data updated in the database.
     * @param {EnquiryUpdateManyAndReturnArgs} args - Arguments to update many Enquiries.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, EnquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
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
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Enquiry$adminArgs<ExtArgs> = {}>(args?: Subset<T, Enquiry$adminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enquiry model
   */
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'Int'>
    readonly name: FieldRef<"Enquiry", 'String'>
    readonly email: FieldRef<"Enquiry", 'String'>
    readonly father: FieldRef<"Enquiry", 'String'>
    readonly coName: FieldRef<"Enquiry", 'String'>
    readonly dist: FieldRef<"Enquiry", 'String'>
    readonly state: FieldRef<"Enquiry", 'String'>
    readonly pin: FieldRef<"Enquiry", 'String'>
    readonly ps: FieldRef<"Enquiry", 'String'>
    readonly po: FieldRef<"Enquiry", 'String'>
    readonly vill: FieldRef<"Enquiry", 'String'>
    readonly dob: FieldRef<"Enquiry", 'DateTime'>
    readonly sex: FieldRef<"Enquiry", 'Sex'>
    readonly category: FieldRef<"Enquiry", 'Category'>
    readonly nationality: FieldRef<"Enquiry", 'Nationality'>
    readonly mobileNo: FieldRef<"Enquiry", 'String'>
    readonly AddressLine: FieldRef<"Enquiry", 'String'>
    readonly eduqualification: FieldRef<"Enquiry", 'String'>
    readonly idProof: FieldRef<"Enquiry", 'IdType2'>
    readonly idProofNo: FieldRef<"Enquiry", 'String'>
    readonly houseRoomNo: FieldRef<"Enquiry", 'String'>
    readonly squareFit: FieldRef<"Enquiry", 'String'>
    readonly tradeLicense: FieldRef<"Enquiry", 'String'>
    readonly bathroom: FieldRef<"Enquiry", 'Boolean'>
    readonly signatureLink: FieldRef<"Enquiry", 'String'>
    readonly ImageLink: FieldRef<"Enquiry", 'String'>
    readonly verified: FieldRef<"Enquiry", 'Boolean'>
    readonly createdAt: FieldRef<"Enquiry", 'DateTime'>
    readonly Subscription: FieldRef<"Enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry createManyAndReturn
   */
  export type EnquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry updateManyAndReturn
   */
  export type EnquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to delete.
     */
    limit?: number
  }

  /**
   * Enquiry.admin
   */
  export type Enquiry$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
  }


  /**
   * Model Notices
   */

  export type AggregateNotices = {
    _count: NoticesCountAggregateOutputType | null
    _avg: NoticesAvgAggregateOutputType | null
    _sum: NoticesSumAggregateOutputType | null
    _min: NoticesMinAggregateOutputType | null
    _max: NoticesMaxAggregateOutputType | null
  }

  export type NoticesAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticesSumAggregateOutputType = {
    id: number | null
  }

  export type NoticesMinAggregateOutputType = {
    id: number | null
    heading: string | null
    body: string | null
    upto: Date | null
  }

  export type NoticesMaxAggregateOutputType = {
    id: number | null
    heading: string | null
    body: string | null
    upto: Date | null
  }

  export type NoticesCountAggregateOutputType = {
    id: number
    heading: number
    body: number
    upto: number
    _all: number
  }


  export type NoticesAvgAggregateInputType = {
    id?: true
  }

  export type NoticesSumAggregateInputType = {
    id?: true
  }

  export type NoticesMinAggregateInputType = {
    id?: true
    heading?: true
    body?: true
    upto?: true
  }

  export type NoticesMaxAggregateInputType = {
    id?: true
    heading?: true
    body?: true
    upto?: true
  }

  export type NoticesCountAggregateInputType = {
    id?: true
    heading?: true
    body?: true
    upto?: true
    _all?: true
  }

  export type NoticesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to aggregate.
     */
    where?: NoticesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticesOrderByWithRelationInput | NoticesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticesMaxAggregateInputType
  }

  export type GetNoticesAggregateType<T extends NoticesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotices[P]>
      : GetScalarType<T[P], AggregateNotices[P]>
  }




  export type NoticesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticesWhereInput
    orderBy?: NoticesOrderByWithAggregationInput | NoticesOrderByWithAggregationInput[]
    by: NoticesScalarFieldEnum[] | NoticesScalarFieldEnum
    having?: NoticesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticesCountAggregateInputType | true
    _avg?: NoticesAvgAggregateInputType
    _sum?: NoticesSumAggregateInputType
    _min?: NoticesMinAggregateInputType
    _max?: NoticesMaxAggregateInputType
  }

  export type NoticesGroupByOutputType = {
    id: number
    heading: string
    body: string
    upto: Date
    _count: NoticesCountAggregateOutputType | null
    _avg: NoticesAvgAggregateOutputType | null
    _sum: NoticesSumAggregateOutputType | null
    _min: NoticesMinAggregateOutputType | null
    _max: NoticesMaxAggregateOutputType | null
  }

  type GetNoticesGroupByPayload<T extends NoticesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticesGroupByOutputType[P]>
            : GetScalarType<T[P], NoticesGroupByOutputType[P]>
        }
      >
    >


  export type NoticesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    body?: boolean
    upto?: boolean
  }, ExtArgs["result"]["notices"]>

  export type NoticesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    body?: boolean
    upto?: boolean
  }, ExtArgs["result"]["notices"]>

  export type NoticesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    body?: boolean
    upto?: boolean
  }, ExtArgs["result"]["notices"]>

  export type NoticesSelectScalar = {
    id?: boolean
    heading?: boolean
    body?: boolean
    upto?: boolean
  }

  export type NoticesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heading" | "body" | "upto", ExtArgs["result"]["notices"]>

  export type $NoticesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notices"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heading: string
      body: string
      upto: Date
    }, ExtArgs["result"]["notices"]>
    composites: {}
  }

  type NoticesGetPayload<S extends boolean | null | undefined | NoticesDefaultArgs> = $Result.GetResult<Prisma.$NoticesPayload, S>

  type NoticesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticesCountAggregateInputType | true
    }

  export interface NoticesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notices'], meta: { name: 'Notices' } }
    /**
     * Find zero or one Notices that matches the filter.
     * @param {NoticesFindUniqueArgs} args - Arguments to find a Notices
     * @example
     * // Get one Notices
     * const notices = await prisma.notices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticesFindUniqueArgs>(args: SelectSubset<T, NoticesFindUniqueArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticesFindUniqueOrThrowArgs} args - Arguments to find a Notices
     * @example
     * // Get one Notices
     * const notices = await prisma.notices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticesFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticesFindFirstArgs} args - Arguments to find a Notices
     * @example
     * // Get one Notices
     * const notices = await prisma.notices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticesFindFirstArgs>(args?: SelectSubset<T, NoticesFindFirstArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticesFindFirstOrThrowArgs} args - Arguments to find a Notices
     * @example
     * // Get one Notices
     * const notices = await prisma.notices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticesFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notices.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticesWithIdOnly = await prisma.notices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticesFindManyArgs>(args?: SelectSubset<T, NoticesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notices.
     * @param {NoticesCreateArgs} args - Arguments to create a Notices.
     * @example
     * // Create one Notices
     * const Notices = await prisma.notices.create({
     *   data: {
     *     // ... data to create a Notices
     *   }
     * })
     * 
     */
    create<T extends NoticesCreateArgs>(args: SelectSubset<T, NoticesCreateArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {NoticesCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notices = await prisma.notices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticesCreateManyArgs>(args?: SelectSubset<T, NoticesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notices and returns the data saved in the database.
     * @param {NoticesCreateManyAndReturnArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notices = await prisma.notices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notices and only return the `id`
     * const noticesWithIdOnly = await prisma.notices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticesCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notices.
     * @param {NoticesDeleteArgs} args - Arguments to delete one Notices.
     * @example
     * // Delete one Notices
     * const Notices = await prisma.notices.delete({
     *   where: {
     *     // ... filter to delete one Notices
     *   }
     * })
     * 
     */
    delete<T extends NoticesDeleteArgs>(args: SelectSubset<T, NoticesDeleteArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notices.
     * @param {NoticesUpdateArgs} args - Arguments to update one Notices.
     * @example
     * // Update one Notices
     * const notices = await prisma.notices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticesUpdateArgs>(args: SelectSubset<T, NoticesUpdateArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {NoticesDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticesDeleteManyArgs>(args?: SelectSubset<T, NoticesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notices = await prisma.notices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticesUpdateManyArgs>(args: SelectSubset<T, NoticesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices and returns the data updated in the database.
     * @param {NoticesUpdateManyAndReturnArgs} args - Arguments to update many Notices.
     * @example
     * // Update many Notices
     * const notices = await prisma.notices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notices and only return the `id`
     * const noticesWithIdOnly = await prisma.notices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoticesUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notices.
     * @param {NoticesUpsertArgs} args - Arguments to update or create a Notices.
     * @example
     * // Update or create a Notices
     * const notices = await prisma.notices.upsert({
     *   create: {
     *     // ... data to create a Notices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notices we want to update
     *   }
     * })
     */
    upsert<T extends NoticesUpsertArgs>(args: SelectSubset<T, NoticesUpsertArgs<ExtArgs>>): Prisma__NoticesClient<$Result.GetResult<Prisma.$NoticesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticesCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notices.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticesCountArgs>(
      args?: Subset<T, NoticesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticesAggregateArgs>(args: Subset<T, NoticesAggregateArgs>): Prisma.PrismaPromise<GetNoticesAggregateType<T>>

    /**
     * Group by Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticesGroupByArgs} args - Group by arguments.
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
      T extends NoticesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticesGroupByArgs['orderBy'] }
        : { orderBy?: NoticesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notices model
   */
  readonly fields: NoticesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notices model
   */
  interface NoticesFieldRefs {
    readonly id: FieldRef<"Notices", 'Int'>
    readonly heading: FieldRef<"Notices", 'String'>
    readonly body: FieldRef<"Notices", 'String'>
    readonly upto: FieldRef<"Notices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notices findUnique
   */
  export type NoticesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where: NoticesWhereUniqueInput
  }

  /**
   * Notices findUniqueOrThrow
   */
  export type NoticesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where: NoticesWhereUniqueInput
  }

  /**
   * Notices findFirst
   */
  export type NoticesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticesOrderByWithRelationInput | NoticesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticesScalarFieldEnum | NoticesScalarFieldEnum[]
  }

  /**
   * Notices findFirstOrThrow
   */
  export type NoticesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticesOrderByWithRelationInput | NoticesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticesScalarFieldEnum | NoticesScalarFieldEnum[]
  }

  /**
   * Notices findMany
   */
  export type NoticesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticesOrderByWithRelationInput | NoticesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticesScalarFieldEnum | NoticesScalarFieldEnum[]
  }

  /**
   * Notices create
   */
  export type NoticesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * The data needed to create a Notices.
     */
    data: XOR<NoticesCreateInput, NoticesUncheckedCreateInput>
  }

  /**
   * Notices createMany
   */
  export type NoticesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticesCreateManyInput | NoticesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notices createManyAndReturn
   */
  export type NoticesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * The data used to create many Notices.
     */
    data: NoticesCreateManyInput | NoticesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notices update
   */
  export type NoticesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * The data needed to update a Notices.
     */
    data: XOR<NoticesUpdateInput, NoticesUncheckedUpdateInput>
    /**
     * Choose, which Notices to update.
     */
    where: NoticesWhereUniqueInput
  }

  /**
   * Notices updateMany
   */
  export type NoticesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticesUpdateManyMutationInput, NoticesUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticesWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notices updateManyAndReturn
   */
  export type NoticesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticesUpdateManyMutationInput, NoticesUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticesWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notices upsert
   */
  export type NoticesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * The filter to search for the Notices to update in case it exists.
     */
    where: NoticesWhereUniqueInput
    /**
     * In case the Notices found by the `where` argument doesn't exist, create a new Notices with this data.
     */
    create: XOR<NoticesCreateInput, NoticesUncheckedCreateInput>
    /**
     * In case the Notices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticesUpdateInput, NoticesUncheckedUpdateInput>
  }

  /**
   * Notices delete
   */
  export type NoticesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
    /**
     * Filter which Notices to delete.
     */
    where: NoticesWhereUniqueInput
  }

  /**
   * Notices deleteMany
   */
  export type NoticesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticesWhereInput
    /**
     * Limit how many Notices to delete.
     */
    limit?: number
  }

  /**
   * Notices without action
   */
  export type NoticesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notices
     */
    select?: NoticesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notices
     */
    omit?: NoticesOmit<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    name: string | null
    imgUrl: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imgUrl: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    imgUrl: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    name?: true
    imgUrl?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
    imgUrl?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    imgUrl?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    name: string
    imgUrl: string
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
    imgUrl?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imgUrl", ExtArgs["result"]["state"]>

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imgUrl: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more States and only return the `id`
     * const stateWithIdOnly = await prisma.state.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'Int'>
    readonly name: FieldRef<"State", 'String'>
    readonly imgUrl: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State updateManyAndReturn
   */
  export type StateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
  }


  /**
   * Model District
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    id: number | null
  }

  export type DistrictSumAggregateOutputType = {
    id: number | null
  }

  export type DistrictMinAggregateOutputType = {
    id: number | null
    name: string | null
    DistrictName: string | null
    imgUrl: string | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: number | null
    name: string | null
    DistrictName: string | null
    imgUrl: string | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    DistrictName: number
    imgUrl: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    id?: true
  }

  export type DistrictSumAggregateInputType = {
    id?: true
  }

  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    DistrictName?: true
    imgUrl?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    DistrictName?: true
    imgUrl?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    DistrictName?: true
    imgUrl?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithAggregationInput | DistrictOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: number
    name: string
    DistrictName: string
    imgUrl: string
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    DistrictName?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    DistrictName?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    DistrictName?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectScalar = {
    id?: boolean
    name?: boolean
    DistrictName?: boolean
    imgUrl?: boolean
  }

  export type DistrictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "DistrictName" | "imgUrl", ExtArgs["result"]["district"]>

  export type $DistrictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "District"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      DistrictName: string
      imgUrl: string
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = $Result.GetResult<Prisma.$DistrictPayload, S>

  type DistrictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['District'], meta: { name: 'District' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictFindUniqueArgs>(args: SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictFindFirstArgs>(args?: SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictFindManyArgs>(args?: SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends DistrictCreateArgs>(args: SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Districts.
     * @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictCreateManyArgs>(args?: SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {DistrictCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistrictCreateManyAndReturnArgs>(args?: SelectSubset<T, DistrictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends DistrictDeleteArgs>(args: SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictUpdateArgs>(args: SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictDeleteManyArgs>(args?: SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictUpdateManyArgs>(args: SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts and returns the data updated in the database.
     * @param {DistrictUpdateManyAndReturnArgs} args - Arguments to update many Districts.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistrictUpdateManyAndReturnArgs>(args: SelectSubset<T, DistrictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends DistrictUpsertArgs>(args: SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
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
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the District model
   */
  readonly fields: DistrictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the District model
   */
  interface DistrictFieldRefs {
    readonly id: FieldRef<"District", 'Int'>
    readonly name: FieldRef<"District", 'String'>
    readonly DistrictName: FieldRef<"District", 'String'>
    readonly imgUrl: FieldRef<"District", 'String'>
  }
    

  // Custom InputTypes
  /**
   * District findUnique
   */
  export type DistrictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findFirst
   */
  export type DistrictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findMany
   */
  export type DistrictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District create
   */
  export type DistrictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }

  /**
   * District createMany
   */
  export type DistrictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District createManyAndReturn
   */
  export type DistrictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District update
   */
  export type DistrictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District updateManyAndReturn
   */
  export type DistrictUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District upsert
   */
  export type DistrictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }

  /**
   * District delete
   */
  export type DistrictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to delete.
     */
    limit?: number
  }

  /**
   * District without action
   */
  export type DistrictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    password: 'password',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    enquiryid: 'enquiryid'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CenterScalarFieldEnum: {
    id: 'id',
    Centername: 'Centername',
    adminid: 'adminid',
    address: 'address',
    code: 'code'
  };

  export type CenterScalarFieldEnum = (typeof CenterScalarFieldEnum)[keyof typeof CenterScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    EnrollmentNo: 'EnrollmentNo',
    IdCardNo: 'IdCardNo',
    idCardLink: 'idCardLink',
    admitLink: 'admitLink',
    certificateLink: 'certificateLink',
    marksheetLink: 'marksheetLink',
    imageLink: 'imageLink',
    CertificateNo: 'CertificateNo',
    name: 'name',
    dob: 'dob',
    father: 'father',
    mother: 'mother',
    address: 'address',
    dist: 'dist',
    state: 'state',
    pin: 'pin',
    ps: 'ps',
    po: 'po',
    vill: 'vill',
    mobileNo: 'mobileNo',
    email: 'email',
    sex: 'sex',
    category: 'category',
    nationality: 'nationality',
    idProof: 'idProof',
    idProofNo: 'idProofNo',
    pincode: 'pincode',
    eduqualification: 'eduqualification',
    activated: 'activated',
    courseId: 'courseId',
    centerid: 'centerid',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    CName: 'CName',
    price: 'price',
    Duration: 'Duration'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    SubName: 'SubName',
    theoryFullMarks: 'theoryFullMarks',
    practFullMarks: 'practFullMarks',
    courseId: 'courseId'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const AmountScalarFieldEnum: {
    id: 'id',
    TotalPaid: 'TotalPaid',
    amountRemain: 'amountRemain',
    lastPaymentRecieptno: 'lastPaymentRecieptno',
    EnrollmentNo: 'EnrollmentNo',
    createdAt: 'createdAt'
  };

  export type AmountScalarFieldEnum = (typeof AmountScalarFieldEnum)[keyof typeof AmountScalarFieldEnum]


  export const ExamFormScalarFieldEnum: {
    id: 'id',
    EnrollmentNo: 'EnrollmentNo',
    verified: 'verified',
    createdAt: 'createdAt',
    ExamCenterCode: 'ExamCenterCode',
    ATI_CODE: 'ATI_CODE',
    practExmdate: 'practExmdate',
    theoryExamdate: 'theoryExamdate',
    practExmtime: 'practExmtime',
    theoryExmtime: 'theoryExmtime',
    sem: 'sem'
  };

  export type ExamFormScalarFieldEnum = (typeof ExamFormScalarFieldEnum)[keyof typeof ExamFormScalarFieldEnum]


  export const MarksScalarFieldEnum: {
    id: 'id',
    marks: 'marks',
    remarks: 'remarks',
    EnrollmentNo: 'EnrollmentNo',
    grade: 'grade',
    totalMarks: 'totalMarks',
    percentage: 'percentage',
    verified: 'verified',
    createdAt: 'createdAt',
    year: 'year',
    serialNo: 'serialNo'
  };

  export type MarksScalarFieldEnum = (typeof MarksScalarFieldEnum)[keyof typeof MarksScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    father: 'father',
    coName: 'coName',
    dist: 'dist',
    state: 'state',
    pin: 'pin',
    ps: 'ps',
    po: 'po',
    vill: 'vill',
    dob: 'dob',
    sex: 'sex',
    category: 'category',
    nationality: 'nationality',
    mobileNo: 'mobileNo',
    AddressLine: 'AddressLine',
    eduqualification: 'eduqualification',
    idProof: 'idProof',
    idProofNo: 'idProofNo',
    houseRoomNo: 'houseRoomNo',
    squareFit: 'squareFit',
    tradeLicense: 'tradeLicense',
    bathroom: 'bathroom',
    signatureLink: 'signatureLink',
    ImageLink: 'ImageLink',
    verified: 'verified',
    createdAt: 'createdAt',
    Subscription: 'Subscription'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const NoticesScalarFieldEnum: {
    id: 'id',
    heading: 'heading',
    body: 'body',
    upto: 'upto'
  };

  export type NoticesScalarFieldEnum = (typeof NoticesScalarFieldEnum)[keyof typeof NoticesScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imgUrl: 'imgUrl'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    DistrictName: 'DistrictName',
    imgUrl: 'imgUrl'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Nationality'
   */
  export type EnumNationalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nationality'>
    


  /**
   * Reference to a field of type 'Nationality[]'
   */
  export type ListEnumNationalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nationality[]'>
    


  /**
   * Reference to a field of type 'IdType'
   */
  export type EnumIdTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdType'>
    


  /**
   * Reference to a field of type 'IdType[]'
   */
  export type ListEnumIdTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Remark'
   */
  export type EnumRemarkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Remark'>
    


  /**
   * Reference to a field of type 'Remark[]'
   */
  export type ListEnumRemarkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Remark[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'IdType2'
   */
  export type EnumIdType2FieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdType2'>
    


  /**
   * Reference to a field of type 'IdType2[]'
   */
  export type ListEnumIdType2FieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdType2[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    enquiryid?: IntNullableFilter<"User"> | number | null
    Center?: XOR<CenterNullableScalarRelationFilter, CenterWhereInput> | null
    enquiry?: XOR<EnquiryNullableScalarRelationFilter, EnquiryWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    enquiryid?: SortOrderInput | SortOrder
    Center?: CenterOrderByWithRelationInput
    enquiry?: EnquiryOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    enquiryid?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    Center?: XOR<CenterNullableScalarRelationFilter, CenterWhereInput> | null
    enquiry?: XOR<EnquiryNullableScalarRelationFilter, EnquiryWhereInput> | null
  }, "id" | "email" | "enquiryid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    enquiryid?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    enquiryid?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type CenterWhereInput = {
    AND?: CenterWhereInput | CenterWhereInput[]
    OR?: CenterWhereInput[]
    NOT?: CenterWhereInput | CenterWhereInput[]
    id?: IntFilter<"Center"> | number
    Centername?: StringFilter<"Center"> | string
    adminid?: IntFilter<"Center"> | number
    address?: StringFilter<"Center"> | string
    code?: IntFilter<"Center"> | number
    Student?: EnrollmentListRelationFilter
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CenterOrderByWithRelationInput = {
    id?: SortOrder
    Centername?: SortOrder
    adminid?: SortOrder
    address?: SortOrder
    code?: SortOrder
    Student?: EnrollmentOrderByRelationAggregateInput
    admin?: UserOrderByWithRelationInput
  }

  export type CenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    adminid?: number
    code?: number
    AND?: CenterWhereInput | CenterWhereInput[]
    OR?: CenterWhereInput[]
    NOT?: CenterWhereInput | CenterWhereInput[]
    Centername?: StringFilter<"Center"> | string
    address?: StringFilter<"Center"> | string
    Student?: EnrollmentListRelationFilter
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "adminid" | "code">

  export type CenterOrderByWithAggregationInput = {
    id?: SortOrder
    Centername?: SortOrder
    adminid?: SortOrder
    address?: SortOrder
    code?: SortOrder
    _count?: CenterCountOrderByAggregateInput
    _avg?: CenterAvgOrderByAggregateInput
    _max?: CenterMaxOrderByAggregateInput
    _min?: CenterMinOrderByAggregateInput
    _sum?: CenterSumOrderByAggregateInput
  }

  export type CenterScalarWhereWithAggregatesInput = {
    AND?: CenterScalarWhereWithAggregatesInput | CenterScalarWhereWithAggregatesInput[]
    OR?: CenterScalarWhereWithAggregatesInput[]
    NOT?: CenterScalarWhereWithAggregatesInput | CenterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Center"> | number
    Centername?: StringWithAggregatesFilter<"Center"> | string
    adminid?: IntWithAggregatesFilter<"Center"> | number
    address?: StringWithAggregatesFilter<"Center"> | string
    code?: IntWithAggregatesFilter<"Center"> | number
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    EnrollmentNo?: IntFilter<"Enrollment"> | number
    IdCardNo?: IntFilter<"Enrollment"> | number
    idCardLink?: StringFilter<"Enrollment"> | string
    admitLink?: StringFilter<"Enrollment"> | string
    certificateLink?: StringFilter<"Enrollment"> | string
    marksheetLink?: StringFilter<"Enrollment"> | string
    imageLink?: StringFilter<"Enrollment"> | string
    CertificateNo?: IntNullableFilter<"Enrollment"> | number | null
    name?: StringFilter<"Enrollment"> | string
    dob?: DateTimeFilter<"Enrollment"> | Date | string
    father?: StringFilter<"Enrollment"> | string
    mother?: StringFilter<"Enrollment"> | string
    address?: StringFilter<"Enrollment"> | string
    dist?: StringFilter<"Enrollment"> | string
    state?: StringFilter<"Enrollment"> | string
    pin?: StringFilter<"Enrollment"> | string
    ps?: StringFilter<"Enrollment"> | string
    po?: StringFilter<"Enrollment"> | string
    vill?: StringFilter<"Enrollment"> | string
    mobileNo?: StringFilter<"Enrollment"> | string
    email?: StringFilter<"Enrollment"> | string
    sex?: EnumSexFilter<"Enrollment"> | $Enums.Sex
    category?: EnumCategoryFilter<"Enrollment"> | $Enums.Category
    nationality?: EnumNationalityFilter<"Enrollment"> | $Enums.Nationality
    idProof?: EnumIdTypeFilter<"Enrollment"> | $Enums.IdType
    idProofNo?: StringFilter<"Enrollment"> | string
    pincode?: StringFilter<"Enrollment"> | string
    eduqualification?: StringFilter<"Enrollment"> | string
    activated?: BoolFilter<"Enrollment"> | boolean
    courseId?: IntFilter<"Enrollment"> | number
    centerid?: IntFilter<"Enrollment"> | number
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    status?: JsonFilter<"Enrollment">
    examformFillup?: XOR<ExamFormNullableScalarRelationFilter, ExamFormWhereInput> | null
    marks?: XOR<MarksNullableScalarRelationFilter, MarksWhereInput> | null
    amount?: XOR<AmountNullableScalarRelationFilter, AmountWhereInput> | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    center?: XOR<CenterScalarRelationFilter, CenterWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    IdCardNo?: SortOrder
    idCardLink?: SortOrder
    admitLink?: SortOrder
    certificateLink?: SortOrder
    marksheetLink?: SortOrder
    imageLink?: SortOrder
    CertificateNo?: SortOrderInput | SortOrder
    name?: SortOrder
    dob?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    address?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    pincode?: SortOrder
    eduqualification?: SortOrder
    activated?: SortOrder
    courseId?: SortOrder
    centerid?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    examformFillup?: ExamFormOrderByWithRelationInput
    marks?: MarksOrderByWithRelationInput
    amount?: AmountOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    center?: CenterOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    CertificateNo?: number
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    idCardLink?: StringFilter<"Enrollment"> | string
    admitLink?: StringFilter<"Enrollment"> | string
    certificateLink?: StringFilter<"Enrollment"> | string
    marksheetLink?: StringFilter<"Enrollment"> | string
    imageLink?: StringFilter<"Enrollment"> | string
    name?: StringFilter<"Enrollment"> | string
    dob?: DateTimeFilter<"Enrollment"> | Date | string
    father?: StringFilter<"Enrollment"> | string
    mother?: StringFilter<"Enrollment"> | string
    address?: StringFilter<"Enrollment"> | string
    dist?: StringFilter<"Enrollment"> | string
    state?: StringFilter<"Enrollment"> | string
    pin?: StringFilter<"Enrollment"> | string
    ps?: StringFilter<"Enrollment"> | string
    po?: StringFilter<"Enrollment"> | string
    vill?: StringFilter<"Enrollment"> | string
    mobileNo?: StringFilter<"Enrollment"> | string
    email?: StringFilter<"Enrollment"> | string
    sex?: EnumSexFilter<"Enrollment"> | $Enums.Sex
    category?: EnumCategoryFilter<"Enrollment"> | $Enums.Category
    nationality?: EnumNationalityFilter<"Enrollment"> | $Enums.Nationality
    idProof?: EnumIdTypeFilter<"Enrollment"> | $Enums.IdType
    idProofNo?: StringFilter<"Enrollment"> | string
    pincode?: StringFilter<"Enrollment"> | string
    eduqualification?: StringFilter<"Enrollment"> | string
    activated?: BoolFilter<"Enrollment"> | boolean
    courseId?: IntFilter<"Enrollment"> | number
    centerid?: IntFilter<"Enrollment"> | number
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    status?: JsonFilter<"Enrollment">
    examformFillup?: XOR<ExamFormNullableScalarRelationFilter, ExamFormWhereInput> | null
    marks?: XOR<MarksNullableScalarRelationFilter, MarksWhereInput> | null
    amount?: XOR<AmountNullableScalarRelationFilter, AmountWhereInput> | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    center?: XOR<CenterScalarRelationFilter, CenterWhereInput>
  }, "id" | "EnrollmentNo" | "IdCardNo" | "CertificateNo">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    IdCardNo?: SortOrder
    idCardLink?: SortOrder
    admitLink?: SortOrder
    certificateLink?: SortOrder
    marksheetLink?: SortOrder
    imageLink?: SortOrder
    CertificateNo?: SortOrderInput | SortOrder
    name?: SortOrder
    dob?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    address?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    pincode?: SortOrder
    eduqualification?: SortOrder
    activated?: SortOrder
    courseId?: SortOrder
    centerid?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    EnrollmentNo?: IntWithAggregatesFilter<"Enrollment"> | number
    IdCardNo?: IntWithAggregatesFilter<"Enrollment"> | number
    idCardLink?: StringWithAggregatesFilter<"Enrollment"> | string
    admitLink?: StringWithAggregatesFilter<"Enrollment"> | string
    certificateLink?: StringWithAggregatesFilter<"Enrollment"> | string
    marksheetLink?: StringWithAggregatesFilter<"Enrollment"> | string
    imageLink?: StringWithAggregatesFilter<"Enrollment"> | string
    CertificateNo?: IntNullableWithAggregatesFilter<"Enrollment"> | number | null
    name?: StringWithAggregatesFilter<"Enrollment"> | string
    dob?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    father?: StringWithAggregatesFilter<"Enrollment"> | string
    mother?: StringWithAggregatesFilter<"Enrollment"> | string
    address?: StringWithAggregatesFilter<"Enrollment"> | string
    dist?: StringWithAggregatesFilter<"Enrollment"> | string
    state?: StringWithAggregatesFilter<"Enrollment"> | string
    pin?: StringWithAggregatesFilter<"Enrollment"> | string
    ps?: StringWithAggregatesFilter<"Enrollment"> | string
    po?: StringWithAggregatesFilter<"Enrollment"> | string
    vill?: StringWithAggregatesFilter<"Enrollment"> | string
    mobileNo?: StringWithAggregatesFilter<"Enrollment"> | string
    email?: StringWithAggregatesFilter<"Enrollment"> | string
    sex?: EnumSexWithAggregatesFilter<"Enrollment"> | $Enums.Sex
    category?: EnumCategoryWithAggregatesFilter<"Enrollment"> | $Enums.Category
    nationality?: EnumNationalityWithAggregatesFilter<"Enrollment"> | $Enums.Nationality
    idProof?: EnumIdTypeWithAggregatesFilter<"Enrollment"> | $Enums.IdType
    idProofNo?: StringWithAggregatesFilter<"Enrollment"> | string
    pincode?: StringWithAggregatesFilter<"Enrollment"> | string
    eduqualification?: StringWithAggregatesFilter<"Enrollment"> | string
    activated?: BoolWithAggregatesFilter<"Enrollment"> | boolean
    courseId?: IntWithAggregatesFilter<"Enrollment"> | number
    centerid?: IntWithAggregatesFilter<"Enrollment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    status?: JsonWithAggregatesFilter<"Enrollment">
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    CName?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    Duration?: IntFilter<"Course"> | number
    Enrollment?: EnrollmentListRelationFilter
    subjects?: SubjectListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    CName?: SortOrder
    price?: SortOrder
    Duration?: SortOrder
    Enrollment?: EnrollmentOrderByRelationAggregateInput
    subjects?: SubjectOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    CName?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    Duration?: IntFilter<"Course"> | number
    Enrollment?: EnrollmentListRelationFilter
    subjects?: SubjectListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    CName?: SortOrder
    price?: SortOrder
    Duration?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    CName?: StringWithAggregatesFilter<"Course"> | string
    price?: IntWithAggregatesFilter<"Course"> | number
    Duration?: IntWithAggregatesFilter<"Course"> | number
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    SubName?: StringFilter<"Subject"> | string
    theoryFullMarks?: IntFilter<"Subject"> | number
    practFullMarks?: IntFilter<"Subject"> | number
    courseId?: IntFilter<"Subject"> | number
    Course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    SubName?: SortOrder
    theoryFullMarks?: SortOrder
    practFullMarks?: SortOrder
    courseId?: SortOrder
    Course?: CourseOrderByWithRelationInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    SubName?: StringFilter<"Subject"> | string
    theoryFullMarks?: IntFilter<"Subject"> | number
    practFullMarks?: IntFilter<"Subject"> | number
    courseId?: IntFilter<"Subject"> | number
    Course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    SubName?: SortOrder
    theoryFullMarks?: SortOrder
    practFullMarks?: SortOrder
    courseId?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    SubName?: StringWithAggregatesFilter<"Subject"> | string
    theoryFullMarks?: IntWithAggregatesFilter<"Subject"> | number
    practFullMarks?: IntWithAggregatesFilter<"Subject"> | number
    courseId?: IntWithAggregatesFilter<"Subject"> | number
  }

  export type AmountWhereInput = {
    AND?: AmountWhereInput | AmountWhereInput[]
    OR?: AmountWhereInput[]
    NOT?: AmountWhereInput | AmountWhereInput[]
    id?: IntFilter<"Amount"> | number
    TotalPaid?: IntFilter<"Amount"> | number
    amountRemain?: IntFilter<"Amount"> | number
    lastPaymentRecieptno?: StringNullableFilter<"Amount"> | string | null
    EnrollmentNo?: IntFilter<"Amount"> | number
    createdAt?: DateTimeFilter<"Amount"> | Date | string
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }

  export type AmountOrderByWithRelationInput = {
    id?: SortOrder
    TotalPaid?: SortOrder
    amountRemain?: SortOrder
    lastPaymentRecieptno?: SortOrderInput | SortOrder
    EnrollmentNo?: SortOrder
    createdAt?: SortOrder
    enrollment?: EnrollmentOrderByWithRelationInput
  }

  export type AmountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    EnrollmentNo?: number
    AND?: AmountWhereInput | AmountWhereInput[]
    OR?: AmountWhereInput[]
    NOT?: AmountWhereInput | AmountWhereInput[]
    TotalPaid?: IntFilter<"Amount"> | number
    amountRemain?: IntFilter<"Amount"> | number
    lastPaymentRecieptno?: StringNullableFilter<"Amount"> | string | null
    createdAt?: DateTimeFilter<"Amount"> | Date | string
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }, "id" | "EnrollmentNo">

  export type AmountOrderByWithAggregationInput = {
    id?: SortOrder
    TotalPaid?: SortOrder
    amountRemain?: SortOrder
    lastPaymentRecieptno?: SortOrderInput | SortOrder
    EnrollmentNo?: SortOrder
    createdAt?: SortOrder
    _count?: AmountCountOrderByAggregateInput
    _avg?: AmountAvgOrderByAggregateInput
    _max?: AmountMaxOrderByAggregateInput
    _min?: AmountMinOrderByAggregateInput
    _sum?: AmountSumOrderByAggregateInput
  }

  export type AmountScalarWhereWithAggregatesInput = {
    AND?: AmountScalarWhereWithAggregatesInput | AmountScalarWhereWithAggregatesInput[]
    OR?: AmountScalarWhereWithAggregatesInput[]
    NOT?: AmountScalarWhereWithAggregatesInput | AmountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amount"> | number
    TotalPaid?: IntWithAggregatesFilter<"Amount"> | number
    amountRemain?: IntWithAggregatesFilter<"Amount"> | number
    lastPaymentRecieptno?: StringNullableWithAggregatesFilter<"Amount"> | string | null
    EnrollmentNo?: IntWithAggregatesFilter<"Amount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Amount"> | Date | string
  }

  export type ExamFormWhereInput = {
    AND?: ExamFormWhereInput | ExamFormWhereInput[]
    OR?: ExamFormWhereInput[]
    NOT?: ExamFormWhereInput | ExamFormWhereInput[]
    id?: IntFilter<"ExamForm"> | number
    EnrollmentNo?: IntFilter<"ExamForm"> | number
    verified?: BoolFilter<"ExamForm"> | boolean
    createdAt?: DateTimeFilter<"ExamForm"> | Date | string
    ExamCenterCode?: StringFilter<"ExamForm"> | string
    ATI_CODE?: StringFilter<"ExamForm"> | string
    practExmdate?: StringFilter<"ExamForm"> | string
    theoryExamdate?: StringFilter<"ExamForm"> | string
    practExmtime?: StringFilter<"ExamForm"> | string
    theoryExmtime?: StringFilter<"ExamForm"> | string
    sem?: StringFilter<"ExamForm"> | string
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }

  export type ExamFormOrderByWithRelationInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    ExamCenterCode?: SortOrder
    ATI_CODE?: SortOrder
    practExmdate?: SortOrder
    theoryExamdate?: SortOrder
    practExmtime?: SortOrder
    theoryExmtime?: SortOrder
    sem?: SortOrder
    enrollment?: EnrollmentOrderByWithRelationInput
  }

  export type ExamFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    EnrollmentNo?: number
    AND?: ExamFormWhereInput | ExamFormWhereInput[]
    OR?: ExamFormWhereInput[]
    NOT?: ExamFormWhereInput | ExamFormWhereInput[]
    verified?: BoolFilter<"ExamForm"> | boolean
    createdAt?: DateTimeFilter<"ExamForm"> | Date | string
    ExamCenterCode?: StringFilter<"ExamForm"> | string
    ATI_CODE?: StringFilter<"ExamForm"> | string
    practExmdate?: StringFilter<"ExamForm"> | string
    theoryExamdate?: StringFilter<"ExamForm"> | string
    practExmtime?: StringFilter<"ExamForm"> | string
    theoryExmtime?: StringFilter<"ExamForm"> | string
    sem?: StringFilter<"ExamForm"> | string
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }, "id" | "EnrollmentNo">

  export type ExamFormOrderByWithAggregationInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    ExamCenterCode?: SortOrder
    ATI_CODE?: SortOrder
    practExmdate?: SortOrder
    theoryExamdate?: SortOrder
    practExmtime?: SortOrder
    theoryExmtime?: SortOrder
    sem?: SortOrder
    _count?: ExamFormCountOrderByAggregateInput
    _avg?: ExamFormAvgOrderByAggregateInput
    _max?: ExamFormMaxOrderByAggregateInput
    _min?: ExamFormMinOrderByAggregateInput
    _sum?: ExamFormSumOrderByAggregateInput
  }

  export type ExamFormScalarWhereWithAggregatesInput = {
    AND?: ExamFormScalarWhereWithAggregatesInput | ExamFormScalarWhereWithAggregatesInput[]
    OR?: ExamFormScalarWhereWithAggregatesInput[]
    NOT?: ExamFormScalarWhereWithAggregatesInput | ExamFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExamForm"> | number
    EnrollmentNo?: IntWithAggregatesFilter<"ExamForm"> | number
    verified?: BoolWithAggregatesFilter<"ExamForm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ExamForm"> | Date | string
    ExamCenterCode?: StringWithAggregatesFilter<"ExamForm"> | string
    ATI_CODE?: StringWithAggregatesFilter<"ExamForm"> | string
    practExmdate?: StringWithAggregatesFilter<"ExamForm"> | string
    theoryExamdate?: StringWithAggregatesFilter<"ExamForm"> | string
    practExmtime?: StringWithAggregatesFilter<"ExamForm"> | string
    theoryExmtime?: StringWithAggregatesFilter<"ExamForm"> | string
    sem?: StringWithAggregatesFilter<"ExamForm"> | string
  }

  export type MarksWhereInput = {
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    id?: IntFilter<"Marks"> | number
    marks?: JsonFilter<"Marks">
    remarks?: EnumRemarkFilter<"Marks"> | $Enums.Remark
    EnrollmentNo?: IntFilter<"Marks"> | number
    grade?: StringFilter<"Marks"> | string
    totalMarks?: FloatFilter<"Marks"> | number
    percentage?: FloatFilter<"Marks"> | number
    verified?: BoolFilter<"Marks"> | boolean
    createdAt?: DateTimeFilter<"Marks"> | Date | string
    year?: StringFilter<"Marks"> | string
    serialNo?: IntFilter<"Marks"> | number
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }

  export type MarksOrderByWithRelationInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrder
    EnrollmentNo?: SortOrder
    grade?: SortOrder
    totalMarks?: SortOrder
    percentage?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    year?: SortOrder
    serialNo?: SortOrder
    enrollment?: EnrollmentOrderByWithRelationInput
  }

  export type MarksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    EnrollmentNo?: number
    serialNo?: number
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    marks?: JsonFilter<"Marks">
    remarks?: EnumRemarkFilter<"Marks"> | $Enums.Remark
    grade?: StringFilter<"Marks"> | string
    totalMarks?: FloatFilter<"Marks"> | number
    percentage?: FloatFilter<"Marks"> | number
    verified?: BoolFilter<"Marks"> | boolean
    createdAt?: DateTimeFilter<"Marks"> | Date | string
    year?: StringFilter<"Marks"> | string
    enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
  }, "id" | "EnrollmentNo" | "serialNo">

  export type MarksOrderByWithAggregationInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrder
    EnrollmentNo?: SortOrder
    grade?: SortOrder
    totalMarks?: SortOrder
    percentage?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    year?: SortOrder
    serialNo?: SortOrder
    _count?: MarksCountOrderByAggregateInput
    _avg?: MarksAvgOrderByAggregateInput
    _max?: MarksMaxOrderByAggregateInput
    _min?: MarksMinOrderByAggregateInput
    _sum?: MarksSumOrderByAggregateInput
  }

  export type MarksScalarWhereWithAggregatesInput = {
    AND?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    OR?: MarksScalarWhereWithAggregatesInput[]
    NOT?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Marks"> | number
    marks?: JsonWithAggregatesFilter<"Marks">
    remarks?: EnumRemarkWithAggregatesFilter<"Marks"> | $Enums.Remark
    EnrollmentNo?: IntWithAggregatesFilter<"Marks"> | number
    grade?: StringWithAggregatesFilter<"Marks"> | string
    totalMarks?: FloatWithAggregatesFilter<"Marks"> | number
    percentage?: FloatWithAggregatesFilter<"Marks"> | number
    verified?: BoolWithAggregatesFilter<"Marks"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Marks"> | Date | string
    year?: StringWithAggregatesFilter<"Marks"> | string
    serialNo?: IntWithAggregatesFilter<"Marks"> | number
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: IntFilter<"Enquiry"> | number
    name?: StringFilter<"Enquiry"> | string
    email?: StringFilter<"Enquiry"> | string
    father?: StringFilter<"Enquiry"> | string
    coName?: StringFilter<"Enquiry"> | string
    dist?: StringFilter<"Enquiry"> | string
    state?: StringFilter<"Enquiry"> | string
    pin?: StringFilter<"Enquiry"> | string
    ps?: StringFilter<"Enquiry"> | string
    po?: StringFilter<"Enquiry"> | string
    vill?: StringFilter<"Enquiry"> | string
    dob?: DateTimeFilter<"Enquiry"> | Date | string
    sex?: EnumSexFilter<"Enquiry"> | $Enums.Sex
    category?: EnumCategoryFilter<"Enquiry"> | $Enums.Category
    nationality?: EnumNationalityFilter<"Enquiry"> | $Enums.Nationality
    mobileNo?: StringFilter<"Enquiry"> | string
    AddressLine?: StringFilter<"Enquiry"> | string
    eduqualification?: StringFilter<"Enquiry"> | string
    idProof?: EnumIdType2Filter<"Enquiry"> | $Enums.IdType2
    idProofNo?: StringFilter<"Enquiry"> | string
    houseRoomNo?: StringFilter<"Enquiry"> | string
    squareFit?: StringFilter<"Enquiry"> | string
    tradeLicense?: StringFilter<"Enquiry"> | string
    bathroom?: BoolFilter<"Enquiry"> | boolean
    signatureLink?: StringFilter<"Enquiry"> | string
    ImageLink?: StringFilter<"Enquiry"> | string
    verified?: BoolFilter<"Enquiry"> | boolean
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    Subscription?: DateTimeNullableFilter<"Enquiry"> | Date | string | null
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    father?: SortOrder
    coName?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    mobileNo?: SortOrder
    AddressLine?: SortOrder
    eduqualification?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    houseRoomNo?: SortOrder
    squareFit?: SortOrder
    tradeLicense?: SortOrder
    bathroom?: SortOrder
    signatureLink?: SortOrder
    ImageLink?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    Subscription?: SortOrderInput | SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    name?: StringFilter<"Enquiry"> | string
    father?: StringFilter<"Enquiry"> | string
    coName?: StringFilter<"Enquiry"> | string
    dist?: StringFilter<"Enquiry"> | string
    state?: StringFilter<"Enquiry"> | string
    pin?: StringFilter<"Enquiry"> | string
    ps?: StringFilter<"Enquiry"> | string
    po?: StringFilter<"Enquiry"> | string
    vill?: StringFilter<"Enquiry"> | string
    dob?: DateTimeFilter<"Enquiry"> | Date | string
    sex?: EnumSexFilter<"Enquiry"> | $Enums.Sex
    category?: EnumCategoryFilter<"Enquiry"> | $Enums.Category
    nationality?: EnumNationalityFilter<"Enquiry"> | $Enums.Nationality
    mobileNo?: StringFilter<"Enquiry"> | string
    AddressLine?: StringFilter<"Enquiry"> | string
    eduqualification?: StringFilter<"Enquiry"> | string
    idProof?: EnumIdType2Filter<"Enquiry"> | $Enums.IdType2
    idProofNo?: StringFilter<"Enquiry"> | string
    houseRoomNo?: StringFilter<"Enquiry"> | string
    squareFit?: StringFilter<"Enquiry"> | string
    tradeLicense?: StringFilter<"Enquiry"> | string
    bathroom?: BoolFilter<"Enquiry"> | boolean
    signatureLink?: StringFilter<"Enquiry"> | string
    ImageLink?: StringFilter<"Enquiry"> | string
    verified?: BoolFilter<"Enquiry"> | boolean
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    Subscription?: DateTimeNullableFilter<"Enquiry"> | Date | string | null
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "email">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    father?: SortOrder
    coName?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    mobileNo?: SortOrder
    AddressLine?: SortOrder
    eduqualification?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    houseRoomNo?: SortOrder
    squareFit?: SortOrder
    tradeLicense?: SortOrder
    bathroom?: SortOrder
    signatureLink?: SortOrder
    ImageLink?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    Subscription?: SortOrderInput | SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _avg?: EnquiryAvgOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
    _sum?: EnquirySumOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enquiry"> | number
    name?: StringWithAggregatesFilter<"Enquiry"> | string
    email?: StringWithAggregatesFilter<"Enquiry"> | string
    father?: StringWithAggregatesFilter<"Enquiry"> | string
    coName?: StringWithAggregatesFilter<"Enquiry"> | string
    dist?: StringWithAggregatesFilter<"Enquiry"> | string
    state?: StringWithAggregatesFilter<"Enquiry"> | string
    pin?: StringWithAggregatesFilter<"Enquiry"> | string
    ps?: StringWithAggregatesFilter<"Enquiry"> | string
    po?: StringWithAggregatesFilter<"Enquiry"> | string
    vill?: StringWithAggregatesFilter<"Enquiry"> | string
    dob?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
    sex?: EnumSexWithAggregatesFilter<"Enquiry"> | $Enums.Sex
    category?: EnumCategoryWithAggregatesFilter<"Enquiry"> | $Enums.Category
    nationality?: EnumNationalityWithAggregatesFilter<"Enquiry"> | $Enums.Nationality
    mobileNo?: StringWithAggregatesFilter<"Enquiry"> | string
    AddressLine?: StringWithAggregatesFilter<"Enquiry"> | string
    eduqualification?: StringWithAggregatesFilter<"Enquiry"> | string
    idProof?: EnumIdType2WithAggregatesFilter<"Enquiry"> | $Enums.IdType2
    idProofNo?: StringWithAggregatesFilter<"Enquiry"> | string
    houseRoomNo?: StringWithAggregatesFilter<"Enquiry"> | string
    squareFit?: StringWithAggregatesFilter<"Enquiry"> | string
    tradeLicense?: StringWithAggregatesFilter<"Enquiry"> | string
    bathroom?: BoolWithAggregatesFilter<"Enquiry"> | boolean
    signatureLink?: StringWithAggregatesFilter<"Enquiry"> | string
    ImageLink?: StringWithAggregatesFilter<"Enquiry"> | string
    verified?: BoolWithAggregatesFilter<"Enquiry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
    Subscription?: DateTimeNullableWithAggregatesFilter<"Enquiry"> | Date | string | null
  }

  export type NoticesWhereInput = {
    AND?: NoticesWhereInput | NoticesWhereInput[]
    OR?: NoticesWhereInput[]
    NOT?: NoticesWhereInput | NoticesWhereInput[]
    id?: IntFilter<"Notices"> | number
    heading?: StringFilter<"Notices"> | string
    body?: StringFilter<"Notices"> | string
    upto?: DateTimeFilter<"Notices"> | Date | string
  }

  export type NoticesOrderByWithRelationInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    upto?: SortOrder
  }

  export type NoticesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticesWhereInput | NoticesWhereInput[]
    OR?: NoticesWhereInput[]
    NOT?: NoticesWhereInput | NoticesWhereInput[]
    heading?: StringFilter<"Notices"> | string
    body?: StringFilter<"Notices"> | string
    upto?: DateTimeFilter<"Notices"> | Date | string
  }, "id">

  export type NoticesOrderByWithAggregationInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    upto?: SortOrder
    _count?: NoticesCountOrderByAggregateInput
    _avg?: NoticesAvgOrderByAggregateInput
    _max?: NoticesMaxOrderByAggregateInput
    _min?: NoticesMinOrderByAggregateInput
    _sum?: NoticesSumOrderByAggregateInput
  }

  export type NoticesScalarWhereWithAggregatesInput = {
    AND?: NoticesScalarWhereWithAggregatesInput | NoticesScalarWhereWithAggregatesInput[]
    OR?: NoticesScalarWhereWithAggregatesInput[]
    NOT?: NoticesScalarWhereWithAggregatesInput | NoticesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notices"> | number
    heading?: StringWithAggregatesFilter<"Notices"> | string
    body?: StringWithAggregatesFilter<"Notices"> | string
    upto?: DateTimeWithAggregatesFilter<"Notices"> | Date | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    imgUrl?: StringFilter<"State"> | string
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    name?: StringFilter<"State"> | string
    imgUrl?: StringFilter<"State"> | string
  }, "id">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"State"> | number
    name?: StringWithAggregatesFilter<"State"> | string
    imgUrl?: StringWithAggregatesFilter<"State"> | string
  }

  export type DistrictWhereInput = {
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    id?: IntFilter<"District"> | number
    name?: StringFilter<"District"> | string
    DistrictName?: StringFilter<"District"> | string
    imgUrl?: StringFilter<"District"> | string
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    DistrictName?: SortOrder
    imgUrl?: SortOrder
  }

  export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    name?: StringFilter<"District"> | string
    DistrictName?: StringFilter<"District"> | string
    imgUrl?: StringFilter<"District"> | string
  }, "id">

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    DistrictName?: SortOrder
    imgUrl?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _avg?: DistrictAvgOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
    _sum?: DistrictSumOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    OR?: DistrictScalarWhereWithAggregatesInput[]
    NOT?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"District"> | number
    name?: StringWithAggregatesFilter<"District"> | string
    DistrictName?: StringWithAggregatesFilter<"District"> | string
    imgUrl?: StringWithAggregatesFilter<"District"> | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    role?: $Enums.Role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Center?: CenterCreateNestedOneWithoutAdminInput
    enquiry?: EnquiryCreateNestedOneWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    role?: $Enums.Role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enquiryid?: number | null
    Center?: CenterUncheckedCreateNestedOneWithoutAdminInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Center?: CenterUpdateOneWithoutAdminNestedInput
    enquiry?: EnquiryUpdateOneWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enquiryid?: NullableIntFieldUpdateOperationsInput | number | null
    Center?: CenterUncheckedUpdateOneWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    role?: $Enums.Role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enquiryid?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enquiryid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CenterCreateInput = {
    Centername: string
    address: string
    code?: number
    Student?: EnrollmentCreateNestedManyWithoutCenterInput
    admin: UserCreateNestedOneWithoutCenterInput
  }

  export type CenterUncheckedCreateInput = {
    id?: number
    Centername: string
    adminid: number
    address: string
    code?: number
    Student?: EnrollmentUncheckedCreateNestedManyWithoutCenterInput
  }

  export type CenterUpdateInput = {
    Centername?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Student?: EnrollmentUpdateManyWithoutCenterNestedInput
    admin?: UserUpdateOneRequiredWithoutCenterNestedInput
  }

  export type CenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Centername?: StringFieldUpdateOperationsInput | string
    adminid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    Student?: EnrollmentUncheckedUpdateManyWithoutCenterNestedInput
  }

  export type CenterCreateManyInput = {
    id?: number
    Centername: string
    adminid: number
    address: string
    code?: number
  }

  export type CenterUpdateManyMutationInput = {
    Centername?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CenterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Centername?: StringFieldUpdateOperationsInput | string
    adminid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateInput = {
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormCreateNestedOneWithoutEnrollmentInput
    marks?: MarksCreateNestedOneWithoutEnrollmentInput
    amount?: AmountCreateNestedOneWithoutEnrollmentInput
    course: CourseCreateNestedOneWithoutEnrollmentInput
    center: CenterCreateNestedOneWithoutStudentInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    courseId: number
    centerid: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedCreateNestedOneWithoutEnrollmentInput
    marks?: MarksUncheckedCreateNestedOneWithoutEnrollmentInput
    amount?: AmountUncheckedCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUpdateInput = {
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUpdateOneWithoutEnrollmentNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
    center?: CenterUpdateOneRequiredWithoutStudentNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    courseId?: IntFieldUpdateOperationsInput | number
    centerid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUncheckedUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUncheckedUpdateOneWithoutEnrollmentNestedInput
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    courseId: number
    centerid: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
  }

  export type EnrollmentUpdateManyMutationInput = {
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    courseId?: IntFieldUpdateOperationsInput | number
    centerid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
  }

  export type CourseCreateInput = {
    CName: string
    price: number
    Duration: number
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
    subjects?: SubjectCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    CName: string
    price: number
    Duration: number
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
    subjects?: SubjectUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    CName: string
    price: number
    Duration: number
  }

  export type CourseUpdateManyMutationInput = {
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectCreateInput = {
    SubName: string
    theoryFullMarks: number
    practFullMarks: number
    Course: CourseCreateNestedOneWithoutSubjectsInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    SubName: string
    theoryFullMarks: number
    practFullMarks: number
    courseId: number
  }

  export type SubjectUpdateInput = {
    SubName?: StringFieldUpdateOperationsInput | string
    theoryFullMarks?: IntFieldUpdateOperationsInput | number
    practFullMarks?: IntFieldUpdateOperationsInput | number
    Course?: CourseUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubName?: StringFieldUpdateOperationsInput | string
    theoryFullMarks?: IntFieldUpdateOperationsInput | number
    practFullMarks?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectCreateManyInput = {
    id?: number
    SubName: string
    theoryFullMarks: number
    practFullMarks: number
    courseId: number
  }

  export type SubjectUpdateManyMutationInput = {
    SubName?: StringFieldUpdateOperationsInput | string
    theoryFullMarks?: IntFieldUpdateOperationsInput | number
    practFullMarks?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubName?: StringFieldUpdateOperationsInput | string
    theoryFullMarks?: IntFieldUpdateOperationsInput | number
    practFullMarks?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type AmountCreateInput = {
    TotalPaid: number
    amountRemain: number
    lastPaymentRecieptno?: string | null
    createdAt?: Date | string
    enrollment: EnrollmentCreateNestedOneWithoutAmountInput
  }

  export type AmountUncheckedCreateInput = {
    id?: number
    TotalPaid: number
    amountRemain: number
    lastPaymentRecieptno?: string | null
    EnrollmentNo: number
    createdAt?: Date | string
  }

  export type AmountUpdateInput = {
    TotalPaid?: IntFieldUpdateOperationsInput | number
    amountRemain?: IntFieldUpdateOperationsInput | number
    lastPaymentRecieptno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: EnrollmentUpdateOneRequiredWithoutAmountNestedInput
  }

  export type AmountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    TotalPaid?: IntFieldUpdateOperationsInput | number
    amountRemain?: IntFieldUpdateOperationsInput | number
    lastPaymentRecieptno?: NullableStringFieldUpdateOperationsInput | string | null
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmountCreateManyInput = {
    id?: number
    TotalPaid: number
    amountRemain: number
    lastPaymentRecieptno?: string | null
    EnrollmentNo: number
    createdAt?: Date | string
  }

  export type AmountUpdateManyMutationInput = {
    TotalPaid?: IntFieldUpdateOperationsInput | number
    amountRemain?: IntFieldUpdateOperationsInput | number
    lastPaymentRecieptno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    TotalPaid?: IntFieldUpdateOperationsInput | number
    amountRemain?: IntFieldUpdateOperationsInput | number
    lastPaymentRecieptno?: NullableStringFieldUpdateOperationsInput | string | null
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamFormCreateInput = {
    verified?: boolean
    createdAt?: Date | string
    ExamCenterCode: string
    ATI_CODE: string
    practExmdate: string
    theoryExamdate: string
    practExmtime: string
    theoryExmtime: string
    sem: string
    enrollment: EnrollmentCreateNestedOneWithoutExamformFillupInput
  }

  export type ExamFormUncheckedCreateInput = {
    id?: number
    EnrollmentNo: number
    verified?: boolean
    createdAt?: Date | string
    ExamCenterCode: string
    ATI_CODE: string
    practExmdate: string
    theoryExamdate: string
    practExmtime: string
    theoryExmtime: string
    sem: string
  }

  export type ExamFormUpdateInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamCenterCode?: StringFieldUpdateOperationsInput | string
    ATI_CODE?: StringFieldUpdateOperationsInput | string
    practExmdate?: StringFieldUpdateOperationsInput | string
    theoryExamdate?: StringFieldUpdateOperationsInput | string
    practExmtime?: StringFieldUpdateOperationsInput | string
    theoryExmtime?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
    enrollment?: EnrollmentUpdateOneRequiredWithoutExamformFillupNestedInput
  }

  export type ExamFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamCenterCode?: StringFieldUpdateOperationsInput | string
    ATI_CODE?: StringFieldUpdateOperationsInput | string
    practExmdate?: StringFieldUpdateOperationsInput | string
    theoryExamdate?: StringFieldUpdateOperationsInput | string
    practExmtime?: StringFieldUpdateOperationsInput | string
    theoryExmtime?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
  }

  export type ExamFormCreateManyInput = {
    id?: number
    EnrollmentNo: number
    verified?: boolean
    createdAt?: Date | string
    ExamCenterCode: string
    ATI_CODE: string
    practExmdate: string
    theoryExamdate: string
    practExmtime: string
    theoryExmtime: string
    sem: string
  }

  export type ExamFormUpdateManyMutationInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamCenterCode?: StringFieldUpdateOperationsInput | string
    ATI_CODE?: StringFieldUpdateOperationsInput | string
    practExmdate?: StringFieldUpdateOperationsInput | string
    theoryExamdate?: StringFieldUpdateOperationsInput | string
    practExmtime?: StringFieldUpdateOperationsInput | string
    theoryExmtime?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
  }

  export type ExamFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamCenterCode?: StringFieldUpdateOperationsInput | string
    ATI_CODE?: StringFieldUpdateOperationsInput | string
    practExmdate?: StringFieldUpdateOperationsInput | string
    theoryExamdate?: StringFieldUpdateOperationsInput | string
    practExmtime?: StringFieldUpdateOperationsInput | string
    theoryExmtime?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
  }

  export type MarksCreateInput = {
    marks: JsonNullValueInput | InputJsonValue
    remarks: $Enums.Remark
    grade: string
    totalMarks: number
    percentage: number
    verified?: boolean
    createdAt?: Date | string
    year: string
    serialNo?: number
    enrollment: EnrollmentCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateInput = {
    id?: number
    marks: JsonNullValueInput | InputJsonValue
    remarks: $Enums.Remark
    EnrollmentNo: number
    grade: string
    totalMarks: number
    percentage: number
    verified?: boolean
    createdAt?: Date | string
    year: string
    serialNo?: number
  }

  export type MarksUpdateInput = {
    marks?: JsonNullValueInput | InputJsonValue
    remarks?: EnumRemarkFieldUpdateOperationsInput | $Enums.Remark
    grade?: StringFieldUpdateOperationsInput | string
    totalMarks?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: StringFieldUpdateOperationsInput | string
    enrollment?: EnrollmentUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marks?: JsonNullValueInput | InputJsonValue
    remarks?: EnumRemarkFieldUpdateOperationsInput | $Enums.Remark
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    totalMarks?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
  }

  export type MarksCreateManyInput = {
    id?: number
    marks: JsonNullValueInput | InputJsonValue
    remarks: $Enums.Remark
    EnrollmentNo: number
    grade: string
    totalMarks: number
    percentage: number
    verified?: boolean
    createdAt?: Date | string
    year: string
    serialNo?: number
  }

  export type MarksUpdateManyMutationInput = {
    marks?: JsonNullValueInput | InputJsonValue
    remarks?: EnumRemarkFieldUpdateOperationsInput | $Enums.Remark
    grade?: StringFieldUpdateOperationsInput | string
    totalMarks?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type MarksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marks?: JsonNullValueInput | InputJsonValue
    remarks?: EnumRemarkFieldUpdateOperationsInput | $Enums.Remark
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    totalMarks?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
  }

  export type EnquiryCreateInput = {
    name: string
    email: string
    father: string
    coName: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    dob: Date | string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    mobileNo: string
    AddressLine: string
    eduqualification: string
    idProof: $Enums.IdType2
    idProofNo: string
    houseRoomNo: string
    squareFit: string
    tradeLicense: string
    bathroom: boolean
    signatureLink: string
    ImageLink: string
    verified?: boolean
    createdAt?: Date | string
    Subscription?: Date | string | null
    admin?: UserCreateNestedOneWithoutEnquiryInput
  }

  export type EnquiryUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    father: string
    coName: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    dob: Date | string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    mobileNo: string
    AddressLine: string
    eduqualification: string
    idProof: $Enums.IdType2
    idProofNo: string
    houseRoomNo: string
    squareFit: string
    tradeLicense: string
    bathroom: boolean
    signatureLink: string
    ImageLink: string
    verified?: boolean
    createdAt?: Date | string
    Subscription?: Date | string | null
    admin?: UserUncheckedCreateNestedOneWithoutEnquiryInput
  }

  export type EnquiryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    coName?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    mobileNo?: StringFieldUpdateOperationsInput | string
    AddressLine?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    idProof?: EnumIdType2FieldUpdateOperationsInput | $Enums.IdType2
    idProofNo?: StringFieldUpdateOperationsInput | string
    houseRoomNo?: StringFieldUpdateOperationsInput | string
    squareFit?: StringFieldUpdateOperationsInput | string
    tradeLicense?: StringFieldUpdateOperationsInput | string
    bathroom?: BoolFieldUpdateOperationsInput | boolean
    signatureLink?: StringFieldUpdateOperationsInput | string
    ImageLink?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: UserUpdateOneWithoutEnquiryNestedInput
  }

  export type EnquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    coName?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    mobileNo?: StringFieldUpdateOperationsInput | string
    AddressLine?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    idProof?: EnumIdType2FieldUpdateOperationsInput | $Enums.IdType2
    idProofNo?: StringFieldUpdateOperationsInput | string
    houseRoomNo?: StringFieldUpdateOperationsInput | string
    squareFit?: StringFieldUpdateOperationsInput | string
    tradeLicense?: StringFieldUpdateOperationsInput | string
    bathroom?: BoolFieldUpdateOperationsInput | boolean
    signatureLink?: StringFieldUpdateOperationsInput | string
    ImageLink?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: UserUncheckedUpdateOneWithoutEnquiryNestedInput
  }

  export type EnquiryCreateManyInput = {
    id?: number
    name: string
    email: string
    father: string
    coName: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    dob: Date | string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    mobileNo: string
    AddressLine: string
    eduqualification: string
    idProof: $Enums.IdType2
    idProofNo: string
    houseRoomNo: string
    squareFit: string
    tradeLicense: string
    bathroom: boolean
    signatureLink: string
    ImageLink: string
    verified?: boolean
    createdAt?: Date | string
    Subscription?: Date | string | null
  }

  export type EnquiryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    coName?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    mobileNo?: StringFieldUpdateOperationsInput | string
    AddressLine?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    idProof?: EnumIdType2FieldUpdateOperationsInput | $Enums.IdType2
    idProofNo?: StringFieldUpdateOperationsInput | string
    houseRoomNo?: StringFieldUpdateOperationsInput | string
    squareFit?: StringFieldUpdateOperationsInput | string
    tradeLicense?: StringFieldUpdateOperationsInput | string
    bathroom?: BoolFieldUpdateOperationsInput | boolean
    signatureLink?: StringFieldUpdateOperationsInput | string
    ImageLink?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    coName?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    mobileNo?: StringFieldUpdateOperationsInput | string
    AddressLine?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    idProof?: EnumIdType2FieldUpdateOperationsInput | $Enums.IdType2
    idProofNo?: StringFieldUpdateOperationsInput | string
    houseRoomNo?: StringFieldUpdateOperationsInput | string
    squareFit?: StringFieldUpdateOperationsInput | string
    tradeLicense?: StringFieldUpdateOperationsInput | string
    bathroom?: BoolFieldUpdateOperationsInput | boolean
    signatureLink?: StringFieldUpdateOperationsInput | string
    ImageLink?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoticesCreateInput = {
    heading: string
    body: string
    upto: Date | string
  }

  export type NoticesUncheckedCreateInput = {
    id?: number
    heading: string
    body: string
    upto: Date | string
  }

  export type NoticesUpdateInput = {
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    upto?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    upto?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticesCreateManyInput = {
    id?: number
    heading: string
    body: string
    upto: Date | string
  }

  export type NoticesUpdateManyMutationInput = {
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    upto?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    upto?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateCreateInput = {
    name: string
    imgUrl: string
  }

  export type StateUncheckedCreateInput = {
    id?: number
    name: string
    imgUrl: string
  }

  export type StateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type StateCreateManyInput = {
    id?: number
    name: string
    imgUrl: string
  }

  export type StateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictCreateInput = {
    name: string
    DistrictName: string
    imgUrl: string
  }

  export type DistrictUncheckedCreateInput = {
    id?: number
    name: string
    DistrictName: string
    imgUrl: string
  }

  export type DistrictUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    DistrictName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    DistrictName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictCreateManyInput = {
    id?: number
    name: string
    DistrictName: string
    imgUrl: string
  }

  export type DistrictUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    DistrictName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    DistrictName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CenterNullableScalarRelationFilter = {
    is?: CenterWhereInput | null
    isNot?: CenterWhereInput | null
  }

  export type EnquiryNullableScalarRelationFilter = {
    is?: EnquiryWhereInput | null
    isNot?: EnquiryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    enquiryid?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    enquiryid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    enquiryid?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    enquiryid?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    enquiryid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CenterCountOrderByAggregateInput = {
    id?: SortOrder
    Centername?: SortOrder
    adminid?: SortOrder
    address?: SortOrder
    code?: SortOrder
  }

  export type CenterAvgOrderByAggregateInput = {
    id?: SortOrder
    adminid?: SortOrder
    code?: SortOrder
  }

  export type CenterMaxOrderByAggregateInput = {
    id?: SortOrder
    Centername?: SortOrder
    adminid?: SortOrder
    address?: SortOrder
    code?: SortOrder
  }

  export type CenterMinOrderByAggregateInput = {
    id?: SortOrder
    Centername?: SortOrder
    adminid?: SortOrder
    address?: SortOrder
    code?: SortOrder
  }

  export type CenterSumOrderByAggregateInput = {
    id?: SortOrder
    adminid?: SortOrder
    code?: SortOrder
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

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumNationalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityFilter<$PrismaModel> | $Enums.Nationality
  }

  export type EnumIdTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdTypeFilter<$PrismaModel> | $Enums.IdType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ExamFormNullableScalarRelationFilter = {
    is?: ExamFormWhereInput | null
    isNot?: ExamFormWhereInput | null
  }

  export type MarksNullableScalarRelationFilter = {
    is?: MarksWhereInput | null
    isNot?: MarksWhereInput | null
  }

  export type AmountNullableScalarRelationFilter = {
    is?: AmountWhereInput | null
    isNot?: AmountWhereInput | null
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CenterScalarRelationFilter = {
    is?: CenterWhereInput
    isNot?: CenterWhereInput
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    IdCardNo?: SortOrder
    idCardLink?: SortOrder
    admitLink?: SortOrder
    certificateLink?: SortOrder
    marksheetLink?: SortOrder
    imageLink?: SortOrder
    CertificateNo?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    address?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    pincode?: SortOrder
    eduqualification?: SortOrder
    activated?: SortOrder
    courseId?: SortOrder
    centerid?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    IdCardNo?: SortOrder
    CertificateNo?: SortOrder
    courseId?: SortOrder
    centerid?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    IdCardNo?: SortOrder
    idCardLink?: SortOrder
    admitLink?: SortOrder
    certificateLink?: SortOrder
    marksheetLink?: SortOrder
    imageLink?: SortOrder
    CertificateNo?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    address?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    pincode?: SortOrder
    eduqualification?: SortOrder
    activated?: SortOrder
    courseId?: SortOrder
    centerid?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    IdCardNo?: SortOrder
    idCardLink?: SortOrder
    admitLink?: SortOrder
    certificateLink?: SortOrder
    marksheetLink?: SortOrder
    imageLink?: SortOrder
    CertificateNo?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    address?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    pincode?: SortOrder
    eduqualification?: SortOrder
    activated?: SortOrder
    courseId?: SortOrder
    centerid?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    IdCardNo?: SortOrder
    CertificateNo?: SortOrder
    courseId?: SortOrder
    centerid?: SortOrder
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

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumNationalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityWithAggregatesFilter<$PrismaModel> | $Enums.Nationality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNationalityFilter<$PrismaModel>
    _max?: NestedEnumNationalityFilter<$PrismaModel>
  }

  export type EnumIdTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdTypeWithAggregatesFilter<$PrismaModel> | $Enums.IdType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdTypeFilter<$PrismaModel>
    _max?: NestedEnumIdTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    CName?: SortOrder
    price?: SortOrder
    Duration?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    Duration?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    CName?: SortOrder
    price?: SortOrder
    Duration?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    CName?: SortOrder
    price?: SortOrder
    Duration?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    Duration?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    SubName?: SortOrder
    theoryFullMarks?: SortOrder
    practFullMarks?: SortOrder
    courseId?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    theoryFullMarks?: SortOrder
    practFullMarks?: SortOrder
    courseId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    SubName?: SortOrder
    theoryFullMarks?: SortOrder
    practFullMarks?: SortOrder
    courseId?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    SubName?: SortOrder
    theoryFullMarks?: SortOrder
    practFullMarks?: SortOrder
    courseId?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    theoryFullMarks?: SortOrder
    practFullMarks?: SortOrder
    courseId?: SortOrder
  }

  export type EnrollmentScalarRelationFilter = {
    is?: EnrollmentWhereInput
    isNot?: EnrollmentWhereInput
  }

  export type AmountCountOrderByAggregateInput = {
    id?: SortOrder
    TotalPaid?: SortOrder
    amountRemain?: SortOrder
    lastPaymentRecieptno?: SortOrder
    EnrollmentNo?: SortOrder
    createdAt?: SortOrder
  }

  export type AmountAvgOrderByAggregateInput = {
    id?: SortOrder
    TotalPaid?: SortOrder
    amountRemain?: SortOrder
    EnrollmentNo?: SortOrder
  }

  export type AmountMaxOrderByAggregateInput = {
    id?: SortOrder
    TotalPaid?: SortOrder
    amountRemain?: SortOrder
    lastPaymentRecieptno?: SortOrder
    EnrollmentNo?: SortOrder
    createdAt?: SortOrder
  }

  export type AmountMinOrderByAggregateInput = {
    id?: SortOrder
    TotalPaid?: SortOrder
    amountRemain?: SortOrder
    lastPaymentRecieptno?: SortOrder
    EnrollmentNo?: SortOrder
    createdAt?: SortOrder
  }

  export type AmountSumOrderByAggregateInput = {
    id?: SortOrder
    TotalPaid?: SortOrder
    amountRemain?: SortOrder
    EnrollmentNo?: SortOrder
  }

  export type ExamFormCountOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    ExamCenterCode?: SortOrder
    ATI_CODE?: SortOrder
    practExmdate?: SortOrder
    theoryExamdate?: SortOrder
    practExmtime?: SortOrder
    theoryExmtime?: SortOrder
    sem?: SortOrder
  }

  export type ExamFormAvgOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
  }

  export type ExamFormMaxOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    ExamCenterCode?: SortOrder
    ATI_CODE?: SortOrder
    practExmdate?: SortOrder
    theoryExamdate?: SortOrder
    practExmtime?: SortOrder
    theoryExmtime?: SortOrder
    sem?: SortOrder
  }

  export type ExamFormMinOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    ExamCenterCode?: SortOrder
    ATI_CODE?: SortOrder
    practExmdate?: SortOrder
    theoryExamdate?: SortOrder
    practExmtime?: SortOrder
    theoryExmtime?: SortOrder
    sem?: SortOrder
  }

  export type ExamFormSumOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
  }

  export type EnumRemarkFilter<$PrismaModel = never> = {
    equals?: $Enums.Remark | EnumRemarkFieldRefInput<$PrismaModel>
    in?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    not?: NestedEnumRemarkFilter<$PrismaModel> | $Enums.Remark
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

  export type MarksCountOrderByAggregateInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrder
    EnrollmentNo?: SortOrder
    grade?: SortOrder
    totalMarks?: SortOrder
    percentage?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    year?: SortOrder
    serialNo?: SortOrder
  }

  export type MarksAvgOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    totalMarks?: SortOrder
    percentage?: SortOrder
    serialNo?: SortOrder
  }

  export type MarksMaxOrderByAggregateInput = {
    id?: SortOrder
    remarks?: SortOrder
    EnrollmentNo?: SortOrder
    grade?: SortOrder
    totalMarks?: SortOrder
    percentage?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    year?: SortOrder
    serialNo?: SortOrder
  }

  export type MarksMinOrderByAggregateInput = {
    id?: SortOrder
    remarks?: SortOrder
    EnrollmentNo?: SortOrder
    grade?: SortOrder
    totalMarks?: SortOrder
    percentage?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    year?: SortOrder
    serialNo?: SortOrder
  }

  export type MarksSumOrderByAggregateInput = {
    id?: SortOrder
    EnrollmentNo?: SortOrder
    totalMarks?: SortOrder
    percentage?: SortOrder
    serialNo?: SortOrder
  }

  export type EnumRemarkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Remark | EnumRemarkFieldRefInput<$PrismaModel>
    in?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    not?: NestedEnumRemarkWithAggregatesFilter<$PrismaModel> | $Enums.Remark
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemarkFilter<$PrismaModel>
    _max?: NestedEnumRemarkFilter<$PrismaModel>
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

  export type EnumIdType2Filter<$PrismaModel = never> = {
    equals?: $Enums.IdType2 | EnumIdType2FieldRefInput<$PrismaModel>
    in?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    not?: NestedEnumIdType2Filter<$PrismaModel> | $Enums.IdType2
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    father?: SortOrder
    coName?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    mobileNo?: SortOrder
    AddressLine?: SortOrder
    eduqualification?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    houseRoomNo?: SortOrder
    squareFit?: SortOrder
    tradeLicense?: SortOrder
    bathroom?: SortOrder
    signatureLink?: SortOrder
    ImageLink?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    Subscription?: SortOrder
  }

  export type EnquiryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    father?: SortOrder
    coName?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    mobileNo?: SortOrder
    AddressLine?: SortOrder
    eduqualification?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    houseRoomNo?: SortOrder
    squareFit?: SortOrder
    tradeLicense?: SortOrder
    bathroom?: SortOrder
    signatureLink?: SortOrder
    ImageLink?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    Subscription?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    father?: SortOrder
    coName?: SortOrder
    dist?: SortOrder
    state?: SortOrder
    pin?: SortOrder
    ps?: SortOrder
    po?: SortOrder
    vill?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    category?: SortOrder
    nationality?: SortOrder
    mobileNo?: SortOrder
    AddressLine?: SortOrder
    eduqualification?: SortOrder
    idProof?: SortOrder
    idProofNo?: SortOrder
    houseRoomNo?: SortOrder
    squareFit?: SortOrder
    tradeLicense?: SortOrder
    bathroom?: SortOrder
    signatureLink?: SortOrder
    ImageLink?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    Subscription?: SortOrder
  }

  export type EnquirySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumIdType2WithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType2 | EnumIdType2FieldRefInput<$PrismaModel>
    in?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    not?: NestedEnumIdType2WithAggregatesFilter<$PrismaModel> | $Enums.IdType2
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdType2Filter<$PrismaModel>
    _max?: NestedEnumIdType2Filter<$PrismaModel>
  }

  export type NoticesCountOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    upto?: SortOrder
  }

  export type NoticesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticesMaxOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    upto?: SortOrder
  }

  export type NoticesMinOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    upto?: SortOrder
  }

  export type NoticesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    DistrictName?: SortOrder
    imgUrl?: SortOrder
  }

  export type DistrictAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    DistrictName?: SortOrder
    imgUrl?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    DistrictName?: SortOrder
    imgUrl?: SortOrder
  }

  export type DistrictSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CenterCreateNestedOneWithoutAdminInput = {
    create?: XOR<CenterCreateWithoutAdminInput, CenterUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CenterCreateOrConnectWithoutAdminInput
    connect?: CenterWhereUniqueInput
  }

  export type EnquiryCreateNestedOneWithoutAdminInput = {
    create?: XOR<EnquiryCreateWithoutAdminInput, EnquiryUncheckedCreateWithoutAdminInput>
    connectOrCreate?: EnquiryCreateOrConnectWithoutAdminInput
    connect?: EnquiryWhereUniqueInput
  }

  export type CenterUncheckedCreateNestedOneWithoutAdminInput = {
    create?: XOR<CenterCreateWithoutAdminInput, CenterUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CenterCreateOrConnectWithoutAdminInput
    connect?: CenterWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CenterUpdateOneWithoutAdminNestedInput = {
    create?: XOR<CenterCreateWithoutAdminInput, CenterUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CenterCreateOrConnectWithoutAdminInput
    upsert?: CenterUpsertWithoutAdminInput
    disconnect?: CenterWhereInput | boolean
    delete?: CenterWhereInput | boolean
    connect?: CenterWhereUniqueInput
    update?: XOR<XOR<CenterUpdateToOneWithWhereWithoutAdminInput, CenterUpdateWithoutAdminInput>, CenterUncheckedUpdateWithoutAdminInput>
  }

  export type EnquiryUpdateOneWithoutAdminNestedInput = {
    create?: XOR<EnquiryCreateWithoutAdminInput, EnquiryUncheckedCreateWithoutAdminInput>
    connectOrCreate?: EnquiryCreateOrConnectWithoutAdminInput
    upsert?: EnquiryUpsertWithoutAdminInput
    disconnect?: EnquiryWhereInput | boolean
    delete?: EnquiryWhereInput | boolean
    connect?: EnquiryWhereUniqueInput
    update?: XOR<XOR<EnquiryUpdateToOneWithWhereWithoutAdminInput, EnquiryUpdateWithoutAdminInput>, EnquiryUncheckedUpdateWithoutAdminInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CenterUncheckedUpdateOneWithoutAdminNestedInput = {
    create?: XOR<CenterCreateWithoutAdminInput, CenterUncheckedCreateWithoutAdminInput>
    connectOrCreate?: CenterCreateOrConnectWithoutAdminInput
    upsert?: CenterUpsertWithoutAdminInput
    disconnect?: CenterWhereInput | boolean
    delete?: CenterWhereInput | boolean
    connect?: CenterWhereUniqueInput
    update?: XOR<XOR<CenterUpdateToOneWithWhereWithoutAdminInput, CenterUpdateWithoutAdminInput>, CenterUncheckedUpdateWithoutAdminInput>
  }

  export type EnrollmentCreateNestedManyWithoutCenterInput = {
    create?: XOR<EnrollmentCreateWithoutCenterInput, EnrollmentUncheckedCreateWithoutCenterInput> | EnrollmentCreateWithoutCenterInput[] | EnrollmentUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCenterInput | EnrollmentCreateOrConnectWithoutCenterInput[]
    createMany?: EnrollmentCreateManyCenterInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCenterInput = {
    create?: XOR<UserCreateWithoutCenterInput, UserUncheckedCreateWithoutCenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutCenterInput
    connect?: UserWhereUniqueInput
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCenterInput = {
    create?: XOR<EnrollmentCreateWithoutCenterInput, EnrollmentUncheckedCreateWithoutCenterInput> | EnrollmentCreateWithoutCenterInput[] | EnrollmentUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCenterInput | EnrollmentCreateOrConnectWithoutCenterInput[]
    createMany?: EnrollmentCreateManyCenterInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnrollmentUpdateManyWithoutCenterNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCenterInput, EnrollmentUncheckedCreateWithoutCenterInput> | EnrollmentCreateWithoutCenterInput[] | EnrollmentUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCenterInput | EnrollmentCreateOrConnectWithoutCenterInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCenterInput | EnrollmentUpsertWithWhereUniqueWithoutCenterInput[]
    createMany?: EnrollmentCreateManyCenterInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCenterInput | EnrollmentUpdateWithWhereUniqueWithoutCenterInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCenterInput | EnrollmentUpdateManyWithWhereWithoutCenterInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCenterNestedInput = {
    create?: XOR<UserCreateWithoutCenterInput, UserUncheckedCreateWithoutCenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutCenterInput
    upsert?: UserUpsertWithoutCenterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCenterInput, UserUpdateWithoutCenterInput>, UserUncheckedUpdateWithoutCenterInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutCenterNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCenterInput, EnrollmentUncheckedCreateWithoutCenterInput> | EnrollmentCreateWithoutCenterInput[] | EnrollmentUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCenterInput | EnrollmentCreateOrConnectWithoutCenterInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCenterInput | EnrollmentUpsertWithWhereUniqueWithoutCenterInput[]
    createMany?: EnrollmentCreateManyCenterInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCenterInput | EnrollmentUpdateWithWhereUniqueWithoutCenterInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCenterInput | EnrollmentUpdateManyWithWhereWithoutCenterInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ExamFormCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<ExamFormCreateWithoutEnrollmentInput, ExamFormUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: ExamFormCreateOrConnectWithoutEnrollmentInput
    connect?: ExamFormWhereUniqueInput
  }

  export type MarksCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<MarksCreateWithoutEnrollmentInput, MarksUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: MarksCreateOrConnectWithoutEnrollmentInput
    connect?: MarksWhereUniqueInput
  }

  export type AmountCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<AmountCreateWithoutEnrollmentInput, AmountUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: AmountCreateOrConnectWithoutEnrollmentInput
    connect?: AmountWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentInput
    connect?: CourseWhereUniqueInput
  }

  export type CenterCreateNestedOneWithoutStudentInput = {
    create?: XOR<CenterCreateWithoutStudentInput, CenterUncheckedCreateWithoutStudentInput>
    connectOrCreate?: CenterCreateOrConnectWithoutStudentInput
    connect?: CenterWhereUniqueInput
  }

  export type ExamFormUncheckedCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<ExamFormCreateWithoutEnrollmentInput, ExamFormUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: ExamFormCreateOrConnectWithoutEnrollmentInput
    connect?: ExamFormWhereUniqueInput
  }

  export type MarksUncheckedCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<MarksCreateWithoutEnrollmentInput, MarksUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: MarksCreateOrConnectWithoutEnrollmentInput
    connect?: MarksWhereUniqueInput
  }

  export type AmountUncheckedCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<AmountCreateWithoutEnrollmentInput, AmountUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: AmountCreateOrConnectWithoutEnrollmentInput
    connect?: AmountWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumNationalityFieldUpdateOperationsInput = {
    set?: $Enums.Nationality
  }

  export type EnumIdTypeFieldUpdateOperationsInput = {
    set?: $Enums.IdType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExamFormUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<ExamFormCreateWithoutEnrollmentInput, ExamFormUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: ExamFormCreateOrConnectWithoutEnrollmentInput
    upsert?: ExamFormUpsertWithoutEnrollmentInput
    disconnect?: ExamFormWhereInput | boolean
    delete?: ExamFormWhereInput | boolean
    connect?: ExamFormWhereUniqueInput
    update?: XOR<XOR<ExamFormUpdateToOneWithWhereWithoutEnrollmentInput, ExamFormUpdateWithoutEnrollmentInput>, ExamFormUncheckedUpdateWithoutEnrollmentInput>
  }

  export type MarksUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<MarksCreateWithoutEnrollmentInput, MarksUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: MarksCreateOrConnectWithoutEnrollmentInput
    upsert?: MarksUpsertWithoutEnrollmentInput
    disconnect?: MarksWhereInput | boolean
    delete?: MarksWhereInput | boolean
    connect?: MarksWhereUniqueInput
    update?: XOR<XOR<MarksUpdateToOneWithWhereWithoutEnrollmentInput, MarksUpdateWithoutEnrollmentInput>, MarksUncheckedUpdateWithoutEnrollmentInput>
  }

  export type AmountUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<AmountCreateWithoutEnrollmentInput, AmountUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: AmountCreateOrConnectWithoutEnrollmentInput
    upsert?: AmountUpsertWithoutEnrollmentInput
    disconnect?: AmountWhereInput | boolean
    delete?: AmountWhereInput | boolean
    connect?: AmountWhereUniqueInput
    update?: XOR<XOR<AmountUpdateToOneWithWhereWithoutEnrollmentInput, AmountUpdateWithoutEnrollmentInput>, AmountUncheckedUpdateWithoutEnrollmentInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentInput
    upsert?: CourseUpsertWithoutEnrollmentInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentInput, CourseUpdateWithoutEnrollmentInput>, CourseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type CenterUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<CenterCreateWithoutStudentInput, CenterUncheckedCreateWithoutStudentInput>
    connectOrCreate?: CenterCreateOrConnectWithoutStudentInput
    upsert?: CenterUpsertWithoutStudentInput
    connect?: CenterWhereUniqueInput
    update?: XOR<XOR<CenterUpdateToOneWithWhereWithoutStudentInput, CenterUpdateWithoutStudentInput>, CenterUncheckedUpdateWithoutStudentInput>
  }

  export type ExamFormUncheckedUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<ExamFormCreateWithoutEnrollmentInput, ExamFormUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: ExamFormCreateOrConnectWithoutEnrollmentInput
    upsert?: ExamFormUpsertWithoutEnrollmentInput
    disconnect?: ExamFormWhereInput | boolean
    delete?: ExamFormWhereInput | boolean
    connect?: ExamFormWhereUniqueInput
    update?: XOR<XOR<ExamFormUpdateToOneWithWhereWithoutEnrollmentInput, ExamFormUpdateWithoutEnrollmentInput>, ExamFormUncheckedUpdateWithoutEnrollmentInput>
  }

  export type MarksUncheckedUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<MarksCreateWithoutEnrollmentInput, MarksUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: MarksCreateOrConnectWithoutEnrollmentInput
    upsert?: MarksUpsertWithoutEnrollmentInput
    disconnect?: MarksWhereInput | boolean
    delete?: MarksWhereInput | boolean
    connect?: MarksWhereUniqueInput
    update?: XOR<XOR<MarksUpdateToOneWithWhereWithoutEnrollmentInput, MarksUpdateWithoutEnrollmentInput>, MarksUncheckedUpdateWithoutEnrollmentInput>
  }

  export type AmountUncheckedUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<AmountCreateWithoutEnrollmentInput, AmountUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: AmountCreateOrConnectWithoutEnrollmentInput
    upsert?: AmountUpsertWithoutEnrollmentInput
    disconnect?: AmountWhereInput | boolean
    delete?: AmountWhereInput | boolean
    connect?: AmountWhereUniqueInput
    update?: XOR<XOR<AmountUpdateToOneWithWhereWithoutEnrollmentInput, AmountUpdateWithoutEnrollmentInput>, AmountUncheckedUpdateWithoutEnrollmentInput>
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutCourseInput = {
    create?: XOR<SubjectCreateWithoutCourseInput, SubjectUncheckedCreateWithoutCourseInput> | SubjectCreateWithoutCourseInput[] | SubjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCourseInput | SubjectCreateOrConnectWithoutCourseInput[]
    createMany?: SubjectCreateManyCourseInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SubjectCreateWithoutCourseInput, SubjectUncheckedCreateWithoutCourseInput> | SubjectCreateWithoutCourseInput[] | SubjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCourseInput | SubjectCreateOrConnectWithoutCourseInput[]
    createMany?: SubjectCreateManyCourseInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SubjectCreateWithoutCourseInput, SubjectUncheckedCreateWithoutCourseInput> | SubjectCreateWithoutCourseInput[] | SubjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCourseInput | SubjectCreateOrConnectWithoutCourseInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutCourseInput | SubjectUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SubjectCreateManyCourseInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutCourseInput | SubjectUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutCourseInput | SubjectUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SubjectCreateWithoutCourseInput, SubjectUncheckedCreateWithoutCourseInput> | SubjectCreateWithoutCourseInput[] | SubjectUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCourseInput | SubjectCreateOrConnectWithoutCourseInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutCourseInput | SubjectUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SubjectCreateManyCourseInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutCourseInput | SubjectUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutCourseInput | SubjectUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<CourseCreateWithoutSubjectsInput, CourseUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSubjectsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<CourseCreateWithoutSubjectsInput, CourseUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSubjectsInput
    upsert?: CourseUpsertWithoutSubjectsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSubjectsInput, CourseUpdateWithoutSubjectsInput>, CourseUncheckedUpdateWithoutSubjectsInput>
  }

  export type EnrollmentCreateNestedOneWithoutAmountInput = {
    create?: XOR<EnrollmentCreateWithoutAmountInput, EnrollmentUncheckedCreateWithoutAmountInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAmountInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type EnrollmentUpdateOneRequiredWithoutAmountNestedInput = {
    create?: XOR<EnrollmentCreateWithoutAmountInput, EnrollmentUncheckedCreateWithoutAmountInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAmountInput
    upsert?: EnrollmentUpsertWithoutAmountInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<XOR<EnrollmentUpdateToOneWithWhereWithoutAmountInput, EnrollmentUpdateWithoutAmountInput>, EnrollmentUncheckedUpdateWithoutAmountInput>
  }

  export type EnrollmentCreateNestedOneWithoutExamformFillupInput = {
    create?: XOR<EnrollmentCreateWithoutExamformFillupInput, EnrollmentUncheckedCreateWithoutExamformFillupInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutExamformFillupInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type EnrollmentUpdateOneRequiredWithoutExamformFillupNestedInput = {
    create?: XOR<EnrollmentCreateWithoutExamformFillupInput, EnrollmentUncheckedCreateWithoutExamformFillupInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutExamformFillupInput
    upsert?: EnrollmentUpsertWithoutExamformFillupInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<XOR<EnrollmentUpdateToOneWithWhereWithoutExamformFillupInput, EnrollmentUpdateWithoutExamformFillupInput>, EnrollmentUncheckedUpdateWithoutExamformFillupInput>
  }

  export type EnrollmentCreateNestedOneWithoutMarksInput = {
    create?: XOR<EnrollmentCreateWithoutMarksInput, EnrollmentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutMarksInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type EnumRemarkFieldUpdateOperationsInput = {
    set?: $Enums.Remark
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnrollmentUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<EnrollmentCreateWithoutMarksInput, EnrollmentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutMarksInput
    upsert?: EnrollmentUpsertWithoutMarksInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<XOR<EnrollmentUpdateToOneWithWhereWithoutMarksInput, EnrollmentUpdateWithoutMarksInput>, EnrollmentUncheckedUpdateWithoutMarksInput>
  }

  export type UserCreateNestedOneWithoutEnquiryInput = {
    create?: XOR<UserCreateWithoutEnquiryInput, UserUncheckedCreateWithoutEnquiryInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutEnquiryInput = {
    create?: XOR<UserCreateWithoutEnquiryInput, UserUncheckedCreateWithoutEnquiryInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumIdType2FieldUpdateOperationsInput = {
    set?: $Enums.IdType2
  }

  export type UserUpdateOneWithoutEnquiryNestedInput = {
    create?: XOR<UserCreateWithoutEnquiryInput, UserUncheckedCreateWithoutEnquiryInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiryInput
    upsert?: UserUpsertWithoutEnquiryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnquiryInput, UserUpdateWithoutEnquiryInput>, UserUncheckedUpdateWithoutEnquiryInput>
  }

  export type UserUncheckedUpdateOneWithoutEnquiryNestedInput = {
    create?: XOR<UserCreateWithoutEnquiryInput, UserUncheckedCreateWithoutEnquiryInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiryInput
    upsert?: UserUpsertWithoutEnquiryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnquiryInput, UserUpdateWithoutEnquiryInput>, UserUncheckedUpdateWithoutEnquiryInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumNationalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityFilter<$PrismaModel> | $Enums.Nationality
  }

  export type NestedEnumIdTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdTypeFilter<$PrismaModel> | $Enums.IdType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumNationalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nationality | EnumNationalityFieldRefInput<$PrismaModel>
    in?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nationality[] | ListEnumNationalityFieldRefInput<$PrismaModel>
    not?: NestedEnumNationalityWithAggregatesFilter<$PrismaModel> | $Enums.Nationality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNationalityFilter<$PrismaModel>
    _max?: NestedEnumNationalityFilter<$PrismaModel>
  }

  export type NestedEnumIdTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType | EnumIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType[] | ListEnumIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdTypeWithAggregatesFilter<$PrismaModel> | $Enums.IdType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdTypeFilter<$PrismaModel>
    _max?: NestedEnumIdTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRemarkFilter<$PrismaModel = never> = {
    equals?: $Enums.Remark | EnumRemarkFieldRefInput<$PrismaModel>
    in?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    not?: NestedEnumRemarkFilter<$PrismaModel> | $Enums.Remark
  }

  export type NestedEnumRemarkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Remark | EnumRemarkFieldRefInput<$PrismaModel>
    in?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Remark[] | ListEnumRemarkFieldRefInput<$PrismaModel>
    not?: NestedEnumRemarkWithAggregatesFilter<$PrismaModel> | $Enums.Remark
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemarkFilter<$PrismaModel>
    _max?: NestedEnumRemarkFilter<$PrismaModel>
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

  export type NestedEnumIdType2Filter<$PrismaModel = never> = {
    equals?: $Enums.IdType2 | EnumIdType2FieldRefInput<$PrismaModel>
    in?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    not?: NestedEnumIdType2Filter<$PrismaModel> | $Enums.IdType2
  }

  export type NestedEnumIdType2WithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdType2 | EnumIdType2FieldRefInput<$PrismaModel>
    in?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    notIn?: $Enums.IdType2[] | ListEnumIdType2FieldRefInput<$PrismaModel>
    not?: NestedEnumIdType2WithAggregatesFilter<$PrismaModel> | $Enums.IdType2
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdType2Filter<$PrismaModel>
    _max?: NestedEnumIdType2Filter<$PrismaModel>
  }

  export type CenterCreateWithoutAdminInput = {
    Centername: string
    address: string
    code?: number
    Student?: EnrollmentCreateNestedManyWithoutCenterInput
  }

  export type CenterUncheckedCreateWithoutAdminInput = {
    id?: number
    Centername: string
    address: string
    code?: number
    Student?: EnrollmentUncheckedCreateNestedManyWithoutCenterInput
  }

  export type CenterCreateOrConnectWithoutAdminInput = {
    where: CenterWhereUniqueInput
    create: XOR<CenterCreateWithoutAdminInput, CenterUncheckedCreateWithoutAdminInput>
  }

  export type EnquiryCreateWithoutAdminInput = {
    name: string
    email: string
    father: string
    coName: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    dob: Date | string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    mobileNo: string
    AddressLine: string
    eduqualification: string
    idProof: $Enums.IdType2
    idProofNo: string
    houseRoomNo: string
    squareFit: string
    tradeLicense: string
    bathroom: boolean
    signatureLink: string
    ImageLink: string
    verified?: boolean
    createdAt?: Date | string
    Subscription?: Date | string | null
  }

  export type EnquiryUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    email: string
    father: string
    coName: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    dob: Date | string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    mobileNo: string
    AddressLine: string
    eduqualification: string
    idProof: $Enums.IdType2
    idProofNo: string
    houseRoomNo: string
    squareFit: string
    tradeLicense: string
    bathroom: boolean
    signatureLink: string
    ImageLink: string
    verified?: boolean
    createdAt?: Date | string
    Subscription?: Date | string | null
  }

  export type EnquiryCreateOrConnectWithoutAdminInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutAdminInput, EnquiryUncheckedCreateWithoutAdminInput>
  }

  export type CenterUpsertWithoutAdminInput = {
    update: XOR<CenterUpdateWithoutAdminInput, CenterUncheckedUpdateWithoutAdminInput>
    create: XOR<CenterCreateWithoutAdminInput, CenterUncheckedCreateWithoutAdminInput>
    where?: CenterWhereInput
  }

  export type CenterUpdateToOneWithWhereWithoutAdminInput = {
    where?: CenterWhereInput
    data: XOR<CenterUpdateWithoutAdminInput, CenterUncheckedUpdateWithoutAdminInput>
  }

  export type CenterUpdateWithoutAdminInput = {
    Centername?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Student?: EnrollmentUpdateManyWithoutCenterNestedInput
  }

  export type CenterUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    Centername?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    Student?: EnrollmentUncheckedUpdateManyWithoutCenterNestedInput
  }

  export type EnquiryUpsertWithoutAdminInput = {
    update: XOR<EnquiryUpdateWithoutAdminInput, EnquiryUncheckedUpdateWithoutAdminInput>
    create: XOR<EnquiryCreateWithoutAdminInput, EnquiryUncheckedCreateWithoutAdminInput>
    where?: EnquiryWhereInput
  }

  export type EnquiryUpdateToOneWithWhereWithoutAdminInput = {
    where?: EnquiryWhereInput
    data: XOR<EnquiryUpdateWithoutAdminInput, EnquiryUncheckedUpdateWithoutAdminInput>
  }

  export type EnquiryUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    coName?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    mobileNo?: StringFieldUpdateOperationsInput | string
    AddressLine?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    idProof?: EnumIdType2FieldUpdateOperationsInput | $Enums.IdType2
    idProofNo?: StringFieldUpdateOperationsInput | string
    houseRoomNo?: StringFieldUpdateOperationsInput | string
    squareFit?: StringFieldUpdateOperationsInput | string
    tradeLicense?: StringFieldUpdateOperationsInput | string
    bathroom?: BoolFieldUpdateOperationsInput | boolean
    signatureLink?: StringFieldUpdateOperationsInput | string
    ImageLink?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnquiryUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    coName?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    mobileNo?: StringFieldUpdateOperationsInput | string
    AddressLine?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    idProof?: EnumIdType2FieldUpdateOperationsInput | $Enums.IdType2
    idProofNo?: StringFieldUpdateOperationsInput | string
    houseRoomNo?: StringFieldUpdateOperationsInput | string
    squareFit?: StringFieldUpdateOperationsInput | string
    tradeLicense?: StringFieldUpdateOperationsInput | string
    bathroom?: BoolFieldUpdateOperationsInput | boolean
    signatureLink?: StringFieldUpdateOperationsInput | string
    ImageLink?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentCreateWithoutCenterInput = {
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormCreateNestedOneWithoutEnrollmentInput
    marks?: MarksCreateNestedOneWithoutEnrollmentInput
    amount?: AmountCreateNestedOneWithoutEnrollmentInput
    course: CourseCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutCenterInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    courseId: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedCreateNestedOneWithoutEnrollmentInput
    marks?: MarksUncheckedCreateNestedOneWithoutEnrollmentInput
    amount?: AmountUncheckedCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutCenterInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCenterInput, EnrollmentUncheckedCreateWithoutCenterInput>
  }

  export type EnrollmentCreateManyCenterInputEnvelope = {
    data: EnrollmentCreateManyCenterInput | EnrollmentCreateManyCenterInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCenterInput = {
    email: string
    name: string
    role?: $Enums.Role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enquiry?: EnquiryCreateNestedOneWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutCenterInput = {
    id?: number
    email: string
    name: string
    role?: $Enums.Role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    enquiryid?: number | null
  }

  export type UserCreateOrConnectWithoutCenterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCenterInput, UserUncheckedCreateWithoutCenterInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCenterInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCenterInput, EnrollmentUncheckedUpdateWithoutCenterInput>
    create: XOR<EnrollmentCreateWithoutCenterInput, EnrollmentUncheckedCreateWithoutCenterInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCenterInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCenterInput, EnrollmentUncheckedUpdateWithoutCenterInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCenterInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCenterInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    EnrollmentNo?: IntFilter<"Enrollment"> | number
    IdCardNo?: IntFilter<"Enrollment"> | number
    idCardLink?: StringFilter<"Enrollment"> | string
    admitLink?: StringFilter<"Enrollment"> | string
    certificateLink?: StringFilter<"Enrollment"> | string
    marksheetLink?: StringFilter<"Enrollment"> | string
    imageLink?: StringFilter<"Enrollment"> | string
    CertificateNo?: IntNullableFilter<"Enrollment"> | number | null
    name?: StringFilter<"Enrollment"> | string
    dob?: DateTimeFilter<"Enrollment"> | Date | string
    father?: StringFilter<"Enrollment"> | string
    mother?: StringFilter<"Enrollment"> | string
    address?: StringFilter<"Enrollment"> | string
    dist?: StringFilter<"Enrollment"> | string
    state?: StringFilter<"Enrollment"> | string
    pin?: StringFilter<"Enrollment"> | string
    ps?: StringFilter<"Enrollment"> | string
    po?: StringFilter<"Enrollment"> | string
    vill?: StringFilter<"Enrollment"> | string
    mobileNo?: StringFilter<"Enrollment"> | string
    email?: StringFilter<"Enrollment"> | string
    sex?: EnumSexFilter<"Enrollment"> | $Enums.Sex
    category?: EnumCategoryFilter<"Enrollment"> | $Enums.Category
    nationality?: EnumNationalityFilter<"Enrollment"> | $Enums.Nationality
    idProof?: EnumIdTypeFilter<"Enrollment"> | $Enums.IdType
    idProofNo?: StringFilter<"Enrollment"> | string
    pincode?: StringFilter<"Enrollment"> | string
    eduqualification?: StringFilter<"Enrollment"> | string
    activated?: BoolFilter<"Enrollment"> | boolean
    courseId?: IntFilter<"Enrollment"> | number
    centerid?: IntFilter<"Enrollment"> | number
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    status?: JsonFilter<"Enrollment">
  }

  export type UserUpsertWithoutCenterInput = {
    update: XOR<UserUpdateWithoutCenterInput, UserUncheckedUpdateWithoutCenterInput>
    create: XOR<UserCreateWithoutCenterInput, UserUncheckedCreateWithoutCenterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCenterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCenterInput, UserUncheckedUpdateWithoutCenterInput>
  }

  export type UserUpdateWithoutCenterInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enquiry?: EnquiryUpdateOneWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enquiryid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExamFormCreateWithoutEnrollmentInput = {
    verified?: boolean
    createdAt?: Date | string
    ExamCenterCode: string
    ATI_CODE: string
    practExmdate: string
    theoryExamdate: string
    practExmtime: string
    theoryExmtime: string
    sem: string
  }

  export type ExamFormUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    verified?: boolean
    createdAt?: Date | string
    ExamCenterCode: string
    ATI_CODE: string
    practExmdate: string
    theoryExamdate: string
    practExmtime: string
    theoryExmtime: string
    sem: string
  }

  export type ExamFormCreateOrConnectWithoutEnrollmentInput = {
    where: ExamFormWhereUniqueInput
    create: XOR<ExamFormCreateWithoutEnrollmentInput, ExamFormUncheckedCreateWithoutEnrollmentInput>
  }

  export type MarksCreateWithoutEnrollmentInput = {
    marks: JsonNullValueInput | InputJsonValue
    remarks: $Enums.Remark
    grade: string
    totalMarks: number
    percentage: number
    verified?: boolean
    createdAt?: Date | string
    year: string
    serialNo?: number
  }

  export type MarksUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    marks: JsonNullValueInput | InputJsonValue
    remarks: $Enums.Remark
    grade: string
    totalMarks: number
    percentage: number
    verified?: boolean
    createdAt?: Date | string
    year: string
    serialNo?: number
  }

  export type MarksCreateOrConnectWithoutEnrollmentInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutEnrollmentInput, MarksUncheckedCreateWithoutEnrollmentInput>
  }

  export type AmountCreateWithoutEnrollmentInput = {
    TotalPaid: number
    amountRemain: number
    lastPaymentRecieptno?: string | null
    createdAt?: Date | string
  }

  export type AmountUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    TotalPaid: number
    amountRemain: number
    lastPaymentRecieptno?: string | null
    createdAt?: Date | string
  }

  export type AmountCreateOrConnectWithoutEnrollmentInput = {
    where: AmountWhereUniqueInput
    create: XOR<AmountCreateWithoutEnrollmentInput, AmountUncheckedCreateWithoutEnrollmentInput>
  }

  export type CourseCreateWithoutEnrollmentInput = {
    CName: string
    price: number
    Duration: number
    subjects?: SubjectCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    CName: string
    price: number
    Duration: number
    subjects?: SubjectUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
  }

  export type CenterCreateWithoutStudentInput = {
    Centername: string
    address: string
    code?: number
    admin: UserCreateNestedOneWithoutCenterInput
  }

  export type CenterUncheckedCreateWithoutStudentInput = {
    id?: number
    Centername: string
    adminid: number
    address: string
    code?: number
  }

  export type CenterCreateOrConnectWithoutStudentInput = {
    where: CenterWhereUniqueInput
    create: XOR<CenterCreateWithoutStudentInput, CenterUncheckedCreateWithoutStudentInput>
  }

  export type ExamFormUpsertWithoutEnrollmentInput = {
    update: XOR<ExamFormUpdateWithoutEnrollmentInput, ExamFormUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<ExamFormCreateWithoutEnrollmentInput, ExamFormUncheckedCreateWithoutEnrollmentInput>
    where?: ExamFormWhereInput
  }

  export type ExamFormUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: ExamFormWhereInput
    data: XOR<ExamFormUpdateWithoutEnrollmentInput, ExamFormUncheckedUpdateWithoutEnrollmentInput>
  }

  export type ExamFormUpdateWithoutEnrollmentInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamCenterCode?: StringFieldUpdateOperationsInput | string
    ATI_CODE?: StringFieldUpdateOperationsInput | string
    practExmdate?: StringFieldUpdateOperationsInput | string
    theoryExamdate?: StringFieldUpdateOperationsInput | string
    practExmtime?: StringFieldUpdateOperationsInput | string
    theoryExmtime?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
  }

  export type ExamFormUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamCenterCode?: StringFieldUpdateOperationsInput | string
    ATI_CODE?: StringFieldUpdateOperationsInput | string
    practExmdate?: StringFieldUpdateOperationsInput | string
    theoryExamdate?: StringFieldUpdateOperationsInput | string
    practExmtime?: StringFieldUpdateOperationsInput | string
    theoryExmtime?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
  }

  export type MarksUpsertWithoutEnrollmentInput = {
    update: XOR<MarksUpdateWithoutEnrollmentInput, MarksUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<MarksCreateWithoutEnrollmentInput, MarksUncheckedCreateWithoutEnrollmentInput>
    where?: MarksWhereInput
  }

  export type MarksUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: MarksWhereInput
    data: XOR<MarksUpdateWithoutEnrollmentInput, MarksUncheckedUpdateWithoutEnrollmentInput>
  }

  export type MarksUpdateWithoutEnrollmentInput = {
    marks?: JsonNullValueInput | InputJsonValue
    remarks?: EnumRemarkFieldUpdateOperationsInput | $Enums.Remark
    grade?: StringFieldUpdateOperationsInput | string
    totalMarks?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: StringFieldUpdateOperationsInput | string
  }

  export type MarksUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    marks?: JsonNullValueInput | InputJsonValue
    remarks?: EnumRemarkFieldUpdateOperationsInput | $Enums.Remark
    grade?: StringFieldUpdateOperationsInput | string
    totalMarks?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
  }

  export type AmountUpsertWithoutEnrollmentInput = {
    update: XOR<AmountUpdateWithoutEnrollmentInput, AmountUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<AmountCreateWithoutEnrollmentInput, AmountUncheckedCreateWithoutEnrollmentInput>
    where?: AmountWhereInput
  }

  export type AmountUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: AmountWhereInput
    data: XOR<AmountUpdateWithoutEnrollmentInput, AmountUncheckedUpdateWithoutEnrollmentInput>
  }

  export type AmountUpdateWithoutEnrollmentInput = {
    TotalPaid?: IntFieldUpdateOperationsInput | number
    amountRemain?: IntFieldUpdateOperationsInput | number
    lastPaymentRecieptno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmountUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    TotalPaid?: IntFieldUpdateOperationsInput | number
    amountRemain?: IntFieldUpdateOperationsInput | number
    lastPaymentRecieptno?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpsertWithoutEnrollmentInput = {
    update: XOR<CourseUpdateWithoutEnrollmentInput, CourseUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<CourseCreateWithoutEnrollmentInput, CourseUncheckedCreateWithoutEnrollmentInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentInput, CourseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type CourseUpdateWithoutEnrollmentInput = {
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
    subjects?: SubjectUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
    subjects?: SubjectUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CenterUpsertWithoutStudentInput = {
    update: XOR<CenterUpdateWithoutStudentInput, CenterUncheckedUpdateWithoutStudentInput>
    create: XOR<CenterCreateWithoutStudentInput, CenterUncheckedCreateWithoutStudentInput>
    where?: CenterWhereInput
  }

  export type CenterUpdateToOneWithWhereWithoutStudentInput = {
    where?: CenterWhereInput
    data: XOR<CenterUpdateWithoutStudentInput, CenterUncheckedUpdateWithoutStudentInput>
  }

  export type CenterUpdateWithoutStudentInput = {
    Centername?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    admin?: UserUpdateOneRequiredWithoutCenterNestedInput
  }

  export type CenterUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    Centername?: StringFieldUpdateOperationsInput | string
    adminid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateWithoutCourseInput = {
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormCreateNestedOneWithoutEnrollmentInput
    marks?: MarksCreateNestedOneWithoutEnrollmentInput
    amount?: AmountCreateNestedOneWithoutEnrollmentInput
    center: CenterCreateNestedOneWithoutStudentInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    centerid: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedCreateNestedOneWithoutEnrollmentInput
    marks?: MarksUncheckedCreateNestedOneWithoutEnrollmentInput
    amount?: AmountUncheckedCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutCourseInput = {
    SubName: string
    theoryFullMarks: number
    practFullMarks: number
  }

  export type SubjectUncheckedCreateWithoutCourseInput = {
    id?: number
    SubName: string
    theoryFullMarks: number
    practFullMarks: number
  }

  export type SubjectCreateOrConnectWithoutCourseInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutCourseInput, SubjectUncheckedCreateWithoutCourseInput>
  }

  export type SubjectCreateManyCourseInputEnvelope = {
    data: SubjectCreateManyCourseInput | SubjectCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type SubjectUpsertWithWhereUniqueWithoutCourseInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutCourseInput, SubjectUncheckedUpdateWithoutCourseInput>
    create: XOR<SubjectCreateWithoutCourseInput, SubjectUncheckedCreateWithoutCourseInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutCourseInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutCourseInput, SubjectUncheckedUpdateWithoutCourseInput>
  }

  export type SubjectUpdateManyWithWhereWithoutCourseInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutCourseInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: IntFilter<"Subject"> | number
    SubName?: StringFilter<"Subject"> | string
    theoryFullMarks?: IntFilter<"Subject"> | number
    practFullMarks?: IntFilter<"Subject"> | number
    courseId?: IntFilter<"Subject"> | number
  }

  export type CourseCreateWithoutSubjectsInput = {
    CName: string
    price: number
    Duration: number
    Enrollment?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSubjectsInput = {
    id?: number
    CName: string
    price: number
    Duration: number
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSubjectsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSubjectsInput, CourseUncheckedCreateWithoutSubjectsInput>
  }

  export type CourseUpsertWithoutSubjectsInput = {
    update: XOR<CourseUpdateWithoutSubjectsInput, CourseUncheckedUpdateWithoutSubjectsInput>
    create: XOR<CourseCreateWithoutSubjectsInput, CourseUncheckedCreateWithoutSubjectsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSubjectsInput, CourseUncheckedUpdateWithoutSubjectsInput>
  }

  export type CourseUpdateWithoutSubjectsInput = {
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
    Enrollment?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CName?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Duration?: IntFieldUpdateOperationsInput | number
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type EnrollmentCreateWithoutAmountInput = {
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormCreateNestedOneWithoutEnrollmentInput
    marks?: MarksCreateNestedOneWithoutEnrollmentInput
    course: CourseCreateNestedOneWithoutEnrollmentInput
    center: CenterCreateNestedOneWithoutStudentInput
  }

  export type EnrollmentUncheckedCreateWithoutAmountInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    courseId: number
    centerid: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedCreateNestedOneWithoutEnrollmentInput
    marks?: MarksUncheckedCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutAmountInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutAmountInput, EnrollmentUncheckedCreateWithoutAmountInput>
  }

  export type EnrollmentUpsertWithoutAmountInput = {
    update: XOR<EnrollmentUpdateWithoutAmountInput, EnrollmentUncheckedUpdateWithoutAmountInput>
    create: XOR<EnrollmentCreateWithoutAmountInput, EnrollmentUncheckedCreateWithoutAmountInput>
    where?: EnrollmentWhereInput
  }

  export type EnrollmentUpdateToOneWithWhereWithoutAmountInput = {
    where?: EnrollmentWhereInput
    data: XOR<EnrollmentUpdateWithoutAmountInput, EnrollmentUncheckedUpdateWithoutAmountInput>
  }

  export type EnrollmentUpdateWithoutAmountInput = {
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUpdateOneWithoutEnrollmentNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
    center?: CenterUpdateOneRequiredWithoutStudentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutAmountInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    courseId?: IntFieldUpdateOperationsInput | number
    centerid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUncheckedUpdateOneWithoutEnrollmentNestedInput
  }

  export type EnrollmentCreateWithoutExamformFillupInput = {
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    marks?: MarksCreateNestedOneWithoutEnrollmentInput
    amount?: AmountCreateNestedOneWithoutEnrollmentInput
    course: CourseCreateNestedOneWithoutEnrollmentInput
    center: CenterCreateNestedOneWithoutStudentInput
  }

  export type EnrollmentUncheckedCreateWithoutExamformFillupInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    courseId: number
    centerid: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    marks?: MarksUncheckedCreateNestedOneWithoutEnrollmentInput
    amount?: AmountUncheckedCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutExamformFillupInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutExamformFillupInput, EnrollmentUncheckedCreateWithoutExamformFillupInput>
  }

  export type EnrollmentUpsertWithoutExamformFillupInput = {
    update: XOR<EnrollmentUpdateWithoutExamformFillupInput, EnrollmentUncheckedUpdateWithoutExamformFillupInput>
    create: XOR<EnrollmentCreateWithoutExamformFillupInput, EnrollmentUncheckedCreateWithoutExamformFillupInput>
    where?: EnrollmentWhereInput
  }

  export type EnrollmentUpdateToOneWithWhereWithoutExamformFillupInput = {
    where?: EnrollmentWhereInput
    data: XOR<EnrollmentUpdateWithoutExamformFillupInput, EnrollmentUncheckedUpdateWithoutExamformFillupInput>
  }

  export type EnrollmentUpdateWithoutExamformFillupInput = {
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    marks?: MarksUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUpdateOneWithoutEnrollmentNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
    center?: CenterUpdateOneRequiredWithoutStudentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutExamformFillupInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    courseId?: IntFieldUpdateOperationsInput | number
    centerid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    marks?: MarksUncheckedUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUncheckedUpdateOneWithoutEnrollmentNestedInput
  }

  export type EnrollmentCreateWithoutMarksInput = {
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormCreateNestedOneWithoutEnrollmentInput
    amount?: AmountCreateNestedOneWithoutEnrollmentInput
    course: CourseCreateNestedOneWithoutEnrollmentInput
    center: CenterCreateNestedOneWithoutStudentInput
  }

  export type EnrollmentUncheckedCreateWithoutMarksInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    courseId: number
    centerid: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedCreateNestedOneWithoutEnrollmentInput
    amount?: AmountUncheckedCreateNestedOneWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutMarksInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutMarksInput, EnrollmentUncheckedCreateWithoutMarksInput>
  }

  export type EnrollmentUpsertWithoutMarksInput = {
    update: XOR<EnrollmentUpdateWithoutMarksInput, EnrollmentUncheckedUpdateWithoutMarksInput>
    create: XOR<EnrollmentCreateWithoutMarksInput, EnrollmentUncheckedCreateWithoutMarksInput>
    where?: EnrollmentWhereInput
  }

  export type EnrollmentUpdateToOneWithWhereWithoutMarksInput = {
    where?: EnrollmentWhereInput
    data: XOR<EnrollmentUpdateWithoutMarksInput, EnrollmentUncheckedUpdateWithoutMarksInput>
  }

  export type EnrollmentUpdateWithoutMarksInput = {
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUpdateOneWithoutEnrollmentNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
    center?: CenterUpdateOneRequiredWithoutStudentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutMarksInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    courseId?: IntFieldUpdateOperationsInput | number
    centerid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUncheckedUpdateOneWithoutEnrollmentNestedInput
  }

  export type UserCreateWithoutEnquiryInput = {
    email: string
    name: string
    role?: $Enums.Role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Center?: CenterCreateNestedOneWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutEnquiryInput = {
    id?: number
    email: string
    name: string
    role?: $Enums.Role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    Center?: CenterUncheckedCreateNestedOneWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutEnquiryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnquiryInput, UserUncheckedCreateWithoutEnquiryInput>
  }

  export type UserUpsertWithoutEnquiryInput = {
    update: XOR<UserUpdateWithoutEnquiryInput, UserUncheckedUpdateWithoutEnquiryInput>
    create: XOR<UserCreateWithoutEnquiryInput, UserUncheckedCreateWithoutEnquiryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnquiryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnquiryInput, UserUncheckedUpdateWithoutEnquiryInput>
  }

  export type UserUpdateWithoutEnquiryInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Center?: CenterUpdateOneWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutEnquiryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Center?: CenterUncheckedUpdateOneWithoutAdminNestedInput
  }

  export type EnrollmentCreateManyCenterInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    courseId: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
  }

  export type EnrollmentUpdateWithoutCenterInput = {
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUpdateOneWithoutEnrollmentNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUncheckedUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUncheckedUpdateOneWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateManyWithoutCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: number
    EnrollmentNo?: number
    IdCardNo?: number
    idCardLink?: string
    admitLink?: string
    certificateLink?: string
    marksheetLink?: string
    imageLink: string
    CertificateNo?: number | null
    name: string
    dob: Date | string
    father: string
    mother: string
    address: string
    dist: string
    state: string
    pin: string
    ps: string
    po: string
    vill: string
    mobileNo: string
    email: string
    sex: $Enums.Sex
    category: $Enums.Category
    nationality: $Enums.Nationality
    idProof: $Enums.IdType
    idProofNo: string
    pincode: string
    eduqualification: string
    activated?: boolean
    centerid: number
    createdAt?: Date | string
    status: JsonNullValueInput | InputJsonValue
  }

  export type SubjectCreateManyCourseInput = {
    id?: number
    SubName: string
    theoryFullMarks: number
    practFullMarks: number
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUpdateOneWithoutEnrollmentNestedInput
    center?: CenterUpdateOneRequiredWithoutStudentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    centerid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
    examformFillup?: ExamFormUncheckedUpdateOneWithoutEnrollmentNestedInput
    marks?: MarksUncheckedUpdateOneWithoutEnrollmentNestedInput
    amount?: AmountUncheckedUpdateOneWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: IntFieldUpdateOperationsInput | number
    IdCardNo?: IntFieldUpdateOperationsInput | number
    idCardLink?: StringFieldUpdateOperationsInput | string
    admitLink?: StringFieldUpdateOperationsInput | string
    certificateLink?: StringFieldUpdateOperationsInput | string
    marksheetLink?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    CertificateNo?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dist?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    ps?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    vill?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    nationality?: EnumNationalityFieldUpdateOperationsInput | $Enums.Nationality
    idProof?: EnumIdTypeFieldUpdateOperationsInput | $Enums.IdType
    idProofNo?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    eduqualification?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    centerid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: JsonNullValueInput | InputJsonValue
  }

  export type SubjectUpdateWithoutCourseInput = {
    SubName?: StringFieldUpdateOperationsInput | string
    theoryFullMarks?: IntFieldUpdateOperationsInput | number
    practFullMarks?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubName?: StringFieldUpdateOperationsInput | string
    theoryFullMarks?: IntFieldUpdateOperationsInput | number
    practFullMarks?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubName?: StringFieldUpdateOperationsInput | string
    theoryFullMarks?: IntFieldUpdateOperationsInput | number
    practFullMarks?: IntFieldUpdateOperationsInput | number
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