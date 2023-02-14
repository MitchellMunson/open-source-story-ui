import { Component } from '@angular/core';
import {Story} from "../../models/story.model";
import {EMPTY_STORY} from "../../test-data/story/test-story";
import {EMPTY_VIEW_AUDIT} from "../../test-data/audit/audit";

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent {

  story: Story;

  constructor() {
    this.story = EMPTY_STORY;
    this.story = {
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
      chapters: [
        {
          chapterTitle: 'Test Chapter Title 1',
          chapterTagGroups: [],
          chapterText: 'Test Chapter Text 1',
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 2',
          chapterTagGroups: [],
          chapterText: 'Test Chapter Text 2',
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 3',
          chapterTagGroups: [],
          chapterText: 'Test Chapter Text 3',
          chapterViewAudit: EMPTY_VIEW_AUDIT
        },
        {
          chapterTitle: 'Test Chapter Title 4',
          chapterTagGroups: [],
          chapterText: 'Test Chapter Text 4',
          chapterViewAudit: EMPTY_VIEW_AUDIT
        }
      ]
    }
  }

}
