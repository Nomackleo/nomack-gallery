import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('@/auth/components/register/register.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('@/auth/components/login/login.component'),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
