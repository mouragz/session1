import {Injectable} from '@angular/core'

@Injectable()
export class CourseSevice{
  getCourses(): string[] {
      return ['courseOne','courseTwo','courseThree']
  }
}