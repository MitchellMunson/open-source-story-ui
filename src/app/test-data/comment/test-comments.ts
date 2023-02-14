import {UserComment} from "../../models/comment.model";
import {Status} from "../../models/status.enum";
import {EMPTY_AUDIT} from "../audit/audit";

export const EMPTY_COMMENT: UserComment = {
  audit: EMPTY_AUDIT,
  text: '',
  children: []
}
export const DEFAULT_COMMENT_1: UserComment = {
  audit: {
    lastEdited: 'Today',
    originalPoster: 'Me, Myself, and I',
    status: Status.ACTIVE,
    numberOfEdits: 1,
    postScore: 2
  },
  text: 'Test Comment 1',
  children: []
}

export const DEFAULT_COMMENT_2: UserComment = {
  audit: {
    lastEdited: 'Today',
    originalPoster: 'They, Themself, and Themselves',
    status: Status.ACTIVE,
    numberOfEdits: 3,
    postScore: 4
  },
  text: 'Test Comment 2',
  children: []
}
