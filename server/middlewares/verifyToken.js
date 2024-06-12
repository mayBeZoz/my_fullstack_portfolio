const jwt = require("jsonwebtoken");
const AppError = require('../utils/appError');
const StatusCodes = require('../utils/statusCodes');

const verifyToken = (req,res,next) => {
    const token = req.headers.token
    console.log('token is : ',token);
    if (token) {
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.admin = decoded
            next()
        }catch (err) {
            throw new AppError('user not authorized',400,StatusCodes.authorization)
        }
    }else {
        throw new AppError('user not authorized : no token provided',400,StatusCodes.authorization)
    }
}


module.exports = verifyToken;