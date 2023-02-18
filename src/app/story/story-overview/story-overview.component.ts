import { Component } from '@angular/core';
import {StoryOverview} from "../../models/story-overview.model";
import {EMPTY_STORY} from "../../test-data/story/test-story";
import {EMPTY_VIEW_AUDIT} from "../../test-data/audit/audit";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-story-overview',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.scss']
})
export class StoryOverviewComponent {

  storyOverview: StoryOverview;

  storyCommentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.storyOverview = EMPTY_STORY;
    this.storyOverview = {
      storyViewAudit: EMPTY_VIEW_AUDIT,
      storyTagGroups: [
        {
          tagGroupDescription: 'Test Story Tag Group Description 1',
          tags: [
            {
              tagName: 'Test Tag 1',
              tagDescription: 'Test 1'
            },
            {
              tagName: 'Test Tag 2',
              tagDescription: 'Test 2'
            },
            {
              tagName: 'Test Tag 3',
              tagDescription: 'Test 3'
            },
            {
              tagName: 'Test Tag 4',
              tagDescription: 'Test 4'
            },
            {
              tagName: 'Test Tag 5',
              tagDescription: 'Test 5'
            },
            {
              tagName: 'Test Tag 6',
              tagDescription: 'Test 6'
            },
            {
              tagName: 'Test Tag 7',
              tagDescription: 'Test 7'
            },
            {
              tagName: 'Test Tag 8',
              tagDescription: 'Test 8'
            },
            {
              tagName: 'Test Tag 9',
              tagDescription: 'Test 9'
            },
            {
              tagName: 'Test Tag 10',
              tagDescription: 'Test 10'
            },
            {
              tagName: 'Test Tag 11',
              tagDescription: 'Test 1'
            },
            {
              tagName: 'Test Tag 12',
              tagDescription: 'Test 2'
            },
            {
              tagName: 'Test Tag 13',
              tagDescription: 'Test 3'
            },
            {
              tagName: 'Test Tag 14',
              tagDescription: 'Test 4'
            },
            {
              tagName: 'Test Tag 15',
              tagDescription: 'Test 5'
            },
            {
              tagName: 'Test Tag 16',
              tagDescription: 'Test 6'
            },
            {
              tagName: 'Test Tag 17',
              tagDescription: 'Test 7'
            },
            {
              tagName: 'Test Tag 18',
              tagDescription: 'Test 8'
            },
            {
              tagName: 'Test Tag 19',
              tagDescription: 'Test 9'
            },
            {
              tagName: 'Test Tag 20',
              tagDescription: 'Test 10'
            }
          ]
        }
      ],
      storyName: 'Test Story Name',
      storyDescription: 'Test Story Description',
      chapterOverviews: [
        {
          chapterTitle: 'Test Chapter Title 1',
          chapterDescription: 'Test Chapter Description 1',
          chapterQuote: 'Test Chapter Quote 1',
          chapterTagGroups: [
            {
              tagGroupDescription: 'Test Chapter Tag Group Description 1',
              tags: [
                {
                  tagName: 'Test Tag 1',
                  tagDescription: 'Test 1'
                },
                {
                  tagName: 'Test Tag 2',
                  tagDescription: 'Test 2'
                },
                {
                  tagName: 'Test Tag 3',
                  tagDescription: 'Test 3'
                },
                {
                  tagName: 'Test Tag 4',
                  tagDescription: 'Test 4'
                },
                {
                  tagName: 'Test Tag 5',
                  tagDescription: 'Test 5'
                },
                {
                  tagName: 'Test Tag 6',
                  tagDescription: 'Test 6'
                },
                {
                  tagName: 'Test Tag 7',
                  tagDescription: 'Test 7'
                },
                {
                  tagName: 'Test Tag 8',
                  tagDescription: 'Test 8'
                },
                {
                  tagName: 'Test Tag 9',
                  tagDescription: 'Test 9'
                },
                {
                  tagName: 'Test Tag 10',
                  tagDescription: 'Test 10'
                },
              ]
            },
            {
              tagGroupDescription: 'Test Chapter T Group Description 2',
              tags: [
                {
                  tagName: 'Test Tag 1',
                  tagDescription: 'Test 1'
                },
                {
                  tagName: 'Test Tag 2',
                  tagDescription: 'Test 2'
                },
                {
                  tagName: 'Test Tag 3',
                  tagDescription: 'Test 3'
                },
                {
                  tagName: 'Test Tag 4',
                  tagDescription: 'Test 4'
                },
                {
                  tagName: 'Test Tag 5',
                  tagDescription: 'Test 5'
                },
                {
                  tagName: 'Test Tag 6',
                  tagDescription: 'Test 6'
                },
                {
                  tagName: 'Test Tag 7',
                  tagDescription: 'Test 7'
                },
                {
                  tagName: 'Test Tag 8',
                  tagDescription: 'Test 8'
                },
                {
                  tagName: 'Test Tag 9',
                  tagDescription: 'Test 9'
                },
                {
                  tagName: 'Test Tag 10',
                  tagDescription: 'Test 10'
                },
              ]
            }
          ],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 2',
          chapterDescription: 'Test Chapter Description 2',
          chapterQuote: 'Test Chapter Quote 2',
          chapterTagGroups: [],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 3',
          chapterDescription: 'Test Chapter Description 3',
          chapterQuote: 'Test Chapter Quote 3',
          chapterTagGroups: [],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 4',
          chapterDescription: 'Test Chapter Description 4',
          chapterQuote: 'Test Chapter Quote 4',
          chapterTagGroups: [],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        }
      ]
    }

    this.storyCommentForm = this.formBuilder.group({
      storyComment: ['']
    });

  }

  onSubmitStoryComment() {
    const replySubmission: string = this.storyComment.value;
    console.log("Submitted Reply", replySubmission);
  }

  get storyComment(): FormControl {
    return this.storyCommentForm.get('storyComment') as FormControl;
  }

}
