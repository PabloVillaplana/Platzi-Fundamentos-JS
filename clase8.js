var pablo = {
	nombre: 'Sacha',
	apellido: 'Villaplana',
	edad: '21'
}

var puan = {
	nombre: 'Pablo',
	apellido: 'Villaplana',
	edad: '21'
}

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function NombreYEdad(persona){
	var { nombre, edad } = persona

	console.log("Hola me llamo"+" "+nombre+" y tengo "+ edad)
}


imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(puan)
// imprimirNombreEnMayusculas({nombre: 'Pepito'})
NombreYEdad(pablo)
NombreYEdad(puan)


function cumpleanos(persona){
    persona.edad += 1
}
