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
      {
        path: 'profile',
        title: 'profile',
        loadComponent: () =>
          import('@/pages/home/profile/components/profile/profile.component'),
        children: [
          {
            path: 'photos',
            title: 'User photos',
            loadComponent: () =>
              import(
                '@/pages/home/profile/components/user-photos/user-photos.component'
              ),
          },
          {
            path: 'albums',
            title: 'User albums',
            loadComponent: () =>
              import(
                '@/pages/home/profile/components/user-albums/user-albums.component'
              ),
          },
          {
            path: 'albums/:id',
            title: 'Album details',
            loadComponent: () =>
              import(
                '@/pages/home/profile/components/album-detail/album-detail.component'
              ),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
