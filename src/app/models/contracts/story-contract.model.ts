
export interface ModifyStoryContract {
  storyId: number;
  storyTitle: string;
  storyDescription: string;
  isStoryPrivate: boolean;
  tagsIds: number[];
}

export interface AddStoryContract {
  storyTitle: string;
  storyDescription: string;
  isStoryPrivate: boolean;
  tagsIds: number[];
}
