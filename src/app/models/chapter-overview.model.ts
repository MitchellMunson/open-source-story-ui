import { ViewAudit} from "./audit.model";
import {TagGroup} from "./tag.model";

export interface ChapterOverview {
  chapterViewAudit: ViewAudit;
  chapterTitle: string;
  chapterTagGroups: TagGroup[];
}
