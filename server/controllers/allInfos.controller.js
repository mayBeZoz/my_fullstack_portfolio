const controllerHandler = require('../middlewares/controllerHandler')
const {AllInfo,validateCreateInfo,validateUpdateInfo} = require('../models/allInfos.model')
const AppError = require('../utils/appError');
const StatusCodes = require('../utils/statusCodes');


class AllInfosController {

    static getInfoById = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const info = await AllInfo.findById(id).populate('services.technologies').exec()
            if (info) {
                res.status(200).json({
                    data:info,
                    status_code:1,
                    message:'success getting info'
                })
            }else {
                throw new AppError('info not found',404,StatusCodes.notFound)
            }
        }
    )

    static updateInfoById = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const body = req.body
            const {error} = validateUpdateInfo(body)
            if (!error) {
                const {services,socials,about,contacts,isChecked} = body
                const newValues = {}

                if (services)
                    newValues.services = services
                if (socials)
                    newValues.socials = socials
                if (about)
                    newValues.about = about
                if (contacts)
                    newValues.contacts = contacts
                if (isChecked)
                    newValues.isChecked = isChecked
                const doc = await AllInfo.findOneAndUpdate(
                    {_id:id},
                    {$set:newValues},
                    {new:true}
                )
                if (doc) {
                    res.status(200).json({
                        data:doc,
                        status_code:1,
                        message:'info updated successfully'
                    })
                }else {
                    throw new AppError('error on updating info')
                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        }
    )

    static createInfo = controllerHandler(
        async (req,res,next) => {
            const body = req.body 
            const {error} = validateCreateInfo(body)

            if (!error) {
                const info = await AllInfo.create(body)
                await info.save()
                if (info) {
                    res.status(201).json({
                        data:info,
                        status_code:1,
                        message:'info created successfully'
                    })
                }else {
                    throw new AppError('internal server error creating the info')
                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        } 
    )

    static getAllInfos = controllerHandler(
        async (req,res,next) => {
            const infos = await AllInfo.find({}).populate('services.technologies').exec()
            if (infos) {
                res.status(200).json({
                    data:infos,
                    status_code:1,
                    message:'success getting all the infos'
                })
            }else {
                throw new AppError('error getting the infos',404,StatusCodes.notFound)
            }
        }
    ) 

    static uploadInfoResume = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const info = await AllInfo.findById(id)
            const file = req.file
    
            if (info) {
                if (file) {
                    info.resume.resumeBuffer = file.buffer
                    info.resume.mimeType = file.mimetype
                    try {
                        await info.save()
                        res.status(200).json({
                            data:info,
                            status_code:1,
                            message:'info resume added successfully'
                        })
                    }catch (err) {
                        throw new AppError('error on adding info resume')
                    }
                }
            }else {
                throw new AppError('no info with this id',404,StatusCodes.notFound)
            }
        }
    )

    static deleteInfoById = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const info = await AllInfo.findByIdAndDelete(id)
            if (info) {
                res.status(200).json({
                    data:info,
                    status_code:1,
                    message:'info deleted successfully'
                })
            }else {
                throw new AppError('error on deleting info')
            }
        }
    )

    static uploadInfoPersonalImage = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const info = await AllInfo.findById(id)
            const file = req.file
    
            if (info) {
                if (file) {
                    info.personalImage.imgBuffer = file.buffer
                    info.personalImage.mimeType = file.mimetype
                    try {
                        await info.save()
                        res.status(200).json({
                            data:info,
                            status_code:1,
                            message:'info personal image added successfully'
                        })
                    }catch (err) {
                        throw new AppError('error on adding info personal image')
                    }
                }
            }else {
                throw new AppError('no info with this id',404,StatusCodes.notFound)
            }
        }
    )

    static getInfoResume = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const info = await AllInfo.findById(id)

            if (info) {
                const resume = info.resume
                if (resume.resumeBuffer) {
                    res.set('Content-Type',resume.mimeType)
                    res.send(resume.resumeBuffer)
                }
            }else {
                throw new AppError('no info with this id',404,StatusCodes.notFound)
            }
        }
    )


    static getInfoPersonalImage = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const info = await AllInfo.findById(id)

            if (info) {
                const img = info.personalImage
                if (img.resumeBuffer) {
                    res.set('Content-Type',img.mimeType)
                    res.send(img.imgBuffer)
                }
            }else {
                throw new AppError('no info with this id',404,StatusCodes.notFound)
            }
        }
    )
}


module.exports = AllInfosController;