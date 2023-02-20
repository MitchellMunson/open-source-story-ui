import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EMPTY_CHAPTER_OVERVIEW} from "../../test-data/story/test-chapter-overview";

@Component({
  selector: 'app-chapter-read',
  templateUrl: './chapter-read.component.html',
  styleUrls: ['./chapter-read.component.scss']
})
export class ChapterReadComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let chapterNumber: number = params['chapterNumber'];
      console.log('chapterNumber retrieved: ', chapterNumber);
    });
  }

}
