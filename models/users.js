const conexao = require('../infraestrutura/conexao');

class Users {
    adiciona(user, res) {
        const sql = 'INSERT INTO Users SET ?';

        conexao.query(sql, user, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Users';

        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    buscaPorNome(name, res) {
        console.log(name)
        const sql = `SELECT * FROM Users WHERE name="${name}"`;

        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    altera(name, valores, res) {
        const sql = 'UPDATE Users SET ? WHERE name=?';

        conexao.query(sql, [valores, name], (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    apaga(user, res) {
        const sql = 'DELETE FROM Users WHERE name=?';

        conexao.query(sql, user, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Users;