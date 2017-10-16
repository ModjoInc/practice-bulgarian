// import { Component } from '@angular/core';

// @Component ({
//   selector: 'app-courses',
//   template: `
//     <div class="row" [class.hover]="isHover">
//     <h2>{{ title }}</h2>
//     </div>
//     <div class="row" [style.backgroundColor]="isActive ? '#848484' : '#444343' ">
//     <img [src]="imageUrl" />
//     </div>
//     <div class="row" (click)="onDivClick()">
//     <button class="btn btn-primary" (click)="onSave($event)">Send</button>
//     </div>
//     <div class="row">
//     <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
//     </div>
//     <div class="row">
//       {{ course.titleCourse | uppercase }} <br />
//       {{ course.students | number }} <br />
//       {{ course.rating | number:'1.2-4' }} <br />
//       {{ course.price | currency:'EUR':true:'1.2-2' }} <br />
//       {{ course.releaseDate | date:'fullDate'}} <br />
//     </div>
//     <div class="row">
//       {{ text | summary:'20' }}
//     </div>`
// })

// export class CoursesComponent {
//   title = 'List of Courses';
//   imageUrl = 'http://lorempixel.com/400/200/';
//   isHover = false;
//   isActive = false;
//   email = 'habibem@gmail.com';
//   course = {
//     titleCourse: 'Learn Bulgarian with Rada: Beginner',
//     rating: 4.9999,
//     students: 24569,
//     price: 19.99,
//     releaseDate: new Date(2017, 12, 1)
//   };
//   text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga dolore, deserunt tempore voluptatibus quia totam unde fugiat veniam nulla! Veritatis consequatur nam repudiandae minima asperiores odit molestias optio est.`;

//   onSave($event) {
//     console.log('button was clicked');
//     $event.stopPropagation();
//   }
//   onDivClick() {
//     console.log('Div was clicked');
//   }
//   onKeyUp() {
//       console.log(this.email);
//   }
// }
