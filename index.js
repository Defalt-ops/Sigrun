const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    // Handle GET request for /api/users
    // Return a response or perform some operations
    res.json({ message: 'List of users' });
  });
  
  app.post('/api/users', (req, res) => {
    // Handle POST request for /api/users
    // Access request body using req.body
    // Perform database operations or other tasks
    res.json({ message: 'User created' });
  });
  
  const port = 3000; // Specify the port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
