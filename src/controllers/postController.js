const postService = require('../services/postService');
const postValidate = require('../middlewares/categoryValidation');

const addPost = async (req, res) => {
  const { body } = req;
  const { email } = req.userEmail;

  const addPostValid = postValidate.addPostValidate(body);
  const { title, content, categoryIds } = addPostValid;

  const result = await postService.addPostService({ email, title, content, categoryIds });
  return res.status(201).json(result);

//   if (!title || !content) {
//     return res.status(400).send({ message: 'Some required fields are missing' });
//   }
//   const resService = await postService.createPost(email, title, content, categoryIds);
//   if (resService.status) {
//     const { status, message } = resService;
//     return res.status(status).json({ message });
//   }
//   return res.status(201).json(resService);
};

module.exports = { addPost };