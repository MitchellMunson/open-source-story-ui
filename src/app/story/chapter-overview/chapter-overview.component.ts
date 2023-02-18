import {Component, Input} from '@angular/core';
import { ChapterOverview } from 'src/app/models/chapter-overview.model';
import {EMPTY_CHAPTER} from "../../test-data/story/test-chapter";
import {EMPTY_CHAPTER_OVERVIEW} from "../../test-data/story/test-chapter-overview";

@Component({
  selector: 'app-chapter-overview',
  templateUrl: './chapter-overview.component.html',
  styleUrls: ['./chapter-overview.component.scss']
})
export class ChapterOverviewComponent {

  @Input() chapterOverview: ChapterOverview;
  isChapterOpen: boolean;

  constructor() {
    this.chapterOverview = EMPTY_CHAPTER_OVERVIEW;
    this.isChapterOpen = false;
  }

  onChapterOverviewOpenClose(): void {
    this.isChapterOpen = !this.isChapterOpen;
  }

  isTagsBlockHidden(): boolean {
    return !this.chapterOverview.chapterTagGroups ||
      this.chapterOverview.chapterTagGroups.length === 0;
  }


}
