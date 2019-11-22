const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb+srv://root:root@cluster0-vzlgn.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log("CONNECTED TO DB")).catch(err => console.log(err))

const userSchema= new Schema({
    name: String,
    email: String,
    hometown: String,
    
})



const User = mongoose.model('User', userSchema)

module.exports=User