const exps = "express";
const url = "http://localhost:3000/account/list";
const URLedit = "http://localhost:3000/account/put/";
const URLdelete = "http://localhost:3000/account/delete/";
let editButton;
let deleteButton;

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
      for (const id in json) {
        ul = document.createElement("ul");
        for (const info in json[id]) {
          li = document.createElement("li");
          editButton = document.createElement("button");
          editButton.id = `editButton_${id}`;
          var lbl = document.createTextNode("Editar");
          editButton.appendChild(lbl);
          deleteButton = document.createElement("button");
          deleteButton.id = `deleteButton_${id}`;
          var lb = document.createTextNode("Deletar");
          deleteButton.appendChild(lb);
          li.innerHTML = `${info}: ${json[id][info]}`;
          ul.appendChild(li);
        }
        data.appendChild(ul);
        data.appendChild(editButton);
        data.appendChild(deleteButton);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function OnClick() {
  editButton.onclick = editData("${id}");
  deleteButton.onclick = deleteData("${id}");
}

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
