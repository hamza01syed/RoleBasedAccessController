// controllers/protectedController.js

// Shared route for both User and Admin
const getProtectedResource = (req, res) => {
    res.send(`Welcome to the protected route, ${req.user.role}!`);
  };

module.exports=getProtectedResource
  