const express = require('express');
const app = express();

require('dotenv').config({
    path: './config/.env', 
  });


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Set the port for the server
const port = process.env.PORT || 3000; 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
