import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StoryOverview } from 'src/app/models/story-overview.model';
import { Tag } from 'src/app/models/tag.model';
import { EMPTY_STORY } from 'src/app/test-data/story/test-story';

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.scss']
})
export class StoryEditorComponent implements OnInit {

  @Input() storyOverview: StoryOverview;

  storyEditorForm: FormGroup;

  retrievedTags: Tag[];

  constructor(private formBuilder: FormBuilder) {

    this.storyOverview = EMPTY_STORY;
    this.retrievedTags = [];

    this.storyEditorForm = this.formBuilder.group({
      storyTitle: [''],
      storyDescription: [''],
      isStoryPrivate: [''],
      expectedStoryTag: ['']
    });
  }

  ngOnInit() {
    this.storyEditorForm = this.formBuilder.group({
      storyTitle: [this.storyOverview.storyName],
      storyDescription: [this.storyOverview.storyDescription],
      isStoryPrivate: [this.storyOverview.isStoryPrivate],
      expectedStoryTag: ['']
    });
  }

  onExpectedTagsKeyUp(): void {
    const expectedStoryTag: string = this.expectedStoryTag.value;
    if(expectedStoryTag && expectedStoryTag.length >= 3) {
      console.log('HERE');
      this.retrievedTags.length = 0;
      this.retrievedTags.push({tagName: 'Yoooo', tagDescription: ''});
      this.retrievedTags.push({tagName: 'Aaaayyee', tagDescription: ''});
      this.retrievedTags.push({tagName: 'lolol', tagDescription: ''});
    }
  }

  get expectedStoryTag(): FormControl {
    return this.storyEditorForm.controls['expectedStoryTag'] as FormControl;
  }


}
