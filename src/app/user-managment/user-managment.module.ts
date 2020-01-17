import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { RoleManagmentComponent } from './role-managment/role-managment.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user-managmen-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RolePermissionComponent } from './role-permission/role-permission.component';



@NgModule({
  declarations: [UserManagmentComponent, RoleManagmentComponent, RolePermissionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    NgbModule,
    FormsModule
  ]
})
export class UserManagmentModule { }
