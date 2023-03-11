import {Component} from '@angular/core';
import {StoryService} from "../../services/story.service";
import {AddStoryContract} from "../../models/contracts/story-contract.model";
import {StoryEditorView} from "../../models/story-editor-view.model";
import {EMPTY_STORY_EDITOR_VIEW} from "../../mock-data/mock-story-editor-view";

@Component({
  selector: 'app-story-add',
  templateUrl: './story-add.component.html',
  styleUrls: ['./story-add.component.scss']
})
export class StoryAddComponent {

  storyEditorView: StoryEditorView;

  constructor(private storyService: StoryService) {
    this.storyEditorView = EMPTY_STORY_EDITOR_VIEW;
  }

  onInsertStory(addStoryContract: AddStoryContract): void {
    this.storyService.insertStory(addStoryContract)
      .subscribe({
        next: (result) => console.log(result),
        error: (error) => console.log(error)
      });
  }

}
