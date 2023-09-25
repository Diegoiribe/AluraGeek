import {
	manejarRegistro,
	registrosGuardados,
} from "../server/dataregistro.js";

const registro = document.querySelector("[data-form]");
registro.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const emailInput = document.querySelector("[data-email]");
	const passwordInput = document.querySelector("[data-password]");
	const passwordConfirmInput = document.querySelector(
		"[data-passwordconfirm]"
	);

	const email = emailInput.value;
	const password = passwordInput.value;
	const passwordConfirm = passwordConfirmInput.value;

	if (
		registrosGuardados.some((registro) => registro.email === email)
	) {
		alert("El email ya está registrado");
	} else if (password !== passwordConfirm) {
		alert("Las contraseñas no coinciden");
	} else {
		manejarRegistro(email, password, passwordConfirm);

		// Limpiar los campos de entrada
		emailInput.value = "";
		passwordInput.value = "";
		passwordConfirmInput.value = "";
	}
});
