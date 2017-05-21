import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from '../components/app.component';
import { CoursesComponent } from '../components/courses.component';
import {SharedModule} from './shared.module'

@NgModule({
  imports: [BrowserModule,SharedModule],
  declarations: [AppComponent, CoursesComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
