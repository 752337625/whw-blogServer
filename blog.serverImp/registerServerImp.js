const RegisterDao=require( '../blog.dao/registerDao')
class RegisterSeverImp {
  insertRegister(user){
   let  register = new RegisterDao()
   return register.insertRegisterMethod(user)
  }
}
module.exports = RegisterSeverImp;
