//obter dado do usuário
// comparar se dado é maior que 9
// se maior informar "grave"
// comparar se dado a ser comparado esta entre 0 e 10 
// se verdadeiro  informar "erro"


var readlineSync = require('readline-Sync');

var nivel = readlineSync.question ('Qual o nivel de alerta de risco? ')
if (nivel<=9){
    console.log (nivel+' está dentro da escala de níveis')
}
else if (nivel == 10){
    console.log ('nivel considerado GRAVE')
}

else {
    console.log ('ERRO')
}