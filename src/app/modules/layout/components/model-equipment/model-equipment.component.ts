import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-model-equipment',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './model-equipment.component.html'
})
export class ModelEquipmentComponent implements OnInit {
  familyName!: string;

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    console.log(this.route.snapshot.params['name']);
    this.familyName = this.route.snapshot.params['name'];
  }


}
