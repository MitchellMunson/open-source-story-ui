import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {StoryOverview} from "../models/story-overview.model";
import {MOCK_STORY_OVERVIEW} from "../mock-data/mock-story-overview";
import {Paginated} from "../models/paginated.model";
import {MOCK_PAGINATED_STORY_OVERVIEW} from "../mock-data/mock-paginated";

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  getStories(): Observable<Paginated<StoryOverview>> {
    const mockStoryOverviews: Observable<Paginated<StoryOverview>> = of(MOCK_PAGINATED_STORY_OVERVIEW);
    return mockStoryOverviews;
  }

  getStoryOverview(storyId: number): Observable<StoryOverview> {
    const mockStoryOverview: Observable<StoryOverview> = of(MOCK_STORY_OVERVIEW);
    return mockStoryOverview;
  }


}
