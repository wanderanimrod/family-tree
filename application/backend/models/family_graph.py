class FamilyGraph:
    def __init__(self):
        pass

    def add_person(self, person):
        self.assign_id_to_person(person)

    @staticmethod
    def assign_id_to_person(person):
        person.id = 0  # TODO This id should be the node id assigned by Neo4j
        return person