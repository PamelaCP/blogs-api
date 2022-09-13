module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { 
      type: DataTypes.INTEGER,
      references: { model: 'BlogPosts', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
      foreignKey: true,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    }
  }, {timestamps: false});

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as : 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      // por qual tabela eu faço associação
      through: PostCategory, 
      // id tabela fonte
      foreignKey: 'postId',
      // id tabela alvo
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};
