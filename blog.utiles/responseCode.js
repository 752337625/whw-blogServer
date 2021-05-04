/**
 * Created by Walker on 2020/12/19.
 * 消息请求响应
 */
//封装接送模块
class BaseResponseCode{
	constructor(code,msg,data) {
		this.data=data
		this.msg=msg
		this.code=code
	}
	toString(){
		return {data:this.data,msg:this.msg,code:this.code}
	}
}
module.exports = BaseResponseCode;
