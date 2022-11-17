//função para ser referenciada na base HTML - botões e e-mail
function onChangeEmail(){
   toggleButtonsDisable();
   toggleEmailErrors();
}

//função para validação do e-mail
function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

//função para apresentar mensagem de erro do campo e-mail
function toggleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

//função para desabilitar os botões
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;
    
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

//função para ser referenciada na base HTML - botões e senha
function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

//função para apresentar mensagem de erro do campo senha
function togglePasswordErrors(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

//função para validação de senha
function isPasswordValid(){
    const password = form.password().value;
    if(!password){
        return false;
    }
    return true;
}

//função para permitir acesso de logon

function logar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if(login == "admin@admin.com" && senha == "admin"){
        location.href = "home/home.html";
    }
    else{
        alert('Usuário ou senha inválido');
    }
}

//objetos criados como constante para compactar o código
const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button')
}