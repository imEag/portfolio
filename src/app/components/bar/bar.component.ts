import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnDestroy {

  public subscription: any;
  public text: any;

  public mobileBarOpened: boolean;

  constructor(

    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService

  ) {
    this.mobileBarOpened = false;
  }

  ngOnInit(): void {
    //gets default text 
    this.text = this._LanguageService.getTextDefault();

    //Listens to a language changes and updates text
    this.subscription = this._LanguageService.message_language.subscribe((text: any) => {
      this.text = text;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openMobileBar() :void {
    this.mobileBarOpened = true;
  }

  closeMobileBar() :void {
    this.mobileBarOpened = false;
  }
}
