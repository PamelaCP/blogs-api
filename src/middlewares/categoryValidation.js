const Joi = require('joi');

const categoryValidation = (category) => {
    const categories = Joi.object({
      name: Joi.string().required().messages({
        'any.required': '400|"name" is required',
        'string.empty': '400|Some required fields are missing',
      }),
    });
  
    const { error, value } = categories.validate(category);
  
    if (error) {
      throw error;
    }
    return value;
  };

  module.exports = categoryValidation;