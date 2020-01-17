import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseMyMilesstonesComponent } from './warehouse-my-milesstones/warehouse-my-milesstones.component';
import { WarehouseReceivedInboundsComponent } from './warehouse-received-inbounds/warehouse-received-inbounds.component'

export const AllPosRoutes: Routes = [
    {
        path: '',
        redirectTo: 'Warehouse-My-Milestones',
        pathMatch: 'full'
    },
    {
        path: 'Warehouse-My-Milestones',
        component: WarehouseMyMilesstonesComponent
    },
    {
        path: 'warehouse-received-inbounds',
        component:WarehouseReceivedInboundsComponent
    }
];
