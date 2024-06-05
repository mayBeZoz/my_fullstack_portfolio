const mongoose = require("mongoose");
const joi = require("joi");

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img:{
        type:String
    }
})

const Skill = mongoose.model("Skill", skillSchema);


const validateCreateSkill = (obj) => {
    const schema = joi.object({
        name: joi.string().required().max(20),
        img: joi.string().required()
    })
    return schema.validate(obj)
}


const validateUpdateSkill = (obj) => {
    const schema = joi.object({
        name: joi.string().max(20),
        img: joi.string()
    })
    return schema.validate(obj)
}

module.exports = {
    Skill,
    validateCreateSkill,
    validateUpdateSkill
}