const { User } = require('../database/models');

const validateUser = require('../middlewares/joiValidation');

const userService = async ({ displayName, email, password, image }) => {
    const infoUser = validateUser.bodyValidation({ displayName, email, password, image });
    console.log(infoUser);
    const verifyUser = await User.findOne({ where: { email } });
    if (verifyUser) throw new Error('409|User already registered');

    const createUser = await User.create({ displayName, email, password, image });
    return createUser;
};

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  };

module.exports = { userService, getAllUsers };