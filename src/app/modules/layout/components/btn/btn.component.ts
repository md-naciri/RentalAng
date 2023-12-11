import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  @Input() text?: string;
  @Input() color?: string;
  @Input() path?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
