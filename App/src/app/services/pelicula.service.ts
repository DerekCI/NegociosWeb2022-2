import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

// Un servicio nos sirve para abstraer lógica de mi componente
// Generalmente los ocupamos para realizar peticiones http

@Injectable()
export class PeliculaService {

	public peliculas: Pelicula[];

	constructor() {
		this.peliculas = [
			new Pelicula("Requiem for a dream", 2019, 'https://images-na.ssl-images-amazon.com/images/I/81OOo4oFkcL._SL1500_.jpg'),
		    new Pelicula("Harry Potter y el prisionero de Azcaban", 2018, 'https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg'),
		    new Pelicula("Psicosis", 2017, 'https://diariodefriki.files.wordpress.com/2017/10/psycho-559c10640aba2.jpg?w=210&h=300')
		];
	}

	holaMundo() {
		return 'Hola Mundo desde un servicio de Angular !!!'
	}

	getPeliculas() {
		return this.peliculas;
	}
}