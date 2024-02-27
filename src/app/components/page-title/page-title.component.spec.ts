import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleComponent } from './page-title.component';

describe('PageTitleComponent', () => {
  let component: PageTitleComponent;
  let fixture: ComponentFixture<PageTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTitleComponent]
    });
    fixture = TestBed.createComponent(PageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title with correct class', () => {
    const title = fixture.nativeElement.querySelector('h1.display-6');
    expect(title).toBeTruthy();
  });

  it('should title with correct prop', () => {
    component.title = 'Meu novo título';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h1.display-6');
    expect(title.innerText).toEqual(component.title);
  });
});
