
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todas as slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Reinicia o índice se exceder o número de slides
    slides[slideIndex - 1].style.display = "block"; // Mostra a slide atual
    setTimeout(showSlides, 5000); // Muda a imagem a cada 5 segundos
}

showSlides(); // Chama a função para iniciar a apresentação de slides

