const User= require('../models/user-model')

function create(req,res){
    console.log('body', req.body);
    User.create({ name:req.body.name, email:req.body.email,hometown:req.body.hometown},(err, user) => {
        if(err) return handleError(err);
        console.log(`${user} created `)
        res.status(200).send('Keagan Connected')
     })
};

module.exports=create