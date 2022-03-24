import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import * as english_json from '../../assets/languages/english.json';
import * as spanish_json from '../../assets/languages/spanish.json';

@Injectable()
export class LanguageService {
    public language: string;

    public subject_language: Subject<any>;
    public message_language: any;

    constructor() {
        this.language = "english";

        this.subject_language = new Subject();
        this.message_language = this.subject_language.asObservable();
    }

    getText(): any {
        /* this.subject_language.next() */
    }

    setLanguage(language: string): void {
        if (language == 'english') {
            this.message_language = english_json;
        } else if ( language == 'spanish') {
            this.message_language = spanish_json;
        } else {
            this.message_language = english_json;
        }
    }
}