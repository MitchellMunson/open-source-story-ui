import {ViewAudit} from "./audit.model";
import {TagGroup} from "./tag.model";
import {Chapter} from "./chapter.model";
import { ChapterOverview } from "./chapter-overview.model";

export interface StoryOverview {
  storyViewAudit: ViewAudit;
  storyTagGroups: TagGroup[];
  storyName: string;
  storyDescription: string;
  chapterOverviews: ChapterOverview[];
}
