/* eslint-disable no-self-compare */
const { BlogPost, PostCategory, Category, User, sequelize } = require('../database/models');
const postValidate = require('../middlewares/categoryIds');

const addPostService = async ({ title, content, categoryIds, email }) => {
    const trasActions = await sequelize.transaction(async (transaction) => {
        await postValidate(categoryIds);
        const validId = await User.findOne({ where: { email } });

    const createPost = await BlogPost.create({ title, content, userId: validId.dataValues.id }, {
            transaction,
        });
    const postCategories = categoryIds.map((cat) => (
        { categoryId: cat, postId: createPost.dataValues.id }));
    await PostCategory.bulkCreate(postCategories, { transaction });
    return createPost.dataValues;
    });
    return trasActions;
};

const update = async ({ title, content, id, email }) => {
    const validId = await User.findOne({ where: { email } });
    await BlogPost.update({ title, content }, { where: { id, userId: validId.dataValues.id } });

    const result = await BlogPost.findOne({
        where: { id, userId: validId.dataValues.id },
        include: [{
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
        }],
      });
    if (!result) throw new Error('401|Unauthorized user');
    return result; 
};

const removePost = async (id, email) => {
    const verifyUser = await User.findOne({ where: { email } });
    console.log(verifyUser);
    const userIdVerify = verifyUser.dataValues.id;
    const getPostId = await BlogPost.findOne({
        where: { id },
      });
      if (!getPostId) throw new Error('404|Post does not exist');
      const postIdDel = getPostId.dataValues.userId;

      if (Number(userIdVerify) !== Number(postIdDel)) throw new Error('401|Unauthorized user');

      await BlogPost.destroy({
        where: { id },
      });
};
  
module.exports = { addPostService, update, removePost };