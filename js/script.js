const form = document.querySelector("#form")
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")
const inputPhone = document.querySelector("#inputPhone")
const inputMessage = document.querySelector("#inputMessage")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if(inputName.value === ""){
        alert("Por favor, preencha o seu nome")
        return;
    }

    //Verifica se o email foi preenchido
    if(inputEmail.value === "" ){
        alert("Digite seu e-mail por favor")
        return;
    }

    //Verifica se a mensagem foi preenchida.
    if(inputMessage.value === ""){
        alert("Digite a mensagem")
    }

    // Se todos os campos estiverem completamente preenchidos, envie o form.
    form.submit();
});

//Função que valida email
function isMailValid(inputEmail){
    //Regex que cria a validação do email
    const emailRegex = new RegExp(
        // 
        /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(inputEmail)){
        return true;
    }
    return false;
}

// || !isMailValid(inputEmail.value)