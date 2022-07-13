const express = require('express');
const faker = require('faker')
const UsersService = require('./../services/user.services');
const router = express.Router()
const service = new UsersService()


router.get('/', async (req, res, next) => {
  try {
    const users = await service.find()
    res.json(users)
  } catch (error) {
    next(error)
  }
  // const users = []
  // const size = req.query.size
  // const limit = size || 10
  // for (let i = 0; i < limit; i++) {
  //   users.push({
  //     name: faker.name.findName(),
  //     email: faker.internet.email(),
  //     created: faker.date.past(),
  //     job: faker.name.jobArea()
  //   })
})


module.exports = router
