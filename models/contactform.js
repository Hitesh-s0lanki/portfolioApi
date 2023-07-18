const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },number:{
        type:Number,
        required:true
    },subject:{
        type:String,
        required:true
    },message:{
        type:String,
        required:true
    }
})


const Contact = mongoose.model('contact',contactSchema)

module.exports = Contact;