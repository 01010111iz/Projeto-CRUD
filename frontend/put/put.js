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
        li_html = ``;
        for (const info in json[id]) {
          li_html += `<ul>
                      <label for="${info}_${json[id]["id"]}">${info}: </label>
                      <span id="${info}_${json[id]["id"]}">${json[id][info]}</span>
                    </ul>`;
        }
        li_html += `<img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" 
      class="editButton_${json[id]["id"]}" 
      onclick=Modal("${json[id]["id"]}")></img>

      <img src="https://cdn-icons-png.flaticon.com/512/3138/3138336.png" 
      class="deleteButton_${json[id]["id"]}" 
      onclick=Confirm("${json[id]["id"]}")></img>`;

        ul_html += li_html;
      }
      data.innerHTML = ul_html;
    })
    .catch((error) => {
      console.log(error);
    });
}

function editData(id) {
  let name = document.getElementById("nameModal").value;
  let rg = document.getElementById("RGModal").value;
  let cpf = document.getElementById("CPFModal").value;
  let cep = document.getElementById("cepModal").value;
  let street = document.getElementById("streetModal").value
  let number = document.getElementById("numberModal").value
  let district = document.getElementById("districtModal").value
  let city = document.getElementById("cityModal").value
  fetch(URLedit + id, {
    method: "PUT",
    body: JSON.stringify({ name, rg, cpf, cep, street, number, district, city }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
