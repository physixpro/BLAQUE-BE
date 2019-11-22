const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb+srv://root:root@cluster0-vzlgn.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log("CONNECTED TO DB")).catch(err => console.log(err))

const feedbackSchema= new Schema({
    content: String
})

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports=Feedback