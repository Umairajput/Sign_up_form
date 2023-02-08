const express = require("express")
const router = express.Router()
// const userRegister = require("./userController")
const register = require("./userController")


router.route("/register").post(register)

module.exports = router