from flask import json


def extract_value_from_json(string, key):
    return json.loads(string)[key]


def json_has_expected_keys(string, expected_keys):
    dict_from_json = json.loads(string)
    return reduce(lambda x, y: x and y, [key in dict_from_json for key in expected_keys])


def dict_to_json(dictionary):
    return str(dictionary).replace("'", '"')