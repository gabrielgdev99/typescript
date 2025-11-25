//Basicamente criar um apelido para um tipo
type Age = number
type Person = {
    name: string,
    age: Age,
    wage: number,
    favoriteColor?: string
}
type RGBColor = 'Red' | 'Green' | 'Blue'
type CMYKColor = 'Cian' | 'Magenta' | 'Yellow' | 'Black'
type FavoriteColor = RGBColor | CMYKColor

const person: Person = {
    name: 'Gabriel',
    age: 25,
    wage: 5500,
}

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
    return { ...person, favoriteColor: color}
}

console.log(setFavoriteColor(person, "Blue"))
