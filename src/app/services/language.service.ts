import { Injectable } from "@angular/core";
import * as english from '../../assets/languages/english.json';
import * as spanish from '../../assets/languages/spanish.json';

@Injectable()
export class LanguageService {
    public text: any;
    public language: string;

    constructor() {
        this.language = "english";
    }

    getText(): any {
        switch (this.language) {
            case 'english':
                return english;

            case 'spanish':
                return spanish;

            default:
                console.log(this.language)
                return english;
        }
    }

    setLanguage(language: string): void {
        this.language = language;
    }
}