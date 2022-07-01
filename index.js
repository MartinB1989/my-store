const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler} = require('./middlewares/error.handler')

const app = express()
const port = 5500

app.use(express.json()) //Para poder enviar datos en formato json a través del metodo post
app.use(cors())
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next()
// })
routerApi(app)

app.use(logErrors)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi port' + port)
})
