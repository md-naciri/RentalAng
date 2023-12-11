import { Component, OnInit, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.component.html',
  styles: ``
})
export class BrandComponent implements OnInit {

  @Input() name?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
