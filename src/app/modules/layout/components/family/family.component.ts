import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Family } from '../../../../core/models/family';
import { FamilyService } from '../../../../core/services/family/family.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './family.component.html'
})

export class FamilyComponent implements OnInit {
  families: Family[] = [];

  constructor(private userService: FamilyService) { }

  ngOnInit(): void {
    this.userService.getFamilies().subscribe((data: Family[]) => {
      this.families = data;
    }
    );
  }




}
