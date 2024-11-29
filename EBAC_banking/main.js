const form = document.getElementById('form-deposit')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let formEValido = false

function validanome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2

}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor')
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`

    formEValido = validanome(nomeBeneficiario.value)
    if (formEValido) {
        const conteinerMensagemSucesso = document.querySelector('.success-message')
        conteinerMensagemSucesso.innerHTML = mensagemSucesso  
        conteinerMensagemSucesso.style.display = 'block'

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    formEValido = validanome(e.target.value)

    if (!formEValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
})

