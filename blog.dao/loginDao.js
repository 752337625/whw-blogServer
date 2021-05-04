const  db = require('../blog.database/db')

class LoginDao{
  selectLoginMethod(user){
    let  sql  = new db()
    let option = `where password='${user.password}' and userName='${user.userName}'`
    return sql.select('*','blog_user',option)
  }
}
module.exports = LoginDao;