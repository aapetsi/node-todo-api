// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
      return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection("Todos").deleteOne({text: "Walk the dog"}).then((result) => {
  //   console.log(result);
  // })

  // findoneanddelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // deleteMany
  // db.collection("Users").deleteMany({name: "Apetsi"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  db.collection("Users").findOneAndDelete({_id: new ObjectID("5ae3f1397fa3eb13086fd448")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })

  // db.close();
});
