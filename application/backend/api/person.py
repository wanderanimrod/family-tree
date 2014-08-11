from flask import request
from flask.ext import restful

from application.backend.db_access import storage
from application.backend.models.person import create_person_from_dict


class People(restful.Resource):

    def get(self):
        return {"people": (storage.all())}, 200

    def post(self):
        person_json = request.get_json()
        person = create_person_from_dict(person_json)
        storage.add_person(person)
        return {}, 201