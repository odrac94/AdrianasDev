proyectosArr = [
    {
        img: 'https://www.wordstream.com/wp-content/uploads/2022/07/website-examples-feature.jpg',
        marca: 'Adriana Gallardo',
        descripcion: 'Incluye diseños web para productos como: Empodérate 360, chingonas circle, etc.',
        enlace: './adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://www.archimetric.com/wp-content/uploads/2022/02/01-youtube-wireframe-example.png',
        marca: "Adriana's Insurance",
        descripcion: "Incluye diseños web para productos como: Adriana's Life Insurance, My Adriana's",
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://blog.hubspot.com/hs-fs/hubfs/website-mockup_2.webp?width=650&height=416&name=website-mockup_2.webp',
        marca: "Adriana's Immigration Services",
        descripcion: 'Diseño de "componentes" para WordPress utilizando html, css y js',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/25_website_mockup.jpg',
        marca: 'AGI Business',
        descripcion: 'Diseño de "componentes" para WordPress utilizando html, css y js',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://www.techsmith.com/blog/wp-content/uploads/2017/10/Website-mock-up-image-855.jpg',
        marca: 'AGNC Media Group',
        descripcion: 'Diseño de "componentes" para WordPress, Duda, Shopify, utilizando html, css y js.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    },
    {
        img: 'https://graphberry-imgs.imgix.net/perspective-website-psd-mock-up-144.jpg?auto=compress,format&q=80&w=800',
        marca: 'AGLA',
        descripcion: 'Diseño de "componentes" para Kajabi utilizando html, css y js.',
        enlace: 'adriana-gallardo/adriana-gallardo.html'
    }
];


const proyectosDiv = document.querySelector('.proyectos');

const proyectosGridDiv = document.createElement('div');
proyectosGridDiv.classList.add('contenedor', 'grid');


proyectosArr.forEach((proyecto) => {
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
});