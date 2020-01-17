import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseMyMilesstonesComponent } from './warehouse-my-milesstones/warehouse-my-milesstones.component';
import { RouterModule } from '@angular/router';
import { AllPosRoutes } from './all-pos-routing.module';
import { WarehouseReceivedInboundsComponent } from './warehouse-received-inbounds/warehouse-received-inbounds.component';


@NgModule({
  declarations: [WarehouseMyMilesstonesComponent, WarehouseReceivedInboundsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AllPosRoutes),
  ]
})
export class AllPosModule { }
