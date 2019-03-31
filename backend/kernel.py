#kernel.py -- this will handle the process
import numpy as np
import pandas as pd
from normalize_input import normalize, names
from core import getPrediction
# Geography,Year,Sex,Activity Category,Prevalence_x,Category,Prevalence_y,Stress Category,Prevalence

def readCsv(src):
	data = pd.read_csv(src)
	#Coefficient of Variation,CV Flag,Standard Error,Standard Score,Alberta Prevalence
	data.drop("Coefficient of Variation", axis=1, inplace=True)
	data.drop("CV Flag", axis=1, inplace=True)
	data.drop("Standard Error", axis=1, inplace=True)
	data.drop("Standard Score", axis=1, inplace=True)
	data.drop("Alberta Prevalence", axis=1, inplace=True)
	return data.iloc[::2]

data1 = readCsv('datafiles/fitness.csv')
data2 = readCsv('datafiles/stressors.csv')
data3 = readCsv('datafiles/selfperceivedmentalhealth.csv')
data4 = pd.merge(data1, data2, on=['Geography','Year','Sex'])
data5 = pd.merge(data4, data3, on=['Geography','Year','Sex'])

print(data5.columns.values)

data5.drop("Activity Category", axis=1, inplace=True)
data5.drop("Stress Category", axis=1, inplace=True)
data5.drop("Category", axis=1, inplace=True)
data5.drop("Geography", axis=1, inplace=True)
data5.drop("Year", axis=1, inplace=True)
data5['Sex'] = data5['Sex'].map({'MALE': 0.0, 'BOTH': 0.5, 'FEMALE': 1.0})
# data5['Prevalence_x'] = data5['Prevalence_x'].apply(lambda x: (x-data5['Prevalence_x'].min())/(data5['Prevalence_x'].max()-data5['Prevalence_x'].min()))
# data5['Prevalence_y'] = data5['Prevalence_y'].apply(lambda x: (x-data5['Prevalence_y'].min())/(data5['Prevalence_y'].max()-data5['Prevalence_y'].min()))
# data5['Prevalence'] = data5['Prevalence'].apply(lambda x: (x-data5['Prevalence'].min())/(data5['Prevalence'].max()-data5['Prevalence'].min()))
#data5.drop("Sex", axis=1, inplace=True)

print(data5.columns.values)
print(data5.dtypes)
data5.to_csv('./datafiles/merged.csv', index=False)
#print(data5)
def str_recc(inputData):
	return "Get better"
def mentalHelp(request):
	print(request)

	newPatient = normalize( (request) )
	print('\n\n#################\n\nnormalized:\n', newPatient)

	prediction, reccomendation = getPrediction(np.array([newPatient]))

	#print('\nprediction:\n', prediction)
	#print('\nreccomendation:\n', reccomendation)

	# format result
	toret = np.concatenate([[[prediction]], message, reccomendation], axis=1)
	print(toret)
	return toret, reccomendation, message
