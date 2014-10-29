from flask.ext import restful
from person import People


def setup_api_routes(app):
    api = restful.Api(app)
    api.add_resource(People, '/people/')