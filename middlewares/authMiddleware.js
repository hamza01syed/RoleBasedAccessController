// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token)

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    req.user = { id: decoded.id, role: decoded.role }; // Attach user's ID and role to req
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

module.exports = authenticateToken;
