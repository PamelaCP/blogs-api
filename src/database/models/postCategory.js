module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { 
      type: DataTypes.INTEGER,
      foreignKey: true, 
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true, 
      primaryKey: true,
    }
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'BlogPosts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'Categories',
      // por qual tabela eu faço associação
      through: PostCategory, 
      // id tabela fonte
      foreignKey: 'categoryId',
      // id tabela alvo
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
