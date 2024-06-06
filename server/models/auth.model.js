const mongoose = require("mongoose");
const joi = require("joi");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password:{
        type :String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    tokens:{
        type:[String]
    }
})

const Admin = mongoose.model("Admin", adminSchema);

const validateUpdateAdmin = (obj) => {
    const schema = joi.object({
        name: joi.string().max(23),
        password:joi.string().max(20).min(5),
        email:joi.string().min(9).max(30),
    })
    return schema.validate(obj)
}
const validateLogin = (obj) => {
    const schema = joi.object({
        password:joi.string().required().min(5),
        email:joi.string().required().max(30),
    })
    return schema.validate(obj)
}
module.exports = {
    Admin,
    validateUpdateAdmin,
    validateLogin
}