import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Bulgarian with Rada';
  post = {
    title: 'Title of the Post',
    isFavorite: true
  };


  onFavoriteChanged(eventArgs) {
    console.log('Favorite Changed, now value is:', eventArgs);
  }
}
