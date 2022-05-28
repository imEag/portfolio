import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // Stores language servcice subscription
  public subscription!: Subscription;

  //Stores text from language service
  public text: any;

  constructor(
    private _LanguageService: LanguageService
  ) { }

  ngOnInit(): void {
    //gets default text 
    this.text = this._LanguageService.getTextDefault();

    //Loads any language change from language service.
    this.subscription = this._LanguageService.message_language.subscribe((text: any) => {
      this.text = text;
      console.log(this.text);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
