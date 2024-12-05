$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()

        const nomeTarefa = $('#nome-tarefa').val()
        const novoItem = $('#lista').append(`<li><a href="#">${nomeTarefa}</a></li>`)
        //$(`<a href="#">${nomeTarefa}</a>`).appendTo(novoItem)
    })

    $(document).on('click','li', function() {
        $(this).toggleClass('completed')
    })
})