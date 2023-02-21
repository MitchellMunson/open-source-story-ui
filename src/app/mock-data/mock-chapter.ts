import {Chapter} from "../models/chapter.model";
import {EMPTY_VIEW_AUDIT} from "../test-data/audit/audit";
import {MOCK_TAG_GROUPS} from "./mock-tag-groups";

export const MOCK_CHAPTER: Chapter = {
  chapterViewAudit: EMPTY_VIEW_AUDIT,
  chapterNumber: 1,
  chapterTitle: 'Title Test',
  chapterText: 'Text Test',
  chapterTagGroups: MOCK_TAG_GROUPS
}
