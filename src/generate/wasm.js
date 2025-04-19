
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  role: 'role',
  password: 'password',
  resetToken: 'resetToken',
  resetTokenExpiry: 'resetTokenExpiry',
  enquiryid: 'enquiryid'
};

exports.Prisma.CenterScalarFieldEnum = {
  id: 'id',
  Centername: 'Centername',
  adminid: 'adminid',
  address: 'address',
  code: 'code'
};

exports.Prisma.EnrollmentScalarFieldEnum = {
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

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  CName: 'CName',
  price: 'price',
  Duration: 'Duration'
};

exports.Prisma.SubjectScalarFieldEnum = {
  id: 'id',
  SubName: 'SubName',
  theoryFullMarks: 'theoryFullMarks',
  practFullMarks: 'practFullMarks',
  courseId: 'courseId'
};

exports.Prisma.AmountScalarFieldEnum = {
  id: 'id',
  TotalPaid: 'TotalPaid',
  amountRemain: 'amountRemain',
  lastPaymentRecieptno: 'lastPaymentRecieptno',
  EnrollmentNo: 'EnrollmentNo',
  createdAt: 'createdAt'
};

exports.Prisma.ExamFormScalarFieldEnum = {
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

exports.Prisma.MarksScalarFieldEnum = {
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

exports.Prisma.EnquiryScalarFieldEnum = {
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

exports.Prisma.NoticesScalarFieldEnum = {
  id: 'id',
  heading: 'heading',
  body: 'body',
  upto: 'upto'
};

exports.Prisma.StateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  imgUrl: 'imgUrl'
};

exports.Prisma.DistrictScalarFieldEnum = {
  id: 'id',
  name: 'name',
  DistrictName: 'DistrictName',
  imgUrl: 'imgUrl'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  CENTER: 'CENTER',
  ADMIN: 'ADMIN'
};

exports.Sex = exports.$Enums.Sex = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  TRANSGENDER: 'TRANSGENDER'
};

exports.Category = exports.$Enums.Category = {
  SC: 'SC',
  ST: 'ST',
  GENERAL: 'GENERAL',
  OBC: 'OBC',
  PH: 'PH',
  OTHERS: 'OTHERS'
};

exports.Nationality = exports.$Enums.Nationality = {
  INDIAN: 'INDIAN',
  FOREIGNER: 'FOREIGNER'
};

exports.IdType = exports.$Enums.IdType = {
  aadhaar: 'aadhaar',
  BirthCertificate: 'BirthCertificate',
  Admit: 'Admit'
};

exports.Remark = exports.$Enums.Remark = {
  PASS: 'PASS',
  FAIL: 'FAIL'
};

exports.IdType2 = exports.$Enums.IdType2 = {
  aadhaar: 'aadhaar',
  voter: 'voter',
  drivingLicense: 'drivingLicense'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
