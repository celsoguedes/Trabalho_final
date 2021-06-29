// require('readline-Sync')
// requerer dados dia, mes e ano
// em mar quando for dia 1 o proximo dia será o dia 28 do mes-1 de e mesmo ano
// em jan quando for dia 1 o proximo dia será o dia 31/12 subtrair-se-á 1 ao ano
// todos os dias igual o menor que 31 e maior que 1 sera subtraido -1 e permanece mes e ano
// nos dias 1 dos meses 4,6,9 e 11 o proximo dia será o dia 31, subtrair-se-á 1 ao mes e mesmo ano
// nos dias 1 dos meses 1,3,5,7,8,10 e 11 o proximo dia será o dia 30, subtrair-se-á 1 ao mes e mesmo ano

var readlineSync = require('readline-Sync');
console.log('Digite o dia ')
var dia = readlineSync.questionFloat()
console.log('Digite o mês ')
var mes = readlineSync.questionFloat()
console.log('Digite ano')
var ano = readlineSync.questionFloat()

if (dia==1 && mes==3){
    console.log('Ontem foi 28/'+(mes-1)+'/'+ano)
}
else if (dia==1 && mes==1){
    console.log('Ontem foi  31/12/'+(ano-1))
}
else if (dia<=31 && dia>1){
    console.log('Ontem foi  '+(dia-1)+'/'+mes+'/'+ano)
}
else if (dia==1 && mes==4 ||dia==1 && mes==6 ||dia==1 && mes==9||dia==1 && mes==11){
    console.log('Ontem foi  31/'+(mes-1)+'/'+ano)
}
else if(dia==1 && mes ==3 ||dia==1 && mes ==5 ||dia==1 && mes ==7 ||dia==1 && mes ==8 ||dia==1 && mes ==10||dia==1 && mes ==12){
    console.log('Ontem foi  30/'+(mes-1)+'/'+ano)
}