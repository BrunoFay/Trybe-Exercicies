'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Books', [{
        title: 'uma odisseia no espaço',
        author:'arthur c.clarck',
        pageQuantity:335,

      }], {
        timestamps: false
      });
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Books', null, {});
  
  }
};
