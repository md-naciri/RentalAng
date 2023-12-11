import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
import { BrandComponent } from '../brand/brand.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BtnComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

}
