import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

	public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;

	// En el constructor se asignan valores a las propiedades
	// No es buena práctica agregar lógica aquí, eso va en el OnInit
  constructor(
    // Es necsario declara esta variable para usar el servicio
      private _peliculaService: PeliculaService
    ) {
  	this.titulo = 'Componente película';
    this.peliculas = this._peliculaService.getPeliculas();
    // console.log('Constructor lanzado');
    this.fecha = new Date(2020, 9, 12);
  }

  // OnInit es un hook que se ejecuta cuando cargamos la etiqueta
  // Se ejecuta después del constructor
  ngOnInit(): void {
  	console.log('Componente iniciado');
    console.log(this._peliculaService.holaMundo());
  }

  // Este hook se ejecuta cuando hay un cambio
  ngDoCheck() {
  	console.log('DoCheck lanzado');
  }

  // Creo un método que se active cuando pulso el botón
  cambiarTitulo() {
  	this.titulo = "Titulo cambiado";
  }

  // Este hook se ejecuta antes de elminiar un componente
  ngOnDestroy() {
  	console.log('El componente se eliminará de la ejecución');
  }

  mostrarFavorita(event) {
    console.log(event);
    this.favorita = event.pelicula;
  }
}
