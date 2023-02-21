import {UserComment} from "../models/comment.model";
import {EMPTY_VIEW_AUDIT} from "../test-data/audit/audit";
import {Status} from "../models/status.enum";

export const MOCK_COMMENTS: UserComment[] = [
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
