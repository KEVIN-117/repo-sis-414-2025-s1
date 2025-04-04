const container = document.getElementById("container");

const div = document.createElement("div");

div.innerHTML = `
    <h1>Hola Mundo</h1>
    <p>Bienvenido a mi sitio web</p>
    <p>Esta es una prueba de JavaScript</p>
`;

container.appendChild(div);
