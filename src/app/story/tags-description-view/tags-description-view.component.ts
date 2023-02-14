import {Component, Input} from '@angular/core';
import {Tag} from "../../models/tag.model";
import {TAG_FIELDS_BLANK} from "../../test-data/tags/test-tags";

@Component({
  selector: 'app-tags-description-view',
  templateUrl: './tags-description-view.component.html',
  styleUrls: ['./tags-description-view.component.scss']
})
export class TagsDescriptionViewComponent {

  @Input() tag: Tag;

  constructor() {
    this.tag = TAG_FIELDS_BLANK;
  }

}
