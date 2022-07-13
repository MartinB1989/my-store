// const boom = require('@hapi/boom')

const getConnection = require('../libs/postgres')

class UsersService {

  constructor() {}

  async create() {}

  async find() {
    const client = await getConnection()
    const response = await client.query('SELECT * FROM fst_users')
    return response.rows
  }

  async findOne(id) {}

  async update() {}

  async delete() {}
}

module.exports = UsersService