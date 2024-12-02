const form = document.getElementById('form')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const invalido = document.getElementById('invalido')
const valido = document.getElementById('valido')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    document.querySelector('.valido').style.display = 'none'
    document.querySelector('.invalido').style.display = 'none'

    if (campoB.value > campoA.value) {
        document.querySelector('.valido').style.display = 'block'
        
        
    } else {
        document.querySelector('.invalido').style.display = 'block'    
        
    }
    
})
