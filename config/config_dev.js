module.exports = {
  environment: 'dev',
  database: {
    dbName: 'boblog',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'bobo1024.'
  },
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}

// 在实际使用中要将这个config_dev.js修改为config.js
