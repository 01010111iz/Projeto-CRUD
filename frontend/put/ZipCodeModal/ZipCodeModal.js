"use strict";
function CleanFormModal() {
  document.getElementById("cepModal").value = "";
  document.getElementById("streetModal").value = "";
  document.getElementById("districtModal").value = "";
  document.getElementById("cityModal").value = "";
}

function FillOutForm(address) {
  document.getElementById("streetModal").value = address.logradouro;
  document.getElementById("districtModal").value = address.bairro;
  document.getElementById("cityModal").value = address.localidade;
}
const validZipCode = (cep) => cep.length == 8 && /^[0-9]+$/;

const searchZipCodeModal = async () => {
  // CleanFormModal();
  const cep = document.getElementById("cepModal").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  if (validZipCode(cep)) {
    const data = await fetch(url);
    const address = await data.json();
    if (address.hasOwnProperty("erro")) {
      alert("CEP não encontrado!");
    } else {
      FillOutForm(address);
    }
  } else {
    alert("CEP incorreto");
  }
};

document.getElementById("cepModal").addEventListener("click", CleanFormModal);
document
  .getElementById("cepModal")
  .addEventListener("focusout", searchZipCodeModal);
