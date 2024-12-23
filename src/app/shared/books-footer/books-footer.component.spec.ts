import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFooterComponent } from './books-footer.component';

describe('BooksFooterComponent', () => {
  let component: BooksFooterComponent;
  let fixture: ComponentFixture<BooksFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
