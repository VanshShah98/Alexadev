const mongoose = require('mongoose');
const mongoURI="mongodb+srv://vanshshah0908:yKg3ZtyM6fsXqOCK@cluster0.iy7myhn.mongodb.net/test"
const connectToMongo = async()=>{
    await mongoose.connect(mongoURI)
    .then(()=>{
        console.log('Connection Succesfull')
    })
    .catch(err => {
        console.log('error',err)
    })
}
  module.exports = connectToMongo;