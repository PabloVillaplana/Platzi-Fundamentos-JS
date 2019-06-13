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

function imprimirNombreEnMayusculas({nombre}) {
    
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(puan)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
imprimirNombreEnMayusculas()