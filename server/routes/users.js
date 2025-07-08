const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

// Get all users
router.post('/getAllUsers/', async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch userss' });
  }
});

// Get single user
router.post('/getUserById/', async (req, res) => {
  try {
    const user = await userModel.getUserById(req.body.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Create user
router.post('/createUser/', async (req, res) => {
  try {
    const newUser = await userModel.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to create user' });
  }
});

// Update user
router.post('/updateUser/', async (req, res) => {
  try {
    const updatedUser = await userModel.updateUser(req.body.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to update user' });
  }
});

// Delete user
router.post('/deleteUser/', async (req, res) => {
  console.log("assss")
  try {
    console.log("req.body", req.body)
    await userModel.deleteUser(req.body.id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;