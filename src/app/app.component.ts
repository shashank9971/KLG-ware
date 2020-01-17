import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KLG-CT';
  isshow = false;

  constructor(private location: Location, private router: Router) {
    console.log(location.path());
    router.events.subscribe(val => {
      if (!(!!location.path()) || location.path() === '/login') {
        this.isshow = false;
      } else {
        console.log('sadsa', location.path());
        this.isshow = true;
      }
    });
   }
}
