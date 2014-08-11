from datetime import datetime
from unittest import TestCase
from application.backend.models.person import gender, create_person_from_dict
from application.backend.tests.test_helpers import create_person


class PersonTest(TestCase):

    def test_should_jsonify_itself(self):
        date_of_birth = datetime.now()
        person = create_person(
            surname='Nekesa', first_name='Patricia',
            date_of_birth=date_of_birth, gender=gender.FEMALE
        )
        expected_json = {
            u"surname": u"Nekesa",
            u"first_name": u"Patricia",
            u"date_of_birth": unicode(date_of_birth),
            u"gender": unicode(gender.FEMALE),
            u"id": unicode(None)
        }
        person_json = person.jsonify()
        self.assertEqual(person_json, expected_json)

    def test_should_construct_self_from_dict(self):
        dictionary = {"surname": "Nekesa", "first_name": "Patricia", "date_of_birth": "2012-02-02", "gender": "female"}
        expected_person = create_person(
            surname=u'Nekesa', first_name=u'Patricia',
            date_of_birth=u'2012-02-02', gender=gender.FEMALE
        )
        person = create_person_from_dict(dictionary)
        self.assertEqual(person, expected_person)

    def test_should_equate_two_people_if_ids_are_the_same(self):
        person_1 = create_person()
        person_2 = create_person()
        self.assertEqual(person_1, person_2)