import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDescriptionComponent } from './skills-description.component';

describe('SkillsDescriptionComponent', () => {
  let component: SkillsDescriptionComponent;
  let fixture: ComponentFixture<SkillsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
