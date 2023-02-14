import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoryViewComponent} from "./story/story-view/story-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/story', pathMatch: 'full' },
  { path: 'story', children:
      [
        { path: '', component: StoryViewComponent }
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
