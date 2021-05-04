/**
 * router,
 * 只需在modules文件夹下添加对应的文件即可，此文件不需要再做修改
 */
var registerRouter = require('./modules/registerRouter');
var loginRouter = require('./modules/loginRouter');
module.exports =function (app) {
  app.use('/register',registerRouter)
  app.use('/login',loginRouter)
}
