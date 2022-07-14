const faker = require('faker')
const { models } = require('../libs/sequelize')
class CategoriesService {

  constructor() {
    this.categories = []
    this.generete()
  }

  async generete() {
    // const limit = 10
    // for (let i = 0; i < limit; i++) {
    //   this.categories.push({
    //     id: faker.datatype.uuid(),
    //     category: faker.commerce.department()
    //   })
    // }
  }

  async create(data) {
    return data
  }

  async find() {
    const response = await models.Categories.findAll()
    return response
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.categories)
    //   }, 5000)
    // })
  }

  async findOne(id) {
    const index = this.categories.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('product not found')
    }
    return this.categories[index]
  }

  async update() {

  }

  async delete() {

  }
}

module.exports = CategoriesService
