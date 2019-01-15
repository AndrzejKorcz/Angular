import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJoblog } from './joblog';
import { Observable } from 'rxjs';
import { ServerService } from '../shared/server.service';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-joblog',
  templateUrl: './joblog.component.html',
  styleUrls: ['./joblog.component.css']
})
export class JoblogComponent implements OnInit {
  pageTitle: string = 'Job Detail';

  joblogs$: Observable<IJoblog[]>;
  retValue: number;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.joblogs$ = this.serverService.getJobLog(id).pipe(
      tap(response => this.retValue = response.returnValue),
      map(response => response.response),
      error => this.errorMessage = <any>error
      );
  }

  onBack(): void {
    this.router.navigate(['/msgwjobs']);
  }

}
