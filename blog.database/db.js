const {mysql_config} = require('../blog.handler/configHandler')
const mysql = require("mysql");

class db {
	constructor(databaseName) {
		this.connection = mysql.createPool(mysql_config)
		this.common = [500,404]
	}
	/**
	 * @param {*} name 要查询的字段名称,用(,)隔开
	 * @param {*} tableName 要查询的表名
	 * @param {*} options 选择条件,字符串形式,要写where，如where id = 1
	 */
	select(name, tableName, options) {
		let self = this
		return new Promise((resolve, reject) => {
			self.connection.getConnection(function(err, conn) {
				if (err) return 	reject({message: '连接失败',status: self.common[0],data: err});
				let sql = `select ${name} from ${tableName} ${options}`
				console.log(sql)
				conn.query(sql,(err,result)=>{
					if (err) return reject({message: '查询失败',	status: self.common[1],	data: err});
					conn.release();
          if(result.length===0) return reject({message: '帐号密码输入有误',	status: 200,	data: result});
					resolve({message: '查询成功',status: 200,	data: result})
				})
			})
		})
	}
	/**
	 * @param {*} tableName 插入的表名
	 * @param {*} name 插入的字段名,多个字段用(,)隔开
	 * @param {*} value 插入的字段值,多个字段用(,)隔开,字符串类型要加上引号
	 */
	insert(tableName, name, value) {
		let self = this;
		return new Promise((resolve, reject) => {
			self.connection.getConnection((err, conn)=>{
				if (err) return 	reject({message: '连接失败',status: self.common[0],data: err});
				let sql = `insert into ${tableName} (${name}) values (${value})`;
				conn.query(sql, function(err, result) {
					if (err) return reject({message: '新增失败',	status: self.common[1],	data: err});
					conn.release();
					resolve({message: '新增成功',status: 200,	data: result})
				})
			})
		})
	}
	/**
	 * @param {*} tableName 修改字段所在的表名
	 * @param {*} name 需要修改的字段名称
	 * @param {*} value 修改的值
	 * @param {*} option 特殊条件,要带有where
	 */
	update(tableName, name, value, option) {
		let self = this;
		return new Promise((resolve, reject) => {
			self.connection.getConnection(function(err, conn) {
				if (err) {
					console.log(err);
					reject({
						message: '连接失败',
						status: self.common[0],
						data: err
					})
				} else {
					let sql = `update ${tableName} set ${name} = ${value} ${option}`
					conn.query(sql, function(err, result) {
						if (err) {
							console.log(err);
							reject(self.common[1])
						}
						conn.release();
						resolve({
							message: '新增成功',
							status: '200',
							data: result
						})
					})
				}
			})
		})
	}
	/**
	 * @param {*} tableName 删除字段所在的表名
	 * @param {*} option 特殊条件,要带有where
	 */
	delete(tableName, option) {
		let self = this
		new Promise((resolve, reject) => {
			self.connection.getConnection(function(err, conn) {
				if (err) {
					console.log(err);
					reject({
						message: '连接失败',
						status: self.common[0],
						data: err
					})
				} else {
					let sql = `DELETE FROM ${tableName} ${option}`
					conn.query(sql, function(err, result) {
						if (err) {
							reject(self.common[1])
						}
						conn.release();
						console.log({
							data: result,
							message: "成功",
							status: 200
						})
						resolve({
							data: result,
							message: "成功",
							status: 200
						})
					})
				}
			})
		})
	}
}
module.exports = db
