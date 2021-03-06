import { CourseImageComponent } from './../course-image/course-image.component';
import { Course } from './../model/course';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ContentChild, ElementRef, ContentChildren, AfterContentInit, QueryList, TemplateRef } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {



  @Input()
  course: Course

  @Input()
  noImageTpl: TemplateRef<any>

  @Input()
  cardIndex: number

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>()

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<CourseImageComponent>

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.images)
  }

  ngOnInit() {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course)
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner'
    }
  }

  cardStyles() {
    return { 'text-decoration': 'underline' }
  }

}
