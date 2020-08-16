import logging

import azure.functions as func
from pymongo import MongoClient
from pymongo.collection import ObjectId
import bcrypt
import uuid
import json

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

def initdb():

    client = MongoClient("mongodb+srv://user:password3142@cluster0.dyrpk.azure.mongodb.net/<dbname>?retryWrites=true&w=majority")

    db = client.get_database("tippanda")

    return client, db


def get_employee_info(email, db):
    k = db.employees.find_one({"email":email})
    k["_id"] = str(k["_id"])
    # k["password"] = str(k["password"])
    k["password"] = "encrypted"
    return k

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    client, db = initdb()
    
    if req.get_json():

        data = req.get_json()
        ret = json.dumps(JSONEncoder().encode(get_employee_info(data["email"], db)))
        ret.replace("\\","")


        return  func.HttpResponse(
             ret,
             mimetype="application/json",
             status_code=200
        )

       
    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello {name}!")
    else:
        return func.HttpResponse(
             "Please pass a name on the query string or in the request body",
             status_code=400
        )
