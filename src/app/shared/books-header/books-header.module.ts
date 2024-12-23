import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BooksHeaderComponent } from './books-header.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    BooksHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
  ],
  exports: [BooksHeaderComponent]
})
export class BooksHeaderModule { }
