import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoryOverviewComponent} from "./story/story-overview/story-overview.component";
import {ChapterReadComponent} from "./story/chapter-read/chapter-read.component";
import { HomeComponent } from './home/home.component';
import {FeaturedComponent} from "./featured/featured.component";
import {StoriesListComponent} from "./story/stories-list/stories-list.component";
import {AuthorListComponent} from "./author/author-list/author-list.component";
import {AuthorOverviewComponent} from "./author/author-overview/author-overview.component";
import { StoryAddComponent } from './story/story-add/story-add.component';
import { StoryModifyComponent } from './story/story-modify/story-modify.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'story', children:
      [
        { path: '', component: StoriesListComponent },
        { path: 'add', component: StoryAddComponent },
        { path: 'edit/:storyId', component: StoryModifyComponent },
        { path: ':storyId', component: StoryOverviewComponent },
        { path: ':storyId/read/:chapterNumber', component: ChapterReadComponent }
      ]
  },
  { path: 'author', children:
      [
        { path: '', component: AuthorListComponent },
        { path: ':authorId', component: AuthorOverviewComponent }
      ]
  },
];

// const routes: Routes = [
//   { path: '', redirectTo: '/story', pathMatch: 'full' },
//   { path: 'story', children: [
//       { path: '', component: GameBoardComponent },
//     ]},
// ];

// const routes: Routes = [
//   { path: '', redirectTo: '/customSheets', pathMatch: 'full' },
//   { path: 'customSheets', children: [
//     { path: '', component: CustomSheetListComponent },
//     { path: 'create', component: CreateCustomSheetComponent },
//     { path: 'edit/:id', component: EditCustomSheetComponent },
//     { path: 'view/:id', component: ViewCustomSheetComponent },
//   ]},
//   { path: 'moves', component: MovesComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
