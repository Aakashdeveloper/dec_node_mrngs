const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('./UserSchema');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())

///get All User
router.get('/users',(req,res) => {
    User.find({},(err,user) => {
        if(err) throw err;
        res.send(user)
    })
});

//Register
router.post('/register',(req,res) =>{
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        password:hashpassword,
        email:req.body.email,
        role:req.body.role?req.body.role:'User'
    },(err,user)=>{
        if(err) return res.status(500).send('Error')
        res.status(200).send('Registration success')
    })
});

//loginuser
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.status(500).send('Error while login');
        if(!user) return res.status(400).send('No User Found Register First');
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) return res.status(401).send('Invalid Password');
            var token = jwt.sign({id:user._id},config.secert,{expiresIn:86400});
            res.send({auth:true,token:token})
        }
    })
})

module.exports = router;