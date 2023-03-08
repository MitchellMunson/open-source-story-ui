import {PotentialTag} from "./tag.model";


export interface IStoryEditorView {
  storyId?: number;
  storyTitle: string;
  storyDescription: string;
  isStoryPrivate: boolean;
  tags: PotentialTag[];

  get tagGroups(): Map<string, PotentialTag[]>;
}

export class StoryEditorView implements IStoryEditorView {

  storyId?: number;
  storyTitle: string;
  storyDescription: string;
  isStoryPrivate: boolean;
  tags: PotentialTag[];


  constructor(storyTitle: string,
              storyDescription: string,
              isStoryPrivate: boolean,
              tags: PotentialTag[],
              storyId?: number, ) {
    this.storyId = storyId;
    this.storyTitle = storyTitle;
    this.storyDescription = storyDescription;
    this.isStoryPrivate = isStoryPrivate;
    this.tags = tags;
  }

  get tagGroups(): Map<string, PotentialTag[]> {
    const tagGroups: Map<string, PotentialTag[]> = new Map<string, PotentialTag[]>();

    for(let tag of this.tags) {
      if(tagGroups.has(tag.tagGroupDescription)) {
        let tagGroup = tagGroups.get(tag.tagGroupDescription);
        if(tagGroup) {
          tagGroup.push(tag);
        }
        else {
          tagGroups.set(tag.tagGroupDescription, [tag]);
        }
      }
      else {
        tagGroups.set(tag.tagGroupDescription, [tag]);
      }
    }

    return tagGroups;
  }

}
