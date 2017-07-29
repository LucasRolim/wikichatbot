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
  private uriLogin = 'http://127.0.0.1:3200/user/authenticateUser';

  constructor(private http: Http) { }

  cadastrarArtigo(artigo: Artigo){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(this.uriLogin, artigo)
                    .map((res: Response) => res.json());
  }

}
