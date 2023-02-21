import {Chapter} from "../../models/chapter.model";
import {EMPTY_VIEW_AUDIT} from "../audit/audit";

export const EMPTY_CHAPTER: Chapter = {
  chapterViewAudit: EMPTY_VIEW_AUDIT,
  chapterNumber: 0,
  chapterTitle: '',
  chapterText: '',
  chapterTagGroups: []
}
