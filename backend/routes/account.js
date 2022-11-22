const express = require("express");
const accountRoutes = express.Router();
const fs = require("fs");
const dataPath = "./details/account.json"

const saveAccountData = async (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
    fs.writeFileSync("C:/Users/helviley.melo/OneDrive - Tora Soluções Logísticas Integradas/Documentos/Projetos/backend/Formulário-de-cadastro.txt",
    JSON.stringify(data)+"\r\n",{'flag':'a'}, 
    function(err){
    if(err)
    return console.log(err);
    });
}

 const getAccountData = () =>{
    const jsonData = fs.readFileSync(dataPath);
   return JSON.parse(jsonData);
}

accountRoutes.post('/account/addaccount', (req, res) =>{
    //const {name, rg, cpf}
    let existAccounts = getAccountData();
    const newAccountId = Math.floor(100000 + Math.random() * 900000);
    existAccounts[newAccountId] = req.body;
    console.log(existAccounts);
    saveAccountData(existAccounts);
    res.send({sucess: true, msg:"Conta adicionada com sucesso!"})
 });

 accountRoutes.get, ('/account/list', (req, res) => {

    const accounts = getAccountData();
    res.send(accounts);
 });

accountRoutes.put('/account/:id', (req, res) => {
     var existAccounts = getAccountData();
     fs.readFile(dataPath, 'utf-8', (err, data) => {
         const accountId = req.params['id'];
         existAccounts[accountId] = req.body;
         saveAccountData(existAccounts);
         res.send('A conta com o ID' + [accountId] + ' foi atualizada.')
     }, true);
 });

 accountRoutes.delete('/account/delete/:id', (req, res) =>{
     fs.readFile(dataPath, 'utf-8', (err, data) =>{
         var existAccounts = getAccountData();
         const userId = req.params['id'];
         delete existAccounts[userId];
         saveAccountData(existAccounts);
         res.send('Conta com ID' + [accountId] + ' foi deletada')
     }, true);
 });
module.exports = accountRoutes;