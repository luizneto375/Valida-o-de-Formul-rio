// Pegando os elementos do html, através do seu Id, ou classes, para podermos trablhar com esses elementos.

const form = document.querySelector("#form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // Isso pegamos pronto na net, serve para podermos validar, ex: se o email possui um @, possui pontução para poder saber se possui realmente uma estrutura de email, etc...

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarPrimeiroInput();
    validarEmail();
    validarSenhaPassword();
    compararSenhasPassword();

});


// Vamos começar, fazendo a validação do nome, ou seja no nosso primeiro campo input, com indice[0], vamos usar funções, de acordo com o nosso primiero input, para vefiricar temos que ter no minimo 3 caracteres, então vamos trabalhar em cima disso, para poder validar esse input

function mensagemDeErro(index) {
    campos[index].style.border = "2px solid #e33636" //vamos pegar a variavel campos que é exatamente o [0], no array, ou seja referente ao primeiro input, e vou colocar um estile nele.
    spans[index].style.display = "block";// aqui eu estou ativando a mensagem do nosso span
    
    
}// Essa função é a que vai fazer acontecer essa parte refente o seguinte, toda vez que eu chamar essa função, eu vou passar qual é o indice, vamos passar essa função para dentro das função de validação, com a condição,  vamos fazer que aconteça o seguinte, sempre que a validação dos inputs não estiver correta, vai ser mostrado uma mensagem juntamente com um borda vermelha, em volta do nosso input, e a mensagem de erro em baixo de input requerido...

function removerMensagemDErro(index) {
    campos[index].style.border = "";
    spans[index].style.display = "none";
}

function validarPrimeiroInput() {
    if(campos[0].value.length < 4) {
       mensagemDeErro(0);//pegando o valor do primeiro input,que sera o nosso primeiro indice do array[0], vamos fazer uma condição pegando o seu valor do input e o tamanho dessa entrada, e vamos fazer essa verificação com com if, assim ele só vai validar se o tamanho da entrada do input for maior que 3 caracteres...se for menor que 3, eu vou estar mostrando um erro com uma mensagem direto na pagina, em baixo no nosso input dentro de um span
} else {
   removerMensagemDErro(0);
}

}

function validarEmail() {
    if(!emailRegex.test(campos[1].value)) {
        mensagemDeErro(1);
    } else {
        removerMensagemDErro(1);
    }
}


function validarSenhaPassword() {
    if(campos[2].value.length < 8) {
        mensagemDeErro(2);
    } else {
        removerMensagemDErro(2);
        compararSenhasPassword()
    }
}

function compararSenhasPassword() {
    if(campos[2].value === campos[3].value && campos[3].value.length >= 8) {
        removerMensagemDErro(3);
    } else {
        mensagemDeErro(3);
    }
}
