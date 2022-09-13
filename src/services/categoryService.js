const { Category } = require('../database/models');
const isValid = require('../middlewares/categoryValidation');

const categoryService = {

  addCategory: async ({ name }) => {
    const verify = isValid.categoryValidation({ name });
    const result = await Category.create(verify);
    return result;
  },
  getAllCategory: async () => {
    const result = await Category.findAll();
    return result;
  },
};

module.exports = categoryService;

// ajuste em a