"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pembayaran", {
      id_pembayaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_petugas: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "petugas",
          key: "id_petugas",
        },
      },
      nisn: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "siswa",
          key: "nisn",
        },
      },
      tgl_bayar: {
        type: Sequelize.DATE,
      },
      bulan_dibayar: {
        type: Sequelize.STRING,
      },
      tahun_dibayar: {
        type: Sequelize.STRING,
      },
      id_spp: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "siswa",
          key: "id_spp",
        },
      },
      jumlah_bayar: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pembayaran");
  },
};
