const {Client} = require('pg')

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'password',
        database: 'firstDB'
    })

    await client.connect()
    return client;
}

module.exports = getConnection;
