module.exports = {
	env: 'development', //环境名称
	server_port: '3001', //服务端口号
	mysql_config: {
		connectionLimit : 10,
		host: "localhost",
		user: "root",
		password: "root",
		port: "3306",
		database: "blog",
	},
	mongodb_config: {

	},
	redis_config: {

	},
};
