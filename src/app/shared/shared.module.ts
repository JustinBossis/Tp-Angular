import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedStarRatingComponent } from './shared-star-rating/shared-star-rating.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SharedStarRatingComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    SharedStarRatingComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
