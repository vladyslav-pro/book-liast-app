import { Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent
  },{
    path: 'book',
    loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent)
  }, {
    path: '**',
    redirectTo: ''
  }
];
