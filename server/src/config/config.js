module.exports = {
    port:process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'freeCodeCamp',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PWD || 'dqzgslb+GNKLLQQJ',
        options:{
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || '115.159.98.171',
            storage: './freeCodeCamp.mysql'
        }
    }
}