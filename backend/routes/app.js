const express = require('express');
//Declaração de variáveis que chamará a função express, junto aos recursos da pasta node_modules
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
//Declaração da variável que receberá a função

/*Criação do app expresso*/

/*MIDDLEWARE*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
/*FIM DO MIDDLEWARE
Analisador de JSON
*/

const routes = require('./route.js');
app.use('/', routes);
/*Importação/exigência do arquivo em que é realizado todas as operações de roteamento*/
app.post("/", (req, res) => {
  //get receberá a requisição do express
  const dados = [];
  //array dos dados inseridos no form
  const{name, cpf, rg, address} = req.body;
  const resultBody = {
      name:name,
      rg:rg,
      cpf:cpf,
      address:address,
    };
    //hash com os dados necessários
    dados.push (resultBody);
    
});
app.listen(3000, () => {
    //lerá o que foi atribuído à variável 
    console.log("Servidor rodando")
    //mensagem que será exibida no terminal
    /*Inicialização do server*/
});
