const router = ("../../../backend/routes/route");
const URL = "http://localhost:3000/account/list";
const exp = ("express")
// const register = router;
// const API = ("../API/api");
async function save(){
    let name = document.getElementById("name").value;
    let rg = document.getElementById("RG").value;
    let cpf = document.getElementById("CPF").value;
    let address = document.getElementById("address").value;
    let blob = new Blob([name, rg, cpf, address], {type: "text/plain;charset=utf-8"});
    /*saveAs*/ (blob, "Formulário de cadastro " + ".txt");
    await fetch(URL
    //     {
    //     method: "GET",
    //     headers: {
    //         "Content-Type":"application/json"
    //     },
    //     // body:{
    //     //     name: name,
    //     //     cpf: cpf,
    //     //     rg: rg,
    //     //     address: address
    //     // }
    // }
    )
    .then((response) => {
        console.log("DEU BOM", response);
        if(response.status == 200){
            alert("Usuário registrado com sucesso!");
            //FormData.reset();
        }
    })
    .catch((error) => {
        console.log("FALHOU", error);
        alert("Erro ao registrar usuário!");
    })
}
