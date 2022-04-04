import { Injectable } from '@angular/core'; // Para crear mi servicio
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Para hacer peticiones HTTP
import { Observable } from 'rxjs'; // rxjs librería de JS para crear observables
import { Article } from '../models/article';
import { Global } from './global';

// Importante incluir el HttpClientModule en el app.models

@Injectable()
export class ArticleService {

	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = Global.url;
	}

	pruebas() {
		return 'Soy el servicio de artículos!!!'
	}

	// Indico que va a devolver un observable
	// Un Onservable me permite recoger los datos que me devuelven los métodos de los servicios
	getArticles(last: any = null):Observable<any> {
		var articles = 'articles';

		if (last != null) {
			var articles = 'articles/true';
		}

		return this._http.get(this.url + articles);
	}

	getArticle(articleId):Observable<any> {
		return this._http.get(this.url + 'article/'+ articleId);
	}

	search(searchString):Observable<any> {
		return this._http.get(this.url + 'search/' + searchString);
	}

	create(article):Observable<any> {
		let params = JSON.stringify(article);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url + 'save', params, {headers: headers});
	}

	update(id, article):Observable<any> {
		let params = JSON.stringify(article);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url + 'article/' + id, params, {headers:headers});
	}

	delete(id): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.delete(this.url + 'article/' + id, { headers: headers });
	}
}