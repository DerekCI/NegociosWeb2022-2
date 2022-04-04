/* Este molde me permitirá definir las peliculas en peliculas.components */

export class Pelicula {
/*	
	public title: string;
	public year: number;
	public image: string;

	constructor(title:string, year:number, image:string) {
		this.title = title;
		this.year = year;
		this.image = image;
	}
*/

	/* Otra forma de hacer lo anterior es así */
	/* Paso los parámetros directo al constructor */
	constructor(
		public title: string,
		public year: number,
		public image: string) {}
}