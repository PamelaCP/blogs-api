const Joi = require('joi');

const validateCategory = (catName) => {
    const Category = Joi.object({
      name: Joi.string().required().messages({
        'any.required': '400|"name" is required',
        'string.empty': '400|Some required fields are missing',
      }),
    });
  
    const { error, value } = Category.validate(catName);
  
    if (error) {
      throw error;
    }
    return value;
  };

  module.exports = validateCategory;