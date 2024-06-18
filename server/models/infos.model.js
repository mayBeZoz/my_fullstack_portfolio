const mongoose = require("mongoose");
const joi = require("joi");
const infoSchema = new mongoose.Schema({
    socials:{
        type:[{name:String,href:String}],
    },
    contacts:{
        type:{
            email:String,
            phone:String,
        }
    },
    resume:{
        type:{
            resumeBuffer:Buffer||null,
            mimeType:String||null
        },
    },
    about:String||null,
    personalImage:{
        type: {
            imageBuffer:Buffer||null,
            mimeType:String||null
        }
    },
    services: {
        type : [{
            name:String,
            technologies:[String]
        }]
    },
    isSelected:{
        type:Boolean,
        default:false
    }

})



const Info = mongoose.model("Info", infoSchema);


const validateCreateInfo = (obj) => {
    const schema = joi.object({
        socials: joi.array().items(
            joi.object({
                name: joi.string().required(),
                href: joi.string().uri().required(),
            })
        ).required(),
        contacts: joi.object({
            email: joi.string().email().required(),
            phone: joi.string().required()
        }).required(),
        about: joi.string().allow(null).required(),
        services: joi.array().items(
            joi.object({
                name: joi.string().required(),
                technologies:joi.array()
            })
        ).required()
    })

    return schema.validate(obj)
}


const validateUpdateInfo = (obj) => {
    const schema = joi.object({
        socials: joi.array().items(
            joi.object({
                name: joi.string().required(),
                href: joi.string().uri().required(),
            })
        ),
        contacts: joi.object({
            email: joi.string().email().required(),
            phone: joi.string().required()
        }),
        about: joi.string().allow(null),
        services: joi.array().items(
            joi.object({
                name: joi.string().required(),
                technologies:joi.array()
            })
        )
    })

    return schema.validate(obj)
}

module.exports = {
    Info,
    validateCreateInfo,
    validateUpdateInfo
} 