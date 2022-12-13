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