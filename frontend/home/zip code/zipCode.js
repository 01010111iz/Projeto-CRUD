"use strict";
function CleanForm() {
  document.getElementById("street").value = "";
  document.getElementById("district").value = "";
  document.getElementById("city").value = "";
}

function FillOutForm(address) {
  document.getElementById("street").value = address.logradouro;
  document.getElementById("district").value = address.bairro;
  document.getElementById("city").value = address.localidade;
}
const validZipCode = (cep) => cep.length == 8 && /^[0-9]+$/;

const searchZipCode = async () => {
  CleanForm();
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  if (validZipCode(cep)) {
    const data = await fetch(url);
    const address = await data.json();
    if (address.hasOwnProperty("erro")) {
      alert("CEP não encontrado!");
    } else {
      FillOutForm(address);
    }
  } else if (cep == "") {
    alert("Campo obrigatório!");
  } else {
    alert("CEP incorreto");
  }
};

document.getElementById("cep").addEventListener("focusout", searchZipCode);
