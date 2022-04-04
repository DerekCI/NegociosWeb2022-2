import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import swal from 'sweetalert';

import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

	public article: Article;
	public url: string;

  constructor(
  	private _articleService: ArticleService,
  	private _route: ActivatedRoute,
  	private _router: Router,
  ) {
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	this._route.params.subscribe(params => {
  		// console.log(params);	// Objeto con el id únicamente
  		let id = params['id'];
  		this._articleService.getArticle(id).subscribe(
  		response => {
  			if (response.article) {
  				this.article = response.article;
  			} else {
  				this._router.navigate(['/home']);
  			}
  			// console.log(response);		// Objeto con los datos del artículo 
  		}, 
  		error => {
  			console.log(error);
  			this._router.navigate(['/home']);
  		});
  	});
  }

  delete(id) {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez borrado no podrás recuperarlo",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("El artículo se ha elimidado correctamente", {
          icon: "success",
        });
        this._articleService.delete(id).subscribe(
          response => {
            console.log(response);
            this._router.navigate(['/blog']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );
      } else {
        swal("Nada se ha borrado");
      }
    });
  }

}
