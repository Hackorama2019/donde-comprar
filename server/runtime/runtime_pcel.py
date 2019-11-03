from bs4 import BeautifulSoup
import pandas as pd
import requests
import json


products = []

prices = [] #List of price of all products
name = [] #List of the name of all products
brand=[]
model = []
category=[]
imageDefault = []
for i in range(0,3):
    path = "https://pcel.com/gamers?sucursal=0&limit=100&page=" + str(i+1)

    page_response = requests.get(path, timeout=5)
    soup = BeautifulSoup(page_response.content,features="html.parser")
    tableContext = soup.find_all("div",class_="product-list")
    tableContext = soup.find_all("table")[2]
    rows = tableContext.find_all("tr")
    for row in rows:
        if(len(row.findAll("div",class_="image"))>0):
            td = row.find("div",class_="image")
            cell =  td.find("a")
            name=cell.get("data-name")
            imageDefault=cell.find("img").get("src")
            category=cell.get("data-category").split("/")[1]
            brand=cell.get("data-brand")
            page_response2 = requests.get(cell.get("href"))
            soup2 = BeautifulSoup(page_response2.content,features="html.parser")
            generalPrice = soup2.findAll("div",attrs={"class","price"})
            tempPriceNew = soup2.findAll("span",attrs={"class","price-new"})
            tempPriceOld = soup2.findAll("span",attrs={"class","price-old"})
            tempModel = soup2.findAll("div",class_="description")
            tempContent = soup2.findAll("div",class_="description")
            print(cell.get("data-name"))
            tempModel = tempModel[0].text.split("\n")
            tempModel = tempModel[3]
            tempModel = tempModel.split("Modelo: ")[1]
            print(tempModel)
            model=tempModel
            if(len(tempPriceNew) > 0):
                prices={"discount":tempPriceNew[0].text.split("$")[1],"original":tempPriceOld[0].text.split("$")[1],"urlImage":imageDefault,"url":cell.get("href"),"site":path,"origin":"pcel"}
            else:
                prices={"discount":"NoData","original":generalPrice[0].text.split("$")[1],"urlImage":imageDefault,"url":cell.get("href"),"site":path}
        products.append({"name":name,"price":prices,"content":"","model":model,"marca":brand,"categoria":category,"imageDefault":""})

    f = open("resultsPcel" + str(i+1) +".json","w+")
    f.write(json.dumps({"data":products}).replace('',""))
    f.close()

#df = pd.DataFrame({'Price':prices}) 
#df.to_csv('products.csv', index=False, encoding='utf-8')
