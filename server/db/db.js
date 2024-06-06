const mongoose = require( "mongoose")


async function databaseConnection () {
     
    const URI = process.env.MONGO_URI
    mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        console.log("connected to the database successfully")
    })
    .catch((error)=> {
        console.log(`error connecting to the database ================= ${error}`)
    });
};




module.exports = {
    databaseConnection
}