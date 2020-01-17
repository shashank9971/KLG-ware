import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { RoleManagmentComponent } from './role-managment/role-managment.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';

export const UserRoutes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: UserManagmentComponent
    },
    {
        path: 'role',
        component: RoleManagmentComponent
    },
    {
        path: 'permission',
        component: RolePermissionComponent
    },
];
