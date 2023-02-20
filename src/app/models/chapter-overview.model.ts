import { ViewAudit} from "./audit.model";
import {TagGroup} from "./tag.model";

export interface ChapterOverview {
  chapterViewAudit: ViewAudit;
  chapterNumber: number;
  chapterTitle: string;
  chapterDescription: string;
  chapterQuote: string;
  chapterTagGroups: TagGroup[];
}
