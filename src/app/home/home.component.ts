import { AfterContentInit, AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, AfterViewInit, AfterContentInit{
  constructor(private router: Router) {}
  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
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
