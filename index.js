const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hola mundo desde mi pagina'));

app.listen('3000')