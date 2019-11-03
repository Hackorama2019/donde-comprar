import json
import pandas as pd
import numpy as np
with open("./totalData.json", 'r') as json_file:
    
    data = json.load(json_file)
    data = np.array(data["data"])
    futureDataFrame = []
    columns = []
    for keys in data[0].keys():
        if(keys != "price"):
            columns.append(keys)
    for row in data:
        del row["price"]
        futureDataFrame.append([])
        for value in row.values():
            futureDataFrame[-1].append(value)
    scrappedData = pd.DataFrame(data=futureDataFrame,columns=columns)
    scrappedData.head(10)
    #scrappedData.to_csv("temp.csv")
    print(scrappedData.head())
    pd.DataFrame()
    print(scrappedData[scrappedData["categoria"] != "NoData" ])
    #scrappedData[scrappedData["content"] != ""].assign(content="NoData")
    # print(scrappedData[scrappedData["content"] != "NoData"])
    # print(scrappedData.head(20))
    '''
    while i < len(data):
        if(data.item(i))
        i = i+1
    '''
    json_file.close()