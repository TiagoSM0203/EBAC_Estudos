const minhaFuncao = () => 'Diz ola'

const retornaCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log(minhaFuncao())
console.log(retornaCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10
    },
    frear: () => {
        this.velocidadeAtual -= 10
    }
}

carro.acelerar()
carro.frear()

console.log(carro.velocidadeAtual)