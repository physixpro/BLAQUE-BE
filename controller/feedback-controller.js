const Feedback= require('../models/Feedback-model')

function create(req,res){
    console.log('body', req.body);
    Feedback.create({ content:req.body.content},(err, feedback) => {
        if(err) return handleError(err);
        console.log(`${feedback} created `)
        res.status(200).send('Content Saved')
     })
};

module.exports=create