import { clientServices } from "../server/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get("id");
	console.log("El id es: " + id);

	if (id == null) {
		console.log("El id es nulo");
	}

	const name = document.querySelector("[data-nombre]");
	const categoria = document.querySelector("[data-categoria]");
	const precio = document.querySelector("[data-precio]");
	const img = document.querySelector("[data-img]");

	try {
		const perfil = await clientServices.detalleProducto(id);
		console.log(
			"El perfil es: " + perfil.name,
			perfil.precio,
			perfil.img,
			perfil.categoria
		);
		if (
			perfil.name &&
			perfil.precio &&
			perfil.img &&
			perfil.categoria
		) {
			name.value = perfil.name;
			precio.value = perfil.precio;
			img.value = perfil.img;
			categoria.value = perfil.categoria;
		} else {
			throw new Error();
		}
	} catch (error) {
		console.error("Error al cargar el perfil:", error);
	}
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const url = new URL(window.location);
	const id = url.searchParams.get("id");
	console.log("El id es: " + id);

	const name = document.querySelector("[data-nombre]").value;
	const categoria = document.querySelector("[data-categoria]").value;
	const precio = document.querySelector("[data-precio]").value;
	const img = document.querySelector("[data-img]").value;
	const descripcion = document.querySelector(
		"[data-descripcion]"
	).value;

	clientServices
		.actualizarProducto(id, name, precio, img, descripcion)

		.then(() => {
			window.location.href = "../screens/listaproductos.html";
		})
		.catch((error) => {
			console.error("Error al actualizar producto:", error);
		});
});
