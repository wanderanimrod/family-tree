from flask import request
from flask.ext import restful

from application.backend.db_access import storage
from application.backend.models.person import create_person_from_dict


class People(restful.Resource):

    def get(self):
        return {"people": (storage.all())}, 200

    def post(self):
        person_json = request.get_json()
        try:
            person = create_person_from_dict(person_json)
        except Exception:
            return {"error": "person JSON passed not valid"}, 400
        storage.add_person(person)
        return {}, 201