// document.location.reload(true);
const exps = "express";
const url = "http://localhost:3000/account/list";

function userData() {
  fetch(url, {
    method: "GET",
    //body: JSON.parse({ name, rg, cpf, address }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

function tableList() {
  const tbody = document.getElementById("tbody");
  tbody.innerText = " ";
  for (let i = 0; i < this.Data.length; i++) {
    let tr = tbody.insertRow();

    let td_id = tr.insertCell();
    let td_name = tr.insertCell();
    let td_RG = tr.insertCell();
    let td_cpf = tr.insertCell();
    let td_address = tr.insertCell();
    let td_actions = tr.insertCell();

    td_id.innerText = this.Data[i].id;
    td_name.innerText = this.Data[i].name;
    td_RG.innerText = this.Data[i].RG;
    td_cpf.innerText = this.Data[i].cpf;
    td_address.innerText = this.Data[i].address;

    td_id.classList.add("center");

    let imgEdit = document.createElement("img");
    imgEdit.src = "./edit.svg";
    let imgDelete = document.createElement("img");
    imgDelete.src = "./delete.svg";

    td_actions.appendChild(imgEdit);
    td_actions.appendChild(imgDelete);
  }
}

// module.exports(accountRoutes);
const form = {
  name: () => document.getElementById("name"),
  rg: () => document.getElementById("rg"),
  cpf: () => document.getElementById("cpf"),
  address: () => document.getElementById("address"),
};
