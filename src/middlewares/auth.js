const jwtToken = require('./token');

module.exports = {
    valideToken: (req, _res, next) => {
        const { authorization } = req.headers;
        const result = jwtToken.validateToken(authorization);
        req.userEmail = result;
        next();
    },
};