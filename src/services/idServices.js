const { BlogPost, Category, User } = require('../database/models');

  const idServices = async (id) => {
    const result = await BlogPost.findOne({
        where: { id },
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
    if (!result) throw new Error('404|Post does not exist');
    return result;
  };

module.exports = { idServices };