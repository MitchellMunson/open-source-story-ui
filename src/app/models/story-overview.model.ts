import {ViewAudit} from "./audit.model";
import {TagGroup} from "./tag.model";
import { ChapterOverview } from "./chapter-overview.model";

export interface StoryOverview {
  storyViewAudit: ViewAudit;
  storyTagGroups: TagGroup[];
  storyId: number;
  storyName: string;
  storyDescription: string;
  isStoryPrivate: boolean;
  chapterOverviews: ChapterOverview[];
}
