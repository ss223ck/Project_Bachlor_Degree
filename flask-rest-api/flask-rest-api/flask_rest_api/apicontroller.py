from flask_restful import reqparse, abort, Api, Resource, fields, marshal_with
from flask_rest_api import app, db
from flask_rest_api.person import Person

api = Api(app)

resource_fields = {
    'id': fields.Integer,
    'first_name': fields.String,
    'last_name': fields.String,
    'email': fields.String,
    'phone_number': fields.String,
    'personal_number': fields.String
}

parser = reqparse.RequestParser()
parser.add_argument('id', type=int)
parser.add_argument('first_name', type=str)
parser.add_argument('last_name', type=str)
parser.add_argument('email', type=str)
parser.add_argument('phone_number', type=str)
parser.add_argument('personal_number', type=str)

class CrudApi(Resource):

    @marshal_with(resource_fields)
    def get(self):
        return Person.query.limit(20).all()

    @marshal_with(resource_fields)
    def post(self):
        try:
            args = parser.parse_args()
            person = Person(args['first_name'], args['last_name'], args['email'], args['phone_number'], args['personal_number'])
            db.session.add(person)
            db.session.commit()
            return person, 201
        except:
            return "", 500

    @marshal_with(resource_fields)
    def put(self):

        try:
            args = parser.parse_args()

            person = Person.query.get(args["id"])

            person.first_name = args["first_name"]
            person.last_name = args["last_name"]
            person.email = args["email"]
            person.phone_number = args["phone_number"]
            person.personal_number = args["personal_number"]
            db.session.commit()

            return person, 200
        except:
            return "", 500

    def delete(self):
        try:
            args = parser.parse_args()

            person = Person.query.get(args["id"])
            if(person.id != 0):
                db.session.delete(person)
                db.session.commit()
                return "", 200
            else:
                return "", 400
        except:
            return "", 500

        

class GetSpecific(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        try:
            person = Person.query.get(id)
            if person.id == 0:
                return "", 400
            else:
                return person
        except:
            return "", 500


api.add_resource(CrudApi, '/api/values/')
api.add_resource(GetSpecific, '/api/values/<int:id>')