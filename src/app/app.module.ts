import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { CommentsListComponent } from './comment/comments-list/comments-list.component';
import { CommentViewComponent } from './comment/comment-view/comment-view.component';
import { StoryViewComponent } from './story/story-view/story-view.component';
import { ChapterListComponent } from './story/chapter-list/chapter-list.component';
import { ChapterViewComponent } from './story/chapter-view/chapter-view.component';
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
    StoryViewComponent,
    ChapterListComponent,
    ChapterViewComponent,
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
