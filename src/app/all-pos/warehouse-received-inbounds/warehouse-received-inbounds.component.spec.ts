import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseReceivedInboundsComponent } from './warehouse-received-inbounds.component';

describe('WarehouseReceivedInboundsComponent', () => {
  let component: WarehouseReceivedInboundsComponent;
  let fixture: ComponentFixture<WarehouseReceivedInboundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseReceivedInboundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseReceivedInboundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
