import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Paginated} from "../models/paginated.model";
import {AuthorOverview} from "../models/author-overview.model";
import {AUTHOR_OVERVIEW, PAGINATED_AUTHOR_OVERVIEW} from "../mock-data/mock-author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthors(): Observable<Paginated<AuthorOverview>> {
    const mockAuthorOverviews: Observable<Paginated<AuthorOverview>> = of(PAGINATED_AUTHOR_OVERVIEW);
    return mockAuthorOverviews;
  }

  getAuthorOverview(authorId: string): Observable<AuthorOverview> {
    const mockAuthorOverviews: Observable<AuthorOverview> = of(AUTHOR_OVERVIEW);
    return mockAuthorOverviews;
  }
}
