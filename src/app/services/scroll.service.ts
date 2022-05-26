//This service shares the scroll position of some component and use it in the bar navigation

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ScrollService {
    public scrollPositions: any;

    public subject_scroll: Subject<any>;
    public message_scroll: any;

    constructor() {
        this.scrollPositions = {}

        this.subject_scroll = new Subject();
        this.message_scroll = this.subject_scroll.asObservable();
    }

    setScrollPosition(componentsData: any): void {
        this.subject_scroll.next(componentsData);
    }
}