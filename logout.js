db = db.getSiblingDB('intern');

if( db.login.find({"login":1}).count() > 0)
{
db.login.remove({});
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("logout done,thank u for visiting");
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
}
else
{
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("not logged in. Please login first");
print("**************************************************");
print("**************************************************");
print("**************************************************");
print("**************************************************");
}
