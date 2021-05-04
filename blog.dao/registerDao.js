const  db = require('../blog.database/db')
class RegisterDao{
  insertRegisterMethod(user){
    let  sql  = new db()
    let keysArr = Object.keys(user)
    let values=``
    keysArr.forEach((i,index)=>{
      if(keysArr.length-1=== index){
         values+=`'${user[i]}'`
       }else{
         values+=`'${user[i]}',`
       }
    })
    let keys =keysArr.join(',')
    return sql.insert('blog_user',keys,values)
  }
}

module.exports = RegisterDao;