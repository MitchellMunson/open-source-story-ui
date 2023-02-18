import {Component, Input} from '@angular/core';
import {UserComment} from "../../models/comment.model";
import {Status} from "../../models/status.enum";

;

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent {

  @Input() comments: UserComment[];

  constructor() {
    this.comments = [
      {
        audit: {
          originalPoster: 'Seeva',
          status: Status.ACTIVE,
          postScore: 100,
          numberOfEdits: 2,
          lastEdited: 'Yesterday'
        },
        text: 'Example Comment 1',
        children: [
          {
            audit: {
              originalPoster: 'Crack',
              status: Status.ACTIVE,
              postScore: 50,
              numberOfEdits: 5,
              lastEdited: 'Today'
            },
            text: 'Example Comment 1 - Comment 1',
            children: []
          },
          {
            audit: {
              originalPoster: 'Patrick',
              status: Status.ACTIVE,
              postScore: -30,
              numberOfEdits: 0,
              lastEdited: 'Today'
            },
            text: 'Example Comment 1 - Comment 2',
            children: []
          }
        ]
      }
    ];
  }

  isCommentsBlockHidden(): boolean {
    return !this.comments || this.comments.length === 0;
  }

}
