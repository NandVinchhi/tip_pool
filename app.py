from pymongo import MongoClient
from pymongo.collection import ObjectId
import bcrypt

client = MongoClient("mongodb+srv://user:password3142@cluster0.dyrpk.azure.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("users")

def register_employee(email, password, role):
    
    if db.employees.find_one({"email":email}) == None:
        hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        k = {"email":email, "password":hashp, "restaurant_id":"0", "balance":float(0), "role":role}
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
    return db.employees.find_one({"email":email})

def register_admin(email, password, username, yelp_link):
    if db.managers.find_one({"email":email}) == None and db.managers.find_one({"username":username}) == None: 
        hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        k = {"email":email, "password":hashp, "username":username, "balance":float(0), "yelp_link":yelp_link, "employees":[]}
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
    return db.managers.find_one({"email":email})

print(get_admin_info("nand.vinchhi@gmail.com"))