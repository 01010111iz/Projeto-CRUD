const express = require('express');
const cors = require("cors");
//Declaração de variáveis que chamará a função express, junto aos recursos da pasta node_modules
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
//Declaração da variável que receberá a função
/*Criação do app expresso*/

/*MIDDLEWARE*/
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
/*FIM DO MIDDLEWARE
Analisador de JSON
*/
const routes = require('./route.js');
app.use('/', routes);
/*Importação/exigência do arquivo em que é realizado todas as operações de roteamento*/

app.listen(3000, () => {
    //lerá o que foi atribuído à variável 
    console.log("Servidor rodando")
    //mensagem que será exibida no terminal
    /*Inicialização do server*/
});
