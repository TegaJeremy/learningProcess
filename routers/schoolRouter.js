const express = require('express')
const router = express.Router()
    const {signUpUser,verifyUser, resendVerification,login} = require('../controllers/schoolController')
 const {changePassword} = require('../controllers/password')
router.route("/registerUser").post(signUpUser)
router.route("/verifyUser/:token").post(verifyUser)
router.route("/resendVerification").post(resendVerification)
router.route("/login").post(login)
router.route("/changepassword/:token").post(changePassword)

module.exports = router