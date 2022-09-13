const Joi = require('joi');

const message = '400|Some required fields are missing';

const categoryValidation = (category) => {
    const categories = Joi.object({
      name: Joi.string().required().messages({
        'any.required': '400|"name" is required',
        'string.empty': message,
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
        'string.empty': message,
      }),
      content: Joi.string().required().messages({
        'any.required': '400|"name" is required',
      }),
      categoryIds: Joi.array().items(Joi.number().required().messages(
        { 'array.includesRequiredUnknowns': message,
       },
        )),

    });
    const { error, value } = addPost.validate(body);
  
    if (error) {
      throw error;
    }
    return value;
  };

  const updateValidate = (body) => {
    const addPost = Joi.object({
      title: Joi.string().required().messages({
        'any.required': message,
        'string.empty': message,
      }),
      content: Joi.string().required().messages({
        'any.required': message,
        'string.empty': message,
      }),

    });
    const { error, value } = addPost.validate(body);
  
    if (error) {
      throw error;
    }
    return value;
  };

  module.exports = { categoryValidation, addPostValidate, updateValidate };

  // ajuste retorno categoryValidation retirando value passando category