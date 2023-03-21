const connectToMongo = require('./db');
const express = require("express");

connectToMongo();

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

 app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
  console.log(`Server is running on the port ${port}.`);
});

