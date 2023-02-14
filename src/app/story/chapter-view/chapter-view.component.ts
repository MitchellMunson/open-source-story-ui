import {Component, Input} from '@angular/core';
import {Chapter} from "../../models/chapter.model";
import {EMPTY_CHAPTER} from "../../test-data/story/test-chapter";

@Component({
  selector: 'app-chapter-view',
  templateUrl: './chapter-view.component.html',
  styleUrls: ['./chapter-view.component.scss']
})
export class ChapterViewComponent {

  @Input() chapter: Chapter;
  isChapterOpen: boolean;

  constructor() {
    this.chapter = EMPTY_CHAPTER;
    this.isChapterOpen = false;
  }

  onChapterOpenClose(): void {
    this.isChapterOpen = !this.isChapterOpen;
  }

}
