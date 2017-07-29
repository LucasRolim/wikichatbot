import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarArtigoComponent } from './cadastrar-editar-artigo.component';

describe('CadastrarEditarArtigoComponent', () => {
  let component: CadastrarEditarArtigoComponent;
  let fixture: ComponentFixture<CadastrarEditarArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEditarArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEditarArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
