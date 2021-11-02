class Tabelas {
    init(conexao) {
        this.conexao = conexao;

        this.criarUsuarios()
    }

    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS Users (id int NOT NULL AUTO_INCREMENT, name varchar(50), email varchar(50) NOT NULL, password varchar(20) NOT NULL, PRIMARY KEY(id))';
    
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log('erro na tabela')
            } else {
                console.log('tabela criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas;