import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject} from '@angular/core';
import { ApmService } from '@elastic/apm-rum-angular';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './shared/api.service';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './components/issue-list.component';

@NgModule({
  declarations: [AppComponent, IssueListComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpClientModule],
  providers: [
    ApiService,
    {
      provide: ApmService,
      useClass: ApmService,
      deps: [Router],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Inject(ApmService) service: ApmService) {
    // API is exposed through this apm instance
    const apm = service.init({
      serviceName: 'angular-app',
      serverUrl: 'http://localhost:8200',
    });

    apm.setUserContext({
      username: 'foo',
      id: 'bar',
    });
  }
}
