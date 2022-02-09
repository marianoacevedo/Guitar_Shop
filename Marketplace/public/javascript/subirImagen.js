window.addEventListener("load", () => {
	document.getElementById("inputImagen").onchange = (e) => {
		// Ocultar y mostrar elementos
		document.getElementById("labelImagen").classList.add("ocultar")
		document.getElementById("imagen").classList.add("ocultar")
		document.getElementById("error-imagen-be").classList.add("ocultar")
		// Creamos el objeto de la clase FileReader
		let reader = new FileReader();
		// Leemos el archivo subido y se lo pasamos a nuestro fileReader
		reader.readAsDataURL(e.target.files[0]);
		// Le decimos que cuando este listo ejecute el código interno
		reader.onload = function(){
			let preview = document.getElementById('preview'),
			image = document.createElement('img');
			image.src = reader.result;
			preview.innerHTML = '';
			preview.append(image);
		};
	}
})