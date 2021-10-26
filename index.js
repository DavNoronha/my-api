const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World Bro'))

app.listen(3000)