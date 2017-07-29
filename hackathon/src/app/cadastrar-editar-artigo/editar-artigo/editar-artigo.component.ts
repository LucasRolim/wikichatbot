import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { ArtigoService } from './../artigo.service';

@Component({
  selector: 'app-editar-artigo',
  templateUrl: './editar-artigo.component.html',
  styleUrls: ['./editar-artigo.component.css']
})
export class EditarArtigoComponent implements OnInit {
  idArtigo: string;
  artigo =  {};
  constructor(private rota: ActivatedRoute, private artigoService: ArtigoService, private router: Router ) { }

  ngOnInit() {
    this.rota.params.subscribe(params => {
       this.idArtigo = params['idArtigo'];
    });
    this.buscarArtigoPorId();
  }


  buscarArtigoPorId(){
    this.artigoService.buscarArtigoPorId(this.idArtigo).subscribe((result)=>{
      this.artigo = result;
    })
  }

  editarArtigo(){
    this.artigoService.editarArtigo(this.artigo);
    this.router.navigateByUrl("/");
  }

}
