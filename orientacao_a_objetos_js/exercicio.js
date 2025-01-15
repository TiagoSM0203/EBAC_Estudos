function Computador(cpu, gpu, ssd) {
    this.cpu = cpu
    this.gpu = gpu
    this.ssd = ssd
}

Computador.prototype.displayInfo = function() {
    console.log(`Processador: ${this.cpu}, Placa de Video: ${this.gpu}, SSD: ${this.ssd}`)
}

function Pecas(cpu, gpu, ssd, fonte) {
    Computador.call(this, cpu, gpu, ssd)
    this.fonte = fonte
}

Pecas.prototype = Object.create(Computador.prototype)
Pecas.prototype.constructor = Pecas

Pecas.prototype.displayInfo = function() {
    Computador.prototype.displayInfo.call(this)
    console.log(`Fonte: ${this.fonte}`)
}

function Componentes(cpu, gpu, ssd, placaMae) {
    Computador.call(this, cpu, gpu, ssd)
    this.placaMae = placaMae
}

Componentes.prototype = Object.create(Computador.prototype)
Componentes.prototype.constructor = Componentes

Componentes.prototype.displayInfo = function() {
    Computador.prototype.displayInfo.call(this)
    console.log(`Placa Mae: ${this.placaMae}`)
}

function Armazenamento(cpu, gpu, ssd, hd) {
    Computador.call(this, cpu, gpu, ssd)
    this.hd = hd
}

Armazenamento.prototype = Object.create(Computador.prototype)
Armazenamento.prototype.constructor = Armazenamento

Armazenamento.prototype.displayInfo = function() {
    Computador.prototype.displayInfo.call(this)
    console.log(`HD: ${this.hd}`)
}

const computador1 = new Computador('i5', 'GTX 1650 Super', '512gb')
const pecas1 = new Pecas('ryzen 5 5600x', 'RTX 2080', '1tb', '600w')
const componentes1 = new Componentes('i7', 'RTX 3060', '1tb', 'b550m')
const armazenamento1 = new Armazenamento('ryzen 9', 'RTX 4090', '1tb', '2tb')

computador1.displayInfo()
pecas1.displayInfo()
componentes1.displayInfo()
armazenamento1.displayInfo()

