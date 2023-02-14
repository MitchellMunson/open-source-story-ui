import {Audit} from "./audit.model";

export interface UserComment {
  audit: Audit;
  text: string;
  children: UserComment[];
}
