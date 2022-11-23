const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const routes = require('./route.js');

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', routes);

app.listen(3000, () => {
    console.log("Servidor rodando")
});