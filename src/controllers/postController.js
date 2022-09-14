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

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { email } = req.userEmail;
  const updateValid = postValidate.updateValidate(body);
  const { title, content } = updateValid;
  const result = await postService.update({ id, title, content, email });
  return res.status(200).json(result);
};

const removePost = async (req, res) => {
  const { id } = req.params;
  const { email } = req.userEmail;
  await postService.removePost(id, email);
  return res.status(204).end();
};
module.exports = { addPost, update, removePost };
