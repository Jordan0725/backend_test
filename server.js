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
    res.status(200).send("adicionado");
});

app.get("/api/contador", (req, res) => {
    res.status(200).send("Contador: " + contador);
});

app.get("/api/teste", (req, res) => {
    res.status(200).send("API Funcionando perfeitamente!!!!!");
});

module.exports = app;
