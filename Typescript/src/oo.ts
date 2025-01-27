class Pessoa {
    nome: string
    renda?: number

    constructor(nome: string, renda?: number) {
        this.nome = nome;
    }

    dizOla(): string {
        return `Olá, ${this.nome}`;
    }
}

class ContaBancaria {
    saldo: number = 0
    numeroConta: number

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroBanco() {
        return 125;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoa extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaPedro = new ContaBancariaPessoa(123);
// contaPedro.
ContaBancaria.retornaNumeroBanco();
