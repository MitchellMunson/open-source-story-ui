
import { StoryOverview } from "src/app/models/story-overview.model";
import {EMPTY_VIEW_AUDIT} from "../audit/audit";

export const EMPTY_STORY: StoryOverview = {
  storyViewAudit: EMPTY_VIEW_AUDIT,
  storyTagGroups: [],
  storyName: '',
  storyDescription: '',
  chapterOverviews: []
}
