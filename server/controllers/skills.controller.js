const controllerHandler = require('../middlewares/controllerHandler')
const {Skill,validateCreateSkill,validateUpdateSkill} = require('../models/skill.model')
const AppError = require('../utils/appError');
const StatusCodes = require('../utils/statusCodes');



class SkillsController {
    static getSkills = controllerHandler(
        async (req,res,next) => {
            const skills = await Skill.find({})
            if (Boolean(skills)) {
                res.status(200).json({
                    data:skills,
                    status_code:1,
                    message:'success getting skills'
                })
            }else {
                throw new AppError('cannot get skills',404,StatusCodes.notFound)
            }
        }
    )
    static addSkill =  controllerHandler(
        async (req,res,next) => {
            const body = req.body
            const {error} = validateCreateSkill(body)
            if (!error) {
                const skill = await Skill.create(body)
                await skill.save()
                
                if (skill) {
                    res.status(201).json({
                        data:skill,
                        status_code:1,
                        message:'success adding skill'
                    
                    })
                } else {
                    throw new AppError('internal server error creating the skill')
                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        }
    )
    static updateSkill = controllerHandler(
        async (req,res,next) => {
            const body = req.body
            const {error} = validateUpdateSkill(body)
            if (!error) {
                const id = req.params.id
                const {name,img} = req.body
                const newValues = {}
                if (name) 
                    newValues.name = name
                    
                const doc = await Skill.findOneAndUpdate(
                    {_id:id},
                    {$set:newValues},
                    {new:true}
                )
                if (doc) {
                    res.status(200).json({
                        data:doc,
                        status_code:1,
                        message:'project updated successfully'
                    })
                } else {
                    throw new AppError('internal server error creating the skill')
                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        }
    )
    static deleteSkill = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const skill = await Skill.findByIdAndDelete(id)
            if (skill) {
                res.status(200).json({
                    data:skill,
                    status_code:1,
                    message:'skill deleted successfully'
                })
            }else {
                throw new AppError('error on deleting skill')
            }
        }
    )

    static uploadSkillImage = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const file = req.file
            const skill = await Skill.findById(id)
            if (skill) {
                if (file) {
                    skill.imgBuffer = file.buffer
                    skill.mimeType = file.mimetype
                    try {
                        await skill.save()
                        res.status(200).json({
                            data:skill,
                            status_code:1,
                            message:'skill image updated successfully'
                        })
                    }catch (err) {
                        throw new AppError('error on updating skill image')
                    }
                }
            }else {
                throw new AppError('no skill with this id',404,StatusCodes.notFound)
            }

        }
    )

    static getSkillImage = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const skill = await Skill.findById(id)

            if (skill) {
                if (skill) {
                    res.set('Content-Type',skill.mimeType)
                    res.send(skill.imgBuffer)
                }else {
                    throw new AppError('cannot get skill image',404,StatusCodes.notFound)
                }
            }else {
                throw new AppError('no skill with this id',404,StatusCodes.notFound)
            }

        }
    )
}


module.exports = SkillsController