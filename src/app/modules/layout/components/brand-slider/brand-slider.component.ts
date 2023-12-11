import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from '../brand/brand.component';
import { NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-brand-slider',
  standalone: true,
  imports: [CommonModule, BrandComponent, NgxSplideModule],
  templateUrl: './brand-slider.component.html'
})
export class BrandSliderComponent {


}
