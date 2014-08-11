from application.backend.models.enum import enum


class Person:
    def __init__(self, surname, first_name, date_of_birth, gender):
        self.id = None
        self.surname = surname
        self.first_name = first_name
        self.date_of_birth = date_of_birth
        self.gender = gender

    def jsonify(self):
        return {
            u"id": unicode(self.id),
            u"surname": unicode(self.surname),
            u"first_name": unicode(self.first_name),
            u"date_of_birth": unicode(self.date_of_birth),
            u"gender": unicode(self.gender)
        }

    def __eq__(self, other):
        return self.id == other.id


gender = enum(MALE=u"male", FEMALE=u"female")


def create_person_from_dict(person_dict):
    return Person(
        person_dict['surname'], person_dict['first_name'], person_dict['date_of_birth'], person_dict['gender']
    )