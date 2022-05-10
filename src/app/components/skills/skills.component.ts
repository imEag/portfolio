import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillsService]
})
export class SkillsComponent implements OnInit {

  public skills_list: any[];

  constructor(
    private _skillsService: SkillsService
  ) {
    this.skills_list = _skillsService.getSkills();
  }

  ngOnInit(): void {
  }

}
