import {Tag, TagGroup} from "../models/tag.model";

export const MOCK_TAGS: Tag[] = [
  {
    tagName: 'Test Tag 1',
    tagDescription: 'Test 1'
  },
  {
    tagName: 'Test Tag 2',
    tagDescription: 'Test 2'
  },
  {
    tagName: 'Test Tag 3',
    tagDescription: 'Test 3'
  },
  {
    tagName: 'Test Tag 4',
    tagDescription: 'Test 4'
  },
  {
    tagName: 'Test Tag 5',
    tagDescription: 'Test 5'
  },
  {
    tagName: 'Test Tag 6',
    tagDescription: 'Test 6'
  },
  {
    tagName: 'Test Tag 7',
    tagDescription: 'Test 7'
  },
  {
    tagName: 'Test Tag 8',
    tagDescription: 'Test 8'
  },
  {
    tagName: 'Test Tag 9',
    tagDescription: 'Test 9'
  },
  {
    tagName: 'Test Tag 10',
    tagDescription: 'Test 10'
  }
];

export const MOCK_TAG_GROUPS: TagGroup[] = [
  {
    tagGroupDescription: 'Test Story Tag Group Description 1',
    tags: MOCK_TAGS
  }
];
