import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProdutosComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemProdutosComponent;
  let fixture: ComponentFixture<ListagemProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemProdutosComponent]
    });
    fixture = TestBed.createComponent(ListagemProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
