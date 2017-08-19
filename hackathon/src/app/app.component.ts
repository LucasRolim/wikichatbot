import { Component } from '@angular/core';
import { Usuario } from './login/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;

  usuarioLogado: Usuario;

  ngOnInit() {

    if (window.location.href.indexOf("code") == -1){
      console.log("oooo");
      this.requestPermission();
    }else{
      console.log("iii");
      this.logarUsuario(true);
    }
   
    this.isUsuarioLogado();
  }

  isUsuarioLogado(){
    var logado = window.sessionStorage.getItem("usuarioNome");
    if(logado){
      this.logarUsuario(true);
    }else{
      this.logout();
    }
  }

  logarUsuario(usuario){

    this.usuarioLogado = new Usuario();
    this.usuarioLogado.logado = usuario.usuarioLogado;
    this.usuarioLogado.nomeUsuario = window.sessionStorage.getItem("usuarioNome");
    this.usuarioLogado.tokenUsuario = window.sessionStorage.getItem("usuarioToken");
    this.usuarioLogado.pictureDataUrl = window.sessionStorage.getItem("usuarioImg");
    console.log(this.usuarioLogado)
  }

  logout(){
    this.usuarioLogado = new Usuario();
    this.usuarioLogado.logado = false;
    window.sessionStorage.clear()

  }
  requestPermission(){
    window.open(
      'https://www.facebook.com/v2.10/dialog/oauth?client_id=1289606537817398&redirect_uri=http://localhost:4200/',
      '_self'
    );
  }
}
