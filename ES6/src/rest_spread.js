//rest

function somar() {
    let soma = 0

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }

    return soma
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma
}

console.log(somarComRest(10, 20, 30))

//spread
const numeros = [1, 2, 3, 4,]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'sao paulo', 'bragantino']
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense']

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio)
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio]

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

// desestruturacao
// const motorCarroDaAna = carroDaAna.motor
const { motor: motorCarroDaAna } = carroDaAna
const { motor: motorCarroDaJulia } = carroDaJulia

console.log(motorCarroDaAna)
console.log(motorCarroDaJulia)

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)

