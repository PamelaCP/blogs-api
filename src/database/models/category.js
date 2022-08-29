const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("User", {
    id: {
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
    allowNull: false,
    },
  });
  
  return Category;
};

module.exports = Category;