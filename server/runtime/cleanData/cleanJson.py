import pandas as pd
import json
masterJson = {"data":[]}
#Mercado libre
for i in range(0,8):
    with open("../resultsMercado"+str(i+1)+".json", 'r') as json_file:
        data = json.load(json_file)
        for item in data['data']:
            masterJson['data'].append(item)
        json_file.close()
#Pcel
for i in range(0,2):
    print("asdsad")
    with open("../resultsPcel"+str(i+1)+".json", 'r') as json_file:
        data = json.load(json_file)
        for item in data['data']:
            masterJson['data'].append(item)
        json_file.close()
#CyberPuerta
with open("../resultsCyberpuerta.json", 'r') as json_file:
    data = json.load(json_file)
    for item in data['data']:
        masterJson['data'].append(item)
    json_file.close()
#Ddtech
with open("../resultsDdtech.json", 'r') as json_file:
    data = json.load(json_file)
    for item in data['data']:
        masterJson['data'].append(item)
    json_file.close()
#Dimercom
with open("../resultsDimercom.json", 'r') as json_file:
    data = json.load(json_file)
    for item in data['data']:
        masterJson['data'].append(item)
    json_file.close()
#Dimercom
with open("../resultsDimercom.json", 'r') as json_file:
    data = json.load(json_file)
    for item in data['data']:
        masterJson['data'].append(item)
    json_file.close()
#Pcmig
with open("../resultsPcmig.json", 'r') as json_file:
    data = json.load(json_file)
    for item in data['data']:
        masterJson['data'].append(item)
    json_file.close()

f = open("totalData.json","w+")
f.write(json.dumps({"data":masterJson['data']}))
f.close()