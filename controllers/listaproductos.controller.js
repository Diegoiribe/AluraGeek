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
			<span>
				<ion-icon
					type="button"
					data-delete
					name="close-circle-outline"
					id="${id}"
				></ion-icon>
				<a href="./actualizar.html?id=${id}">
					<ion-icon name="create-outline"></ion-icon>
				</a>
			</span>;
        </div>


`;

	registro.innerHTML = contenido;
	const botonEliminar = registro.querySelector("[data-delete]");
	botonEliminar.addEventListener("click", () => {
		const productId = botonEliminar.id;
		clientServices
			.eliminarProducto(productId)
			.then((respuesta) => {
				registro.remove(respuesta);
			})
			.catch((err) => console.log(err));
	});
	return registro;
};

const table = document.querySelector("[data-productos]");
const searchInput = document.querySelector("[data-search]");
clientServices
	.listaProductos()
	.then((data) => {
		data.forEach(({ name, precio, img, id, categoria }) => {
			const existingElement = document.querySelector(
				`[data-card][id="${id}"]`
			);

			if (!existingElement) {
				const existingElement = document.querySelector(
					`[data-card][id="${id}"]`
				);

				if (!existingElement) {
					const registro = crearRegistro(name, precio, img, id, categoria);
					table.appendChild(registro);
				}
			}
		});
	})
	.catch((error) => alert(error + "Error al cargar los productos"));

searchInput.addEventListener("input", (e) => {
	const search = searchInput.value.trim().toLowerCase();

	if (search.length > 0) {
		// Realiza la lógica de filtrado y mostrar registros aquí

		// Limpia la tabla antes de agregar resultados de búsqueda
		table.innerHTML = "";

		clientServices
			.listaProductos()
			.then((data) => {
				data.forEach(({ name, precio, img, id, categoria }) => {
					const registro = crearRegistro(name, precio, img, id, categoria);
					if (name.toLowerCase().includes(search)) {
						table.appendChild(registro);
					}
				});
			})
			.catch((error) => alert(error + "Error al cargar los productos"));
	} else {
		// Si el campo de búsqueda está vacío, muestra todos los productos

		// Limpia la tabla antes de agregar todos los productos
		table.innerHTML = "";

		clientServices
			.listaProductos()
			.then((data) => {
				data.forEach(({ name, precio, img, id, categoria }) => {
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
						table.appendChild(registro);
					}
				});
			})
			.catch((error) => alert(error + "Error al cargar los productos"));
	}
});
