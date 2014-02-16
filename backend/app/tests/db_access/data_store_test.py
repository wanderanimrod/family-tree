from unittest import TestCase
from neo4jrestclient.client import GraphDatabase
from backend.app.config import neo4j_url


class DataStoreTest(TestCase):

    def setUp(self):
        self.graph = GraphDatabase(neo4j_url)

    def test_should_insert_person_into_graph_db_as_node(self):
        pass