require('dotenv').config({path:'./config.env'});
const cors = require('cors')
const {databaseConnection} = require('./db/db')
const StatusCodes = require('./utils/statusCodes')
const AppError = require('./utils/appError');



const express = require('express');
const app = express()
 

databaseConnection()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



const projectRouter = require('./routes/project.route');
const skillsRouter = require('./routes/skill.route');
const authRouter = require('./routes/auth.route');

app.use('/api/projects',projectRouter)
app.use('/api/skills',skillsRouter)
app.use('/api/auth',authRouter)

app.use((err,req,res,next)=>{
    res.status(err.response_code|| 500).json({
        status_code:err.status_code || StatusCodes.internalError,
        error:(err instanceof AppError) ? {} : err,
        message:err?.message
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})

