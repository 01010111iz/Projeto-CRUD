const exps = "express";
const url = "http://localhost:3000/account/list";

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
      let ul;
      let li;
      let editButton;
      let deleteButton;
      for (const id in json) {
        ul = document.createElement("ul");
        for (const info in json[id]) {
          li = document.createElement("li");
          editButton = document.createElement("button");
          var lbl = document.createTextNode("Editar");
          editButton.appendChild(lbl);
          deleteButton = document.createElement("button");
          var lb = document.createTextNode("Deletar");
          deleteButton.appendChild(lb);
          li.innerHTML = `${id} - ${info}: ${json[id][info]}`;
          ul.appendChild(li);
        }
        // if(a){
        //   editButton.onclick = editData();
        // }
        // else if (a){
        //   deleteButton.onclick = deleteData();
        // }
        // else{
        // }
        data.appendChild(ul);
        data.appendChild(editButton);
        data.appendChild(deleteButton);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// ====================================== //

const URLedit = "http://localhost:3000/account/put";
function editData() {
  // const Window = window.open("put-delete.html", "popup")
  fetch(URLedit, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(console.log("teste editar"))
    .then()
    .catch((error) => {
      console.log(error);
    });
}

const URLdelete = "http://localhost:3000/account/delete";

function deleteData() {
  fetch(URLdelete, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(console.log("teste deletar"))
    .then()
    .catch((error) => {
      console.log(error);
    });
}
