"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
    }
    dizOla() {
        return `Olá, ${this.nome}`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoa extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaPedro = new ContaBancariaPessoa(123);
// contaPedro.
ContaBancaria.retornaNumeroBanco();
