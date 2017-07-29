import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosDestaqueComponent } from './artigos-destaque.component';

describe('ArtigosDestaqueComponent', () => {
  let component: ArtigosDestaqueComponent;
  let fixture: ComponentFixture<ArtigosDestaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigosDestaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
