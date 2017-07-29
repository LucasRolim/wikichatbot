import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mostrarMensagens : boolean = false;
  classMensagem = {hideMensagem : true};

  mensagens : any = [];
  mensagem : string = "";

  constructor() {
  }

  ngOnInit() {
  }

  showOrHide(){
    if(this.mostrarMensagens){
      this.mostrarMensagens = false;
      this.classMensagem.hideMensagem = false;
    }else{
      this.classMensagem.hideMensagem = true;
      this.mostrarMensagens = true;
    }
  }

  sendMensagem(){
    console.log(this.mensagem);
    this.mensagens.push(this.mensagem);
    this.mensagem = "";
  }

  onKey(value: string) {
    this.mensagem = value;
  }

}
