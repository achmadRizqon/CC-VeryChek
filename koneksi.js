var mysql = require('mysql');

//koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_user'
});

conn.connect((err)=>{
    if(err) throw errl;
    console.log('mysql terkoneksi');
});

module.exports = conn;