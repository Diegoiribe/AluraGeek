import { registrosGuardados } from "../server/dataregistro.js";

const formulario = document.querySelector("[data-formlogin]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const email = document.querySelector("[data-emaillogin]").value;
	const password = document.querySelector(
		"[data-passwordlogin]"
	).value;

	if (
		registrosGuardados.some((registro) => registro.email === email) &&
		registrosGuardados.some(
			(registro) => registro.password === password
		)
	) {
		window.location.href = "../screens/listaproductos.html";
	} else {
		alert("El email o la contraseña son incorrectos");
	}
});
