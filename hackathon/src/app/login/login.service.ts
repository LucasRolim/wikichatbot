import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ConfigService } from "../core/services/config.service";
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  private uriLogin = 'http://127.0.0.1:3200/user/authenticateUser';
  private urlFace = 'https://www.facebook.com/v2.10/dialog/oauth?client_id=1289606537817398&redirect_uri=http://localhost:4200/';
  results: string[];

  constructor(private http: Http, private configProvider:ConfigService) { }

  efetuarLogin(emailField: string, senhaField: string){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");


    return this.http.get(this.uriLogin +"?email=" +emailField+"&senha="+senhaField)
            .map((res: Response) => res.json());
  }
  
  efetuarLoginFacebook(){ 
    return this.http.get(this.urlFace).map((res: Response) => res.json());
  }

  authenticateFacebook(){
    window.location.href = 'https://www.facebook.com/v2.9/dialog/oauth?client_id='+
    "1289606537817398"+ 
    '&redirect_uri='+ "http://localhost:4200/" + '&scope=public_profile';
  }

  getAccessToken(authenticationCode: string){
    var authProviderUrl = 'https://graph.facebook.com/v2.9/oauth/access_token';
    var authParameters = {
        client_id: "1289606537817398",
        redirect_uri: "http://localhost:4200/",
        client_secret: "4ae8506755412307ba2a8b613d8f50b6",
        code: authenticationCode
    };
    var params = [];
    for (var k in authParameters) {
        params.push(k + '=' + authParameters[k]);
    }
    var authOpenURI = authProviderUrl + '?' + params.join('&');

     return this.http.get(authOpenURI)
               .map(res => res.json())
               .catch(err => Observable.throw(err));
  }
  
  getUserFacebookProfile(accessToken:string):Observable<any>{
    var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name','picture.type(small)'];
    var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');

    return this.http.get(graphApiUrl+'&access_token='+accessToken+'')
               .map(res => res.json())
               .catch(err => Observable.throw(err)); 
  }

  getLoginStatus(){

  }
  
}
