const mongoose = require('mongoose');
const mongoURI="mongodb+srv://vanshshah0908:yKg3ZtyM6fsXqOCK@cluster0.iy7myhn.mongodb.net/test"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo");
    })
}
  module.exports = connectToMongo;