enum Colors {
    RED, // 0 PADRÃO QUANDO NÃO COLOCA NADA
    BLUE, // 1 PADRÃO QUANDO NÃO COLOCA NADA
    YELLOW, // 2 PADRÃO QUANDO NÃO COLOCA NADA
}

enum Colors {
    PURPLE = 'PURPLE',
    GREEN = 201,
    ROSA,
}

console.log(Colors)

export function chooseColor(color: Colors): void {
    console.log(Colors[color])
}

chooseColor(201)
