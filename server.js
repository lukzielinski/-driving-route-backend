const express = require('express');
const mongoose = require('mongoose');
const data = require('./data/data.json');
const app = express();

app.get('/api', (req, res) => {
  res.json(data)
})

const uri = 'mongodb+srv://user:123@cluster0.l1qwhxh.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(5000);

