import {Component, Input} from '@angular/core';
import { ChapterOverview } from 'src/app/models/chapter-overview.model';
import {EMPTY_CHAPTER} from "../../test-data/story/test-chapter";

@Component({
  selector: 'app-chapter-overview',
  templateUrl: './chapter-overview.component.html',
  styleUrls: ['./chapter-overview.component.scss']
})
export class ChapterOverviewComponent {

  @Input() chapterOverview: ChapterOverview;
  isChapterOpen: boolean;

  constructor() {
    this.chapterOverview = EMPTY_CHAPTER;
    this.isChapterOpen = false;
  }

  onChapterOpenClose(): void {
    this.isChapterOpen = !this.isChapterOpen;
  }

}
