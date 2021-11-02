const custonExpress = require('./config/custonExpress.js');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/Tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso!')

        Tabelas.init(conexao)
        const app = custonExpress();
        
        app.listen(3000, () => console.log('servidor rodando'))
    }
})