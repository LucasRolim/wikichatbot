import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompararArtigoComponent } from './comparar-artigo/comparar-artigo.component';
import { CadastrarEditarArtigoComponent } from './cadastrar-editar-artigo/cadastrar-editar-artigo.component';
import { HomeComponent } from './home/home.component';
import { EditorModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app.routing.module';
import { ArtigosDestaqueComponent } from './artigos-destaque/artigos-destaque.component';
import { LoginService } from './login/login.service';
import { ArtigoService } from './cadastrar-editar-artigo/artigo.service';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompararArtigoComponent,
    CadastrarEditarArtigoComponent,
    HomeComponent,
    ChatComponent,
    ArtigosDestaqueComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    LoginService,
    ArtigoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
