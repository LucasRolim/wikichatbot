import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class LoginService {
  private uriLogin = 'http://127.0.0.1:3200/user/authenticateUser';

  constructor(private http: Http) { }

  efetuarLogin(emailField: string, senhaField: string){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");


    return this.http.get(this.uriLogin +"?email=" +emailField+"&senha="+senhaField)
            .map((res: Response) => res.json());
  }

}
