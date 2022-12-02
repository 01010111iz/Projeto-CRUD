const exps = "express";
const url = "http://localhost:3000/account/list";
const URLdelete = "http://localhost:3000/account/delete/";
const URLedit = "http://localhost:3000/account/put/";

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
          <button
          style= "background: linear-gradient(-8deg, #27b53a, #fff)", background: linear-gradient(8deg, #fff, #00ff22) 
          class="editButton_${id}" 
          onclick=Modal("${id}")>Editar</button>
          
          <button class="deleteButton_${id}" onclick=Confirm("${id}")>Deletar</button>
      `;
      }
      data.innerHTML = ul_html;
    })
    .catch((error) => {
      console.log(error);
    });
}

function Modal(id){
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  modal.addEventListener("click", (e) => {
    if(e.target.className == "button-submit"){
      editData(id);
      console.log("TESTANDO ID: " , id);
      form.reset();
    }
  })
}

function editData(id) {
  fetch(URLedit + id, {
    // console.log("TESTANDO ID: " + id)
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

function closeModal(myModal){
  let modal = document.getElementById("myModal");
  modal.classList.add("mostrar")
  modal.addEventListener("click", (e) => {
    if(e.target.id == myModal || e.target.className == "button-cancell"){
      modal.classList.remove("mostrar");
    }
  })
  modal.style.display = "none";
  Window = Window.close
  document.body.style.overflow = "auto";
}


































function Confirm(id){
  var conf;
  var c = confirm("Ao seguir com a opção os dados serão apagados permanentemente. Você tem certeza que deseja deletar os dados?");
  if(c == true){
    conf = deleteData(id);
  }else{
    conf = "Operação cancelada!"
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
