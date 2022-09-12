require('dotenv').config();
const app = require('./api');

require('express-async-errors');

const loginController = require('./controllers/loginController');
const loginValidation = require('./middlewares/loginValidation');
const userController = require('./controllers/userController');
const auth = require('./middlewares/auth');
const catController = require('./controllers/categoryController');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.post('/login', loginValidation.loginValidation, loginController.loginController);
app.post('/user', userController.userController);
app.get('/user', auth.valideToken, userController.getAllUsers);
app.get('/user/:id', auth.valideToken, userController.getUserId);
app.post('/categories', auth.valideToken, catController.addCategory);
app.get('/categories', auth.valideToken, catController.getAllCategory);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const [code, message] = err.message.split('|');
  return res.status(code).json({ message });
});

app.listen(port, () => console.log('ouvindo porta', port));
