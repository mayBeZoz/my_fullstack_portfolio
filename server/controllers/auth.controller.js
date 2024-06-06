const controllerHandler = require('../middlewares/controllerHandler')
const {Admin,validateUpdateAdmin, validateLogin} = require('../models/auth.model') 
const AppError = require('../utils/appError');
const StatusCodes = require('../utils/statusCodes');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class AdminController {
    static getAdmin = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const admin = Admin.findById({_id:id})
            if (admin) {
                res.status(200).json({
                    data:admin,
                    status_code:1,
                    message:'success getting admin'
                })
            }else {
                throw new AppError('admin not found',404,StatusCodes.notFound)
            }
        }
    )

    static updateAdmin = controllerHandler(
        async (req,res,next) => {
            const id = req.params.id
            const body = req.body
            const {error} = validateUpdateAdmin(body)
            if (!error) {   
                const {name,email,password} = body
                const newValues = {}
                if (name)
                    newValues.name = name
                if (email)
                    newValues.email = email
                if (password)
                    newValues.password =  password

                const doc = await Admin.findOneAndUpdate(
                    {_id:id},
                    {$set:newValues},
                    {new:true}
                )

                if (doc) {
                    res.status(200).json({
                        data:doc,
                        status_code:1,
                        message:'admin data updated successfully'
                    })
                }else {
                    throw new AppError('error on updating admin data')

                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        }
    )

    static login = controllerHandler(
        async (req,res,next) => {
            const body = req.body
            const {error} = validateLogin(body)
            if (!error) {   
                const {email,password} = body
                const admin = await Admin.findOne({email})
                if (admin) {
                    const validPassword = await bcrypt.compare(
                        password,
                        admin.password
                    );
                    if (validPassword) {
                        const token = jwt.sign({
                            id:admin._id,
                            email:admin.email
                        },process.env.JWT_SECRET_KEY)
                        admin.tokens.push(token)
                        const data = {
                            email:admin.email,
                            token:token,
                            name:admin.name,
                        }
                        res.status(200).json({
                            data,
                            status_code:1,
                            message:'success login'
                        })
                    }else {
                        throw new AppError('wrong email or password',400,StatusCodes.validation)
                    }
                }else {
                    throw new AppError('admin not found',404,StatusCodes.notFound)
                }
            }else {
                throw new AppError(`validation error : ${error}`,400,StatusCodes.validation)
            }
        }
    )

    static getPassword = controllerHandler(
        async (req,res,next) =>{
            const password = req.body.password
            const hashedPassword = await bcrypt.hash(password,12)
            res.status(200).json({
                data:hashedPassword,
                status_code:1,
                message:'success hashing password'
            })
        }
    )

}


module.exports = AdminController