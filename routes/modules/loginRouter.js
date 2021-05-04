const  LoginController =require('../../blog.controller/loginController')
const express = require('express');
const router = express.Router();
router.get('/select', function(req, res) {
   const a =new LoginController()
   let user = req.query
   a.selectLogin(user).then(result =>{
      req.session.login=true
      res.json(result)
   }).catch(err=>{
      res.json(err)
   })
});

module.exports = router;

