const mongoose = require('mongoose')
const { string } = require('zod')

mongoose.connect("mongodb+srv://praneethdevarasetty31:8qgJLzdzAjMvKssx@cluster0.myjyejx.mongodb.net/?retryWrites=true&w=majority",{  
}).then(()=>{
    console.log("Database Connected Sucessfully")
}).catch((err)=>{
    console.log("Error in Connecting to Database")
    console.log(err)
})

const userSchema = mongoose.Schema({
    username:{
        type:string,
        required:true
    },
    firstname:{
        type:string,
        required:true
    },
    lastname:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    },

})

const User = mongoose.Model("paymentUser",userSchema)

module.exports={
    User
}