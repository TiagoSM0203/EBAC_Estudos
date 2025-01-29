<script setup>
  import { reactive } from 'vue'

  const nome = 'Tiago'
  const meuObj = {
    nome: 'Tiago',
    filmeFavorito: 'Matrix'
  }

  function dizOla(nome) {
    return `${nome} diz olá!`
  }

  const bolsonaro = 'https://www.conjur.com.br/img/b/jair-bolsonaro12.jpeg'
  const bolsonaro2 = 'https://conteudo.imguol.com.br/c/noticias/ed/2018/presidenciaveis/jair-bolsonaro-psl-300x300.jpg'

  const botaoDesabiltado = false

  const gostaDoBolsonaro = false
  const gostaDoBolsonaro2 = true

  const estaAutorizado = true

  // let contador = 0
  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes: ['Tiago', 'Paula', 'Joao', 'Maria'],
    nomeAInserir: '',
  })

  function incrementa() {
    estado.contador++
  }

  function decrementa() {
    estado.contador--
  }

  function alteraEmail(event) {
    estado.email = event.target.value
  }

  function mostraSaldoFuturo() {
    const {saldo, transferindo} = estado
    return saldo - transferindo
  }

  function validaTransferencia() {
    const {saldo, transferindo} = estado
    return saldo >= transferindo
  }

  function cadastraNome() {
    if (estado.nomeAInserir.length >= 3) {
      estado.nomes.push(estado.nomeAInserir)
    } else {
      alert('Nome deve ter no mínimo 3 caracteres')
    }
  }


</script>

<template>
  <h1>{{ dizOla('paula') }}</h1>
  <img v-if="gostaDoBolsonaro" :src="bolsonaro" alt="">
  <img v-else-if="gostaDoBolsonaro2" :src="bolsonaro2" alt="">
  <h2 v-else>nao curte um presidente de verdade, beta!</h2>

  <h1 v-if="estaAutorizado">Bem vindo</h1>
  <h1 v-else>Nao possui acesso</h1>

  <button :disabled="!botaoDesabiltado">enviar mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementa" type="button">+</button>
  <button @click="decrementa" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}

  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferencia: {{ mostraSaldoFuturo() }} <br>
  <input class="campo" :class="{ invalido: !validaTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="validaTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>

</template>

<style scoped>

  .invalido {
    outline-color: red;
    border-color: red;
  }

  .campo {
    border: 2px solid #000;
  }

</style>
