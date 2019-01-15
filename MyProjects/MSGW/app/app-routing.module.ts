import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { JobsMsgwComponent } from './jobs-msgw/jobs-msgw.component';
import { JoblogComponent } from './joblog/joblog.component';

const routes: Routes = [
  { path: 'msgwjobs', component: JobsMsgwComponent },
  { path: 'msgwjobs/:id', component: JoblogComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
