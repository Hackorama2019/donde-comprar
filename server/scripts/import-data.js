require("dotenv").config();
const path = require("path");
const { db } = require("../config");
const { slug } = require("../utils");
db.connect();

const { Product, Brand, Category } = require("../models");
const { readdirSync } = require("fs");
const { readFile } = require("fs").promises;
const baseDir = path.resolve(process.env.DATA_FOLDER || "./data/");
const files = readdirSync(
  path.resolve(process.env.DATA_FOLDER || "./data/")
).filter(file => file.endsWith(".json"));

const readJSON = async file => {
  const data = await readFile(path.join(baseDir, file));
  return JSON.parse(data);
};

async function start(files) {
  const brands = [];
  const categories = [];
  const categoriesReference = {};

  if (files.length === 0) return 0;
  for (const file of files) {
    const { data: items } = await readJSON(file);

    for (const item of items) {
      const productInDB = await Product.findOne({ model: item.model });

      if (item.brand && !brands.includes(slug(item.brand))) {
        const brand = await Brand.find({ slug: slug(item.brand) }).lean();
        brands.push(brand.slug);
      }

      if (item.category && !categories.includes(slug(item.category))) {
        const category = await Category.find({
          slug: slug(item.category)
        }).lean();
        categories.push(category.refersTo || category.slug);

        if (category.refersTo) {
          categoriesReference[slug(item.category)] = category.refersTo;
          categories.push(category.refersTo);
          item.category = category.refersTo;
        }
      } else if (
        item.category &&
        categoriesReference.includes(slug(item.category))
      ) {
        item.category = categoriesReference[slug(item.category)];
      }

      let product;

      if (productInDB) {
        Object.keys(item).map(prop => {
          if (!productInDB[prop] && item[prop]) {
            productInDB[prop] = item[prop];
          }
        });
        product = productInDB;
      } else {
        product = new Product({ ...item, price: [] });
      }

      if (!product.price) {
        product.price = [];
      }

      product.price.push(item.price);
      await product.save();
    }
  }
}

/* eslint-disable no-console */
start(files)
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
