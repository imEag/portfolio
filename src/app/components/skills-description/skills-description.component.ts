import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills-description',
  templateUrl: './skills-description.component.html',
  styleUrls: ['./skills-description.component.css']
})
export class SkillsDescriptionComponent implements OnInit, OnDestroy {

  public subscription!: Subscription; 

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
