import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Artigo } from './artigo';
import { Usuario } from './../login/usuario';
import { ArtigoService } from './artigo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-editar-artigo',
  templateUrl: './cadastrar-editar-artigo.component.html',
  styleUrls: ['./cadastrar-editar-artigo.component.css']
})
export class CadastrarEditarArtigoComponent implements OnInit {
  public artigo: Artigo;
  public usuario: Usuario;
  public cadastrar: boolean;
  // pergunta = '';
  // resposta = '';
  // alertaSucesso = false;

  constructor(private artigoService: ArtigoService, private rota: Router) {}

  ngOnInit() {
    this.artigo = new Artigo();
    this.usuario = new Usuario();
    this.usuario.nomeUsuario = window.sessionStorage.getItem('usuarioNome');
    this.usuario.tokenUsuario = window.sessionStorage.getItem('usuarioToken');
  }

  salvarArtigo(){
    this.artigo.usuario = this.usuario;
    this.artigoService.cadastrarArtigo(this.artigo);
    this.rota.navigateByUrl("/");
  }


}
