const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
    allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'Categories',
  }
  );
  
  return Category;
};

module.exports = Category;

// sala 01 dificuldade com a tabela BlogPost e PostCategorie