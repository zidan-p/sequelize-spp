//import banya library
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//untuk konstanta
const port  = 3000;

//endpoint untuk admin
const admin = require("./routes/admin");
app.use('/admin', admin);

//endpoint untuk siswa
const siswa = require("./routes/siswa");
app.use('/siswa', siswa);






//run
app.listen(port, ()=>{
    console.log('listen in '+port);
})