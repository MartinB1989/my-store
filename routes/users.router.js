const express = require('express');
const faker = require('faker')
const UsersService = require('./../services/user.services');
const validatorHandler = require('../middlewares/validator.handler')
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schemas/user.schema')
const router = express.Router()
const service = new UsersService()


router.get('/',
async (req, res, next) => {
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

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id
      const user = await service.findOne(id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newUser = await service.create(body)
      res.status(201).json(newUser)
    } catch (error) {
      next(error)
    }
  }
)
module.exports = router
