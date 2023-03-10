const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.loginService(email, password);
    if (login.message) {
      return res.status(400).json(login);
    }
    const token = jwt.sign({ email, password }, JWT_SECRET);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res
      .status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  loginController,
};