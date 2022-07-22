
const faker = require('faker')
const boom = require('@hapi/boom')
const sequelize = require('../libs/sequelize')
class ProducsService {

  constructor() {
    this.products = []
    this.generete()
  }

  async generete() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl()
      })
    }
  }

  async create(data) {
    const new_product = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(new_product)
    return new_product
  }

  async find() {
    const query = 'SELECT * FROM fst_users'
    const [data] = await sequelize.query(query)
    return data
    // const name = this.getTodo()  //esta linea genera un error, simulado
    // return new Promise ((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.products)
    //   }, 3000)
    // })
  }

  async findOne(id) {
    // const name = this.getTotal() //Esto genera un error
    const product = this.products.find(item => item.id === id)
    if(!product) {
      throw boom.notFound('product not found')
    }
    return product
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('product not found')
    }
    this.products.splice(index, 1)
    return {message: 'Eliminado correctamente'}
  }
}

module.exports = ProducsService
