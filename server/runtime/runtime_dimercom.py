from bs4 import BeautifulSoup
import pandas as pd
import requests
import json
path = "https://www.dimercom.mx/index.php?route=product/special"

page_response = requests.get(path, timeout=5)

products = []

prices = [] #List of price of all products
name = [] #List of the name of all products
brand=[]
model = []
category=[]
imageDefault = []
soup = BeautifulSoup(page_response.content,features="html.parser")
initial = soup.find_all("div",class_="box-product product-list list-layout")[0]
f = open("index.html","w+")
f.write(str(initial))
f.close()
#tempImage = initial[0].find_all("img")
#name = initial[0].find_all("div","name")
for item in initial.children:
    if(item != '\n'):
        tempImage = item.find_all("img")
        name = item.find_all("div","name")
        redirectUrl =  name[0].find("a").get("href")
        tempPrice = item.find_all("div",class_="special-price")
        prices={"discount":tempPrice[0].find("span",class_="price-fixed").text.replace("$",""),"original":tempPrice[0].find("span",class_="price-old").text.replace("$",""),"url":tempImage[0].get("src"),"site":redirectUrl}
        page_response = requests.get(redirectUrl,timeout=5)
        soup2 = BeautifulSoup(page_response.content,features="html.parser")
        model = soup2.find_all("div",class_="description")[0].text
        model = model.split("\n")[1].replace("C\u00f3digo Producto: ","").replace("Marca: ","")
        brand = ""
        category = ""
        imageDefault = ""
        products.append({"name":name[0].text,"price":prices,"content":"","model":model,"marca":brand,"categoria":category,"imageDefault":""})
print(products)
f = open("results.json","w+")
f.write(json.dumps({"data":products}))
f.close()