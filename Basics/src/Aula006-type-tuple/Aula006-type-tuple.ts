//TUPLA
const clientData1: readonly [number, string] = [1, 'Gabriel'] //Deixa a tupla imutavel
const clientData2: [number, string, string] = [1, 'Gabriel', 'Gonçalves']
const clientData3: [number, string, string?] = [1, 'Gabriel']
const clientData4: [number, string, ...string[]] = [1, 'Gabriel', 'Gonçalves']

clientData2[0] = 100
clientData4[1] = 'Jorge'

console.log(clientData1)
console.log(clientData2)
console.log(clientData3)
console.log(clientData4)

//READONLY ARRAY
const array: readonly string[] = ['Gabriel', 'Gonçalves']
const array1: ReadonlyArray<string> = ['Gabriel', 'Gonçalves']

console.log(array)
console.log(array1)
