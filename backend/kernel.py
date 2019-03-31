#kernel.py -- this will handle the process
import numpy as np
import pandas as pd
from normalize_input import normalize, names
from core import getPrediction, ref
# Geography,Year,Sex,Activity Category,Prevalence_x,Category,Prevalence_y,Stress Category,Prevalence

severity = ('a tiny bit', 'a bit','a lot', 'a whole lot')
def sevOff(a):
	return floor((a*len(severity))-0.01)

def str_recc(inputData):
	#return "Get better"
	tips = []
	if min(inputData[1:4]) < -0.2:
		tips.append("Lose weight!")
	elif max(inputData[1:4]) > 0.2:
		tips.append("Gain weight!")

	if inputData[ref["Current smoker, daily or occasional"]] < -0.2:
		tips.append("Smoke Less!")

	if inputData[ref["Fruit and vegetable consumption, 5 times or more per day"]] < -0.2:
		tips.append("Eat Fruit and Veggies Less!")
	elif inputData[ref["Fruit and vegetable consumption, 5 times or more per day"]] > 0.2:
		tips.append("Eat Fruit and Veggies More!")

	if inputData[ref["High blood pressure"]] < -0.2:
		tips.append("Lower your blood pressure!")
	elif inputData[ref["High blood pressure"]] > 0.2:
		tips.append("Increase your blood pressure!")

	if inputData[ref["Perceived health, very good or excellent"]] > 0.2:
		tips.append("Improve your overall health!!!")

	if inputData[ref["Perceived life stress, most days quite a bit or extremely stressful"]] < -0.2:
		tips.append("Relax more and take some me time, do what makes you happy!")
	elif inputData[ref["Perceived life stress, most days quite a bit or extremely stressful"]] > 0.2:
		tips.append("Take life more seriously? Stop slacking off.")

	if min(inputData[ref["Self-reported physical activity, 150 minutes per week, adult (18 years and over)"]], inputData[ref["Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)"]]) < -0.2:
		tips.append("Workout less?")
	elif max(inputData[ref["Self-reported physical activity, 150 minutes per week, adult (18 years and over)"]], inputData[ref["Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)"]]) > 0.2:
		tips.append("Get more exercise!")

	return tips
	
def mentalHelp(request):
	print(request)

	newPatient = normalize(request)
	print('\n\n#################\n\nnormalized:\n', newPatient)

	prediction, reccomendation = getPrediction(np.array([newPatient]))

	#print('\nprediction:\n', prediction)
	#print('\nreccomendation:\n', reccomendation)

	# format result
	#toret = np.concatenate([[[prediction]], reccomendation], axis=1)
	print(prediction)
	return prediction, reccomendation
