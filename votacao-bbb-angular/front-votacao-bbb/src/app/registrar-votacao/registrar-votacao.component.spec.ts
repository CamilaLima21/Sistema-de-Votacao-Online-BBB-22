import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVotacaoComponent } from './registrar-votacao.component';

describe('RegistrarVotacaoComponent', () => {
  let component: RegistrarVotacaoComponent;
  let fixture: ComponentFixture<RegistrarVotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
