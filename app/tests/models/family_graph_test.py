from unittest import TestCase

from app.models.family_graph import FamilyGraph
from app.tests.test_helpers import create_person


class FamilyGraphTest(TestCase):

    def setUp(self):
        self.graph = FamilyGraph()

    def test_should_assign_id_to_person_when_adding_them(self):
        person = create_person()
        self.assertIsNone(person.id)
        self.graph.add_person(person)
        self.assertEqual(person.id, 0)