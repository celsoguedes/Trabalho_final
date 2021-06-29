// entrada vai ser nesse formato: dd/mm/aaaa -> 18/07/2021
// saida do programa é assim dd+1/mm/aaaa -> 01/08/2021

const readline = require('readline-sync')
var dia = Number(readline.question('dia: '))
var mes = Number(readline.question('mes: '))
var ano = Number(readline.question('ano: '))

if(dia < 30 && dia >= 1){ //verifico se o dia está entre 1 e 29

    if (dia < 9){ // se for 9 não pode colocar o zero na frente
        dia = '0'+ (dia + 1) // estou concatenando 0 com o dia + 1
    } else{
        dia ++
    }

} else if (dia == 30){
    dia = 1
    mes++
} 

console.log(`${dia}\\${mes}\\${ano}`)