from datetime import datetime
from backend.app.models.person import sex, Person


def create_person(surname='Wandera', first_name='Nimrod', date_of_birth=datetime.now(), gender=sex.MALE):
        return Person(surname, first_name, date_of_birth, gender)