import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {StoryOverview} from "../models/story-overview.model";
import {MOCK_STORY_OVERVIEW} from "../mock-data/mock-story-overview";
import {Paginated} from "../models/paginated.model";
import {MOCK_PAGINATED_STORY_OVERVIEW} from "../mock-data/mock-paginated";
import {AddStoryContract, ModifyStoryContract} from "../models/contracts/story-contract.model";
import { StoryEditorView} from "../models/story-editor-view.model";

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

  getStoryEditorView(storyId: number): Observable<StoryEditorView> {
    const mockStoryEditorView: StoryEditorView =
      new StoryEditorView(
        'Test Story Editor Title',
        'Test Story Editor Description',
        true,
        []
      );

    const mockStoryOverview: Observable<StoryEditorView> = of(mockStoryEditorView);
    return mockStoryOverview;
  }

  insertStory(addStoryContract: AddStoryContract): Observable<boolean> {
    //Post
    console.log('Insert Story', addStoryContract);
    return of(true);
  }

  updateStory(modifyStoryContract: ModifyStoryContract): Observable<boolean> {
    //Put
    console.log('Update Story', modifyStoryContract);
    return of(true);
  }

}
