import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { IssueListComponent } from './components/issue-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'issues', pathMatch: 'full'},
  {path:'issues', component: IssueListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" }
 ]
})
export class AppRoutingModule { }
