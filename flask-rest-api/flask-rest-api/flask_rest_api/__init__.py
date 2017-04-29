from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://normal_DB_Admin:abcabc123@localhost/people'
app.config['SQLALCHEMY_POOL_SIZE'] = 25
db = SQLAlchemy(app)

import flask_rest_api.apicontroller

