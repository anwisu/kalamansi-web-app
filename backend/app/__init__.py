from flask import Flask
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://jg-cabauatan:EIT7I1S7SCBaCJZO@itp-backend.a0fhlie.mongodb.net/db_kalamansi?retryWrites=true&w=majority' # replace this with your MongoDB Atlas connection URI
mongo = MongoClient(app.config['MONGO_URI'])
db = mongo.db_kalamansi # your database name
CORS(app)  # Enable CORS for all routes

from app.routes import *
