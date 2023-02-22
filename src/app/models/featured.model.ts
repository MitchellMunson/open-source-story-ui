import {ViewAudit} from "./audit.model";

export interface Featured {
  featuredStories: FeaturedStory[];
  featuredChapters: FeaturedChapter[];
}

export interface FeaturedStory {
  storyViewAudit: ViewAudit;
  storyId: number;
  storyName: string;
}

export interface FeaturedChapter {
  chapterViewAudit: ViewAudit;
  storyId: number;
  chapterNumber: number;
  chapterTitle: string;
}