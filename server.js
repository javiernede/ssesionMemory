import express from "express";
import session from "express-session";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//Session setup

app.use(session({
        secret: process.env.SECRET_KEY,
        resave: true,
        saveUnitialized: true

    }))
    /*Simulando el login*/

app.get('/login', (req, res) => {
    const { username, password } = req.query
    if (username !== 'pepe' || password !== 'peppas') {
        return res.send('loggin failed');

    }

    req.session.user = username;
    req.session.admin = true;
    res.send('loggin suces!');

})

app.get('/logoutn', (req, res) => {
    const { username, password } = req.query
    if (username !== 'pepe' || password !== 'peppas') {
        return res.send('loggin failed');

    }

    req.session.user = username;
    req.session.admin = true;
    res.send('loggin suces!');

})

/****************Routes*********************/
app.get('/con-session', (req, res) => {
    if (!req.session.contador) {
        req.session.contador = 1;
        res.send('Bienvenido, primer login!');
    } else {

        req.session.contador++;
        res.send(`Usted ha visitado el sitio ${req.session.contador} veces`)

    }
})

/*-------------------------------*/
app.use(express.json())

/*--------server***********************/
const PORT = process.env.PORT;
app.listen(PORT, () => {

    console.log(`servidor express escuchando en el puerto ${PORT}`);
})