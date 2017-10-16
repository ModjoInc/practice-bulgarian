import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() tweet = {
    body: 'body goes here...',
    isLiked: false,
    likesCount: 0
  };

  @Output() change = new EventEmitter();

  onClick() {
    this.tweet.isLiked = !this.tweet.isLiked;
    // tslint:disable:curly
    if (this.tweet.isLiked)
      this.tweet.likesCount++;
    else this.tweet.likesCount--;
  }

}
