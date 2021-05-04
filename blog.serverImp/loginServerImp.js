const LoginDao=require( '../blog.dao/loginDao')
class LoginServerImp{
      selectLogin(user){
        let login = new LoginDao(user)
        return login.selectLoginMethod(user)
      }
}
module.exports = LoginServerImp;
