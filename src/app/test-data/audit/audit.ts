import {ViewAudit, Audit} from "../../models/audit.model";
import {Status} from "../../models/status.enum";

export const EMPTY_AUDIT: Audit = {
  originalPoster: '',
  lastEdited: '',
  numberOfEdits: 0,
  postScore: 0,
  status: Status.UNKNOWN
}
export const EMPTY_VIEW_AUDIT: ViewAudit = {
  originalPoster: '',
  lastEdited: '',
  numberOfEdits: 0,
  postScore: 0,
  status: Status.UNKNOWN,
  postViews: 0
}
