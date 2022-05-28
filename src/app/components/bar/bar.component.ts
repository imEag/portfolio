import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnDestroy {

  public subscriptionLanguage!: Subscription;
  public subscriptionScroll!: Subscription;

  //Stores component's text to display
  public text: any;

  //Stores the scroll position of the other componets
  public scrollPositions: any;

  public mobileBarOpened: boolean;

  //this is used to display the fixed nav bar
  public barIsFixed: boolean;

  //gets bar html reference
  @ViewChild('bar') bar!: ElementRef;

  constructor(

    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService,
    //ScrollService will give scroll position of profile, skills and projects service
    private _ScrollService: ScrollService

  ) {
    this.mobileBarOpened = false;
    this.scrollPositions = {};

    this.barIsFixed = false;
  }

  ngOnInit(): void {
    //gets default text 
    this.text = this._LanguageService.getTextDefault();

    //Listens to a language changes and updates text
    this.subscriptionLanguage = this._LanguageService.message_language.subscribe((text: any) => {
      this.text = text;
    });

    //Get obj with name and scroll position of profile, skills and projects service.
    this.subscriptionScroll = this._ScrollService.message_scroll.subscribe((data: any) => {
      this.scrollPositions = data;
    });
  }

  ngOnDestroy(): void {
    // stops subscription to services
    this.subscriptionLanguage.unsubscribe();

    this.subscriptionScroll.unsubscribe();
  }

  openMobileBar(): void {
    this.mobileBarOpened = true;

    /* //scroll to top
    document.documentElement.scrollTop = 0; */
  }

  closeMobileBar(): void {
    this.mobileBarOpened = false;
  }

  scrollTo(compName: string): void {
  //scrolls to given section
    switch (compName) {
      case 'home':
        //-150 because of the nav bar that is fixed in the screen
        document.documentElement.scrollTop = this.scrollPositions.profile -150;
        break
      case 'projects':
        document.documentElement.scrollTop = this.scrollPositions.projects - 170;
        break
      case 'about':
        document.documentElement.scrollTop = this.scrollPositions.about - 160 ;
        break
      case 'contact':
        document.documentElement.scrollTop =document.documentElement.scrollHeight;
        break
    }

    //close menu
    this.mobileBarOpened = false;
  }

  @HostListener('window:scroll', ['$event'])
  stickyBar(event: Event): void {
    // listens to scroll event and verifies is user scroll position is below bar default position to make it fixed to top
    
    let barScrollPosition = this.bar.nativeElement.offsetTop;
    let userScrollPosition = window.scrollY;
    
    if (userScrollPosition >= barScrollPosition) {
      this.barIsFixed = true;
    } else {
      this.barIsFixed = false;
    }
  }
}
