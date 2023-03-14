// Inserting data in mongo db
use supukart
db.items.insertOne({name:"Samsung 30s",price:22000,rating:4.5,qty:5,sold:5})

db.items.insertMany([{name:"Samsung 30s",price:22000,rating:4.5,qty:5,sold:5},{name:"Moto 30s",price:34000,rating:3.9,qty:155,sold:95},{name:"Realme 4s",price:29000,rating:4.9,qty:435,sold:345,isBig:true}])