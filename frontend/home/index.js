const router = ("../../../backend/routes/route");
const URL = "http://localhost:3000/account/addaccount";
const exp = ("express")

 function save(){
    let name = document.getElementById("name").value;
    let rg = document.getElementById("RG").value;
    let cpf = document.getElementById("CPF").value;
    let address = document.getElementById("address").value;
    let blob = new Blob([name, rg, cpf, address], {type: "text/plain;charset=utf-8"});
   (blob, "Formulário de cadastro " + ".txt");
    fetch(URL,
        {
         method: "POST",
         body: JSON.stringify({name, rg, cpf, address}),
         headers: {
            "Content-Type":"application/json"
            }
        })
    .then(response => response.json())
    .then(alert("Dados inseridos!"))
    .catch((error) => {
        console.log(error);
        alert("Erro ao registrar usuário!");
    })
}
