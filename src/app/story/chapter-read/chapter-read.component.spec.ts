import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterReadComponent } from './chapter-read.component';

describe('ChapterReadComponent', () => {
  let component: ChapterReadComponent;
  let fixture: ComponentFixture<ChapterReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
