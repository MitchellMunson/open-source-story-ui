import {StoryOverview} from "../models/story-overview.model";

import {EMPTY_VIEW_AUDIT} from "../test-data/audit/audit";
import {MOCK_TAG_GROUPS} from "./mock-tag-groups";
import {Status} from "../models/status.enum";

export const MOCK_STORY_OVERVIEW: StoryOverview = {
  storyViewAudit: EMPTY_VIEW_AUDIT,
  storyTagGroups: MOCK_TAG_GROUPS,
  storyId: 1,
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

export const MOCK_STORY_OVERVIEWS: StoryOverview[] = [
  {
    storyViewAudit: {
      originalPoster: 'Author 1',
      lastEdited: '01-01-2023',
      postScore: 100,
      postViews: 10000,
      status: Status.ACTIVE,
      numberOfEdits: 1
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 1,
    storyName: 'Test Story Name 1',
    storyDescription: 'Test Story Description 1',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 2',
      lastEdited: '02-02-2023',
      postScore: 200,
      postViews: 20000,
      status: Status.ACTIVE,
      numberOfEdits: 2
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 2,
    storyName: 'Test Story Name 2',
    storyDescription: 'Test Story Description 2',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 3',
      lastEdited: '03-03-2023',
      postScore: 300,
      postViews: 30000,
      status: Status.ACTIVE,
      numberOfEdits: 3
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 3,
    storyName: 'Test Story Name 3',
    storyDescription: 'Test Story Description 3',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 4',
      lastEdited: '04-04-2023',
      postScore: 400,
      postViews: 40000,
      status: Status.ACTIVE,
      numberOfEdits: 4
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 4,
    storyName: 'Test Story Name 4',
    storyDescription: 'Test Story Description 4',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 5',
      lastEdited: '05-05-2023',
      postScore: 500,
      postViews: 50000,
      status: Status.ACTIVE,
      numberOfEdits: 5
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 5,
    storyName: 'Test Story Name 5',
    storyDescription: 'Test Story Description 5',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 6',
      lastEdited: '06-06-2023',
      postScore: 600,
      postViews: 60000,
      status: Status.ACTIVE,
      numberOfEdits: 6
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 6,
    storyName: 'Test Story Name 6',
    storyDescription: 'Test Story Description 6',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 7',
      lastEdited: '07-07-2023',
      postScore: 700,
      postViews: 70000,
      status: Status.ACTIVE,
      numberOfEdits: 7
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 7,
    storyName: 'Test Story Name 7',
    storyDescription: 'Test Story Description 7',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 8',
      lastEdited: '08-08-2023',
      postScore: 800,
      postViews: 80000,
      status: Status.ACTIVE,
      numberOfEdits: 8
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 8,
    storyName: 'Test Story Name 8',
    storyDescription: 'Test Story Description 8',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 9',
      lastEdited: '09-09-2023',
      postScore: 900,
      postViews: 90000,
      status: Status.ACTIVE,
      numberOfEdits: 9
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 8,
    storyName: 'Test Story Name 9',
    storyDescription: 'Test Story Description 9',
    chapterOverviews: []
  },
  {
    storyViewAudit: {
      originalPoster: 'Author 10',
      lastEdited: '10-10-2023',
      postScore: 1000,
      postViews: 100000,
      status: Status.ACTIVE,
      numberOfEdits: 10
    },
    storyTagGroups: MOCK_TAG_GROUPS,
    storyId: 10,
    storyName: 'Test Story Name 10',
    storyDescription: 'Test Story Description 10',
    chapterOverviews: []
  }
]
