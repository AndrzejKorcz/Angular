import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { IJob } from './job';

import { tap, map } from 'rxjs/operators';
import { ServerService } from '../shared/server.service';


@Component({
  selector: 'app-jobs-msgw',
  templateUrl: './jobs-msgw.component.html',
  styleUrls: ['./jobs-msgw.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsMsgwComponent implements OnInit {

  //jobs: IJob[] = [];
  jobs$: Observable<IJob[]>;

  retValue: number;
  errorMessage: string;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.jobs$ = this.serverService.getJobs().pipe(
      tap(response => this.retValue = response.returnValue),
      map(response => response.response),
      //error => this.errorMessage = <any>error
    );
  }


}
