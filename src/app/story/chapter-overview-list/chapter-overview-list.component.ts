import {Component, Input} from '@angular/core';
import { ChapterOverview } from 'src/app/models/chapter-overview.model';

@Component({
  selector: 'app-chapter-overview-list',
  templateUrl: './chapter-overview-list.component.html',
  styleUrls: ['./chapter-overview-list.component.scss']
})
export class ChapterOverviewListComponent {

  @Input() chapterOverviews: ChapterOverview[];

  constructor() {
    this.chapterOverviews = [];
  }

}
