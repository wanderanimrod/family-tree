class FamilyGraph:

    def __init__(self):
        pass

    def add_person(self, person):
        self.assign_id_to_person(person)

    @staticmethod
    def assign_id_to_person(person):
        #TODO This id should be the node id assigned by Neo4j
        person.id = 0
        return person