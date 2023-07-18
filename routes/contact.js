const express = require('express')
const Contact = require('../models/contactform')
const route = express.Router()

route.post("/contact",async(req,res)=>{
    try{
        const {UserName,email,number,subject,message} = req.body
        if(UserName && email && number && subject && message){
            const contact = new Contact({
                UserName,email,number,subject,message
            })
            const saveContact = await contact.save()
            res.send(saveContact)
        }
        else{
            res.status(500).send("Internal Server Error");
        }
    }catch(Err){
        res.send(Err.message)
        res.status(500).send("Internal Server Error");
    }
})  


module.exports = route