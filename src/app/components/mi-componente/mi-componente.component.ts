// Creación de un componente
// Importar los módulos de angular
import { Component } from '@angular/core';

// Utilizar el decorador @Component para indicar las características y propiedades del componente
// NO cerrar con punto y coma ;
// Tiene que llevar obligatoriamente dos propiedades
	// selector: nombre de la etiqueta que se generará
	// template: Utilizamos comillas invertidas e introducimos el HTML
@Component({
	selector: 'mi-componente',
	templateUrl: './mi-componente.component.html'
})

// Exportamos el componente

export class MiComponente {
	// Puedo definir mis propiedades
	public titulo: string;
	public comentario: string;
	public year: number;

	constructor() {
		// Inicializo las propiedades

		this.titulo = 'Hola mundo, soy Mi Componente';
		this.comentario = 'Este es mi primer componente';
		this.year = 2020;

		console.log("Mi componente cargado !!");
		console.log(this.titulo);
		console.log(this.comentario);
		console.log(this.year);
	}
}

// Ahora lo importamos en el archivo app.module.ts