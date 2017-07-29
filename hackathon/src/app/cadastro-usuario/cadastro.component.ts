import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroService } from "./cadastro.service";

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroUsuario {
  nome: string;
  email: string;
  senha: string;

  constructor(private http: HttpClient, private cadService: CadastroService) {}

  cadastrar(){
  console.log("1");
  this.cadService.cadastrarUsuario(this.nome,this.email,this.senha);
  //Regras de validacao
  //console.log(this.nome);
  //console.log(this.email);
  //console.log(this.senha); 
  }  
} 
