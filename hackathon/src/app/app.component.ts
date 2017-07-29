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
    console.log(this.usuarioLogado)
  }

  logout(){
    this.usuarioLogado = new Usuario();
    this.usuarioLogado.logado = false;
    window.sessionStorage.clear()

  }
}
