// server.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const protectedRouter=require("./routes/protected.js")
const adminRouter=require("./routes/admin.js")
const userRouter=require('./routes/user.js')
const authRouter=require('./routes/auth.js')

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to the database
connectDB();

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);       // Admin routes
app.use('/api/user', userRouter);         // User routes
app.use('/api/protected', protectedRouter); // Protected routes for both

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
