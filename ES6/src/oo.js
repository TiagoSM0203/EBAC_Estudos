// function Pokemon(nome, tipo) {
//     this.nome = nome
//     this.tipo = tipo
// }

// const pikachu = new Pokemon('Pikavhu', 'eletrico')

class Pokemon {
    #hp = 100

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon
        this.tipo = tipoDoPokemon
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Eletrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovao`)
    }
}

const pikachuDoAsh = new Pikachu()

pikachuDoAsh.recebeuAtaque()

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()

const pikachu = new Pokemon('pikachu', 'eletrico')

// pikachu.atacar('choque do trovao')
console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu)
