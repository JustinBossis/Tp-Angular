import { AfterContentInit, AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy, AfterViewInit, AfterContentInit{
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
