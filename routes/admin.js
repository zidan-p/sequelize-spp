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
const admin = model.petugas


//endpoint menampilkan semua data admin[petugas], method: GET, function: findAll()
app.get("/", (req,res) => {
    admin.findAll()
        .then(result => {
            res.json({
                admin : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint untuk menyimpan data admin, METHOD: POST, function: create
app.post("/", (req,res) => {
    let data = {
        username: req.body.username,
        password: md5(req.body.password),
        nama_petugas: req.body.nama, //<--ingat ini yang berbeda
        level: req.body.level
    }

    admin.create(data)
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

//endpoint mengupdate data admin, METHOD: PUT, function:update
app.put("/:id", (req,res) => {
    let param = {
        id_petugas : req.params.id
    }
    let data = {
        password: md5(req.body.password),
        nama_petugas: req.body.nama, //<--ingat ini yang berbeda
        level: req.body.level
    }
    admin.update(data, {where: param})
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

//endpoint menghapus data admin, METHOD: DELETE, function: destroy
app.delete("/:id", (req,res) => {
    let param = {
        id_petugas : req.params.id
    }
    admin.destroy({where: param})
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