// routes/protected.js
const express = require('express');
const getProtectedResource=require("../controllers/protectedController.js")
const authenticateToken = require('../middlewares/authMiddleware.js');
const roleMiddleware = require('../middlewares/roleMiddleware.js');
const router = express.Router();


// Route accessible by both User and Admin
router.get('/', authenticateToken, roleMiddleware(['User', 'Admin']),getProtectedResource);

module.exports = router;
