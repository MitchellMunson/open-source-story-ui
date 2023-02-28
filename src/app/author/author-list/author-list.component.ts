import {Component, OnInit} from '@angular/core';
import {Paginated} from "../../models/paginated.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorOverview} from "../../models/author-overview.model";
import {EMPTY_PAGINATED_AUTHOR_OVERVIEW} from "../../mock-data/mock-author";
import {AuthorService} from "../../services/author.service";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  paginatedAuthorOverviews: Paginated<AuthorOverview>;

  constructor(private authorService: AuthorService,
              private route: ActivatedRoute,
              private router: Router) {
    this.paginatedAuthorOverviews = EMPTY_PAGINATED_AUTHOR_OVERVIEW;
  }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(
      paginatedAuthorOverviews => this.paginatedAuthorOverviews = paginatedAuthorOverviews
    );
  }

  onUsernameSelect(authorIndex: number) {
    const selectedAuthorId: number = this.paginatedAuthorOverviews.currentElements[authorIndex].authorId;
    console.log('Story Index {} selected with username {}', authorIndex, selectedAuthorId);
    this.router.navigate(['author', selectedAuthorId]);
  }
}
