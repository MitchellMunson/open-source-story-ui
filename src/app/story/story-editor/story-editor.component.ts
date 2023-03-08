import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PotentialTag } from 'src/app/models/tag.model';
import { TagsService } from 'src/app/services/tags.service';
import {AddStoryContract, ModifyStoryContract} from "../../models/contracts/story-contract.model";
import {StoryEditorView} from "../../models/story-editor-view.model";
import {EMPTY_STORY_EDITOR_VIEW} from "../../mock-data/mock-story-editor-view";

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.scss']
})
export class StoryEditorComponent implements OnInit {

  @Input() storyEditorView: StoryEditorView;

  storyEditorForm: FormGroup;

  retrievedTags: PotentialTag[];

  isFinishedSearchingForTags: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private tagsService: TagsService) {

    this.storyEditorView = EMPTY_STORY_EDITOR_VIEW;
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
      storyTitle: [this.storyEditorView.storyTitle],
      storyDescription: [this.storyEditorView.storyDescription],
      isStoryPrivate: [this.storyEditorView.isStoryPrivate],
      expectedStoryTag: ['']
    });
  }

  onExpectedTagsKeyUp(): void {
    if(this.isFinishedSearchingForTags) {

      const expectedStoryTagValue: string = this.expectedStoryTag.value;

      if(expectedStoryTagValue && expectedStoryTagValue.length >= 3) {
        this.retrievedTags.length = 0;

        this.isFinishedSearchingForTags = false;

        this.tagsService.getPotentialTags(expectedStoryTagValue)
          .subscribe({
            next: (tags) => {
              this.retrievedTags = tags;
            },
            error: (errors) => {
              console.log('Error found!');
            },
            complete: () => {
              this.isFinishedSearchingForTags = true;
            }
          });
      }
    }
  }

  onAddTag(): void {
    const expectedStoryTagValue: string = this.expectedStoryTag.value;
    if (expectedStoryTagValue && this.retrievedTags && this.retrievedTags.length > 0) {

      for(let tag of this.retrievedTags) {
        if(expectedStoryTagValue.toUpperCase() === tag.tagName.toUpperCase()) {

          if(!this.isTagAlreadyStored(tag)) {
            if(this.storyEditorView.tags) {
              this.storyEditorView.tags.push(tag);
            }
            else {
              this.storyEditorView.tags = [tag];
            }
          }
          break;
        }
      }
    }
  }

  private isTagAlreadyStored(tag: PotentialTag) {
    for (let storedEditorTag of this.storyEditorView.tags) {
      if (storedEditorTag.tagName.toUpperCase() === tag.tagName.toUpperCase()) {
        return true;
      }
    }
    return false;
  }

  get addStoryContract(): AddStoryContract {
    const storyTitle: string = this.storyTitle.value;
    const storyDescription: string = this.storyDescription.value;
    const isStoryPrivate: boolean = this.isStoryPrivate.value;
    const tagIds: number[] = [];
    for(let tag of this.storyEditorView.tags) {
      tagIds.push(tag.tagId);
    }

    return {
      storyTitle: storyTitle,
      storyDescription: storyDescription,
      isStoryPrivate: isStoryPrivate,
      tagsIds: tagIds
    }
  }

  get modifyStoryContract(): ModifyStoryContract {
    const storyId: number = this.storyEditorView.storyId ? this.storyEditorView.storyId : 0;
    const storyTitle: string = this.storyTitle.value;
    const storyDescription: string = this.storyDescription.value;
    const isStoryPrivate: boolean = this.isStoryPrivate.value;
    const tagIds: number[] = [];
    for(let tag of this.storyEditorView.tags) {
      tagIds.push(tag.tagId);
    }

    return {
      storyId: storyId,
      storyTitle: storyTitle,
      storyDescription: storyDescription,
      isStoryPrivate: isStoryPrivate,
      tagsIds: tagIds
    }
  }

  get storyTitle(): FormControl {
    return this.storyEditorForm.controls['storyTitle'] as FormControl;
  }

  get storyDescription(): FormControl {
    return this.storyEditorForm.controls['storyDescription'] as FormControl;
  }

  get isStoryPrivate(): FormControl {
    return this.storyEditorForm.controls['isStoryPrivate'] as FormControl;
  }

  get expectedStoryTag(): FormControl {
    return this.storyEditorForm.controls['expectedStoryTag'] as FormControl;
  }



}
