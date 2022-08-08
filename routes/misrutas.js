const express = require("express")

const misrutas = express.Router();

misrutas.get("/", (req,res) => {
    res.send("hola a todos")
})

misrutas.get("/movies", (req,res) => {
    const movies = ["harry potter","batman"]
    res.send(movies)
})

module.exports = misrutas