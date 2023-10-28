document.addEventListener('DOMContentLoaded', function () {
    const portafolioBotones = document.querySelectorAll('.boton');
    const masonryElementos = document.querySelectorAll('.masonry-elemento');

    portafolioBotones.forEach(boton => {
        boton.addEventListener('click', () => {
            const categoria = boton.getAttribute('data-filter');
            masonryElementos.forEach(elemento => {
                if (categoria === 'todas' || elemento.classList.contains(categoria)) {
                    elemento.style.display = 'block';
                } else {
                    elemento.style.display = 'none';
                }
            });
        });
    });
});