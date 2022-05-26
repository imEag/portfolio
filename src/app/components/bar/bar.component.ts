import { Component, OnInit, OnDestroy } from '@angular/core';
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
  public text: any;

  public mobileBarOpened: boolean;
  public scrollPositions: any;

  constructor(

    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService,
    //ScrollService will give scroll position of profile, skills and projects service
    private _ScrollService: ScrollService

  ) {
    this.mobileBarOpened = false;
    this.scrollPositions = {}
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
  }

  closeMobileBar(): void {
    this.mobileBarOpened = false;
  }

  scrollTo(compName: string): void {
  //scrolls to given section
    switch (compName) {
      case 'home':
        document.documentElement.scrollTop = this.scrollPositions.profile;
        break
      case 'projects':
        document.documentElement.scrollTop = this.scrollPositions.projects - 20;
        break
      case 'skills':
        document.documentElement.scrollTop = this.scrollPositions.skills;
        break
      case 'contact':
        break
    }
  }
}
