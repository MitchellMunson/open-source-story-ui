import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EMPTY_CHAPTER_OVERVIEW} from "../../test-data/story/test-chapter-overview";
import {ChapterService} from "../../services/chapter.service";
import {Chapter} from "../../models/chapter.model";
import {EMPTY_CHAPTER} from "../../test-data/story/test-chapter";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chapter-read',
  templateUrl: './chapter-read.component.html',
  styleUrls: ['./chapter-read.component.scss']
})
export class ChapterReadComponent implements OnInit {

  chapter: Chapter;

  chapterCommentForm: FormGroup;

  constructor(private chapterService: ChapterService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
    this.chapter = EMPTY_CHAPTER;

    this.chapterCommentForm = this.formBuilder.group({
      chapterComment: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const storyId: number = params['storyId'];
      const chapterNumber: number = params['chapterNumber'];
      this.chapterService.getChapter(storyId, chapterNumber).subscribe(
        chapter => this.chapter = chapter
      );
    });
  }

  onSubmitChapterComment(): void {
    const replySubmission: string = this.chapterComment.value;
    console.log("Submitted Reply", replySubmission);
  }

  get chapterComment(): FormControl {
    return this.chapterCommentForm.get('chapterComment') as FormControl;
  }

}
