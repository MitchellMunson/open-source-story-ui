import {IPaginatedInfo, Paginated} from "../models/paginated.model";
import {StoryOverview} from "../models/story-overview.model";
import {MOCK_STORY_OVERVIEWS} from "./mock-story-overview";

export const EMPTY_PAGINATED_INFO: IPaginatedInfo = {
  currentPage: 0,
  endPage: 0,
  getRange(distanceFromCurrentPage): number[] {
    return []; 
  },
  isFirstPage(): boolean {
    return true;
  },
  isLastPage(): boolean {
    return true;
  },
}


export const EMPTY_PAGINATED_STORY_OVERVIEW = new Paginated<StoryOverview>(0, 0, []);

export const MOCK_PAGINATED_STORY_OVERVIEW
  = new Paginated<StoryOverview>(1000, 1000, MOCK_STORY_OVERVIEWS)

