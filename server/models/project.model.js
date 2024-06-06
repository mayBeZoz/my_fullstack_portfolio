const mongoose = require("mongoose");
const joi = require("joi");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    client:{
        type:String
    },
    imgBuffer:{
        type:Buffer||null
    },
    mimeType:{
        type :String || null
    },
    subDescription: {
        type:String,
        required:true
    },
    order:{
        type:Number,
        default:0,
        unique:true
    },
    technologies:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Skill',
        default:[]
    }
})

const Project = mongoose.model("Project", projectSchema);


const validateCreateProject = (obj) => {
    const schema = joi.object({
        name: joi.string().required().max(23),
        description: joi.string().required(),
        subDescription:joi.string().required().max(50),
        date: joi.string().required(),
        client: joi.string().required().max(20),
        order:joi.number(),
        technologies:joi.array()
    })
    return schema.validate(obj)
}

const validateUpdateProject = (obj) => {
    const schema = joi.object({
        name: joi.string().max(23),
        description: joi.string(),
        subDescription:joi.string().max(50),
        date: joi.string(),
        client: joi.string().max(20),
        order:joi.number(),
        technologies:joi.array()
    })
    return schema.validate(obj)
}

module.exports = {
    Project,
    validateCreateProject,
    validateUpdateProject
}