const Users = require('../models/users');

module.exports = app => {
    app.post('/user', (req, res) => {
        const user = req.body;

        Users.adiciona(user, res)
    })

    app.get('/users', (req, res) => {
        Users.lista(res);
    })
    
    app.get('/user',(req, res)  =>  {
        const name = req.query.name;

        Users.buscaPorNome(name, res)
    })

    app.patch('/user/:user', (req, res) => {
        const user = req.params.user;
        const valores = req.body;

        Users.altera(user, valores, res)
    })

    app.delete('/user/:user', (req, res) => {
        console.log(req.params.user)
        const user = req.params.user;

        Users.apaga(user, res)
    })
}
