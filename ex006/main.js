$(document).ready(function() {
    $('.carousel-link').click(function(e) {
        e.preventDefault()
        var targetDiv = $(this).data('div')
        $('.text-container').fadeOut(300).promise().done(function() {
            $('#' + targetDiv).fadeIn(300)
        })
    })
    function handleScroll() {
        // Para cada elemento com a classe animate-on-scroll
        $(".animate-on-scroll").each(function () {
            const elementTop = $(this).offset().top; // Posição do elemento
            const viewportBottom = $(window).scrollTop() + $(window).height(); // Parte inferior do viewport

            // Adiciona a classe visible se o elemento entrar no viewport
            if (elementTop < viewportBottom - 50) { // 50px de margem
                $(this).addClass("visible");
            }
        });
    }

    // Executa a função ao carregar a página e ao rolar
    $(window).on("scroll resize", handleScroll);
    handleScroll(); // Chamada inicial
})