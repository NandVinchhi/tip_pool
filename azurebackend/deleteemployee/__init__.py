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


def delete_employee(manager_email, employee_email, db):
    k = db.managers.find_one({"email":manager_email})
    x = k["employees"]
    if employee_email in x:
        x.remove(employee_email)
        db.managers.update_one({"email":manager_email},{"$set":{"employees":x}})
        db.employees.update_one({"email":employee_email}, {"$set": {"restaurant_id":"0"}})
        db.employees.update_one({"email":employee_email}, {"$set": {"role":""}})
        return {"status":"success"}
    else:
        return {"status":"failed"}




def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')


    
    client, db = initdb()
    
    if req.get_json():

        data = req.get_json()
        ret = json.dumps(delete_employee(data["manageremail"], data["employeeemail"], db))

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

