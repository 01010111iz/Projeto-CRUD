function save(){
    let name = document.getElementById("name").value;
    let rg = document.getElementById("RG").value;
    let cpf = document.getElementById("CPF").value;
    let address = document.getElementById("address").value;
    let blob = new Blob([name, rg, cpf, address], {type: "text/plain;charset=utf-8"});
    saveAs (blob, "Formulário de cadastro " + ".txt");
}
