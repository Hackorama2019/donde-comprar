require('dotenv').config()
const path = require('path')
const { db } = require('./../config')

const { writeFile } = require('fs').promises
const baseDir = path.resolve(process.env.DATA_EXPORT_FOLDER || './export/')

const Models = require('./../models')
const models = ['Brand', 'Category', 'Product', 'Shop']

db.connect()

async function start() {
  return Promise.all(models.map(async model => {
    const Model = Models[model]
    const items = await Model.find()
    return writeFile(path.resolve(baseDir, model + '.json'), JSON.stringify(items), 'utf-8')
  }))
}

/* eslint-disable no-console */
start()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
