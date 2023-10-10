proyectosArr = [
    {
        img: 'https://www.wordstream.com/wp-content/uploads/2022/07/website-examples-feature.jpg',
        marca: 'Adriana Gallardo',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        marca: "Adriana's Insurance",
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        marca: "Adriana's Immigration Services",
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        marca: 'AGI Business',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        marca: 'AGNC Media Group',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        marca: 'AGLA',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    }
];


const proyectosDiv = document.querySelector('.proyectos');

const proyectosGridDiv = document.createElement('div');
    proyectosGridDiv.classList.add('contenedor', 'grid');

for (const proyecto of proyectosArr) {
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
    marcaH2.textContent = proyecto.marca; // Agrega texto al elemento h2


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
};