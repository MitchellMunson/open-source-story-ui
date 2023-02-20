import {Component, OnInit} from '@angular/core';
import {StoryOverview} from "../../models/story-overview.model";
import {EMPTY_STORY} from "../../test-data/story/test-story";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MOCK_STORY_OVERVIEW} from "../../mock-data/mock-story-overview";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-story-overview',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.scss']
})
export class StoryOverviewComponent implements OnInit {

  storyOverview: StoryOverview;

  storyCommentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.storyOverview = EMPTY_STORY;
    this.storyOverview = MOCK_STORY_OVERVIEW; //Remove when implemented services

    this.storyCommentForm = this.formBuilder.group({
      storyComment: ['']
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let storyId: number = +params['storyId'];
      console.log('StoryId retrieved: ', storyId);
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
