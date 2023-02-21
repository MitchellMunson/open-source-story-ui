import {Chapter} from "../models/chapter.model";
import {EMPTY_VIEW_AUDIT} from "../test-data/audit/audit";

export const MOCK_CHAPTER: Chapter = {
  chapterViewAudit: EMPTY_VIEW_AUDIT,
  chapterTitle: 'Chapter Title Test',
  chapterText: 'Chapter Text Test',
  chapterTagGroups: []
}
