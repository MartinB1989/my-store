const express = require('express');
const CategoriesService = require('../services/categories.services')


const router = express.Router()
const service = new CategoriesService()

router.get('/', async (req, res) => {
  try {
    const categories = await service.find()
    res.status(200).json(categories)
  } catch (error) {
      res.status(404).json({
        message: error.message
      })
  }

})
router.get('/:id', async (req, res) => {
  try {
    const { id }= req.params
    const category = await service.findOne(id)
    res.status(200).json({
      message: 'ok',
      category: category
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})

module.exports = router
