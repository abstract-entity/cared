import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.component';
import { LitigeDetailComponent } from './litige/litige-detail/litige-detail.component';
import { LitigeListComponent } from './litige/litige-list/litige-list.component';

const routes: Routes = [
  { path: 'litiges', component: LitigeListComponent },
  { path: 'litige/:id', component: LitigeDetailComponent },
  { path: 'achievement', component: AchievementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
