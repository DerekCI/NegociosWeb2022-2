import { Component, OnInit } from '@angular/core';
// Cargo los componentes del router
// Ahora ya puedo utilizar estos servicios que nos permitirán recoger información de una ruta
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  constructor(
    // Aquí utilizo los servicios de Router
    // ActivatedRoute: Sacamos los parámetros de la URL
    // Router: Permite la navegación entre URL's
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // Recogemos los parámetros de la URL
    // Obtengo el parámetro y ahora lo puedo utilizar en la vista
    // Lo agrego en el archivo html
    this._route.params.subscribe((params: Params)=> {
      this.nombre = params.nombre;
      this.apellido = params.apellido;
      // console.log(params);
    });
  }

  redireccion() {
    // alert("Método redirección");
    this._router.navigate(['/pagina-de-pruebas', 'Armando', 'Rivera']);
  }

}
