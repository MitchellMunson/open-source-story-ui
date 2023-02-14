import {ViewAudit} from "./audit.model";
import {TagGroup} from "./tag.model";
import {Chapter} from "./chapter.model";

export interface Story {
  storyViewAudit: ViewAudit;
  storyTagGroups: TagGroup[];
  storyName: string;
  storyDescription: string;
  chapters: Chapter[];
}
