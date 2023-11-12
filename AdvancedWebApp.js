/* Filename: AdvancedWebApp.js */

// This code is an advanced web application with multiple features
// Including a user login system, database integration, and real-time data visualization

// ------------------ User Login System ------------------

// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Initialize Express.js application
const app = express();

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Database storage for user credentials
const users = [];

// User registration endpoint
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

// User login endpoint
app.post('/login', async (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.status(401).send('Wrong password');
    }
  } catch {
    res.status(500).send();
  }
});

// ------------------ Real-time Data Visualization ------------------

// Import necessary libraries
const socket = require('socket.io');

// Initialize Express.js server
const server = app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Initialize Socket.io
const io = socket(server);

// Store data for real-time visualization
const data = { count: 0 };

// Socket.io connection event
io.on('connection', (socket) => {
  console.log('New connection:', socket.id);

  // Emit initial data
  io.to(socket.id).emit('initialData', data);

  // Increment count every second
  const countInterval = setInterval(() => {
    data.count++;
    io.emit('updateData', data);
  }, 1000);

  // Socket.io disconnection event
  socket.on('disconnect', () => {
    console.log('Disconnected:', socket.id);
    clearInterval(countInterval);
  });
});

// -------------------------------------------------------

// Additional code for other features can be added below...

// ...

// -------------------------------------------------------

// Start the web application
app.listen(8080, () => {
  console.log('Web application started on port 8080');
});