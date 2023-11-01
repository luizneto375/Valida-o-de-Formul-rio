 - Validação dos campos de  Formulário com JavaScript

 - Montagem animações com html css, clicando nos inputs teremos um borda de animação, esquemas de validações, com apresentação de mensagem de erro, com solicitações de validações para poder continuar, usamos um emailRegex podemos pegar pronto na net, serve para podermos validar nosso input de email, ex: se o email possui um @, possui pontuação para poder saber se possui realmente uma estrutura de email, etc..

 - Primeiro pegamos os elementos do html, através do seu Id, ou classes, para podermos trabalhar com esses elementos.
 - Segundo vamos começar, fazendo a validação do nome, ou seja no nosso primeiro campo input, com indice[0], vamos usar funções, de acordo com o nosso primeiro input do nosso html, ele diz o seguinte para verificar temos que ter no minimo 3 caracteres, então vamos trabalhar em cima disso, para poder validar esse input, pegando o valor do primeiro input, que sera o nosso primeiro indice do array[0], vamos fazer uma condição pegando o seu valor do input e o tamanho dessa entrada, e vamos fazer essa verificação com com if, assim ele só vai validar se o tamanho da entrada do input for maior que 3 caracteres...se for menor que 3, eu vou estar mostrando um erro com uma mensagem direto na pagina, e se for maior que três caracteres, vai ser mostrado um mensagem informando que nome foi validado, em baixo no nosso input dentro de um span

- vamos pegar a variavel campos que é exatamente o [0], no array, ou seja referente ao primeiro input, e vou colocar um estile nele, que vai mostrar um borda vermelha, em torno de um input, mostrando um erro, até que realmente atenta o que está sendo pedido, na condição para poder validar esse nome, vamos fazer isso em todos os campos inputs  
Essa função é a que vai fazer acontecer essa parte refente o seguinte, toda vez que eu chamar essa função, eu vou passar qual é o indice, vamos passar essa função para dentro das função de validação, com a condição,  vamos fazer que aconteça o seguinte, sempre que a validação dos inputs não estiver correta, vai ser mostrado uma mensagem juntamente com um borda vermelha, em volta do nosso input, e a mensagem de erro em baixo de input requerido...

com esssa função, podemos sempre chamar ela para poder ativar essa funcionalidade em todos os inputs, em vez de criar mais codigos, então eu só passa a função e passo o indice certo para poder ativar essa função.

<img width="272" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/63f10e8a-6f2c-4a92-bd03-3a71a9c19ee3"> <img width="272" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/98250179-b220-44d5-a3c0-fcdaa0ac1cad">

- OBS: do mesmo jeito que fizemos uma função para ativar a mensagem de erro, temos que criar outra função para, retirar essa mensagem de erro assim, que o nosso input obedeça os criterios passados, que obs: eu atualizei para 4 caracteres, ficou assim; Dessa forma podemos fazer para o resto dos inputs, com funções e estruturas condicionais, juntamente com o valor dos seus respectivos indices correto.

<img width="273" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/9662f3dc-bc53-4a95-990e-449270bf4e7e"> <img width="309" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/9a1f55dc-fa70-4423-bc6a-f65d595d8051">

- Vamos usar o console, para podermos testar o nosso segundo input, lembrando que se ele não tiver as estruturas de um email, ele não sera validado e mostrar um mensagem de erro, e se ele tiver com as estruras de um email, mostrar uma mensagem com validação.
<img width="325" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/319cb83b-9510-4a54-babf-ed119a500d49"> <img width="262" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/b2825c03-f016-48bf-bf8b-8b5bc0a01348">  <img width="256" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/c5a56031-9a38-4b41-8571-5623b3bb9230">

já com as estruturas de email:

<img width="270" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/16736c4f-8485-417f-9530-040b0915f897"> <img width="249" alt="image" src="https://github.com/luizneto375/Valida-o-de-Formul-rio/assets/114784434/eacabf35-6fcb-421c-9d53-a59c77e1870e">








