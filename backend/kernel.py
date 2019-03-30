#kernel.py -- this will handle the process
import numpy as np
import pandas as pd

data1 = pd.read_csv('datafiles/fitness.csv')
data2 = pd.read_csv('datafiles/selfperceivedmentalhealth.csv')
data3 = pd.read_csv('datafiles/stressors.csv')
data4 = pd.merge(data1, data2, on=['Year','Sex', 'Geography'])
data5 = pd.merge(data4, data3, on=['Year','Sex', 'Geography'])
print(data5.columns.values)
data5.to_csv('./datafiles/merged.csv')
print(data5)