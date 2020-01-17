import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./user-managment/user-managment.module').then(m => m.UserManagmentModule)
  },
  {
    path: 'allPos',
    loadChildren: () => import('./all-pos/all-pos.module').then(m => m.AllPosModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];


