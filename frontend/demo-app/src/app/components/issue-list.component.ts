import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html'
})
export class IssueListComponent implements OnInit {

  IssuesList: any = [];


  ngOnInit() {
    this.loadEmployees();
  }

  constructor(
    public apiService: ApiService
  ){ }

   // Issues list
   loadEmployees() {
    return this.apiService.getIssues().subscribe((data: {}) => {
      this.IssuesList = data;
    })
  }
}