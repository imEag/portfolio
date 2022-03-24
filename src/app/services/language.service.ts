import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

//importing JSON files
import * as english_json from '../../assets/languages/english.json';
import * as spanish_json from '../../assets/languages/spanish.json';

@Injectable()
export class LanguageService {
    /* Stores the whole website's text, changes among languages */

    public language: string;
    public text: any;

    public subject_language: Subject<any>;
    public message_language: any;

    constructor() {
        // Sets default language
        this.language = "english";
        this.text = english_json;

        // Creates subject and observable
        this.subject_language = new Subject();
        this.message_language = this.subject_language.asObservable();
    }
    
    getTextDefault() {
        //Returns default language text
        return this.text;
    }

    setLanguage(language: string): void {
        // Changes language and text
        if (language == 'english') {
            this.subject_language.next(english_json);
        } else if (language == 'spanish') {
            this.subject_language.next(spanish_json);
        } else {
            this.subject_language.next(english_json);
        }
    }
}