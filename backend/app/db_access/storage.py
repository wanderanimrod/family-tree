from neo4jrestclient.client import GraphDatabase
from backend.app.config import neo4j_url

graph = GraphDatabase(neo4j_url)
people = None


def add_person(person):
    graph.nodes.create(**person.jsonify())


def clear():
    graph.query(q="MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n, r;")