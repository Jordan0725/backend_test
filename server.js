const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

let contador = 0;

app.get("/api", (req, res) => {
    const { incremento } = req.query;


    contador += parseInt(incremento);

    console.log("contador: " + contador);
    res.send("adicionado");
});

module.exports = app;
