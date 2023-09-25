const imgHeader = document.querySelector("[data-imgheader]");
const btnLogin = document.querySelector("[data-btnlogin]");
const btnVer = document.querySelector("[data-btnver]");
const logoImg = document.querySelector("[data-logoimg]");
const logoText = document.querySelector("[data-logotext]");
const starwars = document.querySelector("[data-starwars]");
const nameCard = document.querySelectorAll("[data-name]");
const valueCard = document.querySelectorAll("[data-value]");
const valorCard = document.querySelectorAll("[data-valor]");
const btnP = document.querySelector("[data-btnp]");
const card = document.querySelectorAll(".card");
const btnConsolas = document.querySelectorAll("[data-btnconsolas]");
const consolaTitulo = document.querySelectorAll(
	"[data-consolatitulo]"
);
const consolas = document.querySelector("[data-consolas]");
const btnPConsolas = document.querySelector("[data-btnpconsolas]");
const footerp = document.querySelector("[data-footerp]");
const btnfooterp = document.querySelector("[data-btnfooterp]");
const footer = document.querySelector("[data-footer]");

function cambioImg() {
	const clases = ["img--one", "img--second", "img--three"];

	const claseActual = imgHeader.classList[1];
	const indiceActual = clases.indexOf(claseActual);
	const proximoIndice = (indiceActual + 1) % clases.length;

	if (window.scrollY > 0) {
		// Si se ha hecho scroll, establecer la clase "img--three" en el contenedor y detener la animación
		const elementos = document.querySelectorAll(
			"[data-imgheader], [data-btnlogin], [data-btnver], [data-logoimg], [data-logotext], [data-starwars], [data-name], [data-value], [data-valor], [data-btnp], .card, [data-btnconsolas], [data-consolatitulo], [data-consolas], [data-btnpconsolas], [data-footerp], [data-btnfooterp], [data-footer]"
		);

		elementos.forEach((elemento) => {
			elemento.classList.remove(claseActual);
			elemento.classList.add("img--three");
		});
	} else {
		// Si no hay scroll, continuar con la animación normal
		imgHeader.classList.remove(claseActual);
		imgHeader.classList.add(clases[proximoIndice]);
		btnLogin.classList.remove(claseActual);
		btnLogin.classList.add(clases[proximoIndice]);
		btnVer.classList.remove(claseActual);
		btnVer.classList.add(clases[proximoIndice]);
		logoImg.classList.remove(claseActual);
		logoImg.classList.add(clases[proximoIndice]);
		logoText.classList.remove(claseActual);
		logoText.classList.add(clases[proximoIndice]);
	}
}
window.addEventListener("scroll", cambioImg);

cambioImg();
setInterval(cambioImg, 3000);
