import {Component} from '@angular/core'
import {CourseSevice} from '../services/course.service';

@Component({
    selector:'courses',
    template:`
    <h2>{{title}}</h2>
    <ul>
    <li *ngFor="let course of courses , let i=index">
    {{course}}
    </li>
    </ul>
    `,
  providers: [CourseSevice]
})
export class CoursesComponent {
    title:string = "The title of courses page!";
    courses:string[];
    //courses = ['courseOne','courseTwo','courseThree']

     
    constructor(courseService : CourseSevice){
        this.courses = courseService.getCourses();

    }
}