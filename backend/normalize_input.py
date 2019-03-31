# normalize_input.py

import numpy as np
import pandas as pd

from core import ref
from trainer import avg_values
from core import getPrediction

names = ('sex','age','weight','height','smoker','fruit','blood_pressure','health','stress','activity','belonging')

def norm(a):
	if a > 1:
		return 1
	elif a < 0:
		return 0
	else:
		return a

# input Series
def normalize(s):
	sex = s['sex']

# age is read in 2 steps -> 0 / 1 -> minor / adult
	age = 0 if s['age'] == 'Under 18' else 1

	BMI = int(s['weight'])
	BMI /= (int(s['height'])/100)**2
	
	avg_values[ref["Body mass index, adjusted self-reported, adult (18 years and over), obese"]]
	avg_values[ref["Body mass index, adjusted self-reported, adult (18 years and over), overweight"]]
	avg_values[ref["Body mass index, self-reported, youth (12 to 17 years old), overweight or obese"]]
	
	BMI_obese = norm((age * BMI))
	BMI_overw = norm((age * BMI))
	BMI_youth = norm((1 - age) * BMI)
	
	smoker = 0 if s['smokingHabits'] == "Never" else 1 

	fruit = int(s['fruitVegetableConsumption'])/5.

	high_bp = avg_values[ref["High blood pressure"]]#s['blood_pressure']	#TODO

	health = s['perceivedHealth'] / 100.

	stress = s['lifeStress'] / 100.

	active = s['physicalActivity'] / 100. if age == 1 else avg_values[ref["Self-reported physical activity, 150 minutes per week, adult (18 years and over)"]]

	mood_dis = s['moodStability'] / 100.

	satisfaction = s['lifeSatisfaction'] / 100.

	active_yg = s['physicalActivity'] / 100. if age == 0 else avg_values[ref["Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)"]]

	belong = s['communalBelonging'] / 100.

	infoList = [BMI_obese, BMI_overw, BMI_youth, smoker, fruit, high_bp, satisfaction, mood_dis, health, stress, active, active_yg, belong]
	cols = list(ref.values())

	return (infoList)

	# smoker = avg_values[ref["Current smoker, daily or occasional"]]

	# fruit = avg_values[ref["Fruit and vegetable consumption, 5 times or more per day"]]

	# satisfaction = avg_values[ref["Life satisfaction, satisfied or very satisfied"]]

	# avg_values[ref["Mood disorder"]]

	# avg_values[ref["Perceived life stress, most days quite a bit or extremely stressful"]]

	# avg_values[ref["Self-reported physical activity, 150 minutes per week, adult (18 years and over)"]]
	# avg_values[ref["Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)":]]

	# avg_values[ref["Sense of belonging to local community, somewhat strong or very strong"]]

	# avg_values[ref["Perceived health, very good or excellent"]]


