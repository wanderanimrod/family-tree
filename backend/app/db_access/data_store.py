from neo4jrestclient.client import GraphDatabase
from backend.app.config import neo4j_url

graph = GraphDatabase(neo4j_url)


def add_person(person_json):
    person = graph.node()