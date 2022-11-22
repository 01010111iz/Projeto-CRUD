const URL = "http://localhost3000/account/addaccount";
const register = express.accoutRoutes();
async function save(){
    let name = document.getElementById("name").value;
    let rg = document.getElementById("RG").value;
    let cpf = document.getElementById("CPF").value;
    let address = document.getElementById("address").value;
    let blob = new Blob([name, rg, cpf, address], {type: "text/plain;charset=utf-8"});
    /*saveAs*/ (blob, "Formulário de cadastro " + ".txt");
    
    let response = await fetch(URL)
    .then(response => {
        if(response.status == 200){
            alert("Usuário registrado com sucesso!");
            form.reset();
        } else {
            alert("Erro ao registrar usuário");
        }
    }).catch(function (res) {
        alert("Erro ao registrar usuário");
        console.log(res);
    });
    let data = await response.blob();
    console.log(data);

}
