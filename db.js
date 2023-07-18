

const mongoose = require('mongoose')

const connectMongoose = async () =>{
    const Mongo_Url = 'mongodb+srv://hiteshsolanki4623:hitesh123@cluster0.kbc1sfn.mongodb.net/portfolio?retryWrites=true&w=majority'
    try{
        mongoose.set('strictQuery', true)
        await mongoose.connect(Mongo_Url,()=>{
            console.log("Connected to database safely")
        })
    }catch(err){
        console.error(err.message)
    }
}

module.exports = connectMongoose;