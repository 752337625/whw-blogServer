const path = require('path')
const config = require('config-lite')({config_basedir: path.resolve(__dirname, '../'),config_dir: 'blog.config'})
module.exports = {
  server_port: config.server_port,
  env: config.env,
  mysql_config: config.mysql_config,
  mongodb_config: config.mongodb_config,
  redis_config: config.redis_config,
}
