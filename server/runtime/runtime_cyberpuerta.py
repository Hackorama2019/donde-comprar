from bs4 import BeautifulSoup
import pandas as pd
import requests
import json
path = "https://www.cyberpuerta.mx/Las-mejores-ofertas/?ldtype=infogrid&_artperpage=24"

page_response = requests.get(path, timeout=5,headers={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15","Accept-Language":"en-gb","Accept-Encoding":"br, gzip, deflate","Accept":"test/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Referer":"http://www.google.com/"})

products = []

prices = [] #List of price of all products
name = [] #List of the name of all products
brand=[]
model = []
category=[]
imageDefault = []
content = ""
soup = BeautifulSoup(page_response.content,features="html.parser")
for items in soup.select('li[class*="productData"]'):
    name = items.select('a[class*="emproduct_title"]')
    model = items.find_all("div",class_="emproduct_artnum")[0].text
    imageUrl = items.find_all("")
    prices = {"url":name[0].get("href"),"site":path}
    styleBackgroud = items.find_all("div",class_="catSlider")
    parseint = styleBackgroud[0].get("data-cp-prod-slider").split(",")
    styleBackgroud = parseint[0].replace('\/','/').replace('[\"',"").replace('\"','').replace("]","")
    print(parseint)
    prices = {"site":path,"url":styleBackgroud,"discount":items.find_all("label",class_="price")[0].text.replace("$","").replace("\n",""),"original":items.find_all("span",class_="oldPrice")[0].find("del").text.replace("$",""),"origin":"cyberpuerta"}
    page_response = requests.get(name[0].get("href"), timeout=5)
    soup2 = BeautifulSoup(page_response.content,features="html.parser")
    name = name[0].get("title")
    specifications = soup2.find_all("ul")[5]
    for specification in specifications.find_all("li"):
        print(specification)
        content = content + specification.text
    brand = ""
    category = ""
    imageDefault = ""
    products.append({"name":name,"price":prices,"content":content,"model":model,"marca":brand,"categoria":category,"imageDefault":""})

f = open("resultsCyberpuerta.json","w+")
f.write(json.dumps({"data":products}))
f.close()

