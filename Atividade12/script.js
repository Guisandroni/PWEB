function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura; 
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

function mostrarArea() {
    let base = parseFloat(prompt("Informe a base do retângulo:"));
    let altura = parseFloat(prompt("Informe a altura do retângulo:"));
    let retangulo = new Retangulo(base, altura);

    alert(`Área: ${retangulo.calcularArea()}`);
}

class Conta {
    constructor() {
        this.nome;
        this.banco;
        this.numeroConta;
        this.saldo;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getBanco() {
        return this.banco;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    getNumeroConta() {
        return this.numeroConta;
    }

    setNumeroConta(numeroConta) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor() {
        super();
        this.saldoEspecial;
    }

    getSaldoEspecial() {
        return this.saldoEspecial;
    }

    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor() {
        super();
        this.juros;
        this.dataVencimento;
    }

    getJuros() {
        return this.juros;
    }

    setJuros(juros) {
        this.juros = juros;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }

    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
}

function mostrarDados() {
    let corrente = new Corrente();
    corrente.setNome(prompt("Informe o nome:"));
    corrente.setBanco(prompt("Informe o nome do banco:"));
    corrente.setNumeroConta(prompt("Informe o número da conta:"));
    corrente.setSaldo(prompt("Informe o saldo da conta:"));
    corrente.setSaldoEspecial(prompt("Informe o saldo especial: "));
    alert(JSON.stringify(corrente, null, 4));

    let poupanca = new Poupanca();
    poupanca.setNome(prompt("Informe o nome:"));
    poupanca.setBanco(prompt("Informe o nome do banco:"));
    poupanca.setNumeroConta(prompt("Informe o número da conta:"));
    poupanca.setSaldo(prompt("Informe o saldo da conta:"));
    poupanca.setJuros(prompt("Informe o juros: "));
    poupanca.setDataVencimento(prompt("Informe a data de vencimento: "));
    alert(JSON.stringify(poupanca, null, 4));
}