const notasAlunos = [
    {nome: 'Tiago', nota: 5.3},
    {nome: 'Duran', nota: 5.8},
    {nome: 'Gabriel', nota: 8.8},
    {nome: 'Estracero', nota: 10}
]

function filtrarAprovados(notasAlunos) {
    return notasAlunos.filter(aluno => aluno.nota >= 6)
}

let aprovados = filtrarAprovados(notasAlunos)
console.log(aprovados)

