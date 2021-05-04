const  RegisterController =require('../../blog.controller/registerController')
const express = require('express');
const router = express.Router();
router.post('/insert', function(req, res) {
   const a =new RegisterController()
   let user = req.body
    a.insertRegister(user).then(result =>{
       res.json(result)
    }).catch(err=>{
       res.json(err)
    })
});

module.exports = router;

