const schoolModel = require('../models/schoolModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const changePassword = async (req,res)=>{
try {
    const {token} = req.params
    console.log('i don reach here o')
    const {oldPassword ,newPassword, confirmNewPassword} = req.body
    console.log('i don reach here o 2')
    const decodedToken = jwt.verify(token, process.env.secret_key, )
    const userId = decodedToken.userId
    const user = await schoolModel.findById(userId)
    if(!user){
        return res.status(404).json({message:'user not found'})
    }
    console.log('i don reach here o 3')
    const matchedPassword = await bcrypt.compare(oldPassword, user.password)
    if(!matchedPassword){
         return res.status(400).json({message:'invalid password'})
     }
     if(newPassword !== confirmNewPassword){
        return res.status(400).json({message:'new password does dont match  confirm new password'})
     }

     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hashSync(newPassword, salt)

    user.password = hashedPassword
    await user.save()
    return res.status(200).json({message:'changed success'})
} catch (error) {
   return res.status(error.message) 
}
}


module.exports= {
    changePassword
}