"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("siswa", {
      nisn: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nis: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      id_kelas: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "kelas",
          key: "id_kelas",
        },
      },
      alamat: {
        type: Sequelize.TEXT,
      },
      no_telp: {
        type: Sequelize.STRING,
      },
      id_spp: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "spp",
          key: "id_spp",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("siswa");
  },
};
