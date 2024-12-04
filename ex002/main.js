const form = document.getElementById('form')
const nomes = []
const telefones = []


let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    adicionarContato()
    atualizaTabela()
    limiteNumero()
})

function adicionarContato() {

    const nomeContato = document.getElementById('nome-contato')
    const numeroContato = document.getElementById('telefone')

    if (nomes.includes(nomeContato.value) || telefones.includes(parseInt(numeroContato.value))) {
        alert(`A pessoa: ${nomeContato.value} e/ou telefone: ${numeroContato.value} ja foi adicionado em sua agenda!`)
    } else {
        nomes.push(nomeContato.value)
        telefones.push(parseInt(numeroContato.value))

        let linha = '<tr>'
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${numeroContato.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    nomeContato.value = ''
    numeroContato.value = ''
} 

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}


