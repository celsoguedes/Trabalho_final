// require('readline-Sync')
// requerer dados dia, mes e ano
// em fev quando for dia 28 o proximo dia será o dia um do mes seguinte e mesmo ano
// em dez quando for dia 31 o proximo dia será o dia um do mes 1 somar-se-á 1 ao ano
// todos os dias igual o menor que 29 sera somado +1 e permanece mes e ano
// nos dias 30 dos meses 4,6,9 e 11 o proximo dia será o dia um, somar-se-á 1 ao mes e mesmo ano
// nos dias 31 dos meses 1,3,5,7,8,10 e 11 o proximo dia será o dia um, somar-se-á 1 ao mes e mesmo ano

var readlineSync = require('readline-Sync');
console.log('Digite o dia ')
var dia = readlineSync.questionFloat()
console.log('Digite o mês ')
var mes = readlineSync.questionFloat()
console.log('Digite ano')
var ano = readlineSync.questionFloat()

if (dia==28 && mes==2){
    console.log('amanhã é 1/'+(1+mes)+'/'+ano)
}
else if (dia==31 && mes==12){
    console.log('amanhã é 1/1/'+(1+ano))
}
else if (dia<=29){
    console.log('amanhã é '+(1+dia)+'/'+mes+'/'+ano)
}
else if (dia==30 && mes==4 ||dia==30 && mes==6 ||dia==30 && mes==9||dia==30 && mes==11){
    console.log('amanhã é 1/'+(1+mes)+'/'+ano)
}
else if(dia==31 && mes ==1 ||dia==31 && mes ==3 ||dia==31 && mes ==5 ||dia==31 && mes ==7 ||dia==31 && mes ==8 ||dia==31 && mes ==10){
    console.log('amanhã é 1/'+(1+mes)+'/'+ano)
}
