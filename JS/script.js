// Pegando os elementos do html, através do seu Id, ou classes, para podermos trablhar com esses elementos.

const form = document.querySelector("#form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // Isso pegamos pronto na net, serve para podermos validar, ex: se o email possui um @, possui pontução para poder saber se possui realmente uma estrutura de email, etc...


// Vamos começar, fazendo a validação do nome, ou seja no nosso primeiro campo input, com indice[0], vamos usar funções, de acordo com o nosso primiero input, para vefiricar temos que ter no minimo 3 caracteres, então vamos trabalhar em cima disso, para poder validar esse input

function validarPrimeiroInput() {
    if(campos[0].value.length < 3) {
        document.querySelector("h1").innerHTML = "Validação acima de 3 caracteres!!!!"//pegando o valor do primeiro input,que sera o nosso primiero indice do array[0], vamos fazer uma condição pegando o seu valor do input e o tamanho dessa entrada, e vamos fazer essa verificação com com if, assim ele só vai validar se o tamanho da entrada do input for maior que 3 caracteres...se for menor que 3, eu vou estar mostrando um erro com uma mensagem direto na pagina, em baixo no nosso inputm dentro de um span
} else {
    document.querySelector("h1").innerHTML = "OK! Validação aceita!!"
}
}