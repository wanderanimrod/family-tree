from unittest import TestCase
from application.backend.app import app
from application.backend.tests.api.json_parsers import extract_value_from_json


class PersonEndpointTest(TestCase):

    @classmethod
    def setUp(cls):
        cls.app = app.test_client()

    def test_should_return_empty_list_of_people_when_no_people_exist(self):
        get = self.app.get('/people/')
        self.assertEqual(get.status_code, 200)
        people = extract_value_from_json(get.data, "people")
        self.assertEqual(people, [])
