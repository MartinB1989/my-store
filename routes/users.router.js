const express = require('express');
const faker = require('faker')

const router = express.Router()


router.get('/', (req, res) => {
  const users = []
  const size = req.query.size
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      created: faker.date.past(),
      job: faker.name.jobArea()
    })
  }
  res.json(users)
})


module.exports = router
