"use strict"
const searchZipCode = async () => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const data = await fecth(url);
    console.log(data);
}

document.getElementById("cep").addEventListener("focusout", searchZipCode);

