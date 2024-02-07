const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const questions = require('./questions');
const Question = require('./models/question'); // Import the Question model

const url = 'mongodb+srv://admin:admin@cluster0.wdmmjjj.mongodb.net/project';
const dbName = 'project';
const collectionName = 'questions';

async function importQuestions() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    for (const question of questions) {
      // Insert each question individually
      await collection.insertOne(question);
      console.log(`Inserted question with ID ${question.id}`);
    }

    console.log('All questions inserted successfully');
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

importQuestions();
