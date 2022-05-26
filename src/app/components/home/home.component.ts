import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {


  constructor(private _ScrollService: ScrollService) { }

  //get DOM reference
  @ViewChild('profile') profile!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;



  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // creates a new object with name and scroll position of each component
    let componentsData = {
      'profile': this.profile.nativeElement.offsetTop,
      'skills': this.skills.nativeElement.offsetTop,
      'projects': this.projects.nativeElement.offsetTop
    }

    // sends previous obj to Scroll Service
    this._ScrollService.setScrollPosition(componentsData);
  }

}
