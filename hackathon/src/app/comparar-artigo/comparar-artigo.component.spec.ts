import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararArtigoComponent } from './comparar-artigo.component';

describe('CompararArtigoComponent', () => {
  let component: CompararArtigoComponent;
  let fixture: ComponentFixture<CompararArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
