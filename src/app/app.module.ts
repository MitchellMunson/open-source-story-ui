import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { CommentsListComponent } from './comment/comments-list/comments-list.component';
import { CommentViewComponent } from './comment/comment-view/comment-view.component';
import { StoryOverviewComponent } from './story/story-overview/story-overview.component';
import { ChapterOverviewListComponent } from './story/chapter-overview-list/chapter-overview-list.component';
import { ChapterOverviewComponent } from './story/chapter-overview/chapter-overview.component';
import { TagsListComponent } from './story/tags-list/tags-list.component';
import { TagsDescriptionViewComponent } from './story/tags-description-view/tags-description-view.component';
import { TagViewComponent } from './story/tag-view/tag-view.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ChapterReadComponent } from './story/chapter-read/chapter-read.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { StoriesListComponent } from './story/stories-list/stories-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorOverviewComponent } from './author/author-overview/author-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommentsListComponent,
    CommentViewComponent,
    StoryOverviewComponent,
    ChapterOverviewListComponent,
    ChapterOverviewComponent,
    TagsListComponent,
    TagsDescriptionViewComponent,
    TagViewComponent,
    ChapterReadComponent,
    HomeComponent,
    FeaturedComponent,
    StoriesListComponent,
    TruncatePipe,
    PaginationComponent,
    AuthorListComponent,
    AuthorOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
