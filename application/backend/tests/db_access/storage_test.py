from unittest import TestCase
from datetime import datetime

from neo4jrestclient.client import GraphDatabase
from application.backend.config import neo4j_url
from application.backend.db_access import storage
from application.backend.models.person import Person, gender


class StorageTest(TestCase):
    def setUp(self):
        self.graph = GraphDatabase(neo4j_url)

    def tearDown(self):
        storage.clear()

    def test_should_insert_person_into_graph_db_as_node(self):
        patricia = Person("Nekesa", "Patricia", datetime.now(), gender.FEMALE)
        storage.add_person(patricia)
        people = self.query('match (node) return node;')
        self.assertEqual(people[0], patricia.jsonify())

    def test_should_provide_all_people_in_graph(self):
        patricia = Person("Nekesa", "Patricia", datetime.now(), gender.FEMALE)
        jesse = Person("Wejuli", "Jesse", datetime.now(), gender.MALE)
        storage.add_person(patricia)
        storage.add_person(jesse)
        people = storage.all()
        self.assertEqual(people, [patricia.jsonify(), jesse.jsonify()])

    def query(self, query_string):
        query_sequence = self.graph.query(query_string)
        results = []
        for element in query_sequence.elements:
            results.append(element[0]['data'])
        return results

