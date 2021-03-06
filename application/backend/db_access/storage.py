from neo4jrestclient.client import GraphDatabase
from application.backend.config import neo4j_url


_graph = GraphDatabase(neo4j_url)


def add_person(person):
    _graph.nodes.create(**person.jsonify())


def clear():
    _graph.query(q="MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n, r;")


def all():
    query_sequence = _graph.query('match (node) return node;')
    results = []
    for element in query_sequence.elements:
        results.append(element[0]['data'])
    return results