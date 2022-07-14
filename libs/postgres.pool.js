const {Pool} = require('pg')
const {config} = require('./../config/config')

const USER = encodeURIComponent(config.db_user)
const PASSWORD = encodeURIComponent(config.db_password)
const URI = `postgres://${USER}:${PASSWORD}@${config.db_host}:${config.db_port}/${config.db_name}`

const pool = new Pool({ connectionString: URI})
// const pool = new Pool({
//     host: 'localhost',
//     port: '5432',
//     user: 'postgres',
//     password: 'password',
//     database: 'firstDB'
// })

module.exports = pool;
