/*
function onChangeName(){
    toggleButtonsDisable();
    toggleNameErrors();

}

function toggleButtonsDisable(){
    const nameValid = isNameValid();
    form.loginButton().disabled = !nameValid;
}

function toggleNameErrors(){
    const Name = form.Name().value;
    form.nameRequiredError().style.display = Name ? "none" : "block";
}

function isNameValid(){
    const Name = form.Name().value;
    if(!Name){
        return false;
    }
    return validateName(Name);
    
}
const form = {
    Name: () => document.getElementById("name"),
    nameRequiredError: () => document.getElementById("required-name"),
    RG: () => document.getElementById("RG"),
    rgRequiredError: () => document.getElementById("required-RG"),
    CPF: () => document.getElementById("CPF"),
    cpfRequiredError: () => document.getElementById("required-CPF"),
    Endereço: () => document.getElementById("Endereço"),
    endereçoRequiredError: () => document.getElementById("required-address"),
    loginButton: () => document.getElementById("submit")
}
*/