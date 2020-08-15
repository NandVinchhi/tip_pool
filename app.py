from pymongo import MongoClient
from pymongo.collection import ObjectId
import bcrypt
import uuid
from flask import Flask, request
app = Flask(__name__)

import json
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

client = MongoClient("mongodb+srv://user:password3142@cluster0.dyrpk.azure.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("users")

def register_employee(email, password, role, name, bank_number):
    
    if db.employees.find_one({"email":email}) == None:
        hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        userid = str(uuid.uuid1())
        k = {"name":name, "email":email, "password":hashp, "restaurant_id":"0", "balance":float(0), "role":role, "userid":userid, "loan_amount":float(0), "bank_number":bank_number}
        db.employees.insert_one(k)
        return {"status":"success"}
    else:
        return {"status":"failed"}

def login_employee(email, password):
    k = db.employees.find_one({"email":email})

    if k != None:
        x = bcrypt.hashpw(password.encode('utf-8'), k["password"])
        
        
        if x == k["password"]:
            return {"status":"success"}
        else:
            return {"status":"failed"}

    else:
        return {"status":"failed"}

def get_employee_info(email):
    k = db.employees.find_one({"email":email})
    k["_id"] = str(k["_id"])
    k["password"] = str(k["password"])
    return k

def register_admin(email, password, username, restaurant_name, yelp_link, bank_number):
    if db.managers.find_one({"email":email}) == None and db.managers.find_one({"username":username}) == None: 
        hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        restaurant_id = str(uuid.uuid1())
        k = {"restaurant_id":restaurant_id, "email":email, "password":hashp, "username":username, "employees":[], "restuarant_name":restaurant_name, "personal_loan_balance":float(0), "personal_balamce":float(0), "tip_jar":float(0), "loan_balance":float(0), "yelp_link":yelp_link, "bank_number":bank_number}
        db.managers.insert_one(k)
        return {"status":"success"}
    else:
        return {"status":"failed"}

def login_admin(email, password):
    k = db.managers.find_one({"email":email})

    if k != None:
        x = bcrypt.hashpw(password.encode('utf-8'), k["password"])
        
        
        if x == k["password"]:
            return {"status":"success"}
        else:
            return {"status":"failed"}

    else:
        return {"status":"failed"}

def get_admin_info(email):
    k = db.managers.find_one({"email":email})
    k["_id"] = str(k["_id"])
    k["password"] = str(k["password"])
    return k

#print(register_admin("nand.vinchhi@gmail.com", "password6969", "Nand Vinchhi", "Taco Bell", "google.com", "123455"))
#print(get_admin_info("nand.vinchhi@gmail.com"))
#print(register_employee("nand.vinchhi@gmail.com", "password6969", "chef", "Nand Vinchhi", "123456"))
#print(get_employee_info("nand.vinchhi@gmail.com"))

def add_employee(manager_email, employee_email):
    k = db.managers.find_one({"email":manager_email})
    x = k["employees"]
    if employee_email not in x and db.employees.find_one({"email":employee_email}) != None:
        x.append(employee_email)
        db.managers.update_one({"email":manager_email},{"$set":{"employees":x}})
        db.employees.update_one({"email":employee_email}, {"$set": {"restaurant_id":k["restaurant_id"]}})
        return {"status":"success"}
    else:
        return {"status":"failed"}

def delete_employee(manager_email, employee_email):
    k = db.managers.find_one({"email":manager_email})
    x = k["employees"]
    if employee_email in x:
        x.remove(employee_email)
        db.managers.update_one({"email":manager_email},{"$set":{"employees":x}})
        db.employees.update_one({"email":employee_email}, {"$set": {"restaurant_id":"0"}})
        return {"status":"success"}
    else:
        return {"status":"failed"}
    
#print(delete_employee("nand.vinchhi@gmail.com", "nand.vinchhi@gmail.com"))
#print(add_employee("nand.vinchhi@gmail.com", "nand.vinchhi@gmail.com"))

def distribute(employees, tip, bill, speed, cleanliness, food, service):
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
            role = get_employee_info(i)["role"]
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

@app.route('/register-employee', methods=["GET", "POST"])
def register_employee_endpoint():
    data = request.json

    return register_employee(data["email"], data["password"], data["role"], data["name"], data["bank_number"])

@app.route('/login-employee', methods=["GET", "POST"])
def login_employee_endpoint():
    data = request.json

    return login_employee(data["email"], data["password"])

@app.route('/get-employee-info', methods=["GET", "POST"])
def get_employee_info_endpoint():
    data = request.json

    return JSONEncoder().encode(get_employee_info(data["email"]))
@app.route('/register-admin', methods=["GET", "POST"])
def register_admin_endpoint():
    data = request.json

    return register_admin(data["email"], data["password"], data["username"], data["restaurant_name"], data["yelp_link"], data["bank_number"])

@app.route('/login-admin', methods=["GET", "POST"])
def login_admin_endpoint():
    data = request.json

    return login_admin(data["email"], data["password"])

@app.route('/get-admin-info', methods=["GET", "POST"])
def get_admin_info_endpoint():
    data = request.json

    return get_admin_info(data["email"])

@app.route('/add-employee', methods=["GET", "POST"])
def add_employee_endpoint():
    data = request.json

    return add_employee(data["manager_email"], data["employee_email"])

@app.route('/delete-employee', methods=["GET", "POST"])
def delete_employee_endpoint():
    data = request.json

    return delete_employee(data["manager_email"], data["employee_email"])

@app.route('/distribute', methods=["GET", "POST"])
def distribute_endpoint():
    data = request.json

    return distribute(data["employees"], data["tip"], data["bill"], data["speed"], data["cleanliness"], data["food"], data["service"])

if __name__ == "__main__":
    app.run()