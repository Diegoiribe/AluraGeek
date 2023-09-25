import { clientServices } from "../server/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const name = document.querySelector("[data-nombre]").value;
	const categoria = document.querySelector("[data-categoria]").value;
	const precio = document.querySelector("[data-precio]").value;
	const img = document.querySelector("[data-img]").value;
	const descripcion = document.querySelector(
		"[data-descripcion]"
	).value;

	clientServices
		.crearProductos(name, precio, img, descripcion)
		.then((respuesta) => {
			console.log(respuesta);
			console.log("La categoria es: " + categoria);
		})
		.catch((err) => console.log(err));
});
