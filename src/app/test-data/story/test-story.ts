import {Story} from "../../models/story.model";
import {EMPTY_VIEW_AUDIT} from "../audit/audit";
import {TAG_GROUP_FIELDS_BLANK} from "../tags/test-tags";

export const EMPTY_STORY: Story = {
  storyViewAudit: EMPTY_VIEW_AUDIT,
  storyTagGroups: [],
  storyName: '',
  storyDescription: '',
  chapters: []
}
