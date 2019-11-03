from bs4 import BeautifulSoup
import pandas as pd
import requests
import json
#path = "https://computacion.mercadolibre.com.mx/computadoras"

#page_response = requests.get(path, timeout=5,headers={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15","Accept-Language":"en-gb","Accept-Encoding":"br, gzip, deflate","Accept":"test/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Referer":"http://www.google.com/"})

products = []

prices = [] #List of price of all products
name = [] #List of the name of all products
brand=[]
model = []
category=[]
imageDefault = []
content = ""
preLink = ""
for i in range(0,8):
    if i == 0:
        path = "https://computacion.mercadolibre.com.mx/computadoras"
    else:
        path = "https://computacion.mercadolibre.com.mx/computadoras" + "_Desde_" + str((i*50)+1)
    page_response = requests.get(path, timeout=5,headers={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15","Accept-Language":"en-gb","Accept-Encoding":"br, gzip, deflate","Accept":"test/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Referer":"http://www.google.com/"})
    soup = BeautifulSoup(page_response.content,features="html.parser")
    items = soup.find_all("li",class_="results-item")
    for item in items:
        urlItem = item.find_all("div",class_="images-viewer")[0].get("item-url")
        print("-------")
        if(len(item.find_all("img",class_="lazy-load"))>0):
            urlImage = item.find_all("img",class_="lazy-load")[0].get("src")
        else:
            urlImage = "NoData"
        name = item.find_all("span",class_="main-title")[0].text
        priceOld = item.find_all("span",class_="price-old")
        print(len(priceOld))
        if len(priceOld)>0:
            priceOld = priceOld[0].text
            priceNew = item.find_all("span",class_="price__fraction")[0].text
        else:
            priceOld = item.find_all("span",class_="price__fraction")[0].text
            priceNew = "NoData"
        prices = {"discount":priceNew,"original":priceOld,"url":urlImage,"site":urlItem,"origin":"mercadolibre"}
        page_response = requests.get(urlItem, timeout=5)
        soup2 = BeautifulSoup(page_response.content,features="html.parser")
        if(len(soup2.find_all("a",class_="andes-breadcrumb__link"))>0):
            category = soup2.find_all("a",class_="andes-breadcrumb__link")
            category = category[-1].text
        else:
            category = "NoData"
        print(len(category))
        
        brand = "NoData"
        model="NoData"
        products.append({"name":name,"price":prices,"content":"","model":model,"marca":brand,"categoria":category,"imageDefault":""})
    f = open("resultsMercado"+ str(i+1) +".json","w+")
    f.write(json.dumps({"data":products}))
    f.close()
