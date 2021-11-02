const Users = require('../models/users');

module.exports = app => {
    app.get('/login', (req, res) => res.send('Hora de Logar!'))

    app.post('/login', (req, res) => {
        const user = req.body;

        Users.adiciona(user)
        res.send('aqui voce esta fazendo login!')
    })
}
