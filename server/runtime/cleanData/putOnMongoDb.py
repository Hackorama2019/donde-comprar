import pymongo
import json
myclient = pymongo.MongoClient("mongodb://sv:FPtwTePKauETA9@ds141248.mlab.com:41248/hackorama2019?retryWrites=false")
myDb = myclient["hackorama2019"]
mycol = myDb["products"]
with open("./totalData.json") as json_file:
    data = json.load(json_file)
    for row in data["data"]:
        #marcas
        #tienda
        #cate
        mycol.insert_one(row)
