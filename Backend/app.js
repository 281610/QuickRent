// backend/server.js
/*const express = require('express');
const path = require('path');
const app = express();

// Serve the React build folder
app.use(express.static(path.join(__dirname, '../Frontend/build')));

// Catch-all to serve index.html for React Router
// ✅ Correct way
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/index.html'));
  });
  
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/index.html'));
  });
  
const PORT = 5000;
app.listen(PORT, () => console.log('http://localhost:5000'));
*/
/*import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Store images in "uploads" folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique file name
  }
});
const upload = multer({ storage: storage });

let items = []; // temporary storage

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// POST route to add item
app.post("/api/items", upload.single("image"), (req, res) => {
  const { name, price, description, location, years } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const newItem = { id: Date.now(), name, price, description, location, years, imageUrl };
  items.push(newItem);
  res.json({ message: "Item added successfully", item: newItem });
});

// GET route to fetch all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

const PORT = 5000;
app.listen(PORT, () => console.log('http://localhost:5000'));
*/
/*
require('dotenv').config(); // Load environment variables first

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const User = require('./models/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect MongoDB using env variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log(err));

// Model
const Item = require('./models/Item'); // also fix missing "./"
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
      const user = await User.create({ name, email, password: hashedPassword });
      res.json({ message: "User registered successfully", user });
    } catch (err) {
      res.status(400).json({ error: "User already exists" });
    }
  });
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  
    const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "1d" });
    res.json({ token });
  });
  app.get('/api/profile', async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
  
    try {
      const decoded = jwt.verify(token, "secret123");
      const user = await User.findById(decoded.id).select("-password");
      res.json(user);
    } catch (err) {
      res.status(401).json({ error: "Invalid token" });
    }
  });
  
// Multer config (store images in uploads/)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// POST - Add Item
app.post('/api/items', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, location, yearsOfUse } = req.body;
    const newItem = new Item({
      name,
      price,
      description,
      location,
      yearsOfUse,
      image: req.file ? `/uploads/${req.file.filename}` : ''
    });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - All Items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET - Single Item by ID
app.get('/api/items/:id', async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
// Start Server using env variable
app.listen(process.env.PORT, () => console.log(`🚀 Server running on http://localhost:${process.env.PORT}`));
*/

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const User = require('./models/user');
const Item = require('./models/Item');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log(err));

// ----------- Auth APIs ------------
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password: hashedPassword });
    res.json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "1d" });
  res.json({ token });
});

// Middleware for auth
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, "secret123");
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}

app.get('/api/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("-password")
      .populate("itemsGiven")
      .populate("itemsTaken");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------- Multer Config ------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// ----------- Items API ------------

// Add Item (user gives item on rent)
app.post('/api/items', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, location, yearsOfUse } = req.body;
    const newItem = new Item({
      name,
      price,
      description,
      location,
      yearsOfUse,
      image: req.file ? `/uploads/${req.file.filename}` : '',
      owner: req.userId
    });

    await newItem.save();
    await User.findByIdAndUpdate(req.userId, { $push: { itemsGiven: newItem._id } });

    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rent an Item (user takes item on rent)
app.post('/api/items/:id/rent', authMiddleware, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });

    if (item.rentedBy) return res.status(400).json({ error: "Already rented" });

    item.rentedBy = req.userId;
    await item.save();

    await User.findByIdAndUpdate(req.userId, { $push: { itemsTaken: item._id } });

    res.json({ message: "Item rented successfully", item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find().populate("owner rentedBy", "name email");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Single Item
app.get('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate("owner rentedBy", "name email");
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Item (owner only)
app.delete('/api/items/:id', authMiddleware, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });

    if (item.owner.toString() !== req.userId) {
      return res.status(403).json({ error: "Not authorized" });
    }

    await User.findByIdAndUpdate(req.userId, { $pull: { itemsGiven: item._id } });
    await item.deleteOne();

    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------- Start Server ------------
app.listen(process.env.PORT, () => console.log(`🚀 Server running on http://localhost:${process.env.PORT}`));
