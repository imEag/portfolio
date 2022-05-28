import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public subscription: any;
  public text: any;

  //Stores the scroll position of the other componets
  public scrollPositions: any;
  public subscriptionScroll!: Subscription;

  constructor(

    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService,

    //ScrollService will give scroll position of profile, skills and projects service
    private _ScrollService: ScrollService
  ) {
    this.scrollPositions = {};
  }

  ngOnInit(): void {
    //gets default text 
    this.text = this._LanguageService.getTextDefault();

    //Listens to a language changes and updates text
    this.subscription = this._LanguageService.message_language.subscribe((text: any) => {
      this.text = text;
    });

    //Get obj with name and scroll position of profile, skills and projects service.
    this.subscriptionScroll = this._ScrollService.message_scroll.subscribe((data: any) => {
      this.scrollPositions = data;
    });
  }
  /* 
    changeLang(language: string): void {
      this._LanguageService.setLanguage(language);
    } */

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionScroll.unsubscribe();
  }


  scrollTo(compName: string): void {
    //scrolls to given section
    switch (compName) {
      case 'projects':
        document.documentElement.scrollTop = this.scrollPositions.projects - 170;
        break
      case 'contact':
        document.documentElement.scrollTop = document.documentElement.scrollHeight ;
        break
    }
  }

}
