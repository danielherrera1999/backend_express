require('dotenv').config();

const express = require('express')
const cors = require("cors")


const app = express()
const signUpController = require('./application/users/controller/signUp.controller');
const signInController = require('./application/users/controller/signIn.controller');

var corsOptions = {
    origin: process.env.URL_CORS
}


// configuration of cors
app.use(cors(corsOptions))

//  Parser requests of content-type to application/json
app.use(express.json())

//  Parser requests of content-type to application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))


//connection database
const db = require("./core/utils/sequelize");

db.sequelize.sync();

app.use('/auth', signUpController);
app.use('/auth', signInController);

// Simple router example
app.get("/server-on", (req, res) => {
    res.json({ message: "WELCOME SERVER ON" })
})


// Set port , listen server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}. `);
    console.log(`SERVER IS RUNNING ON PORT ${process.env.URL} `);
})