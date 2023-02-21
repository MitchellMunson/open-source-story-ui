import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {StoryOverview} from "../models/story-overview.model";
import {MOCK_STORY_OVERVIEW} from "../mock-data/mock-story-overview";

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  getStoryOverview(storyId: number): Observable<StoryOverview> {
    const mockStoryOverview: Observable<StoryOverview> = of(MOCK_STORY_OVERVIEW);
    return mockStoryOverview;
  }


}
