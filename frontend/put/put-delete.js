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
      console.log(json);
      let data = document.querySelector("table > tbody");
      
      ul_html = ``;
      for (const id in json) {
        for (const info in json[id]){
        ul_html += `<ul>${info}: ${json[id][info]}</ul>`;
        }
        ul_html += `<img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" 
        class="editButton_${id}" 
        onclick=Modal("${id}")></img>
        
        <img src="https://cdn-icons-png.flaticon.com/512/3138/3138336.png" 
        class="deleteButton_${id}" 
        onclick=Confirm("${id}")></img>`;
      }data.innerHTML = ul_html;
    })
    .catch((error) => {
      console.log(error);
    });
}

function Modal(id) {
  let modal = document.getElementById("myModal");
  let msg = document.getElementById("submitModal");
  modal.style.display = "block";
  msg.addEventListener("click", () => {
    msg = confirm("Deseja realmente concluir com as alterações?");
    if (msg == true) {
      editData(id);
    } else {
      closeModal();
    }
  });
}

function editData(id) {
  let name = document.getElementById("nameModal").value;
  let rg = document.getElementById("RGModal").value;
  let cpf = document.getElementById("CPFModal").value;
  let address = document.getElementById("addressModal").value;
  console.log("Editando Modal " + URLedit + id);
  fetch(URLedit + name, {
    method: "PUT",
    body: JSON.stringify({ name, rg, cpf, address }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

function closeModal(myModal) {
  let modal = document.getElementById("myModal");
  modal.classList.add("mostrar");
  modal.addEventListener("click", (e) => {
    if (e.target.id == myModal || e.target.className == "button-cancell") {
      modal.classList.remove("mostrar");
    }
  });
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function Confirm(id) {
  var c = confirm(
    "Ao seguir com a opção os dados serão apagados permanentemente. Você tem certeza que deseja deletar os dados?"
  );
  if (c == true) {
    deleteData(id);
  } else {
    alert("Operação cancelada!");
  }
}

function deleteData(id) {
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
