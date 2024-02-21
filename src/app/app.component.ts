import { AfterContentInit, AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, AfterViewInit, AfterContentInit{

  //Attributs
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

  writtenWord: string = 'Hello';
  date = new Date();
  isVisible: boolean = true;

  //Constructor

  //Method

  changeImage(): void {
    let num = Math.floor((Math.random() * 7)+1)
    this.mathCoursePic.imageUrl = this.imageUrls[num-1];
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  //Method life cycle

  ngOnDestroy(): void {
    console.log("destroy")
  }

  ngAfterViewInit(): void {
    console.log("view")
  }

  ngAfterContentInit(): void {
    console.log("content")
  }

  
  
  
  
  
}
