from bs4 import BeautifulSoup
import pandas as pd
import requests
from selenium import webdriver
import re
import json
path = "https://pcmig.com.mx/promociones/"


page_response = requests.get(path, timeout=10,headers={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15","Accept-Language":"en-gb","Accept-Encoding":"br, gzip, deflate","Accept":"test/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Referer":"http://www.google.com/"})
#driver = webdriver.Chrome(executable_path= r"C:\Users\roman\Desktop\chromedriver_win32\chromedriver.exe")
#page_response = driver.get(path)
products = []

prices = [] #List of price of all products
name = [] #List of the name of all products
brand=[]
model = []
category=[]
imageDefault = []
soup = BeautifulSoup(page_response.content,features="html.parser")

sss = ""

productsItems = soup.find_all("div",class_="shop-products products row grid-view sidebar")
print(soup.find_all("div",class_="item-col col-12"))
for article in productsItems[0].select('div[class*="item-col col-12"]'):
    tempImage = article.find_all("img",class_="wp-post-image")
    category = article.find_all("div",class_="tag-cate")[0].text.replace("\n","")
    name = article.find_all("h2",class_="product-name")[0].text.replace("\n","")
    pricesContainer = article.find_all("div",class_="price-box")
    pricesContainerOld = pricesContainer[0].find("del")
    pricesContainerNew = pricesContainer[0].find("ins")
    pricesContainerOld = pricesContainerOld.find("span").text
    pricesContainerNew = pricesContainerNew.find("span").text
    print(pricesContainerNew)
    print(pricesContainerOld)
    print("______________________________")
    prices = {"original":pricesContainerOld.split("$")[1],"discount":pricesContainerNew.split("$")[1],"url":tempImage[0].get("src"),"site":path}
    brand = "NoData"
    content = "NoData"
    model="NoData"
    products.append({"name":name,"price":prices,"content":content,"model":model,"marca":brand,"categoria":category,"imageDefault":""})
print({"data":products})
f = open("results.json","w+")
f.write(json.dumps({"data":products}))
f.close()