// const boom = require('@hapi/boom')

// const getConnection = require('../libs/postgres')
const { models } = require('../libs/sequelize')

class UsersService {

  constructor() {}

  async create() {
    
  }

  async find() {
    const response = await models.User.findAll()
    // const response = await client.query('SELECT * FROM users')
    return response
  }

  async findOne(id) {}

  async update() {}

  async delete() {}
}

module.exports = UsersService