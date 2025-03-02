import { Router } from "express";
import {
  loginFunc,
  loginCheckFunc,
  logoutfunc,
  signupFunc,
  createCenter,
  AllEnrollments,
  deActivateEnrollment,
  ActivateEnrollment,
  createEnrollment,
  enrollCheck,
  generateCertificate,
  generateadmit,
  generateMarksheet,
  generateId,
  createCourse,
  studentLogin,
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
} from "../controller/mainController";
import { ErrorHandler } from "../errhandling";

const router = Router();

router.route("/loginRoute").post(loginFunc);
router.route("/loginCheckRoute").get(loginCheckFunc);
router.route("/logout").get(ErrorHandler(logoutfunc));
router.route("/signupRoute").post(signupFunc);

router.route("/createCenter").post(ErrorHandler(createCenter));
router.route("/AllEnrollments").get(ErrorHandler(AllEnrollments));
router.route("/deActivateEnrollment").post(ErrorHandler(deActivateEnrollment));
router.route("/ActivateEnrollment").post(ErrorHandler(ActivateEnrollment));
router.route("/createEnrollment").post(ErrorHandler(createEnrollment));
router.route("/enrollCheck").post(ErrorHandler(enrollCheck));
router.route("/createCourse").post(ErrorHandler(createCourse));

router.route("/generateCertificate").post(ErrorHandler(generateCertificate));
router.route("/generateadmit").post(ErrorHandler(generateadmit));
router.route("/generateMarksheet").post(ErrorHandler(generateMarksheet));
router.route("/generateId").post(ErrorHandler(generateId));
router.route("/studentLogin").post(ErrorHandler(studentLogin));
router
  .route("/exmformfillupDatafetch")
  .post(ErrorHandler(exmformfillupDatafetch));
router.route("/exmmarksentry").post(ErrorHandler(exmmarksentry));
router.route("/exmformsfetch").get(ErrorHandler(exmformsfetch));
router.route("/marksheetfetch").get(ErrorHandler(marksheetfetch));
router.route("/exmformDisApprove").post(ErrorHandler(exmformDisApprove));
router.route("/exmmarksApprove").post(ErrorHandler(exmmarksApprove));
router.route("/TakeEnquiry").post(ErrorHandler(TakeEnquiry));
router.route("/examFormFillup").post(ErrorHandler(examFormFillup));
router.route("/exmformApprove").post(ErrorHandler(exmformApprove));
router.route("/exmmarksDisApprove").post(ErrorHandler(exmmarksDisApprove));
router.route("/amountFetch").post(ErrorHandler(amountFetch));
router.route("/FetchAllEnquiry").get(ErrorHandler(FetchAllEnquiry));
router.route("/amountEdit").post(ErrorHandler(amountEdit));

export default router;
