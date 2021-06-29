// pegar o valor 15 vezes - > definido ou indefinido

var readline = require('readline-sync')


for(var x = 1; x <= 15; x++){
    var valor = Number(readline.question(`digite o ${x} numero: `))// 10
    
    if( x == 1){ // se for o primeiro número digitado
        var maior = valor  // 10
        var menor = valor // 10

    } else {            // 2 por exemplo x >= 2
        if (valor  > maior){ //true
            maior = valor
        }
        if (valor < menor){
            menor = valor
        }
    }

}

