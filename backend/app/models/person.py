from backend.app.models.enum import enum


class Person:

    def __init__(self, surname, first_name, date_of_birth, gender):
        self.id = None
        self.surname = surname
        self.first_name = first_name
        self.date_of_birth = date_of_birth
        self.gender = gender

    def jsonify(self):
        return {
            "id": self.id,
            "surname": self.surname,
            "first_name": self.first_name,
            "date_of_birth": self.date_of_birth,
            "gender": self.gender
        }

sex = enum(MALE=0, FEMALE=1)