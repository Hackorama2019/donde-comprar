let utf8 = require("utf8")
export default (jsonFile) =>{
    jsonFile.map((product) =>{
        product.price.discount = utf8.encode(product.price.discount);
        product.price.original = utf8.encode(product.price.original);
        product.price.discount = parseFloat(product.price.discount);
        product.price.original = parseFloat(product.price.original);
    })
}