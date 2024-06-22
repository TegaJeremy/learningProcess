const express = require ('express')
const router = express.Router()
const{ registerUser,getAll,getOne}= require('../controllers/schollController')
 router.post('/registerUser',registerUser)
 router.route("/getAll").get(getAll)
 router.route("/getOne/:userId").get(getOne)

module.exports= router