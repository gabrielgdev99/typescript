type HaveName = { name: string }
type HaveLastName = { lastName: string }
type HaveAge = { age: number }
type Person = HaveName & HaveLastName & HaveAge // AND

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'D' | 'A'
type Intersection = AB & AC & AD

const person: Person = {
    age: 25,
    name: 'Gabriel',
    lastName: 'Gonçalves'
}

console.log(person)

export { person }
