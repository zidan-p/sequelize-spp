"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("petugas", {
      id_petugas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      nama_petugas: {
        type: Sequelize.STRING,
      },
      level: {
        type: Sequelize.ENUM("admin", "petugas"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("petugas");
  },
};
