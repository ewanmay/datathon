#kernel.py -- this will handle the process
import numpy as np
import pandas as pd
from normalize_input import normalize, names
from core import getPrediction, ref
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
	#return "Get better"
	tips = ""
	if min(inputData[1:4]) < -0.2:
		tips += "Lose weight!\n"
	elif max(inputData[1:4]) > 0.2:
		tips += "Gain weight!\n"

	if inputData[ref["Current smoker, daily or occasional"]] < -0.2:
		tips += "Smoke Less!\n"
	elif inputData[ref["Current smoker, daily or occasional"]] > 0.2:
		tips += "Smoke More!\n"

	if inputData[ref["Fruit and vegetable consumption, 5 times or more per day"]] < -0.2:
		tips += "Eat Fruit and Veggies Less!\n"
	elif inputData[ref["Fruit and vegetable consumption, 5 times or more per day"]] > 0.2:
		tips += "Eat Fruit and Veggies More!\n"

	if inputData[ref["High blood pressure"]] < -0.2:
		tips += "Lower your blood pressure by doing more...!\n"
	elif inputData[ref["High blood pressure"]] > 0.2:
		tips += "Increase you blood pressure by doing more...!\n"

	if inputData[ref["Perceived health, very good or excellent"]] < -0.2:
		tips += "You don't need to worry about being so healthy you know...\n"
	elif inputData[ref["Perceived health, very good or excellent"]] > 0.2:
		tips += "Improve your overall health!!!\n"

	if inputData[ref["Perceived life stress, most days quite a bit or extremely stressful"]] < -0.2:
		tips += "Relax more and take some me time, do what makes you happy!\n"
	elif inputData[ref["Perceived life stress, most days quite a bit or extremely stressful"]] > 0.2:
		tips += "Take life more seriously? Stop slacking off.\n"

	if min(inputData[ref["Self-reported physical activity, 150 minutes per week, adult (18 years and over)"]], inputData[ref["Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)"]]) < -0.2:
		tips += "Workout less?\n"
	elif max(inputData[ref["Self-reported physical activity, 150 minutes per week, adult (18 years and over)"]], inputData[ref["Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)"]]) > 0.2:
		tips += "Get more exercise!\n"

	return tips
	
def mentalHelp(request):
	print(request)

	newPatient = normalize( (request) )
	print('\n\n#################\n\nnormalized:\n', newPatient)

	prediction, reccomendation = getPrediction(np.array([newPatient]))

	#print('\nprediction:\n', prediction)
	#print('\nreccomendation:\n', reccomendation)

	# format result
	toret = np.concatenate([[[prediction]], reccomendation], axis=1)
	print(toret)
	return toret
