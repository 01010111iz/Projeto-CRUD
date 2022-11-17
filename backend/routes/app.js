var express = require('express');
//Declaração de variáveis que chamará a função express, junto aos recursos da pasta node_modules
var app = express();
//Declaração da variável que receberá a função

app.get("/", (req, res) => {
//get receberá a requisição do express
    res.status(200).send("Teste");
//Trará como resposta a string declarada
});
/*FINALIZA METODO GET*/
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
    var fs = require("fs");
    fs.writeFile("C:\Users\helviley.melo\OneDrive - Tora Soluções Logísticas Integradas\Documentos\Projetos\backend")
});

app.listen(3000, () => {
//lerá o que foi atribuído à variável 
    console.log("Servidor rodando")
//mensagem que será exibida no terminal
});