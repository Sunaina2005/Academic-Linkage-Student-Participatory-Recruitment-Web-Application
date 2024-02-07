// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer'); // for handling file uploads
const Question = require('./models/question');
const User = require('./models/user');
const UserDetails = require('./models/userDetails');

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Set up multer for file uploads
const storage = multer.memoryStorage(); // store the file in memory
const upload = multer({ storage: storage });



// Add a route to handle approval status
app.get('/api/approval-status/:name', async (req, res) => {
  try {
    const name = req.params.name;

    // Check if the user is approved
    const userDetails = await UserDetails.findOne({ name });
    if (userDetails && userDetails.approved) {
      res.json({ approved: true });
    } else {
      res.json({ approved: false });
    }
  } catch (error) {
    console.error('Error checking approval status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add a route to check approval status
app.get('/api/check-approval/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;

      // Check if the user is approved
      const userDetails = await UserDetails.findById(userId);
      if (userDetails && userDetails.approved) {
          res.json({ approved: true });
      } else {
          res.json({ approved: false });
      }
  } catch (error) {
      console.error('Error checking approval status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.put('/api/approve-user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Update the user's approval status in the database
    await UserDetails.findByIdAndUpdate(userId, { approved: true });

    res.status(200).json({ message: 'User approved successfully' });
  } catch (error) {
    console.error('Error approving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add a route to handle adding user details
app.post('/api/add-details', upload.single('cv'), async (req, res) => {
  try {
    const { name, email, exp } = JSON.parse(req.body.data);
    const cv = req.file.buffer; // get the file buffer from multer

    // Create a new UserDetails document
    const userDetails = new UserDetails({ name, email, cv, exp });

    // Save the document to the database
    await userDetails.save();

    res.status(201).json({ message: 'User details added successfully' });
  } catch (error) {
    console.error('Error adding user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// backend/index.js
app.post('/api/signup', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    // Validate confirm password
    if (password !== confirmPassword) {
      return res.status(400).json({ errors: { confirmPassword: 'Passwords do not match.' } });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password, // TODO: You should hash the password before saving it to the database
      confirmPassword,
    });

    // Save the user to the database
    await newUser.validate();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Save the user to the database
    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Validation error occurred
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      return res.status(400).json({ errors });
    }

    // Other errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user is admin
    if (username === 'admin' && password === 'admin1234') {
      return res.json({ userType: 'admin' });
    }

    // Check if the user is a researcher
    if (['researcher', 'researcher1', 'researcher2'].includes(username)) {
      // Check if the password matches the username
      if (password === username) {
        return res.json({ userType: username });
      }
    }

    // Check if the user is a regular user
    const user = await User.findOne({ username });

    // Modify the login response to include user name
if (user && user.password === password) {
    // Password is valid
    return res.json({ userType: 'user', userId: user._id, userName: user.username });
}
    // If username and password do not match, return an error
    return res.status(400).json({ error: 'Invalid username or password.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/api/questions', async (req, res) => {
  try {
    console.log('Fetching questions...');

    const questions = await Question.aggregate([{ $sample: { size: 20 } }]);

    console.log('Fetched questions:', questions);
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add a route to fetch user details
app.get('/api/user-details', async (req, res) => {
  try {
    const userDetails = await UserDetails.find({}, 'name email exp cv');

    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Define route to download CV
app.get('/api/download-cv/:userId', async (req, res) => {
  try {
    const user = await UserDetails.findById(req.params.userId); // Assuming UserDetails is your mongoose model
    const cvBuffer = user.cv; // Assuming cv is stored as a Buffer in your model
    const fileName = `${user.name}_CV.pdf`;

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

    // Send the file content
    res.send(cvBuffer);
  } catch (error) {
    console.error('Error downloading CV:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/submit-answers', (req, res) => {
  const answers = req.body;
  console.log('Received answers:', answers);
  res.json({ success: true });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
