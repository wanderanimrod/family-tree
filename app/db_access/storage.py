from neo4jrestclient.client import GraphDatabase
from app.config import neo4j_url


__graph = GraphDatabase(neo4j_url)


def add_person(person):
    __graph.nodes.create(**person.jsonify())


def clear():
    __graph.query(q="MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n, r;")


def all():
    query_sequence = __graph.query('match (node) return node;')
    results = []
    for element in query_sequence.elements:
        results.append(element[0]['data'])
    return results