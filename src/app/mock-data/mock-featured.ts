import {Featured} from "../models/featured.model";
import { EMPTY_VIEW_AUDIT } from "../test-data/audit/audit";

export const MOCK_FEATURED: Featured = {
  featuredStories: [
    { storyName: 'Test Story Name 1', storyId: 1, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 2', storyId: 2, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 3', storyId: 3, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 4', storyId: 4, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 5', storyId: 5, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 6', storyId: 6, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 7', storyId: 7, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 8', storyId: 8, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 9', storyId: 9, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 10', storyId: 10, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 11', storyId: 11, storyViewAudit: EMPTY_VIEW_AUDIT },
    { storyName: 'Test Story Name 12', storyId: 12, storyViewAudit: EMPTY_VIEW_AUDIT },
  ],
  featuredChapters: [
    { storyId: 1, chapterNumber: 1, chapterTitle: 'Test Chapter Name 1', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 2, chapterNumber: 2, chapterTitle: 'Test Chapter Name 2', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 3, chapterNumber: 3, chapterTitle: 'Test Chapter Name 3', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 4, chapterNumber: 4, chapterTitle: 'Test Chapter Name 4', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 5, chapterNumber: 5, chapterTitle: 'Test Chapter Name 5', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 6, chapterNumber: 6, chapterTitle: 'Test Chapter Name 6', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 7, chapterNumber: 7, chapterTitle: 'Test Chapter Name 7', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 8, chapterNumber: 8, chapterTitle: 'Test Chapter Name 8', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 9, chapterNumber: 9, chapterTitle: 'Test Chapter Name 9', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 10, chapterNumber: 10, chapterTitle: 'Test Chapter Name 10', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 11, chapterNumber: 11, chapterTitle: 'Test Chapter Name 11', chapterViewAudit: EMPTY_VIEW_AUDIT },
    { storyId: 12, chapterNumber: 12, chapterTitle: 'Test Chapter Name 12', chapterViewAudit: EMPTY_VIEW_AUDIT },
  ]
}