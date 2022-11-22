const url = "http://localhost3000/account/addaccount"
    
function accountRoutes(){
    axios.post(url,{
        name: document.getElementById("name").textContent,
        cpf: document.getElementById("cpf").textContent,
        rg: document.getElementById("rg").textContent,
        address: document.getElementById("address").textContent
    })
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error)})
}