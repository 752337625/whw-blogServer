const RegisterSeverImp=require('../blog.serverImp/registerServerImp')
class RegisterController{
  insertRegister(user){
    let  register = new RegisterSeverImp()
    return register.insertRegister(user)
  }
}
module.exports = RegisterController;
