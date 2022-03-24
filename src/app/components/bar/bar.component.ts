import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public text: any;
  constructor(
    //LanguageServie is not included in providers because it is already included in app.module.ts in providers
    private _LanguageService: LanguageService
  ) {
    this.text = this._LanguageService.getText();
  }

  ngOnInit(): void {
  }

}
