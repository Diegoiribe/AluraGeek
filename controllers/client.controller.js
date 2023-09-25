import { clientServices } from "../server/client-service.js";

const crearRegistro = (name, precio, img, id, categoria) => {
	const registro = document.createElement("a");
	registro.classList.add("link");
	const contenido = `
    

        <div class="card ${categoria}" data-card id=${id} ">

            <div class="img--card">
                <img
                    class="img--producto"
                    src="${img}"
                    alt=""
                />
            </div>
            <div class="text--card">
                <p class="name">${name}</p>
                <div class="precio">
                    <p class="value">Precio:</p>
                    <p class="valor">$${precio}</p>
                </div>
            </div>
        </div>


`;

	registro.innerHTML = contenido;
	return registro;
};

const table = document.querySelector("[data-table]");
const tableConsolas = document.querySelector("[data-tableconsolas]");
const tableDiversos = document.querySelector("[data-tablediversos]");
const searchInput = document.querySelector("[data-search]");

clientServices
	.listaProductos()
	.then((data) => {
		data.forEach(({ name, precio, img, id, categoria }) => {
			// Verifica si un elemento con el mismo ID ya existe en la tabla
			const existingElement = document.querySelector(
				`[data-card][id="${id}"]`
			);

			if (!existingElement) {
				const registro = crearRegistro(name, precio, img, id, categoria);
				if (categoria === "StarWars") {
					table.appendChild(registro);
				} else if (categoria === "Consolas") {
					tableConsolas.appendChild(registro);
				} else {
					tableDiversos.appendChild(registro);
				}
			}
		});
	})
	.catch((error) => alert(error + "Error al cargar los productos"));

searchInput.addEventListener("input", (e) => {
	const search = searchInput.value.trim().toLowerCase();

	if (search.length > -1) {
		// Realiza la lógica de filtrado y mostrar registros aquí

		// Limpia la tabla antes de agregar resultados de búsqueda

		table.innerHTML = "";
		tableConsolas.innerHTML = "";
		tableDiversos.innerHTML = "";

		clientServices
			.listaProductos()
			.then((data) => {
				data.forEach(({ name, precio, img, id, categoria }) => {
					const registro = crearRegistro(name, precio, img, id, categoria);
					if (name.toLowerCase().includes(search)) {
						if (categoria === "StarWars") {
							table.appendChild(registro);
						} else if (categoria === "Consolas") {
							tableConsolas.appendChild(registro);
						} else {
							tableDiversos.appendChild(registro);
						}
					}
				});
			})
			.catch((error) => alert(error + "Error al cargar los productos"));
	} else {
		// Si el campo de búsqueda está vacío, muestra todos los productos

		// Limpia la tabla antes de agregar todos los productos
		table.innerHTML = "";
		tableConsolas.innerHTML = "";
		tableDiversos = "";

		clientServices
			.listaProductos()
			.then((data) => {
				data.forEach(({ name, precio, img, id, categoria }) => {
					// Verifica si un elemento con el mismo ID ya existe en la tabla
					const existingElement = document.querySelector(
						`[data-card][id="${id}"]`
					);

					if (!existingElement) {
						const registro = crearRegistro(
							name,
							precio,
							img,
							id,
							categoria
						);
						if (categoria === "StarWars") {
							table.appendChild(registro);
						} else if (categoria === "Consolas") {
							tableConsolas.appendChild(registro);
						} else {
							tableDiversos.appendChild(registro);
						}
					}
				});
			})
			.catch((error) => alert(error + "Error al cargar los productos"));
	}
});
