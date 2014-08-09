from app.models.enum import enum


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

gender = enum(MALE="male", FEMALE="female")