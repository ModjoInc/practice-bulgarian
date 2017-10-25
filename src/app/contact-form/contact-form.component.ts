import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethod = [
    { id: 0, name: 'email' },
    { id: 1, name: 'phone' },
    { id: 2, name: 'twitter' },
    { id: 3, name: 'facebook' },
  ];
  levels = [
    { id: 0, name: 'beginner'},
    { id: 1, name: 'intermediate'},
    { id: 2, name: 'advanced'}
  ]

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
