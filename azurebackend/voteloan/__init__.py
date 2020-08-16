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

    client = MongoClient("mongodb+srv://user:getownpassword@cluster0.dyrpk.azure.mongodb.net/<dbname>?retryWrites=true&w=majority")

    db = client.get_database("tippanda")

    return client, db


def vote(userid, loan_id, db):
    loan = db.loans.find_one({"loan_id":loan_id})
    a = db.employees.find_one({"userid":userid})
    if a == None:
        
        a = db.managers.find_one({"restaurant_id":userid})
        print(a)
        k = float(a["personal_balance"] * loan["amount"] / a["tip_jar"])
        db.employees.update_one({"userid":loan["userid"]}, {"$inc":{"balance":k}})
        db.managers.update_one({"restaurant_id":a["restaurant_id"]}, {"$inc":{"personal_balance": (-1 * k)}})
        xa = loan["votes"]
        xb = loan["vote_amounts"]
        xa.append(a["restaurant_id"])
        xb.append(k)

        db.loans.update_one({"loan_id":loan_id}, {"$set":{"votes":xa}})
        db.loans.update_one({"loan_id":loan_id}, {"$set":{"vote_amounts":xb}})

    else:
        b = db.employees.find_one({"userid":loan["userid"]})
        if b == None:
            b = db.managers.find_one({"restaurant_id":loan["userid"]})
            k = float(a["balance"] * loan["amount"] / b["tip_jar"])
            db.managers.update_one({"restaurant_id":loan["userid"]}, {"$inc":{"personal_balance":k}})
            db.employees.update_one({"userid":a["userid"]}, {"$inc":{"balance": (-1 * k)}})
            xa = loan["votes"]
            xb = loan["vote_amounts"]
            xa.append(a["userid"])
            xb.append(k)

            db.loans.update_one({"loan_id":loan_id}, {"$set":{"votes":xa}})
            db.loans.update_one({"loan_id":loan_id}, {"$set":{"vote_amounts":xb}})
        else:
            c = db.managers.find_one({"restaurant_id":a["restaurant_id"]})
            k = float(a["balance"] * loan["amount"] / c["tip_jar"])
            db.employees.update_one({"userid":b["userid"]}, {"$inc":{"balance":k}})
            db.employees.update_one({"userid":a["userid"]}, {"$inc":{"balance":(-1 * k)}})
            xa = loan["votes"]
            xb = loan["vote_amounts"]
            xa.append(a["userid"])
            xb.append(k)

            db.loans.update_one({"loan_id":loan_id}, {"$set":{"votes":xa}})
            db.loans.update_one({"loan_id":loan_id}, {"$set":{"vote_amounts":xb}})
    return {"status":"success"}



def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')


    
    client, db = initdb()
    
    if req.get_json():

        data = req.get_json()
        # ret = json.dumps(distribute(data["employees"], float(data["tip"]), float(data["bill"]), float(data["speed"]), float(data["cleanliness"]), float(data["food"]), float(data["service"]), db))
        # ret = json.dumps(create_loan(data["userid"], data["amount"], data["start_month"], data["start_date"], data["start_year"], data["end_month"], data["end_date"], data["end_year"], data["interest_rate"], db))
        ret =  json.dumps(vote(data["userid"], data["loan_id"],db))


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


