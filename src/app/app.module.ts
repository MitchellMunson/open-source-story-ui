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
    TagViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
