import { Injectable } from '@angular/core';


@Injectable()
export class ConfigService {
  private uriLogin = 'http://127.0.0.1:3200/user/authenticateUser';
  //private urlFace = 'https://www.facebook.com/v2.10/dialog/oauth?client_id=1289606537817398&redirect_uri=http://webface.azurewebsites.net/';


  constructor() { }

  facebook: {
    urlFaceOauth: "https://www.facebook.com/v2.10/dialog/oauth",
    clientId: "1289606537817398",
    redirectURI: "http://localhost:4200",
    clientSecret: "4ae8506755412307ba2a8b613d8f50b6"
  }


}
