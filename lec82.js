show dbs
use supukart
show collections
// CRUD
// C:CREATE,R:READ,U:UPDATE,D:DELETE
db.items.find()
db.items.updateOne({name:"Moto 30s"},{$set:{price:20900}})
db.items.find()
db.items.updateMany({name:"Moto 30s"},{$set:{price:3,rating:1}})