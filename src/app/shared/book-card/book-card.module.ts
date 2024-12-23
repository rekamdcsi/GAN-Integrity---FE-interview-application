import { NgModule } from '@angular/core';
import { BookCardComponent } from './book-card.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterLink
  ],
  exports: [BookCardComponent]
})
export class BookCardModule { }
