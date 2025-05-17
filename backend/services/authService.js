const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const mockUser = {
  id: '123',
  username: 'admin',
  password: 'admin123', // in echt: gehashed!
  role: 'admin'
};

exports.authenticate = async ({ username, password }) => {
  if (username === mockUser.username && password === mockUser.password) {
    return jwt.sign({ id: mockUser.id, role: mockUser.role }, config.jwtSecret, { expiresIn: config.tokenExpiration || '1h' });
  } else {
    throw new Error('Ungültige Zugangsdaten');
  }
};
