import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoryOverviewComponent} from "./story/story-overview/story-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/story-overview', pathMatch: 'full' },
  { path: 'story-overview', children:
      [
        { path: '', component: StoryOverviewComponent }
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
