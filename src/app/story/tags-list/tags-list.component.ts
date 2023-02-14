import {Component, Input} from '@angular/core';
import {Tag, TagGroup} from "../../models/tag.model";

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent {

  @Input() tagGroups: TagGroup[];

  constructor() {
    this.tagGroups = [];
  }

}
