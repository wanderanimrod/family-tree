from datetime import datetime

from application.models.person import gender, Person


def create_person(surname='Wandera', first_name='Nimrod', date_of_birth=datetime.now(), gender=gender.MALE):
        return Person(surname, first_name, date_of_birth, gender)