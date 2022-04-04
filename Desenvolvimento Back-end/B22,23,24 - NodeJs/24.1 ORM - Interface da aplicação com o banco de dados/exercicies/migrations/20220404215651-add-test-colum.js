'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('Books', 'test',{ type: Sequelize.INTEGER });
 
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('Books','test',{});
     
  }
};
