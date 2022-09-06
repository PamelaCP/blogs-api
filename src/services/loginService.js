const { User } = require('../database/models');

const loginService = async (email, password) => {
  const login = await User.findOne({ where: { email } });

  if (!login || login.password !== password) {
    return { message: 'Invalid fields' };
  }

  return true;
};

module.exports = {
  loginService,
};