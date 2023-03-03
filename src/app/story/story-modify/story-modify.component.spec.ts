import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryModifyComponent } from './story-modify.component';

describe('StoryModifyComponent', () => {
  let component: StoryModifyComponent;
  let fixture: ComponentFixture<StoryModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
