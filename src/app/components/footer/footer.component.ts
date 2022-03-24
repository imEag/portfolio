import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public subscription: any;
  public text: any;

  constructor(

    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService

  ) { }

  ngOnInit(): void {
    //gets default text 
    this.text = this._LanguageService.getTextDefault();

    //Listens to a language changes and updates text
    this.subscription = this._LanguageService.message_language.subscribe((text: any) => {
      this.text = text;
    });
  }

  changeLang(language: string): void {
    this._LanguageService.setLanguage(language);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
