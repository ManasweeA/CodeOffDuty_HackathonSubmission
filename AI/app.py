from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from fastai.basic_train import load_learner
from fastai.vision import *
from flask_cors import CORS,cross_origin
import os
import sys

import torch
from torch import nn
from torchvision import datasets, transforms, models
import torchvision.models as models
import torch.nn.functional as F
import torchvision.transforms.functional as F
from torch import optim
import json

from PIL import *
import requests
from io import BytesIO

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.svm import SVR
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix

import joblib

app = Flask(__name__)
CORS(app, support_credentials=True)
api = Api(app)

class AI(Resource):
    def __init__(self):
        pass
    def get(self):
        return {"message":"Welcome to TenRox-AI"}

class classify_house_structure(Resource):
    def __init__(self):
        pass

    def post(self):
        try:
            # Getting data from json
            data = request.get_json()
            img_url = data['image']

            # Opening image from url
            response = requests.get(img_url)
            img_file = open_image(BytesIO(response.content))

            path = os.getcwd()
            path = path + "/Classification/house_structure/"
            learn = load_learner(path=path, file='house_structure_classify_model.pkl')
            classes = learn.data.classes

            # Predicting the image
            prediction = learn.predict(img_file)
            probs_list = prediction[2].numpy()
            print(classes[prediction[1].item()])

            # Returning the response
            return jsonify({
                'category': classes[prediction[1].item()],
                'probs': {c: round(float(probs_list[i]), 5) for (i, c) in enumerate(classes)}
            })
        except Exception as e:
            print(e)
            return jsonify({
                'error':"Some Error occurred"
            })

class classify_house_type(Resource):
    def __init__(self):
        pass

    def post(self):
        try:
            # Getting data from json
            data = request.get_json()
            img_url = data['image']

            # Opening image from url
            response = requests.get(img_url)
            img_file = open_image(BytesIO(response.content))
            
            path = os.getcwd()
            path = path + "/Classification/house_type/"
            learn = load_learner(path=path, file='furnished_unfurnished_classify_model.pkl')
            classes = learn.data.classes

            # Predicting the image
            prediction = learn.predict(img_file)
            probs_list = prediction[2].numpy()
            print(classes[prediction[1].item()])

            # Returning the response
            return jsonify({
                'category': classes[prediction[1].item()],
                'probs': {c: round(float(probs_list[i]), 5) for (i, c) in enumerate(classes)}
            })
            
        except Exception as e:
            print(e)
            return jsonify({
                'error':"Some Error occurred"
            })

class classify_tenouse_premium(Resource):
    def __init__(self):
        pass
    
    def post(self):
        try:
            # Getting data from json
            data = request.get_json()
            main_data_list = data['main_data']

            # Loading the Classification Model
            path = os.getcwd()
            path = path + "/DataAnalysis/"
            clf = joblib.load(path+'PremiumModel.pkl')

            # Predicting the result
            # [3, 1, 4] => 0, [1, 1, 4] => 1
            y_pred = clf.predict([main_data_list])

            print(y_pred)
            # Returning the response
            return jsonify({
                'predictedValue': str(list(y_pred)[0])
            })
        except Exception as e:
            print(e)
            return jsonify({
                'error':"Some Error occurred"
            })

class regress_tenouse_profit(Resource):
    def __init__(self):
        pass
    
    def post(self):
        try:
            # Getting data from json
            data = request.get_json()
            main_data_list = data['main_data']

            # Loading the Classification Model
            path = os.getcwd()
            path = path + "/DataAnalysis/"
            reg = joblib.load(path+'TenouseProfitModel.pkl')

            # Since StandardScalar uses the attributes from previously fit_transformed data, we need to fir_transform once more to get the output
            dataset = pd.read_csv(path+'TenouseProfit_file.csv')
            city = {'Pune':1, 'Mumbai':2, 'Bangalore':3, 'Hyderabad':4}
            dataset['City'] = dataset['City'].map(city)

            X = dataset.iloc[:, 0:-1].values
            y = dataset.iloc[:, -1].values
            y = y.reshape(len(y),1)

            sc_X = StandardScaler()
            sc_y = StandardScaler()
            X = sc_X.fit_transform(X)
            y = sc_y.fit_transform(y)

            # Predicting the result
            y_pred = sc_y.inverse_transform(reg.predict(sc_X.transform([main_data_list])))

            print(y_pred)
            # Returning the response
            return jsonify({
                'predictedValue': str(list(y_pred)[0])
            })
        except Exception as e:
            print(e)
            return jsonify({
                'error':"Some Error occurred"
            })

class regress_house_price(Resource):
    def __init__(self):
        pass
    
    def post(self):
        try:
            # Getting data from json
            data = request.get_json()
            main_data_list = data['main_data']

            # Loading the Classification Model
            path = os.getcwd()
            path = path + "/DataAnalysis/"
            reg = joblib.load(path+'HousePriceModel.pkl')

            # Since StandardScalar uses the attributes from previously fit_transformed data, we need to fir_transform once more to get the output
            dataset = pd.read_csv(path+'HousePrice_file.csv')
            city = {'Pune':1, 'Mumbai':2, 'Bangalore':3, 'Hyderabad':4}
            house_struct = {'Bungalow':1, 'Building':2, 'Row_House':3}
            house_type = {'Furnished':1, 'Unfurnished':2}
            dataset['City'] = dataset['City'].map(city)
            dataset['House Structure'] = dataset['House Structure'].map(house_struct)
            dataset['House Type'] = dataset['House Type'].map(house_type)

            X = dataset.iloc[:, 0:-1].values
            y = dataset.iloc[:, -1].values
            y = y.reshape(len(y),1)

            sc_X = StandardScaler()
            sc_y = StandardScaler()
            X = sc_X.fit_transform(X)
            y = sc_y.fit_transform(y)

            # Predicting the result
            y_pred = sc_y.inverse_transform(reg.predict(sc_X.transform([main_data_list])))

            print(y_pred)
            # Returning the response
            return jsonify({
                'predictedValue': str(list(y_pred)[0])
            })
        except Exception as e:
            print(e)
            return jsonify({
                'error':"Some Error occurred"
            })


api.add_resource(AI, '/')
api.add_resource(classify_house_structure, '/predict_structure')
api.add_resource(classify_house_type, '/predict_type')
api.add_resource(classify_tenouse_premium, '/predict_premium')
api.add_resource(regress_tenouse_profit, '/predict_profit')
api.add_resource(regress_house_price, '/predict_house_price')

if __name__=='__main__':
    app.run(debug=True, port=8000)