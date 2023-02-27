import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../services/story.service";
import {StoryOverview} from "../../models/story-overview.model";
import {Paginated} from "../../models/paginated.model";
import {EMPTY_PAGINATED_STORY_OVERVIEW} from "../../mock-data/mock-paginated";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss']
})
export class StoriesListComponent implements OnInit {

  paginatedStoryOverviews: Paginated<StoryOverview>;

  constructor(private storyService: StoryService,
              private route: ActivatedRoute, 
              private router: Router) {
    this.paginatedStoryOverviews = EMPTY_PAGINATED_STORY_OVERVIEW;
  }

  ngOnInit() {
    this.storyService.getStories().subscribe(
      paginatedStoryOverviews => this.paginatedStoryOverviews = paginatedStoryOverviews
    );
  }

  onStorySelect(storyIndex: number) {
    const storyId: number = this.paginatedStoryOverviews.currentElements[storyIndex].storyId;
    console.log('Story Index {} selected with StoryId {}', storyIndex, storyId);
    this.router.navigate(['story', storyId]);
  }

}
