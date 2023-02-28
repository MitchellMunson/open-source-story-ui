import {StoryOverview} from "./story-overview.model";

export interface AuthorOverview {
  authorId: number;
  username: string;
  totalScore: number;
  totalStories: number;

  stories: StoryOverview[];
}
