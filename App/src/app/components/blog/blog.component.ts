import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

	// En este arreglo guardamos los articulos que me llegan de la base de datos con HttpClient
	public articles: Article[];
	public url: string;

  constructor(
  	private _articleService: ArticleService
  ) { 
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	// this._articleService.pruebas();

  	// subscribe me permite recoger los datos que me devuelve la petición http
  	// Dentro de subscribe tengo dos funciones de callback
  	// Uno para recibir la respuesta y otro para el error
  	this._articleService.getArticles()
  	.subscribe(
  		response => {
  			// console.log(response);
  			if (response.articles) {
  				this.articles = response.articles;
  			}
  		},
  		error => {
  			console.error(error);
  		}
  	);
  }

}
