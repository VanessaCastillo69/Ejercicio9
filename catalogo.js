const perfumes = [
  {
    nombre: "Dior J'adore Eau de Parfum",
    descripcion: "Un bouquet floral luminoso con notas de ylang-ylang, rosa de Damasco y jazmín Sambac.",
    precio: "$135",
    imagen: "perfume1.jpeg"
  },
  {
    nombre: "Miss Dior Blooming Bouquet",
    descripcion: "Perfume floral suave con notas de peonía, mandarina y almizcle blanco.",
    precio: "$115",
    imagen: "perfume2.jpeg"
  },
  {
    nombre: "Sauvage Eau de Toilette",
    descripcion: "Una fragancia masculina fresca y poderosa con bergamota de Calabria y ambroxan.",
    precio: "$125",
    imagen: "perfume3.jpeg"
  },
  {
    nombre: "Dior Addict Eau de Parfum",
    descripcion: "Fragancia oriental floral con notas de flor de naranjo, jazmín y vainilla bourbon.",
    precio: "$140",
    imagen: "perfume4.jpeg"
  }
];

// Inyección dinámica del contenido al HTML
const contenedor = document.getElementById("catalogo");

perfumes.forEach(perfume => {
  const producto = document.createElement("div");
  producto.classList.add("producto");

  producto.innerHTML = `
    <img src="${perfume.imagen}" alt="${perfume.nombre}">
    <h3>${perfume.nombre}</h3>
    <p>${perfume.descripcion}</p>
    <p class="precio">${perfume.precio}</p>
  `;

  contenedor.appendChild(producto);
});
