var express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/user-controller');
const feedbackController = require('./controller/feedback-controller');
const cors = require ('cors')

var app = express();
var PORT = 3000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// create 1st route
app.get('/', function(req, res){
    
    res.status(200).send('dominatrix');

});

// create 2nd route

app.post('/createUser',userController)
app.post('/createFeedback',feedbackController)

app.listen(PORT, function(){
    console.log('Server is running on PORT:',PORT);
});