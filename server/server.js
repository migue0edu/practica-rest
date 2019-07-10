require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json('Get /');
})

app.use(require('./routes/routes'));


app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}.`);
});