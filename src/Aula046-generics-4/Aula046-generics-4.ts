type ObtainKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K] //Restrição é usado o extends keyof

const obtainKey: ObtainKeyFn = (obj, key) => obj[key]

const animal = {
    color: 'Red',
    vaccines: ['Vaccine 1', 'Vaccine 2'],
    age: 8
}

const vaccines = obtainKey(animal, 'vaccines')
const color = obtainKey(animal, 'color')

console.log(vaccines, color, obtainKey(animal, 'age'))
