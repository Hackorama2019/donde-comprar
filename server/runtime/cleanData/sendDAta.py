import json
import pandas as pd
import numpy as np
import requests
with open("./totalData.json", 'r') as json_file:
    data = json.load(json_file)
    r = requests.post("http://aherredev.openode.io/submit",data={data})
    print(r.status)