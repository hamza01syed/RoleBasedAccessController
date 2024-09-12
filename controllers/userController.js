// controllers/userController.js

// User profile controller
const getUserProfile = (req, res) => {
    res.send(`Welcome to your profile, ${req.user.role}!`);
  };

  module.exports={getUserProfile}
  