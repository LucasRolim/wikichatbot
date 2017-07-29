import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pergunta = '';
  resposta = '';
  historico = [];


  constructor(private http: HttpClient) {}




  decodeHtml(html) {
      let txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
  }
  enviarPergunta() {
    const body = {
      question: this.pergunta
    };
    this.historico.push({
      mensagem: this.pergunta
    });
    this.pergunta = '';
    this.http.post(
      'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/e457b816-d76b-4571-b979-74a5ef293cf3/generateAnswer',
      body,
      {
        headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', '0e60521366b7410b8096b18787e7597e'),
      }).subscribe(data => {
        // Read the result field from the JSON response.
        this.resposta = this.decodeHtml(data['answers'][0]['answer']);
        this.historico.push({
          mensagem: this.resposta,
          bot: true
        });
        this.resposta = '';
    });
  }
}


