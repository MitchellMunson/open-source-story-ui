
export interface TagGroup {
  tagGroupDescription: string;
  tags: Tag[];
}
export interface Tag {
  tagName: string;
  tagDescription: string;
}

export interface PotentialTag {
  tagId: number;
  tagName: string;
  tagGroupDescription: string;
  numOfTagUsages: number;
}

