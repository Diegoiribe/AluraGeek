const listaProductos = () =>
	fetch("https://alurageek-json.vercel.app/perfil").then((respuesta) =>
		respuesta.json()
	);

const crearProductos = (name, precio, img) => {
	return fetch("https://alurageek-json.vercel.app/perfil", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name,
			precio,
			img,
			categoria: categoria.value,
			id: uuid.v4(),
		}),
	});
};

const eliminarProducto = (id) => {
	return fetch(`https://alurageek-json.vercel.app/perfil/${id}`, {
		method: "DELETE",
	});
};

const detalleProducto = (id) => {
	return fetch(`https://alurageek-json.vercel.app/perfil/${id}`).then(
		(respuesta) => respuesta.json()
	);
};

const actualizarProducto = (id, name, precio, img) => {
	return fetch(`https://alurageek-json.vercel.app/perfil/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name,
			precio,
			img,
			categoria: categoria.value,
		}),
	})
		.then((respuesta) => respuesta)
		.catch((err) => console.log(err));
};

export const clientServices = {
	listaProductos,
	crearProductos,
	eliminarProducto,
	actualizarProducto,
	detalleProducto,
};
