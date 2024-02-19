import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-shared-star-rating',
  templateUrl: './shared-star-rating.component.html',
  styleUrls: ['./shared-star-rating.component.css']
})
export class SharedStarRatingComponent implements OnChanges{
  @Input() rating: number = 0;
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
  cropWidth: number = 90;
  
  ngOnChanges(): void {
    this.cropWidth = this.rating * 90 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }    
}
