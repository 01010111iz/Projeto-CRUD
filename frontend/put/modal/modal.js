function dataModal(id) {
  let name = document.querySelector("#name_" + id).innerText;
  let rg = document.querySelector("#rg_" + id).innerText;
  let cpf = document.querySelector("#cpf_" + id).innerText;
  let cep = document.querySelector("#cep_" + id).innerText;
  let street = document.querySelector("#street_" + id).innerText;
  let number = document.querySelector("#number_" + id).innerText;
  let district = document.querySelector("#district_" + id).innerText;
  let city = document.querySelector("#city_" + id).innerText;

  document.getElementById("nameModal").value = name;
  document.getElementById("RGModal").value = rg;
  document.getElementById("CPFModal").value = cpf;
  document.getElementById("cepModal").value = cep;
  document.getElementById("streetModal").value = street;
  document.getElementById("numberModal").value = number;
  document.getElementById("districtModal").value = district;
  document.getElementById("cityModal").value = city;
}

function Modal(id) {
  let modal = document.getElementById("myModal");
  let msg = document.getElementById("submitModal");
  modal.style.display = "block";
  dataModal(id);
  msg.addEventListener("click", () => {
    msg = confirm("Deseja realmente concluir com as alterações?");
    if (msg == true) {
      editData(id);
    } else {
      closeModal();
    }
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
