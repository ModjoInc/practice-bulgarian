import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses = [
    {id: 1, name: 'Beginner Course'},
    {id: 2, name: 'Intermediate Course'},
    {id: 3, name: 'Advanced Course'},
  ];

  viewMode: '';

  onAdd() {
    this.courses.push({ id: 4, name: 'Advanced Course 2' });
  }

  onDel(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  ngOnInit() {
  }

}
