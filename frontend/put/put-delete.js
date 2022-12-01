const exps = "express";
const url = "http://localhost:3000/account/list";
const URLedit = "http://localhost:3000/account/put/";
const URLdelete = "http://localhost:3000/account/delete/";

function userData() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      let data = document.querySelector("table > tbody");

      ul_html = ``;
      for (const id in json) {
        for (const info in json[id]) {
          ul_html += `
              <li>${info}: ${json[id][info]}</li>
          `;
        }
        ul_html += `
          <button id="editButton_${id}" onclick=editData("${id}")>Editar</button>
          <button id="deleteButton_${id}" onclick=Confirm("${id}")>Deletar</button>
      `;
      }
      data.innerHTML = ul_html;
    })
    .catch((error) => {
      console.log(error);
    });
}
const swicthModal = () => {
  const modal = document.querySelector(".form");
  const actualStyle = modal.style.display
  if(actualStyle == "block"){
    modal.style.display = "none"
  }else{
    modal.style.display = "block"
  }
}

function editData(id) {
  // const Window = window.open("put-delete.html", "popup")
  fetch(URLedit + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

function Confirm(id){
  var conf;
  var c = confirm("Ao seguir com a opção os dados serão apagados permanentemente. Você tem certeza que deseja deletar os dados?");
  if(c == true){
    conf = deleteData(id);
    console.log("Dados excluídos!")
  }else{
    conf = "Operação cancelada!"
    console.log("Operação cancelada!")
  }
}

function deleteData(id){
  fetch(URLdelete + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
