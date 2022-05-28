import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ScrollService } from 'src/app/services/scroll.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public subscriptionLanguage!: Subscription;
  public text: any;

  public subscriptionScroll!: Subscription;
  public scrollPositions: any;

  constructor(

    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService,
    private _ScrollService: ScrollService

  ) {
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

  changeLang(language: string): void {
    this._LanguageService.setLanguage(language);
  }

  ngOnDestroy(): void {
    // stops subscription to services
    this.subscriptionLanguage.unsubscribe();

    this.subscriptionScroll.unsubscribe();
  }

  scrollTo(compName: string): void {
    //scrolls to given section
    switch (compName) {
      case 'home':
        //-150 because of the nav bar that is fixed in the screen
        document.documentElement.scrollTop = this.scrollPositions.profile - 150;
        break
      case 'projects':
        document.documentElement.scrollTop = this.scrollPositions.projects - 170;
        break
      case 'about':
        document.documentElement.scrollTop = this.scrollPositions.about - 150;
        break
      case 'contact':
        document.documentElement.scrollTop =document.documentElement.scrollHeight;  
      break
    }
  }

}
