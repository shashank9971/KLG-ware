import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseMyMilesstonesComponent } from './warehouse-my-milesstones.component';

describe('WarehouseMyMilesstonesComponent', () => {
  let component: WarehouseMyMilesstonesComponent;
  let fixture: ComponentFixture<WarehouseMyMilesstonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseMyMilesstonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseMyMilesstonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
