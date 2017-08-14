import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mostrarMensagens = false;
  classMensagem = { hideMensagem : true };

  mensagens: any = [];
  mensagem = '';
  pergunta = '';
  resposta = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.mostrarMensagens = true;
    this.showOrHide();
    this.mensagens.push({
      texto: 'Olá, em que posso ajudar?',
      bot: true
    });
  }

  showOrHide() {
    if (this.mostrarMensagens) {
      this.mostrarMensagens = false;
      this.classMensagem.hideMensagem = false;
    }else {
      this.classMensagem.hideMensagem = true;
      this.mostrarMensagens = true;
    }
  }

  onKey(value: string) {
    this.mensagem = value;
  }

  decodeHtml(html) {
      let txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
  }
  sendMensagem() {
    if (this.mensagem === '') {
      return;
    }
    this.pergunta = this.mensagem;
    const body = {
      question: this.pergunta
    };
    this.mensagens.push({
      texto: this.mensagem
    });
    this.scroll();
    //this.mensagem = '';
    this.http.post(
      'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/e457b816-d76b-4571-b979-74a5ef293cf3/generateAnswer',
      body,
      {
        headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', '0e60521366b7410b8096b18787e7597e'),
      }).subscribe(data => {
        // Read the result field from the JSON response.
        this.resposta = this.decodeHtml(data['answers'][0]['answer']);
        this.mensagens.push({
          texto: this.resposta,
          bot: true
        });
        this.resposta = '';
        this.scroll();
        this.avaliar();
    });
  }

  scroll() {

    let objDiv = document.getElementById("areaChat");
    objDiv.scrollTop = objDiv.scrollHeight;

  }
  avaliar(){
      if (this.mensagem === '') {
        return;
      }

      this.pergunta = this.mensagem;

      const body = {
        "documents": [
          {
            "language": "pt",
            "id": 2,
            "text": this.pergunta
          }
        ]
      };
      this.mensagens.push({
        texto: this.mensagem
      });
      this.scroll();
      this.mensagem = '';
      this.http.post(
        'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        body,
        {
          headers: new HttpHeaders()
              .set('Ocp-Apim-Subscription-Key', 'dac926182154495b8564d322c751584a')
              .set('Content-Type', 'application/json'),
        }).subscribe(data => {
          this.resposta = this.decodeHtml(data['documents'][0]['score']);
          alert("Análise de sentimento: " + this.resposta);

      });
  }
}
