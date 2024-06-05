const controllerHandler = require('../middlewares/controllerHandler')
const {Project,validateCreateProject,validateUpdateProject} = require('../models/project.model')
const AppError = require('../utils/appError');
const StatusCodes = require('../utils/statusCodes');

class ProjectController {
    static getProjects = controllerHandler(
        async (req,res,next) => {
        
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            const totalProjects = await Project.countDocuments({});
            const totalPages = Math.ceil(totalProjects / limit);

            const projects = await Project.find({})
            .skip(skip).limit(limit)
            .populate('technologies').exec()
            
            if (Boolean(projects)) {
                res.status(200).json({
                    data:{
                        projects,
                        total_pages: totalPages,
                        current_page: page
                    },
                    status_code:1,
                    message:'success getting projects'
                })
            }else {
                throw new AppError('cannot get projects',404,StatusCodes.notFound)
            }
        }
    )
    static getProjectById = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const project = await Project.findById(id).populate('technologies').exec()
            if (project) {
                res.status(200).json({
                    data:project,
                    status_code:1,
                    message:'success getting project'
                })
            }else {
                throw new AppError('project not found',404,StatusCodes.notFound)
            }
        }
    )

    static createProject = controllerHandler(
        async (req,res,next) => {
            const body = req.body
            const {error} = validateCreateProject(body)
            if (!error) {
                const project = await Project.create(body)
                await project.save()
                if (project) {
                    res.status(201).json({
                        data:project,
                        status_code:1,
                        message:'project created successfully'
                    })
                }else {
                    throw new AppError('internal server error creating the project')
                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        }
    )

    static updateProject = controllerHandler(
        async (req,res,next) => {
            const body = req.body
            const {error} = validateUpdateProject(body)
            if (!error) {
                const {img,name,description,technologies,order,subDescription,client,date} = req.body
        
                const id = req.params.id
                const newValues = {}
                if (img)
                    newValues.img = img
                if (name)
                    newValues.name = name
                if (description)
                    newValues.description = description
                if (subDescription)
                    newValues.subDescription = subDescription
                if (client)
                    newValues.client = client
                if (date)
                    newValues.date = date 
                if (order)
                    newValues.order = +order
                if (technologies)
                    newValues.technologies = technologies

                const doc = await Project.findOneAndUpdate(
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
                }else {
                    throw new AppError('error on updating project')
                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        }
    )


    static deleteProject = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const project = await Project.findByIdAndDelete(id)
            if (project) {
                res.status(200).json({
                    data:project,
                    status_code:1,
                    message:'project deleted successfully'
                })
            }else {
                throw new AppError('error on deleting project')
            }
        }
    )
}


module.exports = ProjectController;