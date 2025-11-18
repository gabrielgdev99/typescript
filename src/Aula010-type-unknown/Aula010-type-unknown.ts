//DIFERENÇA DELA PARA O ANY É QUE VC SEMPRE VAI PRECISAR CHECAR O TIPO ANTES DE FAZER ALGO

let x: unknown

x = 100
x = 'Luiz'
x = 900
x = '10'
const y = 800

if(typeof x === 'number') console.log(x + y)
