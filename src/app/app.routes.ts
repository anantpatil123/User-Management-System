import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'users',
        loadChildren: () => import('./pages/users-page/users-page.module').then(m => m.UsersPageModule)
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },

   ];
