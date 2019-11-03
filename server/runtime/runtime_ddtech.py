from bs4 import BeautifulSoup
import pandas as pd
import requests
import json
path = "https://ddtech.mx"

page_response = requests.get(path, timeout=5,headers={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15","Accept-Language":"en-gb","Accept-Encoding":"br, gzip, deflate","Accept":"test/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Referer":"http://www.google.com/"})

products = []

prices = [] #List of price of all products
name = [] #List of the name of all products
brand=[]
model = []
category=[]
imageDefault = []
content = ""
preLink = ""

soup = BeautifulSoup(page_response.content,features="html.parser")
items = soup.find_all("section")
print(len(items[0].find_all("div",class_ = "row")))
for item in items[0].find_all("div",class_ = "row"):
    for cell in item.find_all("div",class_="item item-carousel col-sm-3 products-prev"):
        name = cell.find_all("h3",class_="name name-prev")
        name = name[0].find("a")
        imageUrl = cell.find_all("div",class_="image")[0].find("a").find("img").get("src")
        preLink = name.get("href")
        name = name.text
        priceOld = cell.find_all("span",class_="price")
        priceNew = cell.find_all("span",class_="price-before-discount")
        priceOld = priceOld[0].text.replace("\t","").replace("\n","").replace("$","")
        if len(priceNew) >0:
            priceNew = priceNew[0].text.replace("$","")
        else:
            priceNew = "NoData"
        prices = {"original":priceOld,"discount":priceNew,"url":imageUrl,"site":preLink,"origin":"ddtech"}
        brand = "NoData"
        category = "NoData"
        model="NoData"
        products.append({"name":name,"price":prices,"content":content,"model":model,"marca":brand,"categoria":category,"imageDefault":""})
f = open("resultsDdtech.json","w+")
f.write(json.dumps({"data":products}))
f.close()