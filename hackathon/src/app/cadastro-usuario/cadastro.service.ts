import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

 
@Injectable()
export class CadastroService {
  private uriCadastro = 'http://127.0.0.1:3200/user/insertNewUser';

  constructor(private http: Http) { }

  cadastrarUsuario(nomeField: string, emailField: string, senhaField: string){
    console.log("2");
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

 console.log("3");
    this.http.post(this.uriCadastro,{"nome":nomeField,"email":emailField,"senha":senhaField}).subscribe((result)=>{
      console.log(result);
    })
  }
}
