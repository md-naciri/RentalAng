import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FamilyComponent } from '../family/family.component';
import { BrandSliderComponent } from '../brand-slider/brand-slider.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, BtnComponent, NavbarComponent, FamilyComponent, BrandSliderComponent, FooterComponent],
  templateUrl: './body.component.html',
  styles: ``
})
export class BodyComponent {

}
