//Utilizar sempre em ultimo caso

function semRetorno(...args: string[]): void {
    console.log(args.join(' '))
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Gonçalves',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome)
    }
}

semRetorno('Luiz', 'Gabriel', 'Teste')
pessoa.exibirNome()


export { pessoa }
