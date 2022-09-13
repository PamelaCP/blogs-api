require('dotenv').config();
const app = require('./api');

require('express-async-errors');

const loginController = require('./controllers/loginController');
const loginValidation = require('./middlewares/loginValidation');
const userController = require('./controllers/userController');
const auth = require('./middlewares/auth');
const catController = require('./controllers/categoryController');
const postController = require('./controllers/postController');
const allPostCtrl = require('./controllers/allPostController');
const idPostCtrll = require('./controllers/idPostController');
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.post('/login', loginValidation.loginValidation, loginController.loginController);
app.post('/user', userController.userController);
app.get('/user', auth.valideToken, userController.getAllUsers);
app.get('/user/:id', auth.valideToken, userController.getUserId);
app.post('/categories', auth.valideToken, catController.addCategory);
app.get('/categories', auth.valideToken, catController.getAllCategory);
app.post('/post', auth.valideToken, postController.addPost);
app.get('/post', auth.valideToken, allPostCtrl.allPostController);
app.get('/post/:id', auth.valideToken, idPostCtrll.idPostPostController);
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
