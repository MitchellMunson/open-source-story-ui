import {Component, OnInit} from '@angular/core';
import {Featured, FeaturedChapter, FeaturedStory} from "../models/featured.model";
import {FeaturedService} from "../services/featured.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EMPTY_FEATURED} from "../test-data/test-featured";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  featured: Featured;

  constructor(private featuredService: FeaturedService, private route: ActivatedRoute, private router: Router) {
    this.featured = EMPTY_FEATURED;
  }

  ngOnInit(): void {
    this.featuredService.getFeatured().subscribe(
      featured => this.featured = featured
    );
  }

  retrieveFeaturedStories(start: number, end: number): FeaturedStory[] {
    const featuredStories: FeaturedStory[] = this.featured.featuredStories;

    if(!featuredStories) {
      return [];
    }

    return featuredStories.slice(start, end);
  }

  retrieveFeaturedChapters(start: number, end: number): FeaturedChapter[] {
    const featuredChapters: FeaturedChapter[] = this.featured.featuredChapters;

    if(!featuredChapters) {
      return [];
    }

    return featuredChapters.slice(start, end);
  }

  onStoryClick(storyId: number): void {
    this.router.navigate(['story', storyId]);
  }

  onChapterClick(storyId: number, chapterNumber: number): void {
    this.router.navigate(['story', storyId, 'read', chapterNumber]);
  }

}
