import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEquipmentComponent } from './model-equipment.component';

describe('ModelEquipmentComponent', () => {
  let component: ModelEquipmentComponent;
  let fixture: ComponentFixture<ModelEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
