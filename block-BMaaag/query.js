// writeCode

// Write code to:-

// - create a database named `mountains`
// use.mountains

// - a collection inside that database named `himalayas`
// db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'})

// - insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`

// - insert multiple document using insertMany command
// db.himalayas.insertMany(all)

// - find all documents from mountains
// db.mountains.find().pretty()

// - find a single document using name
// db.himalayas.findOne("name: Mahadev range")

let all = [
  {
    name: 'Mahadev range',
    height: '2000 mtrs',
  },
  {
    name: 'krushna range',
    height: '5000 mtrs',
  },
  {
    name: 'Ganesh range',
    height: '10000 mtrs',
  },
  {
    name: 'Ravan range',
    height: '8000 mtrs',
  },
];
