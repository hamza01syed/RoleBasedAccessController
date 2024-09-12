const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { getUserProfile } = require('../controllers/userController');
const router = express.Router();

// User-only route
router.get('/profile', authenticateToken, roleMiddleware(['User']), getUserProfile);

module.exports = router;
