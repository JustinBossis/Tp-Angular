import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpApp';
  helloText = "Hello World";
  mathCoursePic : any = {
    imageUrl: 'assets/images/maths.jpg',
    imageWidth : 200
  };

  imageUrls = [
    "assets/images/maths.jpg",
    "assets/images/sport.jpg",
    "assets/images/chimie.jpg",
    "assets/images/histoire.jpg",
    "assets/images/info.jpg",
    "assets/images/philo.jpg",
    "assets/images/physique.jpg"
  ];
  changeImage(): void {
    let num = Math.floor((Math.random() * 7)+1)
    this.mathCoursePic.imageUrl = this.imageUrls[num-1];
  }
  writtenWord: string = 'Hello';
  date = new Date();
  isVisible: boolean = true;
  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
