import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Starter';
  darkMode = true;

  ngOnInit(): void {
    if (document.cookie && document.cookie.split('; ').find(row => row.startsWith('darkMode'))) {
      this.darkMode = document.cookie
        .split('; ')
        .find(row => row.startsWith('darkMode'))
        .split('=')[1].toLowerCase() === 'true';
    }
  }
}
