const JWT = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtValidate = {
    generateToken: (payload) => {
    const token = JWT.sign({ payload }, JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });
    return token;
 },
    validateToken: (token) => {
        if (!token) throw new Error('401|Token not found');
        try {
            const testToken = JWT.verify(token, JWT_SECRET);
            return testToken;
        } catch (error) {
            console.log(error);
            throw new Error('401|Expired or invalid token');  
        }
    },
};

module.exports = jwtValidate;