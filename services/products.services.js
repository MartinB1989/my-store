const faker = require('faker')

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
    // const name = this.getTodo()  //esto genera un error
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 3000)
    })
  }

  async findOne(id) {
    // const name = this.getTotal() //Esto genera un error
    return this.products.find(item => item.id === id)
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('product not found')
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
      throw new Error('product not found')
    }
    this.products.splice(index, 1)
    return {message: 'Eliminado correctamente'}
  }
}

module.exports = ProducsService
