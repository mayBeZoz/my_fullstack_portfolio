require('dotenv').config({path:'./config.env'});
const cors = require('cors')
const {databaseConnection} = require('./db/db')
const StatusCodes = require('./utils/statusCodes')
const AppError = require('./utils/appError');




const express = require('express');
const app = express()
 

databaseConnection()
const corsOptions = {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'token'], 
    optionsSuccessStatus: 204 
};
  
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



const projectRouter = require('./routes/project.route');
const skillsRouter = require('./routes/skill.route');
const authRouter = require('./routes/auth.route');
const infoRouter =  require('./routes/infos.route')

app.use('/api/projects',projectRouter)
app.use('/api/skills',skillsRouter)
app.use('/api/auth',authRouter)
app.use('/api/infos',infoRouter)
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

