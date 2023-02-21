import {StoryOverview} from "../models/story-overview.model";

import {EMPTY_VIEW_AUDIT} from "../test-data/audit/audit";
import {MOCK_TAG_GROUPS} from "./mock-tag-groups";

export const MOCK_STORY_OVERVIEW: StoryOverview = {
  storyViewAudit: EMPTY_VIEW_AUDIT,
  storyTagGroups: MOCK_TAG_GROUPS,
  storyName: 'Test Story Name',
  storyDescription: 'Test Story Description',
  chapterOverviews: [
    {
      chapterNumber: 1,
      chapterTitle: 'Test Chapter Title 1',
      chapterDescription: 'Test Chapter Description 1',
      chapterQuote: 'Test Chapter Quote 1',
      chapterTagGroups: MOCK_TAG_GROUPS,
      chapterViewAudit: EMPTY_VIEW_AUDIT
    },
    {
      chapterNumber: 2,
      chapterTitle: 'Test Chapter Title 2',
      chapterDescription: 'Test Chapter Description 2',
      chapterQuote: 'Test Chapter Quote 2',
      chapterTagGroups: [],
      chapterViewAudit: EMPTY_VIEW_AUDIT
    },
    {
      chapterNumber: 3,
      chapterTitle: 'Test Chapter Title 3',
      chapterDescription: 'Test Chapter Description 3',
      chapterQuote: 'Test Chapter Quote 3',
      chapterTagGroups: [],
      chapterViewAudit: EMPTY_VIEW_AUDIT
    },
    {
      chapterNumber: 4,
      chapterTitle: 'Test Chapter Title 4',
      chapterDescription: 'Test Chapter Description 4',
      chapterQuote: 'Test Chapter Quote 4',
      chapterTagGroups: [],
      chapterViewAudit: EMPTY_VIEW_AUDIT
    }
  ]
}
