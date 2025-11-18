//Tipos basicos
let nome: string = 'Luiz' //Qualquer string
let idade: number = 30 // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true // true ou false
let simbulo: symbol = Symbol('Qualquer-symbol') //sybol
//let big: bigint = 10n //bigint

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3,]
let arrayDeNumeros2: number[] = [1, 2, 3,]
let arrayDeString: Array<string> = ['a', 'b', 'c']
let arrayDeString2: string[] = ['a', 'b', 'c']

//Objects
let pessoa: {nome: string, idade: number, adulto? /* O ponto de interrogação fala que é opcional */: boolean} = {
    idade: 25,
    nome: 'Gabriel'
}

//Functions
function soma(x: number, y:number): number {
    return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => x + y
