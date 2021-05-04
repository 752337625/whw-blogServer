const LoginServerImp=require('../blog.serverImp/loginServerImp')
class LoginController{
  selectLogin(user){
    let  login = new LoginServerImp()
    return login.selectLogin(user)
  }
}
module.exports = LoginController;