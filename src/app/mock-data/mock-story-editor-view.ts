import {StoryEditorView} from "../models/story-editor-view.model";
import {PotentialTag} from "../models/tag.model";

export const EMPTY_STORY_EDITOR_VIEW: StoryEditorView = {
  storyId: undefined,
  isStoryPrivate: false,
  storyDescription: "",
  storyTitle: "",
  tags: [],

  get tagGroups(): Map<string, PotentialTag[]> {
    return new Map<string, PotentialTag[]>;
  }
}
