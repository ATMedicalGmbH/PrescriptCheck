const express = require('express');
const connectDB = require('./config/db');
const logger = require('./config/logger');
const authRoutes = require('./backend/routes/authRoutes');
const prescriptionRoutes = require('./backend/routes/prescriptionRoutes');

const app = express();

// Middleware
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// API-Routen
app.use('/api/auth', authRoutes);
app.use('/api/prescriptions', prescriptionRoutes);

// Start DB
connectDB();

module.exports = app;
