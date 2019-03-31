#import_data.py
#
# -- this will handle the datasets
#

import numpy as np
import pandas as pd

#characteristics = pd.read_csv('datafiles/statscanada/health_characteristics.csv')


#satisifaction = pd.read_csv('datafiles/statscanada/life_area_satisfaction.csv')
mental_health = pd.read_csv('datafiles/statscanada/mental_health_geo.csv')
nutrition_ind = pd.read_csv('datafiles/statscanada/nutrition.csv')
'''
health characteristics:
"REF_DATE","GEO","DGUID","Age group","Sex","Indicators","Characteristics","UOM","UOM_ID","SCALAR_FACTOR","SCALAR_ID","VECTOR","COORDINATE","VALUE","STATUS","SYMBOL","TERMINATED","DECIMALS"


life satisfaction per area:
"REF_DATE","GEO","DGUID","Age group","Sex","Satisfaction with life and with selected domains of life","UOM","UOM_ID","SCALAR_FACTOR","SCALAR_ID","VECTOR","COORDINATE","VALUE","STATUS","SYMBOL","TERMINATED","DECIMALS"

nutrition:
"REF_DATE","GEO","DGUID","Measures","Sex","Age group","Statistics","Characteristics","UOM","UOM_ID","SCALAR_FACTOR","SCALAR_ID","VECTOR","COORDINATE","VALUE","STATUS","SYMBOL","TERMINATED","DECIMALS"

mental health:
"REF_DATE","GEO","DGUID","Age group","Sex","Indicators","Characteristics","UOM","UOM_ID","SCALAR_FACTOR","SCALAR_ID","VECTOR","COORDINATE","VALUE","STATUS","SYMBOL","TERMINATED","DECIMALS"

'''

#reparse into new table:
mental_health.drop('SCALAR_FACTOR',axis=1,inplace=True)
mental_health.drop('SCALAR_ID',axis=1,inplace=True)
mental_health.drop('VECTOR',axis=1,inplace=True)
mental_health.drop('COORDINATE',axis=1,inplace=True)
mental_health.drop('STATUS',axis=1,inplace=True)
mental_health.drop('SYMBOL',axis=1,inplace=True)
mental_health.drop('TERMINATED',axis=1,inplace=True)
mental_health.drop('DECIMALS',axis=1,inplace=True)

nutrition_ind.drop('SCALAR_FACTOR',axis=1,inplace=True)
nutrition_ind.drop('SCALAR_ID',axis=1,inplace=True)
nutrition_ind.drop('VECTOR',axis=1,inplace=True)
nutrition_ind.drop('COORDINATE',axis=1,inplace=True)
nutrition_ind.drop('STATUS',axis=1,inplace=True)
nutrition_ind.drop('SYMBOL',axis=1,inplace=True)
nutrition_ind.drop('TERMINATED',axis=1,inplace=True)
nutrition_ind.drop('DECIMALS',axis=1,inplace=True)

mental_health = mental_health.replace('2015/2016',2015)
# nutrition_ind = nutrition_ind.replace('Picomoles per litre','Nanomoles per litre (nmol/L)')
# nutrition_ind = nutrition_ind.replace('Micrograms per litre (µg/L)','Nanomoles per litre (nmol/L)')
# nutrition_ind = nutrition_ind.replace('Milimoles per litre','Nanomoles per litre (nmol/L)')
# nutrition_ind = nutrition_ind.replace('Nanograms per millilitre (ng/mL)','Nanomoles per litre (nmol/L)')
#nutrition_ind = nutrition_ind['2017',:]

#print(mental_health)					''' 'REF_DATE' '''
outData = mental_health.pivot_table(index=['REF_DATE','GEO', 'Age group', 'Sex', 'UOM'], columns='Indicators', values='VALUE')
nutList = nutrition_ind.pivot_table(index=['REF_DATE','GEO', 'Sex', 'Statistics', 'UOM'], columns='Measures', values='VALUE')

outData.drop('Arthritis (15 years and over)', axis=1, inplace=True)
outData.drop('Asthma', axis=1, inplace=True)
outData.drop('Breast milk feeding initiation', axis=1, inplace=True)
outData.drop('Chronic obstructive pulmonary disease (COPD; 35 years and over)', axis=1, inplace=True)
outData.drop('Contact with a medical doctor in the past 12 months', axis=1, inplace=True)
outData.drop('Current smoker, daily', axis=1, inplace=True)
outData.drop('Diabetes', axis=1, inplace=True)
outData.drop('Exclusive breastfeeding, at least 6 months', axis=1, inplace=True)
outData.drop('Has a regular healthcare provider', axis=1, inplace=True)
outData.drop('Heavy drinking', axis=1, inplace=True)
#outData.drop('High blood pressure', axis=1, inplace=True)
outData.drop('Influenza immunization in the past 12 months', axis=1, inplace=True)

outData.drop("Perceived mental health, fair or poor", axis=1,inplace=True)
outData.drop("Perceived health, fair or poor", axis=1,inplace=True)

outData = outData.dropna(axis=0)

numbers = outData.drop(index='Percent', level='UOM')
percents = outData.drop(index='Number', level='UOM')

# withNutri = pd.merge(percents,nutList,on=['REF_DATE','GEO', 'Sex'])
# withNutri = withNutri.dropna(axis='index')

percents.to_csv('./datafiles/statscanada/newMH_percents.csv')
numbers.to_csv('./datafiles/statscanada/newMH_numbers.csv')
nutList.to_csv('./datafiles/statscanada/newMH_nutrition.csv')

print(percents)


# x = pd.DataFrame(columns=['Sex','Prevalence_x','Prevalence_y','Prevalence'])
# maxd=0

# for i in range(20000):
# 	a = np.random.random_sample()
# 	b = np.random.random_sample()
# 	c = np.random.random_sample()
# 	d = (a * b) + c
# 	d = np.clip([d], 0,1)[0] 
# 	x = x.append({'Sex':a,'Prevalence_x':b,'Prevalence_y':c,'Prevalence':d}, ignore_index=True)
# 	if (d > maxd):
# 		maxd = d
# 	if (d < 0):
# 		print("d: ", d)

# x.to_csv('./datafiles/statscanada/random.csv')

# print("NMAX D: ", maxd)
# print(x)
