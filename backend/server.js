const express = require('express');
const app = express();

const db = require("./app/models");

require('dotenv').config({
    path: './app/config/.env', 
  });

app.use(express.json());
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



app.use('/api',require('./app/routes'))

// Set the port for the server
const port = process.env.PORT || 3000; 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
