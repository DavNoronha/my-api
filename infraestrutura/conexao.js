const mysql = require('mysql');

//console.log(mysql);

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'users'
});

module.exports = conexao;