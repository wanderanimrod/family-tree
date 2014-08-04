from unittest import TestCase
from datetime import datetime

from neo4jrestclient.client import GraphDatabase

from backend.app.config import neo4j_url
from backend.app.db_access import storage
from backend.app.models.person import Person, gender


class DataStoreTest(TestCase):
    def setUp(self):
        self.graph = GraphDatabase(neo4j_url)

    def tearDown(self):
        storage.clear()

    def test_should_insert_person_into_graph_db_as_node(self):
        patricia = Person("Nekesa", "Patricia", datetime.now(), gender.FEMALE)
        storage.add_person(patricia)
        people = self.query('match (node) return node;')
        self.assertEqual(people[0], patricia.jsonify())

    def query(self, query_string):
        query_sequence = self.graph.query(query_string)
        results = []
        for element in query_sequence.elements:
            results.append(element[0]['data'])
        return results

