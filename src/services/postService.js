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

module.exports = { addPostService, update };