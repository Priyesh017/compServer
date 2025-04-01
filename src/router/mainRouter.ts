import { Router } from "express";
import {
  createCenter,
  AllEnrollments,
  deActivateEnrollment,
  ActivateEnrollment,
  createEnrollment,
  generateCertificate,
  generateadmit,
  generateMarksheet,
  generateId,
  createCourse,
  exmformfillupDatafetch,
  exmmarksentry,
  exmformsfetch,
  marksheetfetch,
  exmformDisApprove,
  exmmarksApprove,
  TakeEnquiry,
  examFormFillup,
  exmformApprove,
  exmmarksDisApprove,
  amountFetch,
  FetchAllEnquiry,
  amountEdit,
  VerifyEnquiry,
  noticecreate,
  noticefetch,
  subjectAdd,
  ResetPassword,
  ChangePassword,
  SendResetLink,
  Coordinator_Update,
  Certi_fetch,
} from "../controller/mainController.js";
import { ErrorHandler } from "../errhandling.js";
import {
  adminAuthCheckFn,
  centerAuthCheckFn,
  otpLimiter,
} from "../middleware.js";
import {
  loginFunc,
  loginCheckFunc,
  logoutfunc,
  signupFunc,
  studentLogin,
} from "../controller/authController.js";

const router = Router();
// auth route
router.route("/loginRoute").post(loginFunc);
router.route("/loginCheckRoute").get(loginCheckFunc);
router.route("/logout").get(ErrorHandler(logoutfunc));
router.route("/signupRoute").post(signupFunc);
router.route("/studentLogin").post(ErrorHandler(studentLogin));

router.route("/createCenter").post(ErrorHandler(createCenter));
router
  .route("/AllEnrollments")
  .get(centerAuthCheckFn, ErrorHandler(AllEnrollments));
router
  .route("/createEnrollment")
  .post(centerAuthCheckFn, ErrorHandler(createEnrollment));
router.route("/createCourse").post(ErrorHandler(createCourse));
router
  .route("/exmformfillupDatafetch")
  .post(centerAuthCheckFn, ErrorHandler(exmformfillupDatafetch));
router.route("/exmmarksentry").post(ErrorHandler(exmmarksentry));
router.route("/exmformsfetch").get(ErrorHandler(exmformsfetch));
router.route("/marksheetfetch").get(ErrorHandler(marksheetfetch));
router.route("/TakeEnquiry").post(ErrorHandler(TakeEnquiry));
router.route("/examFormFillup").post(ErrorHandler(examFormFillup));
router.route("/amountFetch").post(centerAuthCheckFn, ErrorHandler(amountFetch));
router.route("/FetchAllEnquiry").get(ErrorHandler(FetchAllEnquiry));
router.route("/amountEdit").post(ErrorHandler(amountEdit));

router.route("/noticecreate").post(ErrorHandler(noticecreate));
router.route("/noticefetch").get(ErrorHandler(noticefetch));
router.route("/ResetPassword").post(otpLimiter, ErrorHandler(ResetPassword));
router.route("/ChangePassword").post(otpLimiter, ErrorHandler(ChangePassword));
router.route("/SendResetLink").post(ErrorHandler(SendResetLink));
router.route("/subjectAdd").post(ErrorHandler(subjectAdd));
router.route("/Coordinator_Update").post(ErrorHandler(Coordinator_Update));
router.route("/Certi_fetch").post(ErrorHandler(Certi_fetch));

//admin router

router
  .route("/VerifyEnquiry")
  .get(adminAuthCheckFn, ErrorHandler(VerifyEnquiry));
router
  .route("/exmformApprove")
  .post(adminAuthCheckFn, ErrorHandler(exmformApprove));
router
  .route("/exmformDisApprove")
  .post(adminAuthCheckFn, ErrorHandler(exmformDisApprove));
router
  .route("/exmmarksApprove")
  .post(adminAuthCheckFn, ErrorHandler(exmmarksApprove));
router
  .route("/exmmarksDisApprove")
  .post(adminAuthCheckFn, ErrorHandler(exmmarksDisApprove));
router
  .route("/generateCertificate")
  .post(adminAuthCheckFn, ErrorHandler(generateCertificate));
router
  .route("/generateadmit")
  .post(adminAuthCheckFn, ErrorHandler(generateadmit));
router
  .route("/generateMarksheet")
  .post(adminAuthCheckFn, ErrorHandler(generateMarksheet));
router.route("/generateId").post(adminAuthCheckFn, ErrorHandler(generateId));
router
  .route("/deActivateEnrollment")
  .post(adminAuthCheckFn, ErrorHandler(deActivateEnrollment));
router
  .route("/ActivateEnrollment")
  .post(adminAuthCheckFn, ErrorHandler(ActivateEnrollment));

export default router;
