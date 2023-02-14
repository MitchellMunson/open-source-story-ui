import { Status } from './status.enum';

export interface Audit {
  originalPoster: string;
  lastEdited: string;
  numberOfEdits: number;
  postScore: number;
  status: Status;
}

export interface ViewAudit extends Audit {
  postViews: number;
}
