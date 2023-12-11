import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, NgClass, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

}
