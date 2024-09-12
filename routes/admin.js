const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { getAdminDashboard } = require('../controllers/adminController');
const router = express.Router();

// Admin-only route
router.get('/dashboard', authenticateToken, roleMiddleware(['Admin']), getAdminDashboard);

module.exports = router;
