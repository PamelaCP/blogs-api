const { BlogPost, PostCategory, User, sequelize } = require('../database/models');
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

module.exports = { addPostService };