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

  @Output() eventLogin = new EventEmitter();;

  constructor(private loginService: LoginService, private router : Router) {
  }

  ngOnInit() {
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

}
