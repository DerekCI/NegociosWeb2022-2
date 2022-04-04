import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]

})
export class ArticleEditComponent implements OnInit {

 	public article: Article;
	public status: string;
	public is_edit: boolean;
	public page_title: string;
	public url: string;

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",  // En Megas
    uploadAPI:  {
      url: Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Subir la imagen para el artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
  	private _articleService: ArticleService,
  	private _route: ActivatedRoute,
  	private _router: Router
  ) { 
  	this.article = new Article('', '', '', null, null);
  	this.is_edit = true;
  	this.page_title = 'Editar artículo';
  	this.url = Global.url;
  }

  ngOnInit(): void {
  	this.getArticle();
  }

  onSubmit() {
  	this._articleService.update(this.article._id, this.article).subscribe(
  		response => {
	  		if (response.status == 'succes') {
	  			console.log(response);
	  			this.status = 'succes';
	  			this.article = response.article;

          // Alert
           swal(
             'Articulo editado!!!',
             'El artículo se ha editado correctamente',
             'success'
           );

	  			this._router.navigate(['/blog/articulo', this.article._id]);
	  		} else {
	  			this.status = 'error'
	  		}
  		},
  		error => {// Alert
           swal(
             'Hubo un problema al editar el artículo',
             'El artículo no se ha editado correctamente',
             'error'
           );console.error(error);
  			this.status = 'error';
  		}
  	);
  }

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    console.log(imageData);
    this.article.image = imageData.image;
  }

  getArticle() {
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

}
