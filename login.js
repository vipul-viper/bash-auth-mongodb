 db = db.getSiblingDB('intern');

if( db.persons.find({"username":"username"}).count() > 0)
{
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("you are logged in");
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
db.login.insertOne({"login":1});
}

else
{
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
print ("user does not exist,please register")
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
}
