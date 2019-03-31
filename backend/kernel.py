#kernel.py -- this will handle the process
import numpy as np
import pandas as pd
from normalize_input import normalize, names
from core import getPrediction

severity = ('a tiny bit', 'a bit','a lot', 'a whole lot')
def sevOff(a):
	return floor((a*len(severity))-0.01)

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
