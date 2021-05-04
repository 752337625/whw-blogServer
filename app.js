var express = require('express');//加载express模块
var path = require('path');//路径模块
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var cookieSession = require('cookie-session')
var lessMiddleware = require('less-middleware');
var logger = require('morgan');//在控制台中，显示req请求的信息


var app = express();
// 载入中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({name: 'session', keys: ['abcdefg'],maxAge: 24 * 60 * 60 * 1000 }))
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
  console.log(req)
  next()
})
//这个路由必须放到express.urlencoded 和express.json后面否则获取不到req.body
var routerMapFn=require('./routes/routerHandler')(app)

module.exports = app;
