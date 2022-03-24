"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kelas", {
      id_kelas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_kelas: {
        type: Sequelize.STRING,
      },
      kompetensi_keahlian: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kelas");
  },
};
