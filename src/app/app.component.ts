import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gabrielschincariol';

  _opened: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
