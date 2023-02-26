import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../services/story.service";
import {StoryOverview} from "../../models/story-overview.model";
import {Paginated} from "../../models/paginated.model";
import {EMPTY_PAGINATED_STORY_OVERVIEW} from "../../mock-data/mock-paginated";

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss']
})
export class StoriesListComponent implements OnInit {

  paginatedStoryOverviews: Paginated<StoryOverview>;

  constructor(private storyService: StoryService) {
    this.paginatedStoryOverviews = EMPTY_PAGINATED_STORY_OVERVIEW;
  }

  ngOnInit() {
    this.storyService.getStories().subscribe(
      paginatedStoryOverviews => this.paginatedStoryOverviews = paginatedStoryOverviews
    );
  }

}
