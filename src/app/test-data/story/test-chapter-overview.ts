
import {ChapterOverview} from "../../models/chapter-overview.model";
import {EMPTY_VIEW_AUDIT} from "../audit/audit";

export const EMPTY_CHAPTER_OVERVIEW: ChapterOverview = {
  chapterViewAudit: EMPTY_VIEW_AUDIT,
  chapterNumber: 0,
  chapterTitle: '',
  chapterDescription: '',
  chapterQuote: '',
  chapterTagGroups: []
}
