let x = 10
x = 0b1010
const y = 10
let a = 100 as const

const person = {
    name: 'Gabriel' as const,
    lastName: 'Gonçalves'
}

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
    return color
}

console.log(chooseColor('Red'))

// Module mode
export default 1
