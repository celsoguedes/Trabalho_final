
var soma = 0
var numerador = 1
for (var x = 1; x <= 50; x++){
   
   soma += numerador/x
   console.log(`${numerador}/${x}`)
   numerador += 2
    
}

console.log(soma)