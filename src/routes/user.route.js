
import { Router } from "express";

import { userReg , getAllUsersDetail,deleteUser,getUserDetail,updateUser} from "../controller/users.controller.js";
userReg
const router = Router();


router.route('/reg').post(userReg);
router.route('/getUsers').get(getAllUsersDetail);
router.route('/userDelete/:id').delete(deleteUser);
router.route('/getUsers/:id').get(getUserDetail);
router.route('/getUsers/:id').put(updateUser);


export default router;