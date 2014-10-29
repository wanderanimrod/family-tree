from unittest import TestCase

from flask import json

from application.backend.app import app
from application.backend.db_access import storage
from application.backend.tests.api.json_parsers import extract_value_from_json, dict_to_json


ENDPOINT_URL = '/api/people/'


class PersonEndpointTest(TestCase):
    @classmethod
    def setUp(cls):
        cls.app = app.test_client()

    @classmethod
    def tearDown(cls):
        storage.clear()

    def test_should_return_empty_list_of_people_when_no_people_exist(self):
        response = self.app.get(ENDPOINT_URL)
        self.assertEqual(response.status_code, 200)
        people = extract_value_from_json(response.data, "people")
        self.assertEqual(people, [])

    def test_should_add_person(self):
        expected_person = {'first_name': 'Patricia', 'surname': 'Nekesa', 'gender': 'female',
                           'id': 'None', 'date_of_birth': '2012-02-02'}
        payload = dict_to_json(expected_person)
        response = self.app.post(ENDPOINT_URL, data=payload, headers={'Content-Type': 'application/json'})
        self.assertEqual(response.status_code, 201)

        returned_people = self.all_people()
        self.assertEqual(returned_people, [expected_person])

    def test_should_throw_error_when_person_json_is_not_valid(self):
        bad_person = dict_to_json({"first_name": 'Patricia'})
        response = self.app.post(ENDPOINT_URL, data=bad_person, headers={'Content-Type': 'application/json'})
        self.assertEqual(response.status_code, 403)
        self.assertEqual(json.loads(response.data), {'error': 'person JSON passed not valid'})

    def all_people(self):
        get = self.app.get(ENDPOINT_URL)
        return extract_value_from_json(get.data, "people")