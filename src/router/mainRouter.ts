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
} from "../controller/mainController";

const router = Router();

router.route("/loginRoute").post(loginFunc);
router.route("/loginCheckRoute").get(loginCheckFunc);
router.route("/logout").get(logoutfunc);
router.route("/signupRoute").post(signupFunc);

router.route("/createCenter").post(createCenter);
router.route("/AllEnrollments").get(AllEnrollments);
router.route("/deActivateEnrollment").post(deActivateEnrollment);
router.route("/ActivateEnrollment").post(ActivateEnrollment);
router.route("/createEnrollment").post(createEnrollment);
router.route("/enrollCheck").post(enrollCheck);

export default router;
