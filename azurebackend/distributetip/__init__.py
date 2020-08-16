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

def get_employee_info(email, db):
    k = db.employees.find_one({"email":email})
    k["_id"] = str(k["_id"])
    # k["password"] = str(k["password"])
    k["password"] = "encrypted"
    return k

def distribute(employees, tip, bill, speed, cleanliness, food, service, db):
    try:


        a = []
        b = []
        c = []
        d = []

        aa = 0.15 * tip
        bb = 0.15 * tip
        cc = 0.15 * tip
        dd = 0.15 * tip

        for i in employees:
            role = get_employee_info(i, db)["role"]
            if role == "food":
                a.append(i)
                c.append(i)
            elif role == "service":
                a.append(i)
                d.append(i)
            else:
                b.append(i)

        aa += 0.4 * tip * (speed/(speed + cleanliness + food + service))
        bb += 0.4 * tip * (cleanliness/(speed + cleanliness + food + service))
        cc += 0.4 * tip * (food/(speed + cleanliness + food + service))
        dd += 0.4 * tip * (service/(speed + cleanliness + food + service))

        aa /= len(a)
        bb /= len(b)
        cc /= len(c)
        dd /= len(d)

        for i in a:
            db.employees.update_one({"email":i}, {"$inc": {"balance":aa}})
        for i in b:
            db.employees.update_one({"email":i}, {"$inc": {"balance":bb}})
        for i in c:
            db.employees.update_one({"email":i}, {"$inc": {"balance":cc}})
        for i in d:
            db.employees.update_one({"email":i}, {"$inc": {"balance":dd}})

        final_k = {"order_id":uuid.uuid1(), "employees":employees, "bill_amount":bill, "tip_amount":tip, "speed":speed, "cleanliness":cleanliness, "food":food, "service":service}
        db.orders.insert_one(final_k)
        return {"status":"success"}

    except:
        return {"status":"failed"}



def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')


    
    client, db = initdb()
    
    if req.get_json():

        data = req.get_json()
        ret = json.dumps(distribute(data["employees"], float(data["tip"]), float(data["bill"]), float(data["speed"]), float(data["cleanliness"]), float(data["food"]), float(data["service"]), db))
       

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


