function funcaoPesada() {
    let execucoes = 0 
    for (let i = 0; i < 1000000000; i++) {
        execucoes++
    }

    return execucoes
}

const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0 
    for (let i = 0; i < 1000000000; i++) {
        execucoes++
    }
    resolve(execucoes)
    } catch(e) {
        reject('Deu erro')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`logado com o usuario: ${login}`)
        }, 3000)
    })
}


async function execucaoPrincipal() {
    console.log('inicio')

    // await funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('tiagosm0203@gmail.com', 123455).then(resultado => {
        console.log(resultado)
    })
    
    try {
        const resultado = await funcaoPesadaPromise
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }
    
    console.log('fim')
}

execucaoPrincipal()

