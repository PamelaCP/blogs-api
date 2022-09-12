const Joi = require('joi');

const ANY_REQUIRED = 'Some required fields are missing';

const bodyValidation = (infoUser) => {
    const User = Joi.object({
        displayName: Joi.string().required().min(8).messages({
        'any.required': `400|${ANY_REQUIRED}`,
        'string.min': '400|"displayName" length must be at least 8 characters long',
        }),
        email: Joi.string().email().required().messages({
        'any.required': `400|${ANY_REQUIRED}`,
        'string.email': '400|"email" must be a valid email',
        }),
        password: Joi.string().required().min(6).messages({
        'string.min': '400|"password" length must be at least 6 characters long',
        'string.empty': '400|Some required fields are missing',
        }),
        image: Joi.string().required().messages({ 'any.required': `400|${ANY_REQUIRED}` }),
        });
        
        const { error, value } = User.validate(infoUser);

        if (error) throw error;
        return value; 
};
 module.exports = { bodyValidation };