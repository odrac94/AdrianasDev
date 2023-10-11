let proyectosArray = [
    {
        img: '/Users/agibusiness/Desktop/Captura de Pantalla 2023-10-10 a la(s) 16.54.49 (2).png',
        componente: 'Calendario',
        descripcion: 'Calendario grid con imagen y evento. Se reemplaza la imagen al hacer hover en evento.',
        enlace: './calendario/calendario.html',
    },
];

const proyectosDiv = document.querySelector('.proyectos');

const proyectosGridDiv = document.createElement('div');
proyectosGridDiv.classList.add('contenedor', 'grid');


proyectosArray.forEach((proyecto) => {
    const elementoDiv = document.createElement('div');
    elementoDiv.classList.add('elemento');

    const enlaceCartaAnchor = document.createElement('a');
    enlaceCartaAnchor.setAttribute('href', proyecto.enlace);

    const cartaDiv = document.createElement('div');
    cartaDiv.classList.add('carta');

    const cartaImgDiv = document.createElement('div');
    cartaImgDiv.classList.add('carta__img');
    cartaImgDiv.style.backgroundImage = `url(${proyecto.img})`; // Usa style.backgroundImage

    const cartaContenidoDiv = document.createElement('div');
    cartaContenidoDiv.classList.add('carta__contenido');

    const marcaH2 = document.createElement('h2');
    marcaH2.textContent = proyecto.componente; // Agrega texto al elemento h2


    const descripcionP = document.createElement('p');
    descripcionP.textContent = proyecto.descripcion; // Agrega texto al elemento p

    proyectosDiv.appendChild(proyectosGridDiv);
    proyectosGridDiv.appendChild(elementoDiv);
    elementoDiv.appendChild(enlaceCartaAnchor);
    enlaceCartaAnchor.appendChild(cartaDiv);
    cartaDiv.appendChild(cartaImgDiv);
    cartaDiv.appendChild(cartaContenidoDiv);
    cartaContenidoDiv.appendChild(marcaH2);
    cartaContenidoDiv.appendChild(descripcionP);
});