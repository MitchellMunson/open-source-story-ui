import { ViewAudit} from "./audit.model";
import {TagGroup} from "./tag.model";

export interface Chapter {
  chapterViewAudit: ViewAudit;
  chapterTitle: string;
  chapterText: string;
  chapterTagGroups: TagGroup[];
}
