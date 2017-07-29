import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Artigo } from './artigo';
import { Usuario } from './../login/usuario';
import { ArtigoService } from './artigo.service';

@Component({
  selector: 'app-cadastrar-editar-artigo',
  templateUrl: './cadastrar-editar-artigo.component.html',
  styleUrls: ['./cadastrar-editar-artigo.component.css']
})
export class CadastrarEditarArtigoComponent implements OnInit {
  public artigo: Artigo;
  public usuario: Usuario;
  pergunta = '';
  resposta = '';
  alertaSucesso = false;

  constructor(private http: HttpClient, private artigoService: ArtigoService) {}

  ngOnInit() {
    this.artigo = new Artigo();
    this.usuario = new Usuario();
    this.usuario.nomeUsuario = window.sessionStorage.getItem('usuarioNome');
    this.usuario.tokenUsuario = window.sessionStorage.getItem('usuarioToken');
  }

  salvarArtigo() {
    this.artigo.usuario = this.usuario;
    this.artigoService.cadastrarArtigo(this.artigo);
    this.salvarQna();
  }

  salvarQna() {
    this.pergunta = this.artigo.titulo;
    this.resposta = this.artigo.conteudo;
    this.alertaSucesso = false;

    const body = {
        'add': {
            'qnaPairs': [
                {
                    'question': this.pergunta,
                    'answer': this.resposta
                }
            ]
        }
    };

    this.http.patch(
      'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/e457b816-d76b-4571-b979-74a5ef293cf3',
      body,
      {
        headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', '0e60521366b7410b8096b18787e7597e'),
      }).subscribe(data => {
        // this.decodeHtml(data['answers'][0]['answer']);
        console.log('Pergunta Cadastrada!');
        this.pergunta = '';
        this.resposta = '';
        this.alertaSucesso = true;
        this.publicarQna();
      });
  }

  publicarQna() {

    this.http.put(
      'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/e457b816-d76b-4571-b979-74a5ef293cf3',
      {},
      {
        headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', '0e60521366b7410b8096b18787e7597e'),
      }).subscribe(data => {
        console.log('Pergunta Publicada!');
      });

  }

}