require('dotenv').config()

const { db } = require('./config')
const express = require('express')
const app = express()

db.connect()
// TODO: Helmet || nginx headers

const { productAPI } = require('./web/api')

app.use('/', express.static('public'))
app.use('/api/product', productAPI)

app.listen(process.env.PORT || 8080, () => {
  console.log(`Sever running in Port ${8080}`)
})
