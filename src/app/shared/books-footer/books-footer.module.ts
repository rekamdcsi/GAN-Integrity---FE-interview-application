import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BooksFooterComponent } from './books-footer.component';

@NgModule({
  declarations: [
    BooksFooterComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [BooksFooterComponent]
})
export class BooksFooterModule { }
