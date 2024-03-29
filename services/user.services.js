
// const getConnection = require('../libs/postgres')
const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class UsersService {

  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data)
    return newUser
  }

  async find() {
    const response = await models.User.findAll()
    // const response = await client.query('SELECT * FROM users')
    return response
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if(!user) {
      throw boom.notFound('user not found')
    }
    return user
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = user.update(changes)
    return rta
  }

  async delete(id) {
    const user  = await this.findOne(id)
    await user.destroy()
    return { id }
  }
}

module.exports = UsersService