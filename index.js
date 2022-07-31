const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require('./middlewares/error.handler');
const { options } = require('./routes/products.router');

const app = express()
const port = process.env.PORT || 3000


const whiteList = ['http://127.0.0.1:5500','http://myapp.com', 'http://dos.es']
const corsOptions = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin){
      callback(null,true)
    } else {
      callback(new Error('No permitido'), false)
    }
  }
}
app.use(cors(corsOptions));
app.use(express.json()) //Para poder enviar datos en formato json a través del metodo post
// app.use(function (req, res, next) {
  //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  //   next()
  // })
routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Desarrollando: ' + port)
})
