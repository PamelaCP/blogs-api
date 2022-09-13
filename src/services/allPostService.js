const { BlogPost, Category, User } = require('../database/models');

const allPostService = async () => {
    const resAllPost = await BlogPost.findAll(
      {
        include: [{
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
        },
      ],
     },
    
    );
return resAllPost;
  };

  module.exports = { allPostService };