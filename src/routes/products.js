const express = require('express');
const router = express.Router();

// D-003: Bearer-token auth middleware
const authMiddleware = (req, res