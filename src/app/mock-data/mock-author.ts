import {Paginated} from "../models/paginated.model";
import {AuthorOverview} from "../models/author-overview.model";


export const EMPTY_PAGINATED_AUTHOR_OVERVIEW = new Paginated<AuthorOverview>(0, 0, []);

export const PAGINATED_AUTHOR_OVERVIEW = new Paginated<AuthorOverview>(100, 1000, [
  {
    authorId: 1,
    username: 'Test Author 1',
    totalStories: 10,
    totalScore: 11,
    stories: []
  }
]);

export const AUTHOR_OVERVIEW = {
  authorId: 1,
  username: 'Test Author 1',
  totalStories: 10,
  totalScore: 11,
  stories: []
}
