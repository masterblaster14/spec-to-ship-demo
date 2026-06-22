const express = require('express');
const router = express.Router();

// D-003: Authentication middleware for bearer token
const authenticateBearerToken = (req