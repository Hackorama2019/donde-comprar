from bs4 import BeautifulSoup
import pandas as pd
import requests
path = "https://pcel.com/gamers?sucursal=0&limit=100"

page_response = requests.get(path, timeout=5)

prices = [] #List of price of all products
name = [] #List of the name of all products
print(page_response.content)
soup = BeautifulSoup(page_response.content,features="html.parser")
for row in soup.findAll('div',attrs={"class":"product-list"}).findAll('tbody'):
    cells =  row.find("td")
    #rating=a.find('div', attrs={'class':'hGSR34 _2beYZw'})
    info =  cells[0].findAll("a")
    name.append(info.get("data-name"))
    page_response = requests.get(info.get("href"))
    soup2 = BeautifulSoup(page_response.content,features="html.parser")
    tempPriceNew = soup2.findAll("span",attrs={"class","price-new"})
    tempPriceOld = soup2.findAll("span",attrs={"class","price-old"})
    prices.append({"discount":tempPriceNew[0].text,"original":tempPriceOld[0].text})

print(name)
print("__________________")
print(products)
#df = pd.DataFrame({'Price':prices}) 
#df.to_csv('products.csv', index=False, encoding='utf-8')
