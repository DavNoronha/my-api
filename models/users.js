const conexao = require('../infraestrutura/conexao');

class Users {
    adiciona(user) {
        const sql = 'INSERT INTO Users SET ?';

        conexao.query(sql, user, (erro, resultado) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        })
    }
}

module.exports = new Users;