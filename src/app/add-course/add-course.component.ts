import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  form = new FormGroup ({
    lessons: new FormArray([])
  });

  addLesson(lesson: HTMLInputElement ){
    (this.form.get('lessons') as FormArray).push(new FormControl(lesson.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
