// Searching data in mongo db
use supukart


//This query will return all the objects with rating equal to 4.5
db.items.find({rating:4.5})
db.items.find({rating: {$gte:3.5}})
db.items.find({rating: {$gt:4.5}})
//And operator
db.items.find({rating: {$gt:4.5},price:{$gt:20000}})
db.items.find({rating: {$lt:4.5},price:{$gt:25000}})
// /or operator
db.items.find({$or:[{rating: {$lt:4.5}},{price:{$gt:25000}}]})
db.items.find({$or:[{rating: {$lt:4.5}},{price:{$gt:25000}}]})
db.items.find({$or:[{rating: {$gt:4.5}},{price:{$lt:25000}}]})

db.items.find({rating: {$gt:4.5}},{rating:1})
db.items.find({rating: {$gt:4.5}},{rating:1,qty:1})

