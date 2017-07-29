import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CadastrarEditarArtigoComponent } from './cadastrar-editar-artigo/cadastrar-editar-artigo.component'
import { EditarArtigoComponent } from './cadastrar-editar-artigo/editar-artigo/editar-artigo.component'
import { ArtigosDestaqueComponent } from './artigos-destaque/artigos-destaque.component'
import { CompararArtigoComponent } from './comparar-artigo/comparar-artigo.component'

const routes: Routes = [
  {
    path: '',
    component : ArtigosDestaqueComponent
  },
  {
    path: 'cadastrarArtigo',
    component : CadastrarEditarArtigoComponent
  },
  {
    path: 'editarArtigo/:idArtigo',
    component : EditarArtigoComponent
  },
  {
    path: 'destaques',
    component : ArtigosDestaqueComponent
  },
  {
    path: 'comparar/:idArtigo/:versao',
    component : CompararArtigoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
