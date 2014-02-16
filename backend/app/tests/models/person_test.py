from datetime import datetime
from unittest import TestCase
from backend.app.models.person import sex
from backend.app.tests.test_helpers import create_person


class PersonTest(TestCase):

    def test_should_jsonify_itself(self):
        date_of_birth = datetime.now()
        person = create_person(
            surname='Nekesa', first_name='Patricia',
            date_of_birth=date_of_birth, gender=sex.FEMALE
        )
        expected_json = {
            "surname": "Nekesa",
            "first_name": "Patricia",
            "date_of_birth": date_of_birth,
            "gender": sex.FEMALE,
            "id": None
        }
        person_json = person.jsonify()
        self.assertEqual(person_json, expected_json)