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
	toret = np.concatenate([[[prediction]], message, reccomendation], axis=1)
	print(toret)
	return toret, reccomendation, message
