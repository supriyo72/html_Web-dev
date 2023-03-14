show dbs
use supukart
show collections
db.items.find()
db.items.find({price:22000})
// deleteOne
// Deleting items from the Database
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteOne({price:22000})
// deleteMany
db.items.deleteMany({price:29000})