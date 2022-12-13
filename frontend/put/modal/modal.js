function dataModal(id) {
    let name = document.querySelector("#name_" + id).innerText;
    let rg = document.querySelector("#rg_" + id).innerText;
    let cpf = document.querySelector("#cpf_" + id).innerText;
    let address = document.querySelector("#address_" + id).innerText;
  
    document.getElementById("nameModal").value = name;
    document.getElementById("RGModal").value = rg;
    document.getElementById("CPFModal").value = cpf;
    document.getElementById("addressModal").value = address;
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