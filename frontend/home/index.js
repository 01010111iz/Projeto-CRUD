const router = "../../../backend/routes/route";
const URL = "http://localhost:3000/account/addaccount";
const exp = "express";

function save() {
  let name = document.getElementById("name").value;
  let rg = document.getElementById("RG").value;
  let cpf = document.getElementById("CPF").value;
  let cep = document.getElementById("cep").value;
  let street = document.getElementById("street").value;
  let number = document.getElementById("number").value;
  let district = document.getElementById("district").value;
  let city = document.getElementById("city").value;
  let blob = new Blob([name, rg, cpf, cep, street, number, district, city], {
    type: "text/plain;charset=utf-8",
  });
  blob, "Formulário de cadastro " + ".txt";
  if(!name, !rg, !cpf, !cep, !street, !number, !district, !city){
    alert("Dados obrigatórios!")
    return true;
  }else{
  fetch(URL, {
    method: "POST",
    body: JSON.stringify({ name, rg, cpf, cep, street, number, district, city }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(alert("Dados inseridos!"))
    .catch((error) => {
      console.log(error);
      alert("Erro ao registrar usuário!");
    });
  }
}

function buttonList(){
  addEventListener("click", 
  location.href="/frontend/put/put.html")
}