import { Injectable } from "@angular/core";
import * as skills_json from 'src/app/text/skills.json';

@Injectable()
export class SkillsService {
    public skills: Array<any>;

    constructor() {
        this.skills = skills_json.skills;
    }

    getSkills(): Array<any> {
        return this.skills;
    }
}