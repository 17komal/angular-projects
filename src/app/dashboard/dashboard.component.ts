import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToProject(projectName:string):void{

    this.router.navigate([`${projectName}`]);
  }
}
