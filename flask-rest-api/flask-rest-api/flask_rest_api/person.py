from flask_rest_api import app, db

class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(45))
    last_name = db.Column(db.String(45))
    email = db.Column(db.String(45))
    phone_number = db.Column(db.String(45))
    personal_number = db.Column(db.String(45))

    def __init__(self, first_name, last_name, email, phone_number, personal_number):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone_number = phone_number
        self.personal_number = personal_number

    def __repr__(self):
        return '<Person %r>' % self.first_name