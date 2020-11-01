import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() title: string;
  @Input() darkMode: boolean;
  @Output() darkModeChange = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  toggleDarkMode(): void {
    document.cookie = `darkMode=${!this.darkMode}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${'/'}`;
    this.darkModeChange.emit(!this.darkMode);
  }

}
