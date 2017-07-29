import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Artigo } from './artigo';


@Injectable()
export class ArtigoService {
  private uriCadastroArtigo = 'http://127.0.0.1:3200/artigo/insertNewArtigo';
  private uriUpdateArtigo = 'http://127.0.0.1:3200/artigo/updateArtigo';
  private uriListaArtigo = 'http://127.0.0.1:3200/artigo/getAllArtigos';
  private uriBuscarArtigoPorId = 'http://127.0.0.1:3200/artigo/getArtigoById?id=';

  constructor(private http: Http) { }

  cadastrarArtigo(artigo: Artigo) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(this.uriCadastroArtigo, JSON.stringify(artigo), { headers: headers }).subscribe(() => {
          JSON.stringify(artigo);
    }, erro => console.log(erro));
  }

  buscarTodosArtigos() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get(this.uriListaArtigo)
            .map((res: Response) => res.json());
  }

  buscarArtigoPorId(id) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get(this.uriBuscarArtigoPorId + id)
            .map((res: Response) => res.json());
  }

  editarArtigo(artigo){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(this.uriUpdateArtigo, JSON.stringify(artigo), { headers: headers }).subscribe(() => {
      JSON.stringify(artigo);
    }, erro => console.log(erro));
  }

}
