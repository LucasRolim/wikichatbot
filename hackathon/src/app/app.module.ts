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
import { CadastroUsuario }  from './cadastro-usuario/cadastro.component';


import { AppRoutingModule } from './app.routing.module';
import { ArtigosDestaqueComponent } from './artigos-destaque/artigos-destaque.component';
import { LoginService } from './login/login.service';
import { ArtigoService } from './cadastrar-editar-artigo/artigo.service';

import { CadastroService } from "./cadastro-usuario/cadastro.service";
import { ChatComponent } from './chat/chat.component';
import { EditarArtigoComponent } from './cadastrar-editar-artigo/editar-artigo/editar-artigo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompararArtigoComponent,
    CadastrarEditarArtigoComponent,
    HomeComponent,
    ChatComponent,
    CadastroUsuario,
    ArtigosDestaqueComponent,
	EditarArtigoComponent
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
    ArtigoService,
    CadastroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
