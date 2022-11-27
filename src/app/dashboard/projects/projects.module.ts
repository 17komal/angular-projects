import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { CurdprojectComponent } from './curdproject/curdproject.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    CurdprojectComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
