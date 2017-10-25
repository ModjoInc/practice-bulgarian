import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses;
  viewMode: '';
  canSave = true;
  author = {
    name: 'Rada Gankova',
    role: {
      name: 'CEO'
    }
  };

  onAdd() {
    this.courses.push({ id: 4, name: 'Advanced Course 2' });
  }

  onDel(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
     this.courses = [
      { id: 1, name: 'Beginner Course' },
      { id: 2, name: 'Intermediate Course' },
      { id: 3, name: 'Advanced Course' },
    ];
  }

  trackCourses(index, course) {
    return course ? course.id : undefined;
  }

  ngOnInit() {
  }

}
