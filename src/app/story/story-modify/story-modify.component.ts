import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../services/story.service";
import {ModifyStoryContract} from "../../models/contracts/story-contract.model";
import {EMPTY_STORY_EDITOR_VIEW} from "../../mock-data/mock-story-editor-view";
import {StoryEditorView} from "../../models/story-editor-view.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-story-modify',
  templateUrl: './story-modify.component.html',
  styleUrls: ['./story-modify.component.scss']
})
export class StoryModifyComponent implements OnInit {

  storyEditorView: StoryEditorView;

  constructor(private route: ActivatedRoute,
              private storyService: StoryService) {
    this.storyEditorView = EMPTY_STORY_EDITOR_VIEW;
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const storyId: number = +params['storyId'];

      this.storyService.getStoryEditorView(storyId)
        .subscribe({
          next: (storyEditorView) => this.storyEditorView = storyEditorView,
          error: (error) => console.error(error)
        });
    })


  }

  onModifyStory(modifyStoryContract: ModifyStoryContract) {
    this.storyService.updateStory(modifyStoryContract).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error)
    });
  }

}
