import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  levels = [
    { id: 1, name: 'beginner'},
    { id: 2, name: 'intermediate'},
    { id: 3, name: 'advanced'}
  ];

  constructor() { }

  submit(f) {
    console.log(f);
  }

  ngOnInit() {
  }

}
