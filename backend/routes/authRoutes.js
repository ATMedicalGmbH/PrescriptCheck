const express = require('express');
const router = express.Router();
const { loginUser, getUserProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;
