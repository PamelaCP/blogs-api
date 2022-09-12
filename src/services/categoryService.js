const { category } = require('../database/models');
const isValid = require('../middlewares/categoryValidation');

const categoryService = {

  addCategory: async ({ name }) => {
    const check = isValid({ name });
    const result = await category.create(check);
    return result;
  },
};

module.exports = categoryService;