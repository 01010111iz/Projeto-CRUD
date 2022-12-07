const express = require("express");
const accountRoutes = express.Router();
const fs = require("fs");
const dataPath = "./details/account.json";

const saveAccountData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
  fs.writeFileSync(
    "C:/Users/helviley.melo/OneDrive - Tora Soluções Logísticas Integradas/Documentos/Projetos/backend/Formulário-de-cadastro.txt",
    JSON.stringify(data) + "\r\n",
    { flag: "a" },
    function (err) {
      if (err) return console.log(err);
    }
  );
};

const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

accountRoutes.post("/account/addaccount", (req, res) => {
  let existAccounts = getAccountData();
  const newAccountId = Math.floor(100000 + Math.random() * 900000);
  existAccounts[newAccountId] = req.body;
  saveAccountData(existAccounts);
  res.send({ sucess: true, msg: "Conta adicionada com sucesso!" });
});

accountRoutes.get("/account/list",  (req, res) => {
  try {
    const accounts =  getAccountData();
    let users = Object.values(accounts);
    users.sort(function(a,b){
      console.log(users)
       if(a.name < b.name){
         return -1;
       }else{
         return true;
       }
     });
    return res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
  }
});

accountRoutes.put("/account/put/:id", (req, res) => {
  var existAccounts = getAccountData();
  fs.readFile(
    dataPath,
    "utf-8",
    () => {
      const accountId = req.params["id"];
      existAccounts[accountId] = req.body;
      saveAccountData(existAccounts);
      res.send("A conta com o ID" + [accountId] + " foi atualizada.");
    },
    true
  );
});

accountRoutes.delete("/account/delete/:id", (req, res) => {
  fs.readFile(
    dataPath,
    "utf-8",
    () => {
      var existAccounts = getAccountData();
      const userId = req.params["id"];
      delete existAccounts[userId];
      saveAccountData(existAccounts);
      res.send("Conta com ID" + [userId] + " foi deletada");
    },
    true
  );
});
module.exports = accountRoutes;
