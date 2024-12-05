$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()

        const nomeTarefa = $('#nome-tarefa').val()
        $('#lista').append(`<li><a href="#">${nomeTarefa}</a></li>`)
        
    })

    $(document).on('click','li', function() {
        $(this).toggleClass('completed')
    })
})