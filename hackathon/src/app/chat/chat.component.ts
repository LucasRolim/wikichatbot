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
  resposta = 'Olá, em que posso ajudar?';
  machineQuestion = '';
  sentimentAnalysisJson = { body: { datetime: new Date(), analysisAvg: new Number(), analysis:[] } };
  sentimentAnalysisBody = { };
  sentmentAnalysisCount: number = 0;
  sentimentAvg: number = parseFloat('0.000000');


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.mostrarMensagens = true;
    this.showOrHide();
    this.mensagens.push({
      texto: this.resposta,
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

    if(this.machineQuestion == '')
      this.machineQuestion = this.resposta;

    this.resposta = '';
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

      var previousRobotMessage = '';

      const body = {
        "documents": [
          {
            "language": "pt",
            "id": 2,
            "text": this.mensagem
          }
        ]
      };

      this.http.post(
        'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        body,
        {
          headers: new HttpHeaders()
              .set('Ocp-Apim-Subscription-Key', '9b00358d13d44cdaab9656a85312b312')
              .set('Content-Type', 'application/json'),
        }).subscribe(data => {

          var sentimentAnalysis = this.decodeHtml(data['documents'][0]['score']);
          this.sentimentAvg = this.sentimentAvg + parseFloat(sentimentAnalysis);

          console.log("Pergunta da máquina: " + this.machineQuestion);
          console.log(this.sentimentAvg);
          console.log(parseFloat(sentimentAnalysis));
          console.log("Resposta da pessoa: " + this.mensagem);
          console.log("Análise de sentimento:  " + sentimentAnalysis);

          this.sentimentAnalysisBody[this.sentmentAnalysisCount] = {
              question:this.machineQuestion,
              answer:this.mensagem,
              sentimentOverAnswer: sentimentAnalysis
          };

          this.sentmentAnalysisCount++;

          console.log(this.sentimentAnalysisBody);

          this.machineQuestion = '';
      });
  }

  finalizarAtendimento(){
    this.sentimentAnalysisJson.body.analysis.push(this.sentimentAnalysisBody);
    this.sentimentAnalysisJson.body.analysisAvg =  (this.sentimentAvg / this.sentmentAnalysisCount) ;

    console.log(this.sentimentAnalysisJson.body.analysisAvg);
    console.log(this.sentimentAvg);
    console.log(this.sentimentAnalysisJson);
    console.log(JSON.stringify(this.sentimentAnalysisJson));

    this.http.post('http://localhost:8080/historico-chat/',
    this.sentimentAnalysisJson,
    {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
    })
    .subscribe(data => {
        console.log(JSON.stringify(data));
    });
  }
}
