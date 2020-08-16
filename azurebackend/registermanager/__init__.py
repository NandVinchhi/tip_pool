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




def register_manager(email, password, username, restaurant_name, address, db):
    if db.managers.find_one({"email":email}) == None: 
        hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        restaurant_id = str(uuid.uuid1())
        k = {"restaurant_id":restaurant_id, "email":email, "password":hashp, "username":username, "employees":[], "restuarant_name":restaurant_name, "personal_loan_balance":float(0), "personal_balance":float(0), "tip_jar":float(0), "loan_balance":float(0), "address":address, "bank_number":""}
        db.managers.insert_one(k)
        return {"status":"success"}
    else:
        return {"status":"failed"}



def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    client, db = initdb()
    
    if req.get_json():

        data = req.get_json()
        ret = json.dumps(register_manager(data["email"], data["password"], data["username"], data["restaurant_name"], data["address"], db))

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
