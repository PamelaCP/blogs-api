const express = require('express');

const loginController = require('./controllers/loginController');
const loginValidation = require('./middlewares/loginValidation');
// ...
const app = express();
app.use(express.json());
// ...
app.post('/login', loginValidation.loginValidation, loginController.loginController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
