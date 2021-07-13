
/*
var nome = "Julio Santos"; 
var anoAtual = 2021;
var nasc = 1999;
var frase ="Brasil é o melhor time do mundo";

//Exibir valores
console.log(nome);
console.log(anoAtual - nasc);
 
//substituir string: 
console.log(frase.replace("Brasil","Japão"));

//Maiusculo & minusculo
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
*/

//=========================Aula 2=========================>
/*
var lista = ["maça", "pera", "larnaja", "uva"];

//inserir na lista
lista.push("batata");

//remover da lista
lista.pop();

//tamanho da lista
console.log(lista.length);

//Exibir ao contrario
console.log(lista.reverse());

//exibir
console.log(lista);

//Exibir como string
console.log(lista.toString());

//Exibir saparador especifico
console.log(lista.join(" | "));

//Dicionario de dados
/*var carro = {nome:"Audi", cor:"Cinza"}
console.log(carro);
console.log(carro.cor)

//Lista de dicionarios
var carros = [{nome:"Audi", cor:"Cinza"},{nome:"Toyota", cor="Preto"}]
console.log(carros)
alert(carros[1].nome);
*/

//=========================Aula 3=========================>
/*
//faz pergunta Prompt
var idade = prompt("Qual sua idade");

if (idade >= 18){
  alert("maior de idade");

}else{
  alert("Menor de idade");
};

//Laços de repetição
var count = 0;
while (count <= 5){
  console.log(count);
  count++;
}
console.log(count);

//Repetição For
var conta;
for(conta=0; conta <=5; conta++){
  console.log(conta)
}

//Trabalhando com datas
var d = new Date();
alert(d.getMinutes());

*/

//=========================Aula 4=========================>

/*
//somar valores
function soma(n1, n2){
  return n1 + n2;
}
alert(soma(5,10));

//Substituir valores
function setReplace(frase, nome, novoNome){
  return frase.replace(nome, novoNome)
}
alert(setReplace("Vai japão", "Japão", "Brasil"));


//Funções : Variaveis
function validaIdade(idade){
  var validar;
  if(idade >= 18){
    validar = true
  }else{
    validar = false
  }
  return validar;

}
var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));

*/

//=========================Aula 5=========================>

//Conectando HTML
function clicou(){
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
 
}

//abrir uma pagina
function redirecionar(){
  window.open("https://google.com");
  window.locarion.href = "https://google.com";
}

//Ao passar o Mouse por cima | trocar texto | Recebe p proprio elemento(onmouseover="trocar(this)") como referencia
function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
 
}

//Ao remover o mouse de cima | trocar texto
function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
  elemento.innerHTML = "Passe o mouse aqui!";
}


//Quando carregar a pagina | onload
function load(){
  alert("Pagina carregada");
}

//Imprime & coleta valor selecionado
function funcaoChange(elemento){
  console.log(elemento.value)
}