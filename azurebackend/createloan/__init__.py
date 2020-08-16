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

def create_loan(userid, amount, start_month, start_date, start_year, end_month, end_date, end_year, interest_rate, db):
    loan_id = str(uuid.uuid1())

    k = {"loan_id":loan_id, "userid":userid, "amount":float(amount), "start_month":start_month, "start_date":start_date, "start_year":start_year, "end_month":end_month, "end_date":end_date, "end_year":end_year, "interest_rate":interest_rate, "votes":[], "vote_amounts":[], "accepted_amount":float(0)}  
    db.loans.insert_one(k)
    return {"status":"success", "loan_id" : loan_id}



def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')


    
    client, db = initdb()
    
    if req.get_json():

        data = req.get_json()
        # ret = json.dumps(distribute(data["employees"], float(data["tip"]), float(data["bill"]), float(data["speed"]), float(data["cleanliness"]), float(data["food"]), float(data["service"]), db))
        ret = json.dumps(create_loan(data["userid"], data["amount"], data["start_month"], data["start_date"], data["start_year"], data["end_month"], data["end_date"], data["end_year"], data["interest_rate"], db))

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


