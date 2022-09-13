const Joi = require('joi');

const categoryValidation = (category) => {
    const categories = Joi.object({
      name: Joi.string().required().messages({
        'any.required': '400|"name" is required',
        'string.empty': '400|Some required fields are missing',
      }),
    });
  
    const { error } = categories.validate(category);
  
    if (error) {
      throw error;
    }
    return category;
  };

  const addPostValidate = (body) => {
    const addPost = Joi.object({
      title: Joi.string().required().messages({
        'string.empty': '400|Some required fields are missing',
      }),
      content: Joi.string().required().messages({
        'any.required': '400|"name" is required',
      }),
      categoryIds: Joi.array().items(Joi.number().required().messages(
        { 'array.includesRequiredUnknowns': '400|Some required fields are missing',
       },
        )),

    });
    const { error, value } = addPost.validate(body);
  
    if (error) {
      throw error;
    }
    return value;
  };

  module.exports = { categoryValidation, addPostValidate };