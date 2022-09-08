const userServ = require('../services/userService');
const result = require('../middlewares/token');

const userController = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = result.generateToken(email);
    await userServ.userService({ displayName, email, password, image });
    return res.status(201).json({ token });
};

  const getAllUsers = async (req, res) => {
      const allUsers = await userServ.getAllUsers();
      return res.status(200).json(allUsers);
    };

   const getUserId = async (req, res) => {
        const { id } = req.params;
        const getId = await userServ.getUserId(id);
        return res.status(200).json(getId);
      };
  
 module.exports = { userController, getAllUsers, getUserId };