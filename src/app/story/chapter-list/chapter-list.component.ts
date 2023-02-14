import {Component, Input} from '@angular/core';
import {Chapter} from "../../models/chapter.model";

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent {

  @Input() chapters: Chapter[];

  constructor() {
    this.chapters = [];
  }

}
