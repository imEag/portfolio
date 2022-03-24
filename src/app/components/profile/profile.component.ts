import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public text: any;

  constructor(
    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService
  ) {
    this.text = this._LanguageService.getText();
  }

  ngOnInit(): void {

  }

  changeLang(language: string): void {
    this._LanguageService.setLanguage(language);
    this.text = this._LanguageService.getText();
  }

}
