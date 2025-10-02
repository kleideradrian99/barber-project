import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  // },
  {
    path: '', redirectTo: 'user/login', pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./components/users/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    redirectTo: 'user/login',
    pathMatch: 'full'
  }
];
