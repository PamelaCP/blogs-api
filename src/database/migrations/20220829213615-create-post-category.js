'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('postCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'BlogPosts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',  
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('postCategories');
  }
};


// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('UserBooks', {
//       userId: {
//         type: Sequelize.INTEGER,
//         field: 'user_id',
//         references: {
//           model: 'Users',
//           key: 'user_id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//         primaryKey: true,
//       },
//       bookId: {
//         type: Sequelize.INTEGER,
//         field: 'book_id',
//         references: {
//           model: 'Books',
//           key: 'book_id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//         primaryKey: true,
//       },
//     });
//   },

//   down: async (queryInterface, _Sequelize) => {
//     await queryInterface.dropTable('UserBooks');
//   },
// };