/**
 * File Name: ComplexCodeExample.js
 * 
 * Description: This code demonstrates a complex example of a web-based note-taking application with advanced functionality.
 *              It includes features like authentication, note creation, editing, deletion, search, and sorting.
 * 
 * Author: John Doe
 * Date: 2021-09-30
 */

// import necessary libraries and modules
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// create an Express application
const app = express();

// configure the Express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/note_app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// define the models using Mongoose
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', UserSchema);
const Note = mongoose.model('Note', NoteSchema);

// define routes
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // hash the password and create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Failed to register user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // compare the supplied password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'secret-key');
    
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Failed to login user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/notes', async (req, res) => {
  try {
    const { authorization } = req.headers;
    
    // verify the JWT token
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secret-key');
    
    // get the notes for the authenticated user
    const notes = await Note.find({ user: decodedToken.userId }).populate('user', 'name');
    
    return res.status(200).json({ notes });
  } catch (error) {
    console.error('Failed to retrieve notes:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// ... code continues ...