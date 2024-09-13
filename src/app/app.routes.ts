import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/auth/components/login/login.component'),
  },
  {
    path: 'home',
    loadComponent: () => import('@/pages/home/home.component'),
    children: [
      {
        path: 'gallery',
        title: 'gallery',
        loadComponent: () =>
          import('@/pages/home/gallery/components/gallery/gallery.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
