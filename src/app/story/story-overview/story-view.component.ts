import { Component } from '@angular/core';
import {StoryOverview} from "../../models/story-overview.model";
import {EMPTY_STORY} from "../../test-data/story/test-story";
import {EMPTY_VIEW_AUDIT} from "../../test-data/audit/audit";

@Component({
  selector: 'app-story-overview',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.scss']
})
export class StoryOverviewComponent {

  storyOverview: StoryOverview;

  constructor() {
    this.storyOverview = EMPTY_STORY;
    this.storyOverview = {
      storyViewAudit: EMPTY_VIEW_AUDIT,
      storyTagGroups: [
        {
          tagGroupDescription: 'Test Tag Group Description 1',
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
            }
          ]
        }
      ],
      storyName: 'Test Story Name',
      storyDescription: 'Test Story Description',
      chapterOverviews: [
        {
          chapterTitle: 'Test Chapter Title 1',
          chapterTagGroups: [],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 2',
          chapterTagGroups: [],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 3',
          chapterTagGroups: [],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 4',
          chapterTagGroups: [],
          chapterViewAudit: EMPTY_VIEW_AUDIT
        }
      ]
    }
  }

}
