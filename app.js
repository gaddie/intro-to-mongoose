const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1/fruitsDb",)


mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});


const Fruit = mongoose.model("Fruit", fruitSchema);


// const fruit = new Fruit({
//   name: "apple",
//   rating: 8,
//   review: "solid"
// });


// const mango = new Fruit({
//   name: "mango",
//   rating: 6,
//   review: "wow",
// })

const guava = new Fruit({
  name: "guava",
  rating: 7,
  review: "wow",
})

guava.save();


// inserting a person in the database
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
})

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Amy",
//   age: 21,
//   favouriteFruit: pineapple,
// })

// person.save();


// reading from the database the fruits col
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
})



// deleting many
// Person.deleteMany({name: "john"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("sucess");
//   }
// })


// deleting a record
// Fruit.deleteOne({name: "banana"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("succesfully deleted");
//   }
// });

// update a document
Person.updateOne({name: "John"}, {favouriteFruit: guava}, function(err){
  if (err) {
    console.log(err)

  } else {
    console.log("success");
  }
})

// person.save();
// fruit.save();


// aadding many items to the data
// Fruit.insertMany([mango, orange], function (err) {
//   if (err) {
//     cosole.log(err)

//   } else {
//     console.log("success")
//   }
// });





