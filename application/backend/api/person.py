from flask.ext import restful

from application.backend.db_access import storage


class People(restful.Resource):

    def get(self):
        return storage.all(), 200
        pass