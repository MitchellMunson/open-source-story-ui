import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EMPTY_CHAPTER_OVERVIEW} from "../../test-data/story/test-chapter-overview";
import {ChapterService} from "../../services/chapter.service";
import {Chapter} from "../../models/chapter.model";
import {EMPTY_CHAPTER} from "../../test-data/story/test-chapter";

@Component({
  selector: 'app-chapter-read',
  templateUrl: './chapter-read.component.html',
  styleUrls: ['./chapter-read.component.scss']
})
export class ChapterReadComponent implements OnInit {

  chapter: Chapter;

  constructor(private chapterService: ChapterService,
              private route: ActivatedRoute) {
    this.chapter = EMPTY_CHAPTER;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let storyId: number = params['storyId'];
      let chapterNumber: number = params['chapterNumber'];
      this.chapterService.getChapter(storyId, chapterNumber).subscribe(
        chapter => this.chapter = chapter
      );
    });
  }

}
