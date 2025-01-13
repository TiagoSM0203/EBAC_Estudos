const carro = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: '2020',
    anoFabricacao: '2019',
    acelarar: function() {
        console.log('vrum')
    }
}

const carroDaMaria = {
    modelo: 'ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelarar: function() {
        console.log('vrum')
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log('acelerar')
    }
}

const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019)
const carroDaMaria2 = new Carro('Ka', 'Ford', 2021, 2020)

const nome = 'Tiago'
const idade = 21
const ehMaiorDeIdade = true
const conhecimento = ['html', 'css', 'js']

const pessoa = {
    nome:nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimento: conhecimento,
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

function axibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

axibeAtributo('nome')

pessoa['sobrenome'] = 'mota'

Object.freeze(pessoa)

if (pessoa['sobrenome']) {
    console.log('a pessoa tem um sobrenome')
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome')
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa).length)
console.log(Object.values(pessoa))