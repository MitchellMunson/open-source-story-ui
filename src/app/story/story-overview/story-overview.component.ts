import {Component, OnInit} from '@angular/core';
import {StoryOverview} from "../../models/story-overview.model";
import {EMPTY_STORY} from "../../test-data/story/test-story";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {StoryService} from "../../services/story.service";

@Component({
  selector: 'app-story-overview',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.scss']
})
export class StoryOverviewComponent implements OnInit {

  storyOverview: StoryOverview;

  storyCommentForm: FormGroup;

  constructor(private storyService: StoryService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
    this.storyOverview = EMPTY_STORY;
    this.storyCommentForm = this.formBuilder.group({
      storyComment: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let storyId: number = +params['storyId'];
      this.storyService.getStoryOverview(storyId).subscribe(
        storyOverview => this.storyOverview = storyOverview
      );
    });
  }

  onSubmitStoryComment() {
    const replySubmission: string = this.storyComment.value;
    console.log("Submitted Reply", replySubmission);
  }

  get storyComment(): FormControl {
    return this.storyCommentForm.get('storyComment') as FormControl;
  }

}
