const authService = require('../services/authService');

exports.loginUser = async (req, res) => {
  try {
    const token = await authService.authenticate(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  res.json({ user: req.user });
};
