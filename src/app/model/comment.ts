import {User} from "./user";

export interface Comment {
  id?: number;
  comment?: string;
  date?: string;
  score?: number;
  user?: User;
}
