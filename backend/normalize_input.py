# normalize_input.py

import numpy as np
import pandas as pd

from core import ref
from trainer import avg_values
from core import getPrediction

names = ('sex','age','weight','height','smoker','fruit','bloodPressure','health','stress','activity','belonging')
ages = {'Under 18':0, 'Over 18':1}

def norm(a):
	if a > 1:
		return 1
	elif a < 0:
		return 0
	else:
		return a

# input Series
def normalize(s):
	sex = s['sex'] / 2

# age is read in 2 steps -> 0 / 1 -> minor / adult
	age = s['age'] 

	BMI = int(s['weight'])
	BMI /= (int(s['height'])/100.)**2

	print("BMI: ",BMI)
	# BMI_obese = min(BMI/30. + (1-age)*(30-26.5), 1)
	# BMI_overw = min(BMI/25. + (1-age)*(25-23), 1)
	# BMI_youth = min(BMI/23. - (age)*(4), 1)
	BMI_obese = min(BMI/30., 1)
	BMI_overw = min(BMI/25., 1)
	BMI_youth = min(BMI/23., 1)

	if age == 0:
		BMI_obese = avg_values[0]
		BMI_overw = avg_values[1]
	else:
		BMI_youth = avg_values[2]
	
	smoker = 1 - s['smokingHabits']/2.

	fruit = (int(s['fruitVegetableConsumption'])+1)/4.

	highArr = s['bloodPressure'].split(',')	#TODO
	high_bp = ((int(highArr[0])-120)/(20) + (int(highArr[1])-80)/(10))/2

	health = s['perceivedHealth'] / 4.

	stress = s['lifeStress'] / 4.

	active = s['physicalActivity'] / 4. if age == 1 else avg_values[ref["Self-reported physical activity, 150 minutes per week, adult (18 years and over)"]]

	mood_dis = 1- s['moodStability'] / 4.

	satisfaction = s['lifeSatisfaction'] / 4.

	active_yg = s['physicalActivity'] / 4. if age == 0 else avg_values[ref["Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)"]]

	belong = s['communalBelonging'] / 4.

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


