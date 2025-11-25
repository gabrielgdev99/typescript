const objectA: {
    readonly keyA: string,
    keyB: string,
} = {
    keyA: 'Value A',
    keyB: 'Value B',
}

//objectA.keyA = 'Another value'
objectA.keyB = 'Another value'

console.log(objectA)
