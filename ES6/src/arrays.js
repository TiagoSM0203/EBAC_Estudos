const redesSociais = ['Facebook', 'Instagram', 'Twitter']

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}
redesSociais.forEach(function(nomeRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula)

const indicePaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(indicePaula)

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})


console.log(todosAlunosFrontend)

const existeAlgumAlunoBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoBackend)

function filtraAlunosBackend(aluno) {
    return aluno.curso === 'Backend'
}

const filtrAlunosBackend2 = aluno => aluno.curso === 'Backend'

const alunosBackend = alunos2.filter(filtraAlunosBackend)

console.log(alunosBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)

let somaComFor = 0

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i]
}

console.log(somaComFor)

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `
    return acumulador
}, '')

console.log(nomesDosAlunos)


