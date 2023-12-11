import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme/theme.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgClass, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'rentalhive';

  constructor(public themeService: ThemeService) {
    setTheme('bs5');
  }
}
