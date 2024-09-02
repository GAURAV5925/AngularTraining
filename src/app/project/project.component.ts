import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { IProject } from './project';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projects:IProject[] = [];
  private subscription!: Subscription;



  constructor(private projectDetails: ProjectService) { }

  ngOnInit() {
    this.subscription=this.projectDetails.getProjects()
    .subscribe(data=> this.projects = data);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
