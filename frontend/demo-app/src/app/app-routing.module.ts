import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListComponent } from './components/issue-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'issues', pathMatch: 'full'},
  {path:'issues', component: IssueListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
