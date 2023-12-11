import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    AngularSvgIconModule,
  ],
  templateUrl: './signup.component.html',
  styles: ``
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
