import { Injectable } from "@angular/core";
import * as skills_json from 'src/app/text/skills.json';

@Injectable()
export class SkillsService {
    public skills: any;

    constructor() {
        this.skills = skills_json;
        this.skills = this.skills.skills;
    }

    getSkills(): any[]{
        return this.skills;
    }
}