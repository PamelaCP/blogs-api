const express = require('express');

// const loginController = require('./controllers/loginController');
// const loginValidation = require('./middlewares/loginValidation');
// const userController = require('./controllers/userController');

// ...
const app = express();
app.use(express.json());
// ...
// app.post('/login', loginValidation.loginValidation, loginController.loginController);
// app.post('/user', userController.userController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
