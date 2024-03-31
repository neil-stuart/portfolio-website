from flask import Flask, jsonify, request, redirect
from pymongo import MongoClient
import os
from bson.objectid import ObjectId
import datetime


database = MongoClient(os.environ.get('MONGO_URI_PV3'))


app = Flask(__name__, static_folder='../build', static_url_path='/')



# Define a route to university results
@app.route('/api/results', methods=['GET'])
def get_results():
    results = database.content.results.find()
    result_list = []
    for result in results:
        result_list.append({
            'year': result['year'],
            'name': result['name'],
            'result': result['result'],
        })
    return jsonify(result_list)

