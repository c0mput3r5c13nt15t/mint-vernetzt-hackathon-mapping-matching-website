import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  numberOfProjects: number = 10;

  constructor() {}

  ngOnInit(): void {}

  public generateNewProject() {
    this.numberOfProjects = this.numberOfProjects + 10;
  }
}
