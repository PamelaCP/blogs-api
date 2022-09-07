const userServ = require('../services/userService');
const result = require('../middlewares/token');

const userController = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = result.generateToken(email);
    await userServ.userService({ displayName, email, password, image });
    return res.status(201).json({ token });
};

// const getAllUsers = async (req, res) => {
//     try {
//       const allUsers = await userServ.getAllUsers();
//       return res.status(200).json(allUsers);
//     } catch (err) {
//       return res
//         .status(500).json({ message: 'Server Error' });
//     }
//   };

  const getAllUsers = async (req, res) => {
      const allUsers = await userServ.getAllUsers();
      return res.status(200).json(allUsers);
    };
  
 module.exports = { userController, getAllUsers };