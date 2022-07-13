import { Component } from '@angular/core';
import { CustomThemeService } from './custom-theme.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  isDark = this.styleManager.isDark;

  constructor(private styleManager: CustomThemeService) {}

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}
