import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  senha: string;

  @Output() eventLogin = new EventEmitter();

  constructor(private loginService: LoginService, private router : Router) {
  }

  ngOnInit() {
    
    if (window.location.href.indexOf("code") != -1){
      this.loginFacebook();
    }
   
  }

  login(){
    //Regras de validacao
    this.loginService.efetuarLogin(this.email, this.senha).subscribe((resultado)=>{
        var usuarioLogado = resultado;
        window.sessionStorage.setItem("usuarioNome", usuarioLogado.nome);
        window.sessionStorage.setItem("usuarioToken", usuarioLogado.senha);
        this.eventLogin.emit({usuarioLogado: true});
        document.getElementById('cancelar').click();//Fechar o Modal
        this.router.navigateByUrl("/");
    });

  }
//Get profile from facebook
  getFaceBookProfile(code:string){
    this.loginService.getAccessToken(code).subscribe(oathAccessData => {
      this.loginService.getUserFacebookProfile(oathAccessData.access_token).subscribe(profile => {
        window.sessionStorage.setItem("usuariologado", "true");
        window.sessionStorage.setItem("usuarioNome", profile.name);
        window.sessionStorage.setItem("usuarioEmail", profile.email);
        window.sessionStorage.setItem("usuarioImg", profile.picture.data.url);
        window.sessionStorage.setItem("usuarioId", profile.id);
      
        },err => { console.log(err); });},err => { console.log(err);});
        
        this.eventLogin.emit({usuarioLogado: true});
        //document.getElementById('cancelar').click();
        this.router.navigate(['/']);
  }

  requestPermission(){
    window.open(
      'https://www.facebook.com/v2.10/dialog/oauth?client_id=1289606537817398&redirect_uri=http://localhost:4200/',
      "_self"
    );
  }

  loginFacebook(){
    if (window.location.href.indexOf("code") > -1){
      var code = window.location.href.substring(window.location.href.indexOf("?") + 1).split('&')[0].split('=')[1];
      this.getFaceBookProfile(code);
    }

  }

}
