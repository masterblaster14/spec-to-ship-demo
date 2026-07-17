const express = require('express');
const router = express.Router();

// Mock data conforming to the specified rules
const products = [
  {
    id: 1,
    name: "Laptop Pro",
    price: 120000, // $1200.00 in cents
    category: "Electronics",
  },
  {
    id