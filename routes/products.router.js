const express = require('express');

const ProducsService = require('../services/products.services')

const router = express.Router()
const service = new ProducsService()

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find()
    res.json(products)
  } catch (error) {
    next(error)
  }

})


router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }

})
/////////////////////////////
//  --   ---   ---  -----  //
// |  | |   | |       |    //
// |  | |   |  ---    |    //
// |--  |   |     |   |    //
// |     ---   ---    |    //
// //////////////////////////
router.post('/', async (req, res) => {
  const body = req.body
  const new_product = await service.create(body)
  res.status(201).json({
    message: 'Creado correctamente',
    data: new_product
  })

})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json({
      message: 'Actualizado correctamente',
      data: product
    })
  } catch (error) {
    next(error)
  }

})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const rta = await service.delete(id)
  res.json(rta)
})


module.exports = router
