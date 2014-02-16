from unittest import TestCase
from backend.app.models.family_graph import FamilyGraph
from backend.app.models.person import Person, gender
from datetime import datetime


class FamilyGraphTest(TestCase):

    def setUp(self):
        self.graph = FamilyGraph()

    def test_should_assign_id_to_person_when_adding_them(self):
        person = self.create_person()
        self.assertIsNone(person.id)
        self.graph.add_person(person)
        self.assertEqual(person.id, 0)

    def create_person(self):
        return Person('Wandera', 'Nimrod', datetime.now(), gender.MALE)