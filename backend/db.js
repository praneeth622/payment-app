const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://praneethdevarasetty31:8qgJLzdzAjMvKssx@cluster0.myjyejx.mongodb.net/?retryWrites=true&w=majority",{  
}).then(()=>{
    console.log("Database Connected Sucessfully")
}).catch((err)=>{
    console.log("Error in Connecting to Database")
    console.log(err)
})


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

const User = mongoose.model("paymentUser",userSchema)

module.exports={
    User,
    Account
}