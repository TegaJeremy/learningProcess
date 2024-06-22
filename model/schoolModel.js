const mongoose = require('mongoose')

const SchoolSchema = new mongoose.Schema({
 name:{type:String, require:true},
 email:{type:String, require:true},
 address:{type:String, require:true},
 phoneNumber:{type:String, require:true},
 scroe:{type:Number,default:0},
 isVerified:{type:Boolean,default:false}

})
const userModel = mongoose.model("user", SchoolSchema )
module.exports = userModel
