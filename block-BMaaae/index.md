writeCode

Write code to:-

- create a database named `sports`.
db.create

- list all databases present in local mongod server.
show dbs

- create 3 collections named `cricket`, `football`, `TT` in sports databse.
db.createCollection("cricket")
db.createCollection("football")
db.createCollection("TT")

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
db.cricket.insert({name:"M S Dhoni", email:"MSD123@gmail.com", age:"37", bid_price:"15bn"})

- list all collections in sports database.
show collections

- rename `TT` collection to `tennis`.
db.TT.renameCollection("tennis")

- create a capped collection called `khokho` which should have max 3 documents.
  Try inserting more than 3 and see what happens?
  db.createCollection( "khokho", { capped: true, size: 3 } )

  
- check whether a collection is capped or not?
- drop all documents from `football` collection.
- delete cricket collection completely.
- delete sports database.
- check which database you are connected to ?
- connect to test database
