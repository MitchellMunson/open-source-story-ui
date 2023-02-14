import {Component, Input} from '@angular/core';
import {Tag} from "../../models/tag.model";
import {TAG_FIELDS_BLANK} from "../../test-data/tags/test-tags";

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.scss']
})
export class TagViewComponent {

  @Input() tag: Tag;

  isTagDescriptionVisible: boolean;

  constructor() {
    this.tag = TAG_FIELDS_BLANK;
    this.isTagDescriptionVisible = false;
  }

  onTagClick(): void {
    this.isTagDescriptionVisible = !this.isTagDescriptionVisible;
  }

  onTagFocus(): void {
    this.isTagDescriptionVisible = false;
  }

}
