const userServ = require('../services/userService');
const result = require('../middlewares/token');

const userController = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = result.generateToken(email);
    await userServ.userService({ displayName, email, password, image });
    return res.status(201).json({ token });
};

module.exports = { userController };