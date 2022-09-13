const postService = require('../services/postService');
const postValidate = require('../middlewares/categoryValidation');

const addPost = async (req, res) => {
  const { body } = req;
  const { email } = req.userEmail;

  const addPostValid = postValidate.addPostValidate(body);
  const { title, content, categoryIds } = addPostValid;

  const result = await postService.addPostService({ email, title, content, categoryIds });
  return res.status(201).json(result);
};

module.exports = { addPost };