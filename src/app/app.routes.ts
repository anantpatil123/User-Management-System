import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './user/pages/users-page/users-page.component';
import { UserUpcertComponent } from './user/components/user-upcert/user-upcert.component';

export const routes: Routes = [

    { path: '', redirectTo:'users',pathMatch:'full' },
       { path: 'users',component: UsersPageComponent,  children: [
          { path: '', component: UsersPageComponent },
          { path: 'user-upcert', component: UserUpcertComponent },
        ],
      },
      {
        path: '',component:UsersPageComponent
      },

   ];
  //  @NgModule({
  //   imports: [
  //     RouterModule.forRoot(routes, {
  //       onSameUrlNavigation: 'reload',
  //       preloadingStrategy: PreloadAllModules,
  //       paramsInheritanceStrategy: 'always',
  //     }),
  //   ],
  //   exports: [RouterModule],
  // })
  // export class AppRoutingModule {}