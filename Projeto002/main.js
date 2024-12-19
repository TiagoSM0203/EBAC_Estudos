$(document).ready(function() {
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(DDD)00000-0000'
    })

    $(form).validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
        },
        submitHandler: function(form) {
            alert('Sua duvida foi enviada com sucesso, por favor, aguarde!')
            form.reset()
        },
        invalidHandler: function(form, validator) {
            alert('Por favor, preencha todos os campos!')
        }
    })
})