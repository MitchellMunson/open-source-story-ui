import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDescriptionViewComponent } from './tags-description-view.component';

describe('TagsDescriptionViewComponent', () => {
  let component: TagsDescriptionViewComponent;
  let fixture: ComponentFixture<TagsDescriptionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsDescriptionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsDescriptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
