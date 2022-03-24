//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import model <---
const model = require('../models/index');
const siswa = model.siswa;


//endpoint menampilkan semua data siswa[petugas], method: GET, function: findAll()
app.get("/", (req,res) => {
    siswa.findAll()
        .then(result => {
            res.json({
                siswa : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint untuk menyimpan data siswa, METHOD: POST, function: create
app.post("/", (req,res) => {
    let data = {

        nisn: req.body.nisn,
        nis: req.body.nis,
        nama: req.body.nama,
        id_kelas: req.body.id_kelas,
        alamat: req.body.alamat,
        no_telp: req.body.no_telp,
        id_spp: req.body.id_spp
    }

    siswa.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint mengupdate data siswa, METHOD: PUT, function:update
app.put("/:id", (req,res) => {
    let param = {
        id_petugas : req.params.id
    }
    let data = {
        password: md5(req.body.password),
        nama_petugas: req.body.nama, //<--ingat ini yang berbeda
        level: req.body.level
    }
    siswa.update(data, {where: param})
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint menghapus data siswa, METHOD: DELETE, function: destroy
app.delete("/:id", (req,res) => {
    let param = {
        id_petugas : req.params.id
    }
    siswa.destroy({where: param})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

module.exports = app;