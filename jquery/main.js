$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('.btn-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem) // o appendTo coloca o elemento dentro do li
        $(`
            <div class="overlat-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>
            `).appendTo(novoItem)
            $(novoItem).appendTo('ul')
            $(novoItem).fadeIn(1000)
            $('#endereco-imagem-nova').val('')
    })
})