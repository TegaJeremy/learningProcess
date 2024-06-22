const userModel = require('../model/schoolModel')

const registerUser = async (req,res)=>{
    try {
        const {name,email,address,phoneNumber} = req.body
        const findUser = await userModel.findOne({email})
        if(findUser){
            return res.status(404).json({message:'user with this email alrady registered'})
        }
         const newUser  = new userModel({
            name,
            email,
            address,
            phoneNumber
         })   
         newUser.scroe = 50
         newUser.isVerified = true
         await newUser.save()
         res.status(200).json({message:'user registered successfully', data:newUser})     
        
    }catch (error) {
        res.status(500).json(error.message)
    }
}

const getAll = async (req, res)=>{
    try {
        const getAllUsers = await userModel.find()
        res.status(200).json({message:'successful',getAllUsers })
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getOne = async (req,res)=>{
    try {
        const userId = req.params.userId
        const getOneUser = await userModel.findById({_id:userId})
        if(!getOneUser){
            return res.status(404).json({message:'invalid id'})
        }
        res.status(200).json({message:'successful',getOneUser })
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports={registerUser,
    getAll,
    getOne
}