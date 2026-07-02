const express = require('express');
const router = express.Router();

// Mock authentication middleware
const authenticateToken = (req, res, next) => {