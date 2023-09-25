const registrosGuardados =
	JSON.parse(localStorage.getItem("registros")) || [];

function manejarRegistro(email, password, passwordConfirm) {
	const nuevoRegistro = {
		email,
		password,
		passwordConfirm,
	};

	// Agrega el nuevo registro al arreglo de registros
	registrosGuardados.push(nuevoRegistro);

	// Guarda el arreglo de registros actualizado en el localStorage
	localStorage.setItem(
		"registros",
		JSON.stringify(registrosGuardados)
	);

	console.log(email, password, passwordConfirm);
}

export { registrosGuardados, manejarRegistro };
